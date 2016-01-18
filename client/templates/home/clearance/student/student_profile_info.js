Meteor.subscribe('userData');

Template.studentProfileInfo.helpers({
    userData: function () {
        // body...
    return Meteor.users.find(Meteor.userId())
    }
});