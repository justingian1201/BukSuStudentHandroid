Meteor.subscribe('userData');

Template.studentProfile.helpers({
    userData: function () {
        // body...
    return Meteor.users.find(Meteor.userId())
    }
});