import { LightningElement, api, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import 	cityOfDallas from '@salesforce/resourceUrl/cityOfDallas';

import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

import Job_Object from '@salesforce/schema/Job_Recruiter__c';
import Job_Name from '@salesforce/schema/Job_Recruiter__c.Name';
import Job_Company from '@salesforce/schema/Job_Recruiter__c.Company_Name__c';
import Job_Description from '@salesforce/schema/Job_Recruiter__c.Job_Description__c';
import Job_Posted_Date from '@salesforce/schema/Job_Recruiter__c.Job_Posted_Date__c';
import Job_End_Date from '@salesforce/schema/Job_Recruiter__c.Job_End_Date__c';
import Job_Experience from '@salesforce/schema/Job_Recruiter__c.Experience__c';
import Job_Email from '@salesforce/schema/Job_Recruiter__c.Email__c';
import Job_Phone  from '@salesforce/schema/Job_Recruiter__c.Phone__c';
import Job_State from '@salesforce/schema/Job_Recruiter__c.State__c';
import Job_City from '@salesforce/schema/Job_Recruiter__c.City__c';
import Job_Address  from '@salesforce/schema/Job_Recruiter__c.Address__c';

const FIELDS = [Job_Object,
                Job_Name,
                Job_Company,
                Job_Description,
                Job_Posted_Date,
                Job_End_Date,
                Job_Experience,
                Job_Email,
                Job_Phone,
                Job_State,
                Job_City,
                Job_Address];

export default class JobDetailPage extends LightningElement {
    error;
    jobDeatils;
    subscription = null;
    jobId;
    jobName;
    companyName;

    CityOfDallas1 = cityOfDallas;
    
    @wire(CurrentPageReference) pageRef;

    @wire(getRecord, { recordId : '$jobId', FIELDS})
     job;
 
     connectedCallback(){
         registerListener('pubcardselect', this.callBackMethod, this);
      
         console.log('getRecord method runs'+this.job);
     }
 
     callBackMethod(payload){
         //this.recriturValue = payload;
        this.jobId = payload.Id;
        this.jobName = payload.Name;
        this.companyName = payload.Company_Name__c;
         console.log('initial jobId from description Card='+this.jobId);
         
     }
 
     disconnectedCallback(){
         unregisterAllListeners(this);
     }


  //   @wire(getRecord, {recordId: '$jobId', fields: FIELDS})
  //   wiredRecord({ error, data }) {
  //       console.log('===wired method run===');
  //       console.log('===wired method run==='+this.jobId);
  //   // Error handling
  //   if (data) {
  //       console.log('===wired method found data===');
  //       console.log('job data--'+data);
  //    // this.error = undefined;
  //     this.jobDeatils=data;
  //   } else if (error) {
  //       console.log('job data found error--'+error.body.message);
  //     this.error = error;
  //     //this.CardId = undefined;
  //   }
  // }

  get showJob(){
    if(this.jobId!=null){
        return true;
    }else{
        return false;
    }
  }

  handleGoBack(){
    window.history.go(-1);
    var userLanguage = navigator.language;
    console.log('language prefferd is=='+userLanguage);
  }

}