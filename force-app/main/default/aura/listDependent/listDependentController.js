({
	doInit : function(component, event, helper) {
        
		var action = component.get("c.customDependablePicklist");
        action.setParams({
            strObjectName : component.get("v.getObjectName"),
            strparentField : component.get("v.getParentFieldAPI"),
            strchildField : component.get("v.getChildFieldAPI")
        });
        
        action.setCallback(this, function(response){
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
        
        $A.enqueueAction(action);
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