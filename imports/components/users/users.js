import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './users.html';

class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
   this.avgRate = [];
   
    this.helpers({
      tasks() {
        return Meteor.users.find({_id:{$ne:this.currentUser()}});
      }
    });

    
  }

  currentUser(){
    return Meteor.userId();
  }

  setRate(task,index){

    if(typeof(task.profile)!=='undefined')
    curAvg = task.profile.avgRate;
    else
    curAvg = 0;

if(typeof(this.avgRate[index])!=='undefined'){
 
    if(typeof(curAvg)=='undefined' || curAvg == 0 || this.avgRate[index] == 0){
      if(this.avgRate[index] != 0)
      newAvg = this.avgRate[index];
      else if(typeof(curAvg)=='undefined')
      newAvg = 0;
      else
      newAvg = curAvg;
    }
    else{
      newAvg = (parseFloat(curAvg) + parseFloat(this.avgRate[index]))/2;
    }

    Meteor.users.update(
      task._id,
      {$set:{"profile.avgRate":newAvg}}
      )
}
  }
}

export default angular.module('userList', [
  angularMeteor
])
  .component('userList', {
    templateUrl: 'imports/components/users/users.html',
    controller: ['$scope', TodosListCtrl]
  });