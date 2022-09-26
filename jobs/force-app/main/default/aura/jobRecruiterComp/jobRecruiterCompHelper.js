({
    fetchPicklistValues : function( component,objDetails,recordTypeName,dependentField) {
        console.log('***********');
         // call the server side function
          var action = component.get("c.getPicklistValues");
          // pass parameters [object definition,controller field name, record type name] -
          // to server side function
          action.setParams({
            "objectName" : objDetails.sobjectType,
            "fieldName" : dependentField,
            "recordTypeName" : recordTypeName
          });

          //set callback
          action.setCallback(this, function(response)
          {
            if (response.getState() == "SUCCESS")
              {
                // Returned a Map
                 let responseObj = response.getReturnValue();
                     console.log(responseObj);
                 // Set the attribute with returned response
                    component.set("v.dependentFieldMap",responseObj);
                 
                 //Prepare a list Of Controlling Values
                  let controllerFieldValues = [];
                  
                  for (var cValue in responseObj){
                    controllerFieldValues.push ( cValue);
                  }

                  if ( controllerFieldValues.length > 0){
                    controllerFieldValues.unshift('----- None ------');
                  }

                  // set the controllerFieldValues Variable Values to Continent(Controller Picklist Field)
                   component.set("v.listControllingValues", controllerFieldValues);
              }

              else
              {
                alert('Something went wrong...')
              }
          });

          $A.enqueueAction(action);
    },

    fetchDepValues: function(component, dependentFieldOptions)
      {
        // create a empty array var for store dependent picklist values for controller field
         let dependentFields = [];
         dependentFields.push('--- None ---');

         for(let i=0; i < dependentFieldOptions.length; i++)
           {
              dependentFields.push( dependentFieldOptions[i]);
           }

           component.set("v.listDependingValues", dependentFields);
      },
})