angular.module('agilogyDirectives.ngModal', [])

.directive('ngModal', function(){
    return {
        templateUrl: '/scripts/directives/modal/modal-tpl.html',
        scope: {
            id: '=',
            header: '=',
            closeBtn: '=',
            dataWidth: '=',
        },
        restrict: 'E',
        transclude: true,
        replace: true,
        link: function(scope, elem, attr){
            // move buttons if there's any to modal-footer
            var modalBody = elem.find('div.modal-body');
            var modalFooter = elem.find('div.modal-footer');
            var transcludedBlock = elem.find('div.transcluded');
            var submit = transcludedBlock.find(':button');               
            modalBody.append(transcludedBlock.children());
            modalFooter.append(submit);           
            
            transcludedBlock.remove();
        }

    }

})