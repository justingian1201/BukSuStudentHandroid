	Template.about.onCreated(function(){
		this.subscribe('tabs');
		
	});


	Template.about.helpers({
		

		tabs: function(){
					return Tabs.find({})
				
		}			
	});

	