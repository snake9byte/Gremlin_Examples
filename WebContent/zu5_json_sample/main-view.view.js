sap.ui.jsview("zu5_json_sample.main-view", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zu5_json_sample.main-view
	*/ 
	getControllerName : function() {
		return "zu5_json_sample.main-view";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zu5_json_sample.main-view
	*/ 
	createContent : function(oController) {
		console.log('test');
		var oModel = new sap.ui.model.json.JSONModel();
 		oModel.loadData('json/week.json');
		 var oButton = new sap.m.Button({
	            id : this.createId("MyButton"),
	            text : "Hello JS View"
	          });
		var oList = new sap.m.List("listWeek",{
	 			title:'List View'
	 			
		});
		
		 var itemTemplate = new sap.m.StandardListItem({
             title : "{we_day}",
            icon: "icons/cal.png",
             description: "{we_comment}",
             iconInset: true
         });
   
		 aControls.push(itemTemplate.attachPress(oController.doIt));
		oList.setModel(oModel);
		oList.bindAggregation('items','/week',itemTemplate);
		console.log(oList);
 		return new sap.m.Page({
			title: "Weeks",
			content: [oList]
		});
 		
 		
 		
 		
	}

});