({
    loadList : function(component, event, helper) {
        var action= component.get("c.jobPostedList");
       // console.log("action =====>" +action);
        action.setCallback(this, function(response){
            component.set("v.jobList",response.getReturnValue());

        });

        $A.enqueueAction(action);
        
    },

    Click: function(component, event)
    {
        component.set("v.JobInfo",true);
        
        var action= component.get("c.jobskList");
        action.setCallback(this, function(response){

          var state = response.getState();
          console.log("state" + state);
          if(state === "SUCCESS")
          {
            component.set("v.jobsk",response.getReturnValue());
            console.log("Jobsk",v.jobsk);
          }

      });
      
    
       
  
         // var jlid = component.get("v.jlid");
         // var jlName = component.get("v.jlName");
      


         let selecteditem=event.currentTarget;
         let jlId=selecteditem.dataset.id;
         let jlName=selecteditem.dataset.name;

        component.set("v.jlId" ,jlId);
        console.log("JlId======>"+ jlId);
        component.set("v.jlName" ,jlName);

       
                action.setParams({
                    jlId : jlId,
            

                });
                
           
              
    

$A.enqueueAction(action);

}
})