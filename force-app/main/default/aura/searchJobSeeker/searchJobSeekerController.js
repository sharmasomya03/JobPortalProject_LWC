({
   
     handleKey: function(component, event) {

       
        var searchSeeker = component.find("listsearch").get("v.value");

        console.log('COM',component);
        console.log('Event',event);
      
        var action = component.get("c.jobsearch");
        action.setParams({
            "searchJob": searchSeeker,
          
          
            
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
    } ,

    handleClick: function(component,event)
    {
        // var selectedId = event.target.dataset.id;  
        // alert(selectedId);

        // console.log("========>" + selectedId );

        let selecteditem=event.currentTarget;
        let Id=selecteditem.dataset.id;
        let recordId=selecteditem.dataset.id;
        let UserId=selecteditem.dataset.uid;
        let Name=selecteditem.dataset.name;
        let Cname=selecteditem.dataset.cname;
        let Location=selecteditem.dataset.location;
        let Email=selecteditem.dataset.email;
        let JobPostedDate=selecteditem.dataset.jobposteddate;
        let JobEndDate=selecteditem.dataset.jobenddate;
        let Salary=selecteditem.dataset.salary;
        let Experience=selecteditem.dataset.experience;
        let State=selecteditem.dataset.state;
        let  City=selecteditem.dataset.city;
        
     
        

         //component.set("v.recordId" ,recordId);
         component.set("v.UserId" ,UserId);
         component.set("v.Name" ,Name);
         component.set("v.Cname",Cname);
         component.set("v.Location",Location);
         component.set("v.Email",Email);
         component.set("v.JobPostedDate",JobPostedDate);
         component.set("v.JobEndDate",JobEndDate);
         component.set("v.Salary",Salary);
         component.set("v.Experience",Experience);
         component.set("v.State",State);
         component.set("v.City",City);
         component.set("v.recordId",recordId);
         component.set("v.Id",Id);
       

         console.log('id' +Id);

         console.log('recruiter '+UserId);
          console.log('record  '+Id);
        component.set("v.JobInfo", true);
       
        

    },

    closeModel: function (component,event)
    {
        component.set("v.JobInfo", false);
    },
    onRender : function(component,event)
    {
          // recruiter record Id
          var recRecordId=component.get("v.Id");
          component.set("v.recRecordId",recRecordId);
          console.log("recruiter record Id "+recRecordId);
  
          // recruiter user Id
  
          var recUserId=component.get("v.UserId");
          component.set("v.recUserId",recUserId);
          console.log("recruiter User Id  "+recUserId);
  
          // seeker user Id
          
          var action = component.get("c.getUserId");
          action.setCallback(this,function(response){ 
      
              var state  = response.getState();
               if(state === "SUCCESS")
               {
                var res1=response.getReturnValue();
                var tituserId = res1[0].Id;
                
                var seekUserId=tituserId;
                component.set("v.seekUserId",seekUserId);
                console.log("seeker user Id 1"+seekUserId);
               
               }
               
              });
              $A.enqueueAction(action);
  
              // seeker record Id
              
              var action1= component.get("c.getCurrentSeekerId");
              
              action1.setCallback(this,function(response){
                 
                  var state = response.getState();
                  if(state === "SUCCESS"){
                      var res= response.getReturnValue(); 
                      var rs= JSON.stringify(res);
              
                      var id1 = res[0].Id;
                  
                      var seekRecordId=id1;
                      component.set("v.seekRecordId",seekRecordId);
                      console.log("seeker record id 1"+seekRecordId);
                  }
                            
              });
              $A.enqueueAction(action1); 
    },

    handleSave: function(component, event)
    { 
      
 
        var recUserId = component.get("v.recUserId");
        var recRecordId = component.get("v.recRecordId");
        var seekUserId = component.get("v.seekUserId");
        var seekRecId = component.get("v.seekRecordId");
        var chkSaved=component.get("v.chkSaved");
        console.log("ss  "+ recUserId);
        console.log("aa "+recRecordId);
        console.log("cc "+seekUserId);
        console.log("bb "+seekRecId);
        console.log("chkSaved "+chkSaved);
       

         var action= component.get("c.insertRecordToJob");
         action.setParams({seekUserId : seekUserId,seekRecId: seekRecId, recUserId : recUserId,recRecordId: recRecordId,chkSaved:chkSaved});
           action.setCallback(this,function(response){
            var state= response.getState();
            if(state ==="SUCCESS")
            { var res11=response.getReturnValue();
                var res21=JSON.stringify(res11);
                console.log("set" +res21);

            }
        });
        $A.enqueueAction(action); 

    },

        handleApply: function(component, event)
        {
            var recUserId = component.get("v.recUserId");
            var recRecordId = component.get("v.recRecordId");
            var seekUserId = component.get("v.seekUserId");
            var seekRecId = component.get("v.seekRecordId");
            var chkSaved=false;
            console.log("ss  "+ recUserId);
            console.log("aa "+recRecordId);
            console.log("cc "+seekUserId);
            console.log("bb "+seekRecId);
            console.log("chkSaved "+chkSaved);

            var action= component.get("c.insertRecordToJob");
          action.setParams({seekUserId : seekUserId,seekRecId: seekRecId, recUserId : recUserId,recRecordId: recRecordId,chkSaved:chkSaved});
           action.setCallback(this,function(response){
            var state= response.getState();
            if(state ==="SUCCESS")
            { var res11=response.getReturnValue();
                var res21=JSON.stringify(res11);
                console.log("set" +res21);

            }
        }); 
            
        $A.enqueueAction(action); 



        }



          
          
    
          
       

      
      
    
})