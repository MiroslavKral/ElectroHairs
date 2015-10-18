import mainModule from 'modules/main';

angular
    .element(document)
    .ready(function () {
        angular.bootstrap(document, [mainModule.name], {strictDi: true});
    });