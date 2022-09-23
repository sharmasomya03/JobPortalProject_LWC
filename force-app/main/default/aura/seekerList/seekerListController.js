({
    loadList: function(component,event)
    {
        var action= component.get("c.getSeekerInfo");
        action.setCallback(this, function(response){
             var list = response.getReturnValue();
             var lt= JSON.stringify(list);


            component.set("v.lst",list);
           // console.log('ab'+list);
             var lt= JSON.stringify(list);
            console.log('===list from ===>'+lt);



            // this.st=list.map(function(item){
            //     return {id:item["Id"]}
                
            // })

        //     var st = list.map(function(item){
        //         return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"]}
        //     })

        //     component.set("v.st",st);
        //     var opp = JSON.stringify(st);
          
        //    // console.log(JSON.stringify(st));
        //     console.log('st=====>'+opp);

        });
        
   


        $A.enqueueAction(action);
    }
    })