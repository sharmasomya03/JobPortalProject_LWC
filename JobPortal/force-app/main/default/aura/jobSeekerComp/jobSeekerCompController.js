({
    
    handleSubmit : function(component, event, helper) {
        let fname=component.find("txtFname").get("v.value");
        let lname=component.find("txtLname").get("v.value");
        let gender=component.find("rdoGender").get("v.value");
        let dob=component.find("dtDob").get("v.value");
        let coverletter=component.find("txtCoverLetter").get("v.value");

        let experience=component.find("cmbExperience").get("v.value");
        let jobskills=component.find("cmbJobSkills").get("v.value");

        let joblocation=component.find("txtJobLoc").get("v.value");

        let email=component.find("txtEmail").get("v.value");
        let phone1=component.find("numberPhone").get("v.value");
        let phone=parseInt(phone1);

        var action=component.get("c.createJobSeekerRecord");
        action.setParams({"firstname":fname,"lastname":lname,"dtDOB":dob,"experience":experience,"coverLetter":coverletter,"skills":jobskills,"email":email,"gender":gender,"Phone":phone,"jobLocation":joblocation,"salary":''});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS')
            {
                var resValue=response.getReturnValue();
                var resStr=JSON.stringify("strinfify value is "+resStr);
                component.set("v.data",resValue);
            }
            else
            {
                console.log("no data");
            }
        });

        console.log(fname);
        console.log(lname);
        console.log(gender);
        console.log(dob);
        console.log(coverletter);
        console.log(experience);
        console.log(jobskills);
        
        console.log(joblocation);
        console.log(email);
        console.log(phone);
        $A.enqueueAction(action);
    }

   
})
