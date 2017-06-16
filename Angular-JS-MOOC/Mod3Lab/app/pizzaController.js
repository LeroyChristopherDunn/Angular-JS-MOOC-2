app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { 
            title: 'Pizza Builder',
            availableToppings: [
                'Cheese', 
                'Pepperoni', 
                'Bacon', 
                'Pineapple', 
                'Sausage', 
                'Ham', 
                'Chicken', 
                'Mushrooms', 
                'Onion', 
                'Olives', 
                'Green Peppers'
            ] 
        };
    }
]);