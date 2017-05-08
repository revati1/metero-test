import angular from 'angular';
import angularMeteor from 'angular-meteor';
import userList from '../imports/components/users/users';
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
  angularMeteor,
  userList.name,
  'accounts.ui'
]);