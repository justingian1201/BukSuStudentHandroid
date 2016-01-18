	Template.map.onCreated(function(){
		this.subscribe('tabs');
		
	});


	Template.map.helpers({
		

		tabs: function(){
					return Tabs.find({"mapcontent":"img/maps/BSU.png"})
				
		}			
	});