import { LightningElement,track } from 'lwc';
import getAppliedJobs from '@salesforce/apex/jobSeekerAppliedJob.getSavedJobs';
import updateSavedJobs from '@salesforce/apex/jobSeekerAppliedJob.updateSavedJobs';
export default class SavedJobs extends LightningElement {

    @track showSavedDetails;
    jId;

   connectedCallback(){
        getAppliedJobs()
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

    handleApply(event)
    {
        this.jId=event.currentTarget.dataset.id;
        console.log('id :'+this.jId);
        updateSavedJobs({jId:this.jId})
        .then(data => {
            console.log('data :');
            console.log(JSON.stringify(data));
            this.connectedCallback();
            
        })
        .catch(error => {
            console.error(error);
        });
    }

    
}