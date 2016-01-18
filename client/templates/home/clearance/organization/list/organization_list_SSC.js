
Meteor.subscribe('userData');

Template.SSClist.helpers({
  

    userData: function(){
            var keyword  = Session.get('searchnow');
            if(Session.get('searchnow'))
                return Meteor.users.find({$and: [{'roles.clearance':'user'},{$or: [ {'username': {$regex: new RegExp('.*' + keyword.toLowerCase() + '.*', "i")}}, {'profile.lastName': {$regex: new RegExp('.*' + keyword.toLowerCase() + '.*', "i")}} ] }]})


        
            else
                {
                    return Meteor.users.find({'roles.clearance':'user'});
                }
        } 

       



});


Template.SSClist.events({



    "keyup #search": function(event){
            var s = $("#search").val();
            Session.set('searchnow',s);
        },

    "click .btnDelete": function(event, template) {


        var data = this;

        IonPopup.confirm({
            title: 'Are you sure?',
            template: 'Are you <strong>really</strong> sure?',
            onOk: function() {


                Meteor.call("delMessage", data);
                return false;
            },
            onCancel: function() {
                console.log('Cancelled');
            }
        });


    },

    "click .btnSCCStatus": function(event) {

        Meteor.call("updateSSC", this);
        return false;
},

"click .btnSBOStatus": function(event) {

        Meteor.call("updateSBO", this);
        return false;
},

"click .btnCOLLEGIANERStatus": function(event) {

        Meteor.call("updateCOLLEGIANER", this);
        return false;
}
    

});

Template.layout.events({

    "click #btnLogout": function() {
        Meteor.logout();
        IonSideMenu.snapper.disable();
        Router.go("clearOrg");
    }



});

Template.layout.rendered = function () {

    IonSideMenu.snapper.disable();

    // IonSideMenu.snapper.settings({disable: 'right'});
};

Template.index.rendered = function () {

    IonSideMenu.snapper.enable();
    IonSideMenu.snapper.settings({dragger: null});
    
    // IonSideMenu.snapper.settings({disable: 'right'});
};




