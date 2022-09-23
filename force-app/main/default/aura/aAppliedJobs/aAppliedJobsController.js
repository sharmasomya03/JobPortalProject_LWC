({
    doInit: function(component){

        var action = component.get("c.getAppliedJobs");
        action.setCallback(this, function(response) {
          
            // var state  = response.getState();
            // if(state === "SUCCESS")
            // {
                var res = response.getReturnValue();
                      
                    var res1 = JSON.stringify(res);
                    component.set("v.jobsApplied", res);
                         console.log('res1++++++>'+res1);
                        //  var takla = 
                        //  console.log('takla---'+takla);
                      
      //               var  jobsApplied = res.map(function(item) {
                        
      //                       return {seekerName:item["SeekerName__r"]};
      //                     })
      // var op = JSON.stringify(jobsApplied);
      // console.log('=======>'+op);
 
    });
   
      
       
        $A.enqueueAction(action);
    }


    // doInit: function(component){
    //     var action = component.get("c.getAppliedJobs");
    //     // action.setParams({ SeekerId: cmp.get("v.recordId") });
    //     action.setCallback(this, function(response){
    //         var state = response.getState();
            
    //          console.log('werttyuh' +state);

    //          if(state === "SUCCESS"){
    //          var res = response.getReturnValue();
    //             component.set("v.jobsApplied", res);
    //             var res1 = JSON.stringify(res);
    //             console.log('res1++++++>'+res1);

    //     } else if (state === "ERROR") {
    //         var errors = response.getError();
    //         console.error(errors);
    //     }
        
    //     jobsApplied = response.map(function(item)
    //     {
    //         console.log('jobs'+jobsApplied);
    //         return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
    //     })

    //     component.set("v.jpl" ,res1);
      
    //  });

    
     
    


    //     $A.enqueueAction(action);
    // }
        
            // let state = response.getState();
            // console.log('werttyuh' +state);
            // if(state === "SUCCESS"){
                //let res = response.getReturnValue();
              // let res1 = JSON.stringify(res);
            //  var st = response.getReturnValue();
              //var stt = JSON.stringify(st);
              //  component.set("v.jobs",st);
               // console.log('adad =====> '+ st);
                // console.log('responceee --' +res);
                // console.log('responceee --' +res1);
               


                //return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}


            
         //} );
        
})  

    

//     ShowSuccess : function(component, event , helper){
//       var eventSuccess =$A.get('e.force:showToast');
//       eventSuccess.setParams({ 
//         title:'success',
//       message :'Contact REcord created',
//       type :'success'
//     });
//     eventSuccess.fire();
// }