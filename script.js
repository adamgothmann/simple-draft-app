var myApp=angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){
  $scope.teams = [];
  $scope.football = [];
  $scope.baseball = [];
  $scope.basketball = [];
  $scope.hockey = [];

  $scope.addTeam = function(){
    var team = {
      teamName: $scope.teamName,
      location: $scope.location,
      sport: $scope.sport
    };
    if($scope.teams.length > 15){
      alert('You already have the max amount of teams');
    } else if($scope.football){

    }

    if($scope.sport.toLowerCase() == 'football'){
      console.log('football', $scope.football);
      $scope.teams.push(team);
      $scope.football.push(team);
    } else if($scope.sport.toLowerCase() == 'baseball'){
      console.log('baseball', $scope.baseball);
      $scope.teams.push(team);
      $scope.baseball.push(team);
    } else if($scope.sport.toLowerCase() == 'basketball'){
      console.log('basketball', $scope.basketball);
      $scope.teams.push(team);
      $scope.basketball.push(team);
    } else if($scope.sport.toLowerCase() == 'hockey'){
      console.log('hockey', $scope.hockey);
      $scope.teams.push(team);
      $scope.hockey.push(team);
    } else {
      alert('enter a valid sport');
    }

    console.log($scope.teams);
    $scope.location = '';
    $scope.teamName = '';
    $scope.sport = '';
  };
}]);
