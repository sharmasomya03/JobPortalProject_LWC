import { LightningElement, wire, track } from 'lwc';

import JOBPOST from '@salesforce/schema/Job_Recruiter__c';

import createJobPostRecord from '@salesforce/apex/JobRecruiterClass.createJobPostRecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import {getPicklistValues } from 'lightning/uiObjectInfoApi';
import State_R from '@salesforce/schema/Job_Recruiter__c.State__c';
import City_R from '@salesforce/schema/Job_Recruiter__c.City__c';




export default class JobPost extends LightningElement {
        @track isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

    // @track HideTable=false;
    compName='';
    jobTitle='';
    jobDesc='';
    jobPost='';
    jobEnd='';
    jobLoc='';
    exp='';
    ctc='';
    city='';
    state= '';
    
 
    handleCompName(event)
    {
       this.compName=event.target.value;
    }
    handleJobTitle(event)
    {
       this.jobTitle=event.target.value;
    }
    handleJobDesc(event)
    {
       this.jobDesc=event.target.value;
    }
    handleJobPostedDate(event)
    {
       this.jobPost=event.target.value;
    }
    handleJobEndDate(event)
    {
       this.jobEnd=event.target.value;
    }
    handleJobLocation(event)
    {
       this.jobLoc=event.target.value;
    }
    handleExperience(event)
    {
       this.exp=event.target.value;
    }
    handleCtc(event)
    {
       this.ctc=event.target.value;
    }
     handleCity(event)
     {
        this.city=event.target.value;
        console.log("City",this.city)
     }
 
    



 
    handleSave()
    {
      
        createJobPostRecord({compName:this.compName,jobTitle:this.jobTitle,jobDesc:this.jobDesc,jobPost:this.jobPost,jobEnd:this.jobEnd,jobLoc:this.jobLoc,exp:this.exp,ctc:this.ctc,city:this.city,State:this.state})
       .then(result => {
          console.log('result is '+JSON.stringify(result));
          this.showToast();
       })
       .catch(error =>{
          console.log('error '+JSON.stringify(error));
       })
       
       this.isShowModal = false;
    }
  showToast(){
    const event=new ShowToastEvent({
       title:'Success',
       message:'Your Job Posted Successfully  !!!',
       variant:'success'
    });
    this.dispatchEvent(event);
    
    this.handleClear();
 }
 
 //picklist 
 @wire(getObjectInfo, {objectApiName: JOBPOST })
         jobReInfo;
     
           cityOptions;
           stateOptions;
          
         @wire(getPicklistValues, {recordTypeId: '$jobReInfo.data.defaultRecordTypeId', 
         fieldApiName:City_R })
         cityFieldInfo({ data, error }) {
             if (data) this.cityFieldData = data;
         }
         @wire(getPicklistValues, {recordTypeId:'$jobReInfo.data.defaultRecordTypeId',
          fieldApiName: State_R})
         stateFieldInfo({ data, error }) {
             if (data) this.stateOptions = data.values;
             console.log("State Options", this.stateOptions);
         }
         handleStateChange(event) {
             this.state = event.target.value;
             console.log("State",this.state)
             let key = this.cityFieldData.controllerValues[event.target.value];
              console.log("City Field Data",key);
             this.cityOptions = this.cityFieldData.values.filter(opt => opt.validFor.includes(key));
             console.log("City Field Data",this.cityOptions);
         }
             handleClear()
             {   
              this.compName='';
              this.jobTitle='';
              this.jobDesc='';
              this.jobPost='';
              this.jobEnd='';
              this.jobLoc='';
              this.exp='';
              this.ctc='';
              this.city='';
              this.state= '';
              this.showModalBox=false;
             
             }
//import JOBPOST from '@salesforce/schema/Job_Recruiter__c';
//import { createRecord } from 'lightning/uiRecordApi';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent';
//import JOB_TITLE from '@salesforce/schema/Job_Recruiter__c.Name';
//import EXPERIENCE from '@salesforce/schema/Job_Recruiter__c.Experience__c';
//import JOB_LOCATION from '@salesforce/schema/Job_Recruiter__c.Job_Location__c';
//import JOB_DESCRIPTION from '@salesforce/schema/Job_Recruiter__c.Job_description__c';
//import STATE from '@salesforce/schema/Job_Recruiter__c.State__c';
//import CITY from '@salesforce/schema/Job_Recruiter__c.City__c';
//import RECRUITER_JOB_POST from '@salesforce/schema/RecruiterJobPost__c';
//    objectName = JOBPOST;
//    fields={
        
//         jobTitle:JOB_TITLE,
//         experience:EXPERIENCE,
//         jobLocation:JOB_LOCATION,
//         jobDescription :JOB_DESCRIPTION,
//         state :STATE,
//         city:CITY
//    }
  

//     @track isShowModal = false;

//     showModalBox() {  
//         this.isShowModal = true;
//     }

//     hideModalBox() {  
//         this.isShowModal = false;
//     }
    

//     handleSave(){
//       const saveFields = this.template.querySelectorAll('lightning-input-field')

//       console.log('field value=='+saveFields[0].value);
//       console.log('field value=='+saveFields[1].value);
//       console.log('field value=='+saveFields[2].value);
//       console.log('field value=='+saveFields[5].value);
//       console.log('field value=='+saveFields[4].value);

//       if(saveFields){ 
//          const fValue ={};

//          fValue[JOB_TITLE.fieldApiName] = saveFields[0].value;
//          fValue[EXPERIENCE.fieldApiName] = saveFields[1].value;
//          fValue[JOB_LOCATION.fieldApiName] = saveFields[2].value;
//          fValue[JOB_DESCRIPTION.fieldApiName] = saveFields[3].value;
//          fValue[STATE.fieldApiName] = saveFields[4].value;
//          fValue[CITY.fieldApiName] = saveFields[5].value;
   
//             var objRecordInput = {apiName:JOBPOST.objectApiName, fields: fValue};

//          // LDS method to create record.
//          createRecord(objRecordInput).then(response => {
//              console.log('record created :'+response.id);
//          }).catch(error => {
//              alert('Error: ' +JSON.stringify(error));
//          });
//      }
//    }

//    handleReset(){ 
//       console.log('reset button clicked');
//       const inputFields = this.template.querySelectorAll('lightning-input-field')
//       if(inputFields){ 
//           Array.from(inputFields).forEach(field=>{ 
//               field.reset()
//           })
//       }
//   }
      //  createJobPost({compName:this.compName,jobTitle:this.jobTitle,jobDesc:this.jobDesc,jobPost:this.jobPost,jobEnd:this.jobEnd,jobLoc:this.jobLoc,exp:this.exp,ctc:this.ctc})
      //  .then(result => {
      //     console.log('result is '+JSON.stringify(result));
      //     console.log('result '+JSON.stringify(result));
      //     const event=new ShowToastEvent({
      //        title:'Success',
      //        message:'Job successfully Posted !!!',
      //        variant:'success'
      //     });
      //     this.dispatchEvent(event);
      //  })
      //  .catch(error =>{
      //     console.log('error '+JSON.stringify(error));
      //  })
    

}