	//Tabs Publication
	//return All Tabs
	Meteor.publish("tabs", function(){
		return Tabs.find({});
	});

  Meteor.publish("course", function(){
    return Course.find({});
  });

	Meteor.publish("studentList", function(){
		return StudentList.find({});
	});

	


	Meteor.publish(null, function (){ 
  		return Meteor.roles.find({})
	});

	/*Meteor.publish('thisNameDoesNotMatter', function () {
  var self = this;
  var handle = Meteor.users.find({}, {
    fields: {username: 1, profile: 1, roles:1}
  }).observeChanges({
    added: function (id, fields) {
      self.added('thisNameMatters', id, fields);
    },
    changed: function (id, fields) {
      self.changed('thisNameMatters', id, fields);
    },
    removed: function (id) {
      self.removed('thisNameMatters', id);
    }
  });

  self.ready();

  self.onStop(function () {
    handle.stop();
  });

});*/

/*  Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
       {fields:{username: 1, profile: 1, roles:1}});
});*/

  Meteor.publish("userData", function () {
    return Meteor.users.find({},
       {fields:{createdAt:1, username: 1, profile: 1, roles:1, officer:1}});
});

 /* Meteor.publish("userData", function () {
    return Meteor.users.find();
*/

 
