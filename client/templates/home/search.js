	Template.search.onRendered(function(){
  // $(".txtText").val("");
  $("#search").focus();
  /*$('html, body').animate({
    scrollTop: $(".txtNumber").offset().top
  },1000);*/
});

	Template.search.onCreated(function(){
		this.subscribe('tabs');
		
	});

	

	Template.search.helpers({
		

		tabs: function(){
			var keyword  = Session.get('searchnow');
			if(Session.get('searchnow'))
				return Tabs.find({$or: [ {'tabname': {$regex: new RegExp('.*' + keyword.toLowerCase() + '.*', "i")}}, {'content.abouttitle': {$regex: new RegExp('.*' + keyword.toLowerCase() + '.*', "i")}}, {'content.aboutcontent': {$regex: new RegExp('.*' + keyword.toLowerCase() + '.*', "i")}} ] })


		
			else
				{
					return Tabs.find({})
				}
		}			
	});


	Template.search.events({
		"keyup #search": function(event){
			var s = $("#search").val();
			Session.set('searchnow',s);
		}
	});



