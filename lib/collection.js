//Collection for tablists.json
Tabs = new Meteor.Collection('tabs');

Course = new Meteor.Collection('course');

//Student Collection
StudentList = new Meteor.Collection('studentList');

// directories = new Meteor.Collection('thisNameMatters');




/*if(Meteor.isServer){
  StudentList.allow({
    'insert': function () {
      return true;
    },
    'update': function () {
      return true;
    },
    'remove': function () {
      return true;
    },
    download: function(userId, fileObj) {
        return true
    }
  });
}*/