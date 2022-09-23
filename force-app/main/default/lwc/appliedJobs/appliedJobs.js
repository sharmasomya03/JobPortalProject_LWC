import { LightningElement, track,wire } from 'lwc';
import getAppliedJobs from '@salesforce/apex/jobSeekerAppliedJob.getAppliedJobs';

export default class AppliedJobs extends LightningElement {



@track lst;
connectedCallback()
{
    getAppliedJobs()
    .then(result =>{
        console.log('result iss '+JSON.stringify(result));
        this.lst=result.map(function(item){
            return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
            
        })  
        console.log('lst');
        console.log(this.lst);
    })
    .catch(error =>{
        console.error(error);
    })
}

// @wire(getAppliedJobs)
// wireAppliedJobs({data,error}){
//     if(data){
//         console.log("data is:");
//         console.log(data);
//         this.connectedCallback();
//     }
//     else if(error){
//         console.error(error);
//     }
// }
  

    }