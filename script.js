var myApp=angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){
  $scope.teams = [];
  $scope.football = [];
  $scope.baseball = [];
  $scope.basketball = [];
  $scope.hockey = [];
  // var totalTeams;


  $scope.addTeam = function(){
    var team = {
      teamName: $scope.teamName,
      location: $scope.location,
      sport: $scope.sport
    };
    if($scope.teams.length > 14){
      alert('You already have the max amount of teams');
    } else if($scope.football.length > 4 || $scope.baseball.length > 4 || $scope.basketball.length > 4 || $scope.hockey.length > 4){
      alert('You already have too many ' + this.sport + ' teams');
    } else {
      if($scope.sport.toLowerCase() == 'football'){
        $scope.teams.push(team);
        $scope.football.push(team);
        $scope.totalFootball = $scope.football.length;
      } else if($scope.sport.toLowerCase() == 'baseball'){
        $scope.teams.push(team);
        $scope.baseball.push(team);
        $scope.totalBaseball = $scope.baseball.length;
      } else if($scope.sport.toLowerCase() == 'basketball'){
        $scope.teams.push(team);
        $scope.basketball.push(team);
        $scope.totalBasketball = $scope.basketball.length;
      } else if($scope.sport.toLowerCase() == 'hockey'){
        $scope.teams.push(team);
        $scope.hockey.push(team);
        $scope.totalHockey = $scope.hockey.length;
      } else {
        alert('enter a valid sport');
      }
    }
    $scope.totalTeams = $scope.teams.length;

    console.log($scope.teams);
    $scope.location = '';
    $scope.teamName = '';
    $scope.sport = '';
  };
}]);
