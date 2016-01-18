	Template.findcas.onCreated(function(){
		this.subscribe('tabs');
		
	});


	Template.findcas.helpers({
		

		tabs: function(){
					return Tabs.find({"mapcontent":"img/maps/BSU.png"})
				
		}			
	});