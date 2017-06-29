app.controller('labController', [
    '$scope', '$timeout', '$q', '$http','gitHub',
    function ($scope, $timeout, $q, $http, github) {
        
        $scope.model = {
            number: 0,
            result: 'Result',
            repo_search_value: ''
        }

        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;

        function checkOddNumber(input) {
        $scope.model.result = 'Working...';
        checkOddNumberHandler(input).then(
            function (result) {
                $scope.model.result = 'Success: ' + result;
            }, function (result) {
                $scope.model.result = 'Error: ' + result;
        })}

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function () {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }

        function getRepos() {
            $scope.model.detail = null;
            resetRepoSearchValueIfEmpty();
            github.getAll({org: $scope.model.repo_search_value}).$promise.then(
                function(response){
                    $scope.model.repos = response;
                }, function(response){
                    alert('no repos found');
                    $scope.model.repos = null;
                }
            )
        }

        function loadDetail(name) {
            $scope.model.detail = null;
            resetRepoSearchValueIfEmpty()
            github.getDetail({org: $scope.model.repo_search_value, id: name}).$promise.then(function(result){
                $scope.model.detail = result;
            })
        }

        function resetRepoSearchValueIfEmpty(){
            if(!$scope.model.repo_search_value)
                $scope.model.repo_search_value = 'angular';
        }
    }
]);