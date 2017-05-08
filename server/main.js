import { Meteor } from 'meteor/meteor';

Meteor.users.allow({
  
  update: function(userId, doc){
    return true;
  }
});

Meteor.startup(() => {
  // code to run on server at startup
});
