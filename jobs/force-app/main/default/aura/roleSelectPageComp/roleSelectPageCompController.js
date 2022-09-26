({
    handleChange : function(component, event, helper) {
        var selectOptions= event.getParam("value");
        var navService= component.find("navService");
        if(selectOptions == "JobRecruiter")
        {
            var pageReference= {
                type: 'standard__component',
                attributes: {
                    componentName: 'c__jobRecruiterComp',
                },
               state:{}

            };
            navService.navigate(pageReference);

           
        }
        else{
            var pageReference= {
                type: 'standard__component',
                attributes: {
                    componentName: 'c__jobSeekerComp',
                },
               state:{}

            };
            navService.navigate(pageReference);

        }

    }
})