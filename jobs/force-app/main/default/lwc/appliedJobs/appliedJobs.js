import { LightningElement, track } from 'lwc';
import getAppliedJobs from '@salesforce/apex/jobSeekerAppliedJob.getAppliedJobs';

export default class AppliedJobs extends LightningElement {

   

   ShowJobDetails='';
   
   connectedCallback(){
        getAppliedJobs()
        .then(responce =>{
            this.ShowJobDetails= responce;
            console.log('responce is'+JSON.stringify(responce));
        })
    
        
   }

    

    }