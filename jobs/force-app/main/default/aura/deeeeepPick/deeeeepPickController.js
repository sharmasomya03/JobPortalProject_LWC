({
    parentFieldChange : function(component, event){
        
         var action = component.get("c.getPickListValuesIntoList"); 
         console.log("state console");
         action.setCallback(this,function(response){
           
            var state = response.getState();
            var pickListResponse = response.getReturnValue();
            console.log("state" + state);
             if(state === "SUCCESS"){

                component.set(" v.options", pickListResponse);
                console.log("List"+v.parentList);
             }
         });

         $A.enqueueAction(action);
    }
})
