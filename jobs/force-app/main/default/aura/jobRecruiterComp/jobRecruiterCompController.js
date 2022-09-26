({
	doInit : function(component, event, helper) {
        console.log("Intialized");
		var act = component.get("c.DependablePicklist");
        console.log("Intialized part two");
        act.setParams({
            strObjectName : component.get("v.getObjectName"),
            strparentField : component.get("v.getParentFieldAPI"),
            strchildField : component.get("v.getChildFieldAPI")
        });
        
        act.setCallback(this, function(response){
         	var status = response.getState();
            if(status === "SUCCESS"){
                var pickListResponse = response.getReturnValue();                
                
                component.set("v.getPickListMap",pickListResponse.pickListMap);
                component.set("v.getParentFieldLabel",pickListResponse.parentFieldLabel);
                component.set("v.getChildFieldLabel",pickListResponse.childFieldLabel);
                var pickListMap = component.get("v.getPickListMap");
               
                var parentkeys = [];
                var parentField = [];                
                
                for (var pickKey in pickListResponse.pickListMap) {
                    parentkeys.push(pickKey);
                }
               
                if (parentkeys != undefined && parentkeys.length > 0) {
                    parentField.push('--- None ---');
                }
                
                for (var i = 0; i < parentkeys.length; i++) {
                    parentField.push(parentkeys[i]);
                }  
               
                component.set("v.getParentList", parentField);
                
            }
        });
        
        $A.enqueueAction(act);
	},
    
    ObjFieldByParent : function(component, event, helper) {
    	var controllerValue = component.find("parentField").get("v.value");
        var pickListMap = component.get("v.getPickListMap");
         
        if (controllerValue != '--- None ---') {             
            var childValues = pickListMap[controllerValue];            
            var childValueList = [];
            childValueList.push('--- None ---');
            for (var i = 0; i < childValues.length; i++) {
                childValueList.push(childValues[i]);
            }
            
            component.set("v.getChildList", childValueList);
            
            if(childValues.length > 0){
                component.set("v.getDisabledChildField" , false);  
            }else{
                component.set("v.getDisabledChildField" , true); 
            }
            
        } else {
            component.set("v.getChildList", ['--- None ---']);
            component.set("v.getDisabledChildField" , true);
        }
	} , 
    
    
    handleSubmit : function(component, event, helper) {

        var navService= component.find("navService");
        let cname=component.find("txtCname").get("v.value");
        let jtitle=component.find("txtJtitle").get("v.value");
        let jdescription=component.find("txtJDescription").get("v.value");
        let jpostedate=component.find("txtJPostedDate").get("v.value");
        let jendate=component.find("txtJEndDate").get("v.value");
        let jloc=component.find("txtJLocation").get("v.value");
        let jexp=component.find("txtExp").get("v.value");
        let jsalary=component.find("txtSalary").get("v.value");
        let jphone=component.find("txtPhone").get("v.value");
        let jadd=component.find("txtAdd").get("v.value");
        let jst=component.find("parentField").get("v.value");
        let jct=component.find("childField").get("v.value");
        let em=component.find("txtem").get("v.value");
        //let email=component.find("txtEmail").get("v.value");
        //let phone=parseInt(phone1);

        var action=component.get("c.createJobRecruiterRecord");
        action.setParams({compName:cname,jobTitle:jtitle,jobDesc:jdescription,"jobPost":jpostedate,"jobEnd":jendate,"jobLoc":jloc,"exp":jexp,"salary":jsalary,"city":jct,"State":jst,"email":em,"phone":jphone,"address":jadd});
        action.setCallback(this,function(response){
            var state=response.getState();
            console.log("State"+state);
            if(state ==='SUCCESS')
            {
                var resValue=response.getReturnValue();
                var resStr=JSON.stringify(resValue);
                console.log("resStr====>"+resStr);
                component.set("v.data",resValue);

                var pageReference= {
                    type: 'standard__component',
                    attributes: {
                        componentName: 'c__recruiterSearchComp',
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

        console.log(jphone); 
        console.log(cname);
        console.log(jtitle);
        console.log(jdescription);
        console.log(jsalary);
        console.log(jpostedate);
        console.log(jendate);
        console.log(jloc);
        console.log(jadd);
        console.log(jexp);
        console.log(em);
        console.log(jst);
        console.log(jct);
        
        $A.enqueueAction(action);

   
    }

 })