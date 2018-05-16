angular
  .module("contestantList", [])
  .directive("cContestantList", function() {
    return {
      scope: {},
      templateUrl: "contestant_list.html",
      replace: true,
      controller: "ContestantListCtrl",
      controllerAs: "ctrl"
    }
  })
  .controller("ContestantListCtrl", function() {
    this.contestants = [
      { firstName: "Rachel", lastName: "Washington" },
      { firstName: "Joshua", lastName: "Foster" },
      { firstName: "Samuel", lastName: "Walker" },
      { firstName: "Phyllis", lastName: "Reynolds" }
    ]
    this.delete = function(custA) {
      this.contestants = this.contestants.filter(custB => notEqual(custA, custB))
    }
  })

angular
  .module("contestantEditor", [])
  .directive("cContestantEditorForm", function() {
    return {
      scope: {
        contestants: "="
      },
      templateUrl: "contestant_editor.html",
      replace: true,
      controller: "ContestantEditorFormCtrl",
      controllerAs: "ctrl"
    }
  })
  .controller("ContestantEditorFormCtrl", function($scope) {
    this.contestant = {}

    this.save = function() {
      $scope.contestants.push(this.contestant)
      this.contestant = {}
    }

    this.delete = function() {
      const list = $scope.contestants
      $scope.contestants = list.filter(c => notEqual(c, this.contestant))
      this.contestant = {}
    }
  })

const notEqual = (personA, personB) =>
  personA.firstName !== personB.firstName && personA.lastName !== personB.lastName

angular.module("contestantApp", ["contestantList", "contestantEditor"])
