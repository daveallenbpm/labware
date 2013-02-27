define(['presenters/centrifuge_presenter'], function(CentrifugePresenter) {
  'use strict';

    var view = undefined;
    var presenter = undefined;

    function configureSpyView() {
        view = {};

        view.release = function() {
        };

        view.renderView = function(data) {
        };

        view.initTubesList = function(container) {
        };

        spyOn(view, 'release');
        spyOn(view, 'renderView');
        spyOn(view, 'initTubesList');
    }

    describe("CentrifugePresenter", function() {
        describe("default constructor", function(){
            beforeEach(function(){
                presenter = new CentrifugePresenter();
            });
            it('instantiates centrifuges object', function(){
                expect(presenter).toBeDefined();
            });
            it('is of type centrifuge', function(){
                expect(presenter instanceof CentrifugePresenter).toBeTruthy();
            });
        });

        describe("Setup Model", function(){
            beforeEach(function(){
                presenter = new CentrifugePresenter();
                presenter.setupModel(true);
            });
            it('Model is properly set', function(){
                expect(presenter.model).toBe(true);
            });
        });

        describe("Setup View", function(){
            beforeEach(function(){
                presenter = new CentrifugePresenter();
                presenter.setupView(true);
            });
            it('View is properly set', function(){
                expect(presenter.currentView).toBeDefined();
            });
        });

        describe("View interaction", function(){
            beforeEach(function(){
                configureSpyView();
                presenter = new CentrifugePresenter();
                presenter.currentView = view;
            });
            it('Renders centrifuges in the view', function(){
                presenter.renderView();
                expect(view.renderView).toHaveBeenCalled();
            });
            it('Releases the view as expected', function() {
                presenter.release();
                expect(view.release).toHaveBeenCalled();
            });
        });
  });
});
