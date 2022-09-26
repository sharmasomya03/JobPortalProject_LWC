import { LightningElement,track } from 'lwc';
import getSavedJobs from '@salesforce/apex/jobSeekerAppliedJob.getSavedJobs';
import updateSavedJobs from '@salesforce/apex/jobSeekerAppliedJob.updateSavedJobs';
import getAppliedJobs from '@salesforce/apex/jobSeekerAppliedJob.getAppliedJobs';


export default class ExamComp extends LightningElement {

    @track lst;
    connectedCallback()
    {
        getAppliedJobs()
        .then(result =>{
            console.log('result is '+JSON.stringify(result));
            this.lst=result.map(function(item){
                return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
                
            })  
            console.log('lst');
            console.log(this.lst);
        })
        .catch(error =>{
            console.error(error);
        })


        getSavedJobs()
        .then(result =>{
            console.log('result is');
            console.log(JSON.stringify(this.result));
            this.showSavedDetails=result.map(function(item){
                return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
            })
            console.log("showSavedDetails");
            console.log(this.showSavedDetails);

        })
        .catch(error =>{
            console.log(error);
        });
    }
    

    // savedJaobs logic =============================================================
    @track showSavedDetails;
    jId;
    // @api getValue;

    handleApply(event)
    {
        this.jId=event.currentTarget.dataset.id;
        console.log('id :'+this.jId);
        updateSavedJobs({jId:this.jId})
        .then(data => {
            console.log('data :');
            console.log(JSON.stringify(data));
            this.connectedCallback();

            getAppliedJobs()
            .then(result =>{
                console.log('result is');
                console.log(JSON.stringify(this.result));
                this.lst=(result.map(function(item){
                    return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
                }))

                console.log("showSavedDetails");
                console.log(this.showSavedDetails);
    
            })
            .catch(error =>{
                console.log(error);
            });
            
        })
        .catch(error => {
            console.error(error);
        });
    }
   

   
}