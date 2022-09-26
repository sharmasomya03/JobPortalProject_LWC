import { LightningElement,api, wire , track } from 'lwc';
import getSeekerLst from '@salesforce/apex/AppliedJobsClass1.getSeekerLst';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import FirstName from '@salesforce/schema/Job_Seeker__c.Name';
import LastName from '@salesforce/schema/Job_Seeker__c.Last_Name__c';
import JOB_SKILLS from '@salesforce/schema/Job_Seeker__c.Job_Skills__c';
import JOB_lOCATION from '@salesforce/schema/Job_Seeker__c.Job_Location__c';
import EMAIL from '@salesforce/schema/Job_Seeker__c.Email__c';
import EXPERIENCE from '@salesforce/schema/Job_Seeker__c.Experience__c';
import COVER_LETTER from '@salesforce/schema/Job_Seeker__c.Cover_Letter__c';

const fields = [FirstName,LastName , JOB_SKILLS,JOB_lOCATION,EMAIL,EXPERIENCE,COVER_LETTER];



export default class SeekerDetailOfSeekerList extends LightningElement {
            
    @track ShowDetails= false;
   
    seekUserId;
    seekName;
    seekCname;
    seekLocation;
    seekEmail
    seekJobPostedDate
    seekJobEndDate
    seekSalary
    seekExperience
    seekState
    seekCity
    @track lst;
    
    
    @wire(CurrentPageReference) pageRef;
    
    
connectedCallback(){
   

    registerListener('SeekerDetails',  this.callbackMethod, this );
   
   
}

callbackMethod(payload){
    this.seekUserId =payload;
    console.log('seekUSerId==--'+this.seekUserId);
    this.ShowDetails= true;
    getSeekerLst({seekerId:this.seekUserId})
    .then(result => {
        console.log("result is");
        console.log(JSON.stringify(result));
        this.lst=result.map(function(item){
            return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
            
        })
        console.log('list is');
        console.log(JSON.stringify(this.lst));
    })

    
}






// @wire (getSeekerLst, {seekerId :'$seekUserId'})
// wiredData(data, error){
//     console.log('$seekUserId', this.seekUserId);
//     if(data){
//         console.log("data is 2"+JSON.stringify(data));
//         console.log('$fields', this.fields);
        

//     }else if(error){
//         console.log("error"+error.message.body);
//     }
// }




//   name(){
//     return  data.FirstName;
//     return getFieldValue(this.data, FirstName)
//  }
// get LastName(){
//     return getFieldValue(this.Seekers.data, LastName)
// }
// get JOB_SKILLS(){
//     return getFieldValue(this.Seekers.data, JOB_SKILLS)
// }
// get JOB_lOCATION(){
//     return getFieldValue(this.Seekers.data, JOB_lOCATION)
// }
// get EMAIL(){
//     return getFieldValue(this.Seekers.data, EMAIL)
// }
// get EXPERIENCE(){
//     return getFieldValue(this.Seekers.data, EXPERIENCE)
// }
// get COVER_LETTER(){
//     return getFieldValue(this.Seekers.data, COVER_LETTER)
// }


}