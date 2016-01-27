Meteor.subscribe('userData');

Template.tabsOne.helpers({
    userData: function () {
        // body...
    return Meteor.users.find(Meteor.userId())
    }
});