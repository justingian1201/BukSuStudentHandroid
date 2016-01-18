Router.configure({
  layoutTemplate: 'layout'
});

Router.onBeforeAction(function() {
  //get current route name
  var route_name = Router.current().route.getName();
  //check if Login and in Signup Route

    /*if (!Meteor.userId()) {
    //render loginTemplate
    this.render('clearOrg');
    }*/  

    if (Meteor.userId()) {
      this.next();

      if (route_name == "clearOrg"){

        this.render('index');
    }

      

   /* if(Meteor.user().profile.name == "SSC"){

        this.render('SSClist');

    }*/

    /*if(Meteor.user().profile.name == "SBO"){
        this.render('SSClist');
    }*/

    if(Meteor.user().roles.clearance == "Admin" && route_name == 'profile'  ){
        this.render('SSClist');
    }

    if(Meteor.user().roles.clearance == "user" && route_name == 'profile'){
        // this.render('COLLEGIANERlist');
        this.render("studentProfile");
    }

    if(Meteor.user().roles.clearance == "Admin" && route_name == 'users'  ){
        this.render('SSClist');
    }

    if(Meteor.user().roles.clearance == "user" && route_name == 'users'){
        // this.render('COLLEGIANERlist');
        this.render("index");
    }
    
    

    // var route_add = Router.current().route.getName();

    /*if (route_name == "search"){
      this.render('search');
    }

     if (route_name == "buildings"){
      this.render('buildings');
    }

    if (route_name == "handbook"){
      this.render('handbook');
    }

    if (route_name == "map"){
      this.render('map');
    }
*/

  }

  else{
      this.next();
      // Router.go("clearOrg");

      // this.render('clearOrg');

      if (route_name == "index"){

        this.render('clearOrg');
        // Router.go("clearOrg");
    }
    }

});

/*Router.route('/studClearance/:_id', function () {
  var clearance = Items.findOne({_id: this.params._id});
  this.render('studClearance', {data: clearance});
});*/






Router.map(function() {

	/*index route*/
  // this.route('index', {path: '/'});
  this.route('clearOrg', {path: '/'});

  //index routes
  this.route('index');
  this.route('buildings');
  this.route('clearance');
  this.route('handbook');
  this.route('map');
  

  //clearance routes

  // this.route('clearOrg'); 
  // this.route('clearStudent');
  this.route('SSClist');
  this.route('orgList');
  this.route('register');
  this.route('profile');
  this.route('users');
  this.route("studentProfile");
  this.route("studentProfileInfo");
  this.route("edit");


  


this.route('studClearance', {
  path: '/studClearance/:_id',
  notFoundTemplate: 'authorNotFound',
  data: function() {
    return Meteor.users.findOne({_id: this.params._id});
  }
  // console.log(data);
});


 /* this.route('studClearance/:_id', {
        // console.log(this.params._id);
        data: function(){
            return StudentList.findOne({_id: this.params._id});
        }
    });*/

  /*this.route('studClearance/:id', function(){
    var clearance = Items.findOne({_id: this.params._id});
    this.route('studClearance', {data: clearance});
  });*/
  // this.route('studClearance');

/*  Router.route('/studClearance/:_id', function () {
  var clearance = StudentList.findOne({_id: this.params._id});
  this.render('studClearance', {data: clearance});
});
  */
  /* routes goes here!*/

  /*handbook routes*/
  this.route('handbookIndex');
  this.route('coc');
  this.route('ssf');
  this.route('course');
  this.route('about');

  /*find routes*/

  this.route('findcas');
  this.route('findcob');
  this.route('findcoe');
  this.route('findccdt');
  this.route('findnursing');
  this.route('findlaw');
  this.route('findgrad');
  this.route('findesl');
  this.route('findssl');
  this.route('findadmin');

   /*CodeOfConduct routes*/

  this.route('duties');
  this.route('general');
  this.route('rights');
  this.route('rules');
  this.route('social');
  this.route('specific');
  this.route('university');


     /*StudentService&Facilities routes*/

  this.route('ssfadmission');
  this.route('ssfavc');
  this.route('ssfdata');
  this.route('ssfethno');
  this.route('ssfextension');
  this.route('ssfgate');
  this.route('ssfguidance');
  this.route('ssfhealth');
  this.route('ssflibrary');
  this.route('ssfoss');
  this.route('ssfradio');
  this.route('ssfrecreational');
  this.route('ssfresearch');
  this.route('ssfresidence');
  this.route('ssfspeech');
  this.route('ssfuniversity');
  this.route('ssfwifi');
  
 
  /*Courses routes*/

  this.route('cas');
  this.route('cob');
  this.route('coe');
  this.route('ccdt');
  this.route('law');
  this.route('grad');
  this.route('nursing'); 

  /*Search route*/

  this.route('search'); 


  /*General Directive routes*/

  this.route('gdcampus');
  this.route('gddress');
  this.route('gdschool');
  this.route('gdid');

  /*University Disciplinary routes*/

  this.route('dmprobation');
  this.route('dmsuspension');
  this.route('dmwarning');

  /*Rules and Regulations routes*/

  this.route('rrgrave');
  this.route('rrlight');
  
});






