	//Import tablist.json data to Collection
	Meteor.startup(function(){
		if (Tabs.find().count() === 0) {

			console.log("Importing private/tablists.json to db")
			var data = JSON.parse(Assets.getText("tablists.json"));

			data.forEach(function(item, index, array){
				Tabs.insert(item);
						})

		}


		if (Course.find().count() === 0) {

			console.log("Importing private/courselists.json to db")
			var data = JSON.parse(Assets.getText("courselists.json"));

			data.forEach(function(item, index, array){
				Course.insert(item);
						})

		}

		if (Meteor.users.find({'roles.clearance':'Admin'}).count() === 0) {


			var users=[
  						{name:"Brain Teasers Club",password:"12345",username:"BTC",roles:['Admin']},
  						{name:"Computer Society",password:"12345",username:"ComSoc",roles:['Admin']},
  						{name:"English Language SC",password:"12345",username:"EngLang",roles:['Admin']},
  						{name:"Natural Science",password:"12345",username:"NatSci",roles:['Admin']},
  						
  						
  						{name:"SSD-Council of Student Organization",password:"12345",username:"SSD",roles:['Admin']},
  						{name:"CAS-SBO Treasurer",password:"12345",username:"CASSBOTREAS",roles:['Admin']},
  						{name:"CAS-SBO Governor",password:"12345",username:"CASSBOGOV",roles:['Admin']},
  						{name:"CAS Guidance Council",password:"12345",username:"CASGUIDANCE",roles:['Admin']},
  						{name:"CAS SBO Adviser",password:"12345",username:"CASSBOADVISER",roles:['Admin']},
  						{name:"CAS Chairperson",password:"12345",username:"CASCHAIRPERSON",roles:['Admin']},
  						{name:"CAS Dean",password:"12345",username:"CASDEAN",roles:['Admin']},

  						{name:"SJH(HRM only)",password:"12345",username:"SJH",roles:['Admin']},
  						{name:"JPCCI(Accountancy & Business Ad.)",password:"12345",username:"JPCCI",roles:['Admin']},
  						{name:"JPIA(w/ Accounting Subjects only)",password:"12345",username:"JPIA",roles:['Admin']},
  						{name:"PAS(Public Ad. only)",password:"12345",username:"PAS",roles:['Admin']},
  						{name:"JFMC(Business Ad. only)",password:"12345",username:"JFMC",roles:['Admin']},
  						{name:"CBAPHG Guidance Councilor",password:"12345",username:"CBAPHGGUIDANCE",roles:['Admin']},
  						{name:"CBAPHG SBO Adviser",password:"12345",username:"CBAPHGSBOADVISER",roles:['Admin']},
  						{name:"CBAPHG SBO",password:"12345",username:"CBAPHGSBO",roles:['Admin']},

  						{name:"Society President",password:"12345",username:"SocPres",roles:['Admin']},
  						{name:"CCEIT-SBO Treasurer",password:"12345",username:"CCEITSBOTREAS",roles:['Admin']},
  						{name:"CCEIT-SBO Governor",password:"12345",username:"CCEITSBOGOV",roles:['Admin']},
  						{name:"CCEIT Chairperson",password:"12345",username:"CCEITCHAIRPERSON",roles:['Admin']},
  						{name:"Dean",password:"12345",username:"CCEITDEAN",roles:['Admin']},

  						{name:"P.E. Circle",password:"12345",username:"PECIRCLE",roles:['Admin']},
  						{name:"Mentors League.com Treasurer",password:"12345",username:"MENTORSTREAS",roles:['Admin']},
  						{name:"CTE SBO",password:"12345",username:"CTESBO",roles:['Admin']},
  						{name:"Mentor League.com Adviser",password:"12345",username:"MENTORSADVISER",roles:['Admin']},
  						{name:"CTE-SBO Adviser",password:"12345",username:"CTESBOADVISER",roles:['Admin']},
  						{name:"Supervisor of Student Teaching",password:"12345",username:"SST",roles:['Admin']},
  						{name:"SSL Principal",password:"12345",username:"SSLPRINCIPAL",roles:['Admin']},
  						{name:"ESL Principal",password:"12345",username:"ESLPRINCIPAL",roles:['Admin']},
  						{name:"CTE CHAIRPERSON",password:"12345",username:"CTECHAIRPERSON",roles:['Admin']},
  						{name:"CTE DEAN",password:"12345",username:"CTEDEAN",roles:['Admin']},

  						{name:"CON SBO Treasurer",password:"12345",username:"CONSBOTREAS",roles:['Admin']},
  						{name:"CON SBO Governor",password:"12345",username:"CONSBOGOV",roles:['Admin']},
  						{name:"CON SBO Adviser",password:"12345",username:"CONSBOADVISER",roles:['Admin']},
  						{name:"Year Level Cordinator",password:"12345",username:"YLCORDINATOR",roles:['Admin']},
  						{name:"CON Dean",password:"12345",username:"CONDEAN",roles:['Admin']}
					];

_.each(users, function(user){
   var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
					   name: user.name,
					   officer: user.officer
					 }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }
});

}

if(moment().format("MM/DD") == "01/01"){

					   var date = moment().format("MM/DD");
						console.log(date);
	Meteor.users.update({'roles.clearance':'user'}, {$set: 
					{    
					   'profile.SBOstatus': "uncleared",				   
					   'profile.SSCstatus': "uncleared",
					   'profile.COLLEGIANERstatus': "uncleared"
					}  },{upsert: false, multi: true});

	
}


// Meteor.users.remove({'roles.clearance':'user'});
// Meteor.users.remove({'roles.clearance':'Admin'});
// Meteor.users.remove({});
  // Course.remove({});




	});
	/**/