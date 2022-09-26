({
    
    handleSubmit : function(component, event, helper) {
        var navService= component.find("navService");
        let fname=component.find("txtFname").get("v.value");
        console.log(fname);
        let lname=component.find("txtLname").get("v.value");
        console.log(lname);
        let dob=component.find("dtDob").get("v.value");
        console.log(dob);
        let experience=component.find("cmbExperience").get("v.value");
        console.log(experience);
        let coverletter=component.find("txtCoverLetter").get("v.value");
        console.log(coverletter);
        let jobskills=component.find("cmbJobSkills").get("v.value");
        console.log(jobskills);
        let email=component.find("txtEmail").get("v.value");
        console.log(email);
        let gender=component.find("rdoGender").get("v.value");
        console.log(gender);
        let phone1=component.find("numberPhone").get("v.value");
        let phone=parseInt(phone1);
        console.log(phone);
        let joblocation=component.find("txtJobLoc").get("v.value");
        console.log(joblocation);
        let salary = component.find("sal").get("v.value");
        console.log(salary);
      
        // let phone=parseInt(phone1);

        var action=component.get("c.createJobSeekerRecord");
        action.setParams({"firstname":fname,"lastname":lname,"dtDOB":dob,"experience":experience,"coverLetter":coverletter,"skills":jobskills,"email":email,"gender":gender,"Phone":phone,"jobLocation":joblocation,"salary":salary});
        action.setCallback(this,function(response){
            var state = response.getState();
            console.log("State" +state);
            if(state==='SUCCESS')
            {
                var resValue=response.getReturnValue();
                var resStr=JSON.stringify(resValue);

                console.log("data ");
                console.log(resStr);
                console.log(resValue);
                //component.set("v.data",resValue);
                
                
                var pageReference= {
                type: 'standard__component',
                attributes: {
                componentName: 'c__searchJobSeeker',
               },
               state:{}

              };
             navService.navigate(pageReference);
                
            }
            
            else
            {
                console.log("no data");
            }
        });
        $A.enqueueAction(action);
        

        // console.log(fname);
        // console.log(lname);
        // console.log(gender);
        // console.log(dob);
        // console.log(coverletter);
        // console.log(experience);
        // console.log(jobskills);
        
        // console.log(joblocation);
        // console.log(email);
        // console.log(phone);
        
    }

   
})