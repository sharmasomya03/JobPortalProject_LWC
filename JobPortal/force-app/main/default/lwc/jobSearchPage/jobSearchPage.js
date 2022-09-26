import { LightningElement, wire, track } from 'lwc';
import searchJobs from '@salesforce/apex/jobPortalHandler.searchJobs';
// import jobMC from '@salesforce/messageChannel/JobMessageChannel__c';
// import { MessageContext, publish } from 'lightning/messageService';

// import { getRecord } from 'lightning/uiRecordApi';
// import Job_Object from '@salesforce/schema/Job_Recruiter__c';
// import Job_Name from '@salesforce/schema/Job_Recruiter__c.Name';
// import Job_Company from '@salesforce/schema/Job_Recruiter__c.Company_Name__c';
// import Job_Description from '@salesforce/schema/Job_Recruiter__c.Job_Description__c';
// import Job_Posted_Date from '@salesforce/schema/Job_Recruiter__c.Job_Posted_Date__c';
// import Job_End_Date from '@salesforce/schema/Job_Recruiter__c.Job_End_Date__c';
// import Job_Experience from '@salesforce/schema/Job_Recruiter__c.Experience__c';
// import Job_Email from '@salesforce/schema/Job_Recruiter__c.Email__c';
// import Job_Phone  from '@salesforce/schema/Job_Recruiter__c.Phone__c';
// import Job_State from '@salesforce/schema/Job_Recruiter__c.State__c';
// import Job_City from '@salesforce/schema/Job_Recruiter__c.City__c';
// import Job_Address  from '@salesforce/schema/Job_Recruiter__c.Address__c';


export default class JobSearchPage extends LightningElement {
    searchedKey='';
    selectedJobId;
    @track recruiters;
    error;

    get searchOptions() {
      return [
          { label: 'Salesforce', value: 'Salesforce' },
          { label: 'Java', value: 'Java' },
      ];
    }

    handleSearch(event){
      this.searchedKey = event.detail.value;
    }

    //  // wired message context
    //  @wire(MessageContext)
    //  messageContext;

    @wire(searchJobs,{searchKey:'$searchedKey'})
    wiredJobs(result) {
        this.recruiters = result;
        console.log('recruiters---'+this.recruiters);
        if(result.error){
          this.error = result.error;
          this.recruiters = undefined;
        }
    }

    handleAvatar(){
      console.log('avatar clicked');
    }

    handleMyJobs(){
      console.log('My Jobs clicked');
    }

    // updateSelectedCard(event){
    //   this.selectedJobId = event.detail;
    //   this.sendMessageService(this.selectedJobId);
    //   console.log('job Id from event'+this.selectedJobId);
    // }    

    // sendMessageService(jobId) { 
    //   // explicitly pass jobId to the parameter recordId
    //   console.log('job Id from publish method'+jobId);
    //   publish(this.messageContext, jobMC, { recordId : jobId });
    // }
}