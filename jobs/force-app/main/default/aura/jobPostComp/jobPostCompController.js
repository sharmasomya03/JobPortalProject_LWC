({
    handleClick: function(component, event) {

        component.set("v.isShowModal", true);
   
    },

    closeModel: function(component, event) {

        component.set("v.isShowModal", false);
   
    },

      saveBox : function(component, event)
      {
        var compName = component.get("v.compName");
        var jobTitle = component.get("v.jobTitle");
        var jobDesc = component.get("v.jobDesc");
        var jobPost = component.get("v.jobPost");
        var jobEnd = component.get("v.jobEnd");
        var jobLoc = component.get("v.jobLoc");
        var exp = component.get("v.exp");
        var ctc = component.get("v.ctc");
        
       


       
        var action = component.get("c.createJobPostRecord");
        action.setParams({compName : compName,
                         jobTitle: jobTitle,
                        jobDesc : jobDesc,
                        jobPost: jobPost,
                        jobEnd : jobEnd,
                        jobLoc : jobLoc,
                        exp : exp,
                        ctc : ctc,
                        //  'city': 'Indore',
                        //  'State' :'Madhya Pradesh'
                          

        });
        action.setCallback(this, function(response){
            let status=response.getState();
            if(status==='SUCCESS')
            {
                let val=response.getReturnValue();
                let str=JSON.stringify(val);
                console.log('obj is '+str);
                console.log('stringify is '+str);
            }
           
        });
        $A.enqueueAction(action);
        
    
      
      }

      
})