Meteor.methods({

	

	secureCreateUser: function(user){
		console.log(user);
		/*if(user.year = '1st Year'){

			user.year = 1;

		}if(user.year = '2nd Year'){

			user.year = 2;

		}if(user.year = '3rd Year'){

			user.year = 3;

		}if(user.year = '4th Year'){

			user.year = 4;

		}if(user.year = '5th Year'){

			user.year = 5;

		}*/

		var user_id = Accounts.createUser({
			username: user.username,
			password: user.password,
			profile: { 
					   lastName: user.lastName, 
					   firstName: user.firstName, 
					   middleName: user.middleName, 
					   college: user.college,
					   course: user.course, 
					   year: user.year,
					   semester: user.semester,
					   SY: user.SY,
					   SBOstatus: "uncleared",
					   SBOofficer: "",
					   SSCstatus: "uncleared",
					   SSCofficer: "",
					   COLLEGIANERstatus: "uncleared",
					   COLLEGIANERofficer: ""}

					   		});



  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }
  		
	},

	addMessage: function(message_data){
		if(this.userId){
			check(message_data, Object);
			message_data.createdAt = new Date();
			message_data.userid = this.userId
			StudentList.insert(message_data);
		}
	},

	updateSSC: function(status_data){

		if(this.userId){

			if(status_data.profile.SSCstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.userid = this.userId
				status_data.profile.SSCofficer = Meteor.user().officer
				// console.log(Meteor.user().officer);
				status_data.profile.SSCstatus = "uncleared"
			// status_data.status = cleared
			/*Meteor.users.update(status_data._id,status_data);
			Players.update({score: {$gt: 10}},{$addToSet: {badges: "Winner"}},{multi: true});*/
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data.profile, Object);
				// status_data.createdAt = new Date();
				// status_data.userid = this.id
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.userid = this.userId
				console.log(Meteor.user().officer);
				status_data.profile.SSCofficer = Meteor.user().officer
				status_data.profile.SSCstatus = "checked"
			// status_data.status = cleared
			Meteor.users.update(status_data._id, {$set: status_data });

			}
			
		}
		
        
		
	},

	updateCOLLEGIANER: function(status_data){
		if(this.userId){

			if(status_data.profile.COLLEGIANERstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.userid = this.userId
				status_data.profile.COLLEGIANERofficer = Meteor.user().officer
				// status_data.profile.userid = this.userId
				status_data.profile.COLLEGIANERstatus = "uncleared"
			// status_data.status = cleared
			/*Meteor.users.update(status_data._id,status_data);
			Players.update({score: {$gt: 10}},{$addToSet: {badges: "Winner"}},{multi: true});*/
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data.profile, Object);
				// status_data.createdAt = new Date();
				// status_data.userid = this.id
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.userid = this.userId
				status_data.profile.COLLEGIANERofficer = Meteor.user().officer
				status_data.profile.COLLEGIANERstatus = "checked"
			// status_data.status = cleared
			Meteor.users.update(status_data._id, {$set: status_data });

			}
			
		}
	},


		updateSBO: function(status_data){
		if(this.userId){

			if(status_data.profile.SBOstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.userid = this.userId
				status_data.profile.SBOofficer = Meteor.user().officer
				// status_data.profile.userid = this.userId
				status_data.profile.SBOstatus = "uncleared"
			// status_data.status = cleared
			/*Meteor.users.update(status_data._id,status_data);
			Players.update({score: {$gt: 10}},{$addToSet: {badges: "Winner"}},{multi: true});*/
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data.profile, Object);
				// status_data.createdAt = new Date();
				// status_data.userid = this.id
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.userid = this.userId
				status_data.profile.SBOofficer = Meteor.user().officer
				status_data.profile.SBOstatus = "checked"
			// status_data.status = cleared
			Meteor.users.update(status_data._id, {$set: status_data });

			}
			
		}
	},




	delMessage: function(message){
		if(this.userId && Meteor.user().username == message.name){
			// check(message_id, String);
			StudentList.remove(message._id); 

		}
	},


	officer: function(officer_data){
		console.log(officer_data);
	

				check(officer_data, Object);
			Meteor.users.update(officer_data.userId, {$set: officer_data });

			
			
		
	},


		updateProfile: function(profile_data){
			// console.log(profile_data);
		if(this.userId){

			
				check(profile_data, Object);
				// profile_data.profile = profile_data
				var data = {};
				var obj = {
					lastName:profile_data.lastName,
					firstName:profile_data.firstName,
					middleName:profile_data.middleName,
					college:profile_data.college,
					course:profile_data.course,
					year:profile_data.year,
					semester:profile_data.semester,
					SY:profile_data.SY
				};
				data.username = profile_data.username;
				data.profile = obj;
				console.log(data);
			Meteor.users.update(this.userId, {$set: data });

			
			
		}
	}

});