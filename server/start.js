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


			var users=[	{name:"COLLEGIANER",password:"12345",username:"COLLEGIANER",roles:['Admin']},
  						{name:"SSC",password:"12345",username:"SSC",roles:['Admin']},
  						{name:"SBO",password:"12345",username:"SBO",roles:['Admin']}
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
  // Course.remove({});




	});
	/**/