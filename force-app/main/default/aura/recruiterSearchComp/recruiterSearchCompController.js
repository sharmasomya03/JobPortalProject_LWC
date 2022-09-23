({
    handleKey : function(component, event, helper) {

        var searchSeeker = component.find("listsearch").get("v.value");
        var action = component.get("c.jobsearch");
        action.setParams({
            "searchProfile": searchSeeker
        });

        action.setCallback(this, function(response) {
            
            var res1=response.getReturnValue();
            var res2=JSON.stringify(res1);
            console.log(res2);
            component.set('v.seeker',res1);
            //console.log(res2[0].Id);
            //console.log(res2[0].Name);
            
        });
        $A.enqueueAction(action);
    

    }
})
