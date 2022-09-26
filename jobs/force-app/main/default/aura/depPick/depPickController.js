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
	}    
 })








// ({
// 	doInit : function(component, event, helper) {
// 		var action = component.get("c.getDependentPicklist");
//         action.setParams({
//             ObjectName : component.get("v.objectName"),
//             parentField : component.get("v.parentFieldAPI"),
//             childField : component.get("v.childFieldAPI")
//         });
        
//         action.setCallback(this, function(response){
//          	var status = response.getState();
//             if(status === "SUCCESS"){
//                 var pickListResponse = response.getReturnValue();
                
//                 //save response 
//                 component.set("v.pickListMap",pickListResponse.pickListMap);
//                 component.set("v.parentFieldLabel",pickListResponse.parentFieldLabel);
//                 component.set("v.childFieldLabel",pickListResponse.childFieldLabel);
                
//                 // create a empty array for store parent picklist values 
//                 var parentkeys = []; // for store all map keys 
//                 var parentField = []; // for store parent picklist value to set on lightning:select. 
                
//                 // Iterate over map and store the key
//                 for (var pickKey in pickListResponse.pickListMap) {
//                     parentkeys.push(pickKey);
//                 }
                
//                 //set the parent field value for lightning:select
//                 if (parentkeys != undefined && parentkeys.length > 0) {
//                     parentField.push('--- None ---');
//                 }
                
//                 for (var i = 0; i < parentkeys.length; i++) {
//                     parentField.push(parentkeys[i]);
//                 }  
//                 // set the parent picklist
//                 component.set("v.parentList", parentField);
                
//             }
//         });
        
//         $A.enqueueAction(action);
// 	},
    
//     parentFieldChange : function(component, event, helper) {
//     	var controllerValue = component.find("parentField").get("v.value");// We can also use event.getSource().get("v.value")
//         var pickListMap = component.get("v.pickListMap");

//         if (controllerValue != '--- None ---') {
//              //get child picklist value
//             var childValues = pickListMap[controllerValue];
//             var childValueList = [];
//             childValueList.push('--- None ---');
//             for (var i = 0; i < childValues.length; i++) {
//                 childValueList.push(childValues[i]);
//             }
//             // set the child list
//             component.set("v.childList", childValueList);
//               console.log("Child"+v.childList);
            
//             if(childValues.length > 0){
//                 component.set("v.disabledChildField" , false);  
//             }else{
//                 component.set("v.disabledChildField" , true); 
//             }
            
//         } else {
//             component.set("v.childList", ['--- None ---']);
//             component.set("v.disabledChildField" , true);
//         }
// 	}
    
// })