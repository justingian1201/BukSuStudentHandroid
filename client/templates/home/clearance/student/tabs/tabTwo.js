Meteor.subscribe('userData');

Template.tabsTwo.helpers({
    userData: function () {
        // body...
    return Meteor.users.find(Meteor.userId())
    }
});