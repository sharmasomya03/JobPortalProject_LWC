({
    CreateAccount : function(component, event, helper) {


        
              var compName= component.get('v.compName');
              var jobTitle= component.get('v.jobTitle');
              var   jobDesc =component.get('v.jobDesc');
              var  jobPost  =component.get('v.jobPost');
              var jobEnd =component.get('v.jobEnd');
              var  jobLoc =component.get('v.jobLoc');
              var   exp = component.get('v.exp');
             var ctc =component.get('v.ctc');

              var action = component.get("c.createJobPostRecord");
              action.setParams({      
                compName : compName,
                jobTitle: jobTitle,
               jobDesc : jobDesc,
               jobPost: jobPost,
               jobEnd : jobEnd,
               jobLoc : jobLoc,
               exp : exp,
               ctc : ctc,
                 // salary: salary
                
              
        
             
               
            
                // "city" :component.get('v.city'),
                // "State" :component.get('v.State')
               
              });
            

              action.setCallback(this, function(response) {
            
                  var state = response.getState();
                  if (state === "SUCCESS") {
                    console.log('state' + state);

                    var val=response.getReturnValue();
                    let str=JSON.stringify(val);
                      // var toastEvent = $A.get("e.force:showToast");
                      // toastEvent.setParams({
                      //     "title": "Success!",
                      //     "message": "The record Created successfully."
                      // });
                      // toastEvent.fire(); 
                     console.log('str' , str) ;

                       
                  }
                  
              });
              $A.enqueueAction(action);
          },
    }
)