Meteor.subscribe('course');

Template.register.helpers({
  courselists: function(){
            var keyword  = Session.get('college');

            if(keyword == 'CAS'){

              return Course.find({'college':'CAS'});
              /*var x = Course.find({'college':'CAS'}).count();
              return x;*/

            }

            if(keyword == 'COB'){

              return Course.find({'college':'COB'});
              /*var x = Course.find({'college':'CAS'}).count();
              return x;*/

            }

            if(keyword == 'CCDT'){

              return Course.find({'college':'CCDT'});
              /*var x = Course.find({'college':'CAS'}).count();
              return x;*/

            }

            if(keyword == 'CTE'){

              return Course.find({'college':'CTE'});
              /*var x = Course.find({'college':'CAS'}).count();
              return x;*/

            }

            if(keyword == 'CON'){

              return Course.find({'college':'CON'});
              /*var x = Course.find({'college':'CAS'}).count();
              return x;*/

            }
            
        }  
});

Template.register.events({

 
  "click .btnSignin": function (event) {

    var pass1 = $(".txtPassword").val();
    var pass2 = $(".txtConfirmPassword").val();
    var usernameValid = $(".txtNumber").val();
    var lastNameValid = $(".txtNumber").val();
    var firstNameValid = $(".txtNumber").val();
    var courseValid = $(".txtNumber").val();
    var yearValid = $(".txtNumber").val();
    /*var college = $(".txtCollege").val();

    console.log(college);*/
    if(usernameValid && pass1 && lastNameValid && firstNameValid && courseValid && yearValid){

    

    if(pass1 === pass2){
      Meteor.call("secureCreateUser", { 
        username: $(".txtNumber").val(),
        lastName: $(".txtLastName").val(),
        firstName: $(".txtFirstName").val(),
        middleName: $(".txtMiddleName").val(),
        college: $(".txtCollege").val(),
        course: $(".txtCourse").val(),
        year: $(".txtYear").val(),
        semester: $(".txtSemester").val(),
        SY: $(".txtSchoolYear").val(),
        password: $(".txtPassword").val(),
        roles: "user"

      }, function(err) {

        console.log("ERROR", err);
                if (err) {                   
                   IonPopup.alert({
      title: 'Alert!',
      template: 'Username Already Exist',
      okText: 'Ok.'
    })
                   }else{

                    IonPopup.alert({
      title: 'Success',
      template: 'You have just Registered',
      onOk: function() {
        $(".txtNumber").val("");
      $(".txtLastName").val("");
      $(".txtFirstName").val("");
      $(".txtMiddleName").val("");
      $(".txtCollege").val("");
      $(".txtCourse").val("");
      $(".txtYear").val("");
      $(".txtSemester").val("");
      $(".txtSchoolYear").val("");
      $(".txtPassword").val("");
      $(".txtConfirmPassword").val("");
        Router.go("clearOrg");
      }
    });


      
              

            }
            }
            );

      
     


    }else{

      IonPopup.alert({
      title: 'Alert!',
      template: 'Password did not Match. Try Again',
      okText: 'Ok'
    });
    }

  }else{

    IonPopup.alert({
      title: 'Alert!',
      template: 'Please! Complete Input the Fields',
      okText: 'Ok'
    });

  }


      
      
 
    
    return false;
  },


  "change .txtCollege": function (event) {
      var c = $(".txtCollege").val();
            Session.set('college',c);

  }


});