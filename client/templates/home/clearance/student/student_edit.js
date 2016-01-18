Meteor.subscribe('course');

Template.edit.helpers({
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
            
        },
  editData: function(){
    return Meteor.users.find(Meteor.userId())
  }

});

Template.edit.events({
  "click .btnSave": function (event) {
    var currentPass = $(".txtCurrentPassword").val();
    var pass1 = $(".txtPassword").val();
    var pass2 = $(".txtConfirmPassword").val();
    console.log(currentPass);
    console.log(pass1);
    console.log(pass2);
if(pass1 && pass2){
    if(pass1 === pass2){

      Accounts.changePassword(currentPass, pass1, function(err) {
                if (err) {                   
                   IonPopup.alert({
      title: 'Alert!',
      template: 'Password is not Correct',
      okText: 'Ok.'
    })
                   }else{

      $(".txtCurrentPassword").val("");
      $(".txtPassword").val("");
      $(".txtConfirmPassword").val("");

                    IonPopup.alert({
      title: 'Success',
      template: 'You have just Updated Your Password',
      onOk: function() {
        // Router.go("studentProfileInfo");
      }
    });
              

            }
            })

      }else{

      IonPopup.alert({
      title: 'Alert!',
      template: 'Password did not Match. Try Again',
      okText: 'Ok'
    });
        }
      }


      
  },


  "click .btnSaveProfile": function (event) {
    
      Meteor.call("updateProfile", { 
        username: $(".txtNumber").val(),
        lastName: $(".txtLastName").val(),
        firstName: $(".txtFirstName").val(),
        middleName: $(".txtMiddleName").val(),
        college: $(".txtCollege").val(),
        course: $(".txtCourse").val(),
        year: $(".txtYear").val(),
        semester: $(".txtSemester").val(),
        SY: $(".txtSchoolYear").val()
        
        

      }, function(err) {
                if (err) {                   
                   IonPopup.alert({
      title: 'Alert!',
      template: 'Username Already Exist',
      okText: 'Ok.'
    })
                   }else{

                    IonPopup.alert({
      title: 'Success',
      template: 'You have just Updated Your Profile',
      onOk: function() {
        Router.go("studentProfileInfo");
      }
    });
              

            }
            }
            );
/*
      $(".txtNumber").val("");
      $(".txtLastName").val("");
      $(".txtFirstName").val("");
      $(".txtMiddleName").val("");
      $(".txtCollege").val("");
      $(".txtCourse").val("");
      $(".txtYear").val("");
      $(".txtSemester").val("");
      $(".txtSchoolYear").val("");
*/

      
    

    return false;
  },

  "change .txtCollege": function (event) {
      var c = $(".txtCollege").val();
            Session.set('college',c);

  }


});