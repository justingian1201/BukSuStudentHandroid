Meteor.methods({

	

	secureCreateUser: function(user){
		console.log(user);
		if(user.college == 'CAS'){

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
					   BTCstatus: "uncleared",
					   BTCofficer: "",
					   ComSocstatus: "uncleared",
					   ComSocofficer: "",
					   EngLangstatus: "uncleared",
					   EngLangofficer: "",
					   NatScistatus: "uncleared",
					   NatSciofficer: "",
					   SSDstatus: "uncleared",
					   SSDofficer: "",
					   CASSBOTREASstatus: "uncleared",
					   CASSBOTREASofficer: "",
					   CASSBOGOVstatus: "uncleared",
					   CASSBOGOVofficer: "",
					   CASGUIDANCEstatus: "uncleared",
					   CASGUIDANCEofficer: "",
					   CASSBOADVISERstatus: "uncleared",
					   CASSBOADVISERofficer: "",
					   CHAIRPERSONstatus: "uncleared",
					   CHAIRPERSONofficer: "",
					   CASDEANstatus: "uncleared",
					   CASDEANofficer: ""}

					   		});



  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

		}

		if(user.college == 'COB'){

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
					   SJHstatus: "uncleared",
					   SJHofficer: "",
					   BTCstatus: "uncleared",
					   BTCofficer: "",
					   JPCCIstatus: "uncleared",
					   JPCCIofficer: "",
					   COMSOCstatus: "uncleared",
					   COMSOCofficer: "",
					   JPIAstatus: "uncleared",
					   JPIAofficer: "",
					   ELSCstatus: "uncleared",
					   ELSCofficer: "",
					   PASstatus: "uncleared",
					   PASofficer: "",
					   NSSstatus: "uncleared",
					   NSSofficer: "",
					   JFMCstatus: "uncleared",
					   JFMCofficer: "",
					   GUIDANCEstatus: "uncleared",
					   GUIDANCEofficer: "",
					   CBAHPGSBOADVISERstatus: "uncleared",
					   CBAHPGSBOADVISERofficer: "",
					   CBAHPGSBOstatus: "uncleared",
					   CBAHPGSBOofficer: ""}

					   		});



  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

		}

		if(user.college == 'CCDT'){

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
					   SOCPRESstatus: "uncleared",
					   SOCPRESofficer: "",
					   CCEITSBOTREASstatus: "uncleared",
					   CCEITSBOTREASofficer: "",
					   CCEITSBOGOVstatus: "uncleared",
					   CCEITSBOGOVofficer: "",
					   CHAIRPERSONstatus: "uncleared",
					   CHAIRPERSONofficer: "",
					   DEANstatus: "uncleared",
					   DEANofficer: ""}

					   		});



  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

		}

		if(user.college == 'CTE'){

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
					   BTCstatus: "uncleared",
					   BTCofficer: "",
					   COMSOCstatus: "uncleared",
					   COMSOCofficer: "",
					   ELSCstatus: "uncleared",
					   ELSCofficer: "",
					   NSSstatus: "uncleared",
					   NSSofficer: "",
					   PECIRCLEstatus: "uncleared",
					   PECIRCLEofficer: "",
					   MLTREASstatus: "uncleared",
					   MLTREASCofficer: "",
					   CTESBOstatus: "uncleared",
					   CTESBOofficer: "",
					   MLADVISERstatus: "uncleared",
					   MLADVISERofficer: "",
					   CTESBOADVISERstatus: "uncleared",
					   CTESBOADVISERofficer: "",
					   SSTGTstatus: "uncleared",
					   SSTGTofficer: "",
					   SSLPRINCIPALstatus: "uncleared",
					   SSLPRINCIPALofficer: "",
					   ESLPRINCIPALstatus: "uncleared",
					   ESLPRINCIPALofficer: "",
					   CHAIRPERSONstatus: "uncleared",
					   CHAIRPERSONofficer: "",
					   DEANstatus: "uncleared",
					   DEANofficer: ""}

					   		});



  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

		}

		if(user.college == 'CON'){

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
					   SBOTREASstatus: "uncleared",
					   SBOTREASofficer: "",
					   SBOGOVstatus: "uncleared",
					   SBOGOVofficer: "",
					   SBOADVISERstatus: "uncleared",
					   SBOADVISERofficer: "",
					   YLCORDINATORstatus: "uncleared",
					   YLCORDINATORofficer: "",
					   DEANstatus: "uncleared",
					   DEANofficer: ""}

					   		});



  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

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


	// <<<===============CAS START=================>>>


	updateBTC: function(status_data){

		if(this.userId){

			if(status_data.profile.BTCstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.BTCofficer = Meteor.user().officer
				status_data.profile.BTCstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.BTCofficer = Meteor.user().officer
				status_data.profile.BTCstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateComSoc: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.ComSocstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.ComSocofficer = Meteor.user().officer
				status_data.profile.ComSocstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.ComSocofficer = Meteor.user().officer
				status_data.profile.ComSocstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateEngLang: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.EngLangstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.EngLangofficer = Meteor.user().officer
				status_data.profile.EngLangstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.EngLangofficer = Meteor.user().officer
				status_data.profile.EngLangstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateNatSci: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.NatScistatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.NatSciofficer = Meteor.user().officer
				status_data.profile.NatScistatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.NatSciofficer = Meteor.user().officer
				status_data.profile.NatScistatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateSSD: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.SSDstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.SSDofficer = Meteor.user().officer
				status_data.profile.SSDstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.SSDofficer = Meteor.user().officer
				status_data.profile.SSDstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateCASSBOTREAS: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.CASSBOTREASstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASSBOTREASofficer = Meteor.user().officer
				status_data.profile.CASSBOTREASstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASSBOTREASofficer = Meteor.user().officer
				status_data.profile.CASSBOTREASstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateCASSBOGOV: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.CASSBOGOVstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASSBOGOVofficer = Meteor.user().officer
				status_data.profile.CASSBOGOVstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASSBOGOVofficer = Meteor.user().officer
				status_data.profile.CASSBOGOVstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateCASGUIDANCE: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.CASGUIDANCEstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASGUIDANCEofficer = Meteor.user().officer
				status_data.profile.CASGUIDANCEstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASGUIDANCEofficer = Meteor.user().officer
				status_data.profile.CASGUIDANCEstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateCASSBOADVISER: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.CASSBOADVISERstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASSBOADVISERofficer = Meteor.user().officer
				status_data.profile.CASSBOADVISERstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASSBOADVISERofficer = Meteor.user().officer
				status_data.profile.CASSBOADVISERstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updatebtnCHAIRPERSON: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.CHAIRPERSONstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CHAIRPERSONofficer = Meteor.user().officer
				status_data.profile.CHAIRPERSONstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CHAIRPERSONofficer = Meteor.user().officer
				status_data.profile.CHAIRPERSONstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},

	updateCASDEAN: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.CASDEANstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASDEANofficer = Meteor.user().officer
				status_data.profile.CASDEANstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.CASDEANofficer = Meteor.user().officer
				status_data.profile.CASDEANstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},



	// <<<===============CAS END=================>>>


	// <<<===============COB START=================>>>

	updateSJH: function(status_data){

		console.log(status_data);

		if(this.userId){

			if(status_data.profile.SJHstatus == "checked"){
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.SJHofficer = Meteor.user().officer
				status_data.profile.SJHstatus = "uncleared"
			Meteor.users.update(status_data._id, {$set: status_data });

			}else{
				check(status_data, Object);
				status_data.createdAt = moment().format("MM/DD/YYYY")
				status_data.profile.SJHofficer = Meteor.user().officer
				status_data.profile.SJHstatus = "checked"
			Meteor.users.update(status_data._id, {$set: status_data });

			}
		}
	},



	// <<<===============COB END=================>>>

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
		// console.log(officer_data);
		// console.log(this.userId);

		// officer_data.userId = this.userId;


	

				check(officer_data, Object);
			Meteor.users.update(this.userId, {$set: officer_data });

			/*var data = {};
				var obj = 
					officer:officer_data
					
				};*/
				
				// data.profile.officer = officer_data;
				// console.log(data);
			// Meteor.users.update(this.userId, {$set: data });

			
			
		
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