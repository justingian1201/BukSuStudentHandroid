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
  						{organization:"BTC",name:"Brain Teasers Club",password:"12345",username:"BTC",roles:['Admin']},
  						{organization:"ComSoc",ame:"Computer Society",password:"12345",username:"ComSoc",roles:['Admin']},
  						{organization:"EngLang",name:"English Language SC",password:"12345",username:"EngLang",roles:['Admin']},
  						{organization:"NatSci",name:"Natural Science",password:"12345",username:"NatSci",roles:['Admin']},
  						
  						
  						{collegeCAS:"CAS",name:"SSD-Council of Student Organization",password:"12345",username:"SSD",roles:['Admin']},
  						{collegeCAS:"CAS",name:"CAS-SBO Treasurer",password:"12345",username:"CASSBOTREAS",roles:['Admin']},
  						{collegeCAS:"CAS",name:"CAS-SBO Governor",password:"12345",username:"CASSBOGOV",roles:['Admin']},
  						{collegeCAS:"CAS",name:"CAS Guidance Council",password:"12345",username:"CASGUIDANCE",roles:['Admin']},
  						{collegeCAS:"CAS",name:"CAS SBO Adviser",password:"12345",username:"CASSBOADVISER",roles:['Admin']},
  						{collegeCAS:"CAS",name:"CAS Chairperson",password:"12345",username:"CASCHAIRPERSON",roles:['Admin']},
  						{collegeCAS:"CAS",name:"CAS Dean",password:"12345",username:"CASDEAN",roles:['Admin']},

  						{collegeCOB:"COB",name:"SJH(HRM only)",password:"12345",username:"SJH",roles:['Admin']},
  						{collegeCOB:"COB",name:"JPCCI(Accountancy & Business Ad.)",password:"12345",username:"JPCCI",roles:['Admin']},
  						{collegeCOB:"COB",name:"JPIA(w/ Accounting Subjects only)",password:"12345",username:"JPIA",roles:['Admin']},
  						{collegeCOB:"COB",name:"PAS(Public Ad. only)",password:"12345",username:"PAS",roles:['Admin']},
  						{collegeCOB:"COB",name:"JFMC(Business Ad. only)",password:"12345",username:"JFMC",roles:['Admin']},
  						{collegeCOB:"COB",name:"CBAPHG Guidance Councilor",password:"12345",username:"COBGUIDANCE",roles:['Admin']},
  						{collegeCOB:"COB",name:"CBAPHG SBO Adviser",password:"12345",username:"COBSBOADVISER",roles:['Admin']},
  						{collegeCOB:"COB",name:"CBAPHG SBO",password:"12345",username:"COBSBO",roles:['Admin']},

  						{collegeCCEIT:"CCDT",name:"Society President",password:"12345",username:"SocPres",roles:['Admin']},
  						{collegeCCEIT:"CCDT",name:"CCEIT-SBO Treasurer",password:"12345",username:"CCEITSBOTREAS",roles:['Admin']},
  						{collegeCCEIT:"CCDT",name:"CCEIT-SBO Governor",password:"12345",username:"CCEITSBOGOV",roles:['Admin']},
  						{collegeCCEIT:"CCDT",name:"CCEIT Chairperson",password:"12345",username:"CCEITCHAIRPERSON",roles:['Admin']},
  						{collegeCCEIT:"CCDT",name:"Dean",password:"12345",username:"CCEITDEAN",roles:['Admin']},

  						{collegeCTE:"CTE",name:"P.E. Circle",password:"12345",username:"PECIRCLE",roles:['Admin']},
  						{collegeCTE:"CTE",name:"Mentors League.com Treasurer",password:"12345",username:"MENTORSTREAS",roles:['Admin']},
  						{collegeCTE:"CTE",name:"CTE SBO",password:"12345",username:"CTESBO",roles:['Admin']},
  						{collegeCTE:"CTE",name:"Mentor League.com Adviser",password:"12345",username:"MENTORSADVISER",roles:['Admin']},
  						{collegeCTE:"CTE",name:"CTE-SBO Adviser",password:"12345",username:"CTESBOADVISER",roles:['Admin']},
  						{collegeCTE:"CTE",name:"Supervisor of Student Teaching",password:"12345",username:"SST",roles:['Admin']},
  						{collegeCTE:"CTE",name:"SSL Principal",password:"12345",username:"SSLPRINCIPAL",roles:['Admin']},
  						{collegeCTE:"CTE",name:"ESL Principal",password:"12345",username:"ESLPRINCIPAL",roles:['Admin']},
  						{collegeCTE:"CTE",name:"CTE CHAIRPERSON",password:"12345",username:"CTECHAIRPERSON",roles:['Admin']},
  						{collegeCTE:"CTE",name:"CTE DEAN",password:"12345",username:"CTEDEAN",roles:['Admin']},

  						{collegeCON:"CON",name:"CON SBO Treasurer",password:"12345",username:"CONSBOTREAS",roles:['Admin']},
  						{collegeCON:"CON",name:"CON SBO Governor",password:"12345",username:"CONSBOGOV",roles:['Admin']},
  						{collegeCON:"CON",name:"CON SBO Adviser",password:"12345",username:"CONSBOADVISER",roles:['Admin']},
  						{collegeCON:"CON",name:"Year Level Cordinator",password:"12345",username:"YLCORDINATOR",roles:['Admin']},
  						{collegeCON:"CON",name:"CON Dean",password:"12345",username:"CONDEAN",roles:['Admin']}
					];

_.each(users, function(user){

  if(user.organization){

    var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
             name: user.name,
             organization: user.organization,
             officer: user.officer
           }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

  }


  if(user.collegeCAS){

    var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
             name: user.name,
             collegeCAS: user.collegeCAS,
             officer: user.officer
           }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

  }

  if(user.collegeCOB){

    var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
             name: user.name,
             collegeCOB: user.collegeCOB,
             officer: user.officer
           }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

  }

  if(user.collegeCCEIT){

    var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
             name: user.name,
             collegeCCEIT: user.collegeCCEIT,
             officer: user.officer
           }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

  }
  if(user.collegeCTE){

    var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
             name: user.name,
             collegeCTE: user.collegeCTE,
             officer: user.officer
           }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

  }
  if(user.collegeCON){

    var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
             name: user.name,
             collegeCON: user.collegeCON,
             officer: user.officer
           }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }

  }


   /*var user_id = Accounts.createUser({
        username: user.username,
        password: user.password,
        profile: { 
					   name: user.name,
             college: user.college,
					   officer: user.officer
					 }
    });

    if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(user_id, user.roles, 'clearance');
  }*/



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

if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}


// Meteor.users.remove({'roles.clearance':'user'});
// Meteor.users.remove({'roles.clearance':'Admin'});
// Meteor.users.remove({});
  // Course.remove({});




	});
	/**/