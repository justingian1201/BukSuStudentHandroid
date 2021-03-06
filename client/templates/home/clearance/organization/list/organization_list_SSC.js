
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


    // <<<===============CAS START=================>>>

    "click .btnBTCStatus": function(event) {

        // console.log("this", this);

        Meteor.call("updateBTC", this);
        return false;
},

    "click .btnComSocStatus": function(event) {

        Meteor.call("updateComSoc", this);
        return false;
},

    "click .btnEngLangStatus": function(event) {

        Meteor.call("updateEngLang", this);
        return false;
},

    "click .btnNatSciStatus": function(event) {

        Meteor.call("updateNatSci", this);
        return false;
},

    "click .btnSSDStatus": function(event) {

        Meteor.call("updateSSD", this);
        return false;
},

    "click .btnCASSBOTREASStatus": function(event) {

        Meteor.call("updateCASSBOTREAS", this);
        return false;
},

    "click .btnCASSBOGOVStatus": function(event) {

        Meteor.call("updateCASSBOGOV", this);
        return false;
},

    "click .btnCASGUIDANCEStatus": function(event) {

        Meteor.call("updateCASGUIDANCE", this);
        return false;
},

    "click .btnCASSBOADVISERStatus": function(event) {

        Meteor.call("updateCASSBOADVISER", this);
        return false;
},

    "click .btnCHAIRPERSONStatus": function(event) {

        Meteor.call("updatebtnCHAIRPERSON", this);
        return false;
},

    "click .btnCASDEANStatus": function(event) {

        Meteor.call("updateCASDEAN", this);
        return false;
},

// <<<===============CAS END=================>>>


// <<<===============COB START=================>>>





    "click .btnSJHStatus": function(event) {

        Meteor.call("updateSJH", this);
        return false;
},

"click .btnJPCCIStatus": function(event) {

        Meteor.call("updateJPCCI", this);
        return false;
},
"click .btnJPIAStatus": function(event) {

        Meteor.call("updateJPIA", this);
        return false;
},
"click .btnPASStatus": function(event) {

        Meteor.call("updatePAS", this);
        return false;
},

"click .btnJFMCStatus": function(event) {

        Meteor.call("updateJFMC", this);
        return false;
},

"click .btnCOBGUIDANCEStatus": function(event) {

        Meteor.call("updateCOBGUIDANCE", this);
        return false;
},

"click .btnCOBSBOADVISERStatus": function(event) {

        Meteor.call("updateCOBSBOADVISER", this);
        return false;
},


"click .btnCOBSBOStatus": function(event) {

        Meteor.call("updateCOBSBO", this);
        return false;
},


// <<<===============COB END=================>>>


// <<<===============CCDT START=================>>>

"click .btnSocPresStatus": function(event) {

        Meteor.call("updateSocPres", this);
        return false;
},
"click .btnCCEITSBOTREASStatus": function(event) {

        Meteor.call("updateCCEITSBOTREAS", this);
        return false;
},
"click .btnCCEITSBOGOVStatus": function(event) {

        Meteor.call("updateCCEITSBOGOV", this);
        return false;
},
"click .btnCCEITCHAIRPERSONStatus": function(event) {

        Meteor.call("updateCCEITCHAIRPERSON", this);
        return false;
},
"click .btnCCEITDEANStatus": function(event) {

        Meteor.call("updateCCEITDEAN", this);
        return false;
},
"click .btnPECIRCLEStatus": function(event) {

        Meteor.call("updatePECIRCLE", this);
        return false;
},
"click .btnMENTORSTREASStatus": function(event) {

        Meteor.call("updateMENTORSTREAS", this);
        return false;
},
"click .btnCTESBOStatus": function(event) {

        Meteor.call("updateCTESBO", this);
        return false;
},
"click .btnMENTORSADVISERStatus": function(event) {

        Meteor.call("updateMENTORSADVISER", this);
        return false;
},
"click .btnCTESBOADVISERStatus": function(event) {

        Meteor.call("updateCTESBOADVISER", this);
        return false;
},
"click .btnSSTStatus": function(event) {

        Meteor.call("updateSST", this);
        return false;
},
"click .btnSSLPRINCIPALStatus": function(event) {

        Meteor.call("updateSSLPRINCIPAL", this);
        return false;
},
"click .btnESLPRINCIPALStatus": function(event) {

        Meteor.call("updateESLPRINCIPAL", this);
        return false;
},
"click .btnCTECHAIRPERSONStatus": function(event) {

        Meteor.call("updateCTECHAIRPERSON", this);
        return false;
},
"click .btnCTEDEANStatus": function(event) {

        Meteor.call("updateCTEDEAN", this);
        return false;
},
"click .btnCONSBOTREASStatus": function(event) {

        Meteor.call("updateCONSBOTREAS", this);
        return false;
},
"click .btnCONSBOGOVStatus": function(event) {

        Meteor.call("updateCONSBOGOV", this);
        return false;
},
"click .btnCONSBOADVISERStatus": function(event) {

        Meteor.call("updateCONSBOADVISER", this);
        return false;
},
"click .btnYLCORDINATORStatus": function(event) {

        Meteor.call("updateYLCORDINATOR", this);
        return false;
},

"click .btnCONDEANStatus": function(event) {

        Meteor.call("updateCONDEAN", this);
        return false;
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

/*Template.index.rendered = function () {

    IonSideMenu.snapper.enable();
    IonSideMenu.snapper.settings({dragger: null});
    
    IonSideMenu.snapper.settings({disable: 'right'});
};*/




