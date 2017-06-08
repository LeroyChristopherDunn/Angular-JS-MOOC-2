app.controller('menuController', [
    '$scope',
    function($scope){
        $scope.model = {title: 'Our Menu'}

        $scope.changeMainDish = function(item){
            if(item === 'BBQ Chicken Pizza')
                $scope.model.dish = {description: item, price: 'R12.99'}
            else
                $scope.model.dish = {description: item, price: 'R99.99'}                
        }

        $scope.$watch('model.dish.description', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });
    }
])