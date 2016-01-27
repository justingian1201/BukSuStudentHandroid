Template.clearOrg.events({
  "submit .form-signin": function (event) {
    event.preventDefault();
  },
  "click .btnLogin": function (event, template){
    var username, password;
    username = template.$("#inputUsername");
    password = template.$("#inputPassword");

   

    Meteor.loginWithPassword(username.val(), password.val(), function(err) {
                if (err) {                   
                   IonPopup.alert({
      title: 'Alert!',
      template: 'Please Check! your Input and Try Again',
      okText: 'Ok'
    });
                   }else{

                    if(Roles.userIsInRole(Meteor.userId(), 'Admin', 'clearance')){

                      IonPopup.prompt({
    title: 'Officer of the Day',
    template: 'Please enter your Name',
    okText: 'Submit',
    inputType: 'text',
    inputPlaceholder: 'Name',
    onOk: function(event,response) {
        // return response;
        console.log(response);

        
        if(response){
          // var userId = Meteor.userId();
        var officer = response;
        response =  {officer} 
        // console.log(response);


        Meteor.call("officer", response);
        return false;
      }else{
        Meteor.logout();
      }
        
    },
      onCancel: function() {
        Meteor.logout();
      }
  });

                    }

                    

                   }
            });

    return false;


  }





  


});
