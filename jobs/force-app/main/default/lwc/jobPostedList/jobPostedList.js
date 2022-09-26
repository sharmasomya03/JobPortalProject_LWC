import { LightningElement , track } from 'lwc';
import jobPostedList from '@salesforce/apex/jobList.jobPostedList';
import jobskList from '@salesforce/apex/jobList.jobskList';

export default class JobPostedList extends LightningElement {
 @track jobList;
 @track jobsk;
 JobInfo = false;
 idjk;
 jlId;
 jlName;
 seekname;
 
 

  connectedCallback(){
    jobPostedList()
    .then(result => {
            this.jobList = result;
            console.log('result--'+JSON.stringify(this.jobList));
     
  })
     
  }

  Click(event)
  { 
    [this.jlId,this.jlName]=
           [event.currentTarget.dataset.id,event.currentTarget.dataset.name ];
          // alert(`Selected contact - ${this.jlId}; ${this.jlName}`);  



  
        jobskList({jlId:this.jlId})
        .then(result => {
             this.jobsk = result;
             console.log('resultjobseeker--' + JSON.stringify(this.jobsk));
            // this.seekname = result.SeekerName__r.Name;
             //alert(JSON.stringify(this.seekname));
            
          })
          .catch( error=>{
            this.jobsk = null;
            });


            this.JobInfo = true;
            }

}