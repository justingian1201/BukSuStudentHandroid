Meteor.subscribe('userData');

Template.studentProfile.helpers({
    userData: function () {
        // body...
    return Meteor.users.findOne(Meteor.userId())
    }
});