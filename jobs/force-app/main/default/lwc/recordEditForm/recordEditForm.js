import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import SEEKER_OBJECT from '@salesforce/schema/Job_Seeker__c'
import COVER_LETTER from '@salesforce/schema/Job_Seeker__c.Cover_Letter__c'
import DOB from '@salesforce/schema/Job_Seeker__c.DOB__c'
//import EXPECTED_CTC from '@salesforce/schema/Job_Seeker__c.Expected_CTC__c'
import EMAIL from '@salesforce/schema/Job_Seeker__c.Email__c';
import EXPERIENCE from '@salesforce/schema/Job_Seeker__c.Experience__c';
import NAME from '@salesforce/schema/Job_Seeker__c.Name';
import GENDER from '@salesforce/schema/Job_Seeker__c.Gender__c';
import JOB_LOCATION from '@salesforce/schema/Job_Seeker__c.Job_Location__c';
import JOB_SKILLS from '@salesforce/schema/Job_Seeker__c.Job_Skills__c';
//import JOB_TITLE from '@salesforce/schema/Job_Seeker__c.Job_Title__c';
import LAST_NAME from '@salesforce/schema/Job_Seeker__c.Last_Name__c';
import PHONE from '@salesforce/schema/Job_Seeker__c.Phone__c';

export default class RecordEditForm extends LightningElement {
    objectName = SEEKER_OBJECT;
    fields={ 
        coverLetter:COVER_LETTER,
        nameField:NAME,
        lastName:LAST_NAME,
        DateOfBirth:DOB,
        phoneField:PHONE,
        emailField:EMAIL,
        expectedCTC:EXPECTED_CTC,
        experience:EXPERIENCE,
        gender:GENDER,
        jobLocation:JOB_LOCATION,
        jobSkills:JOB_SKILLS,
        //jobTitle:JOB_TITLE,
    }
    handleSave(){
        const saveFields = this.template.querySelectorAll('lightning-input-field')

        if(saveFields){ 
            const fValue ={};
            fValue[NAME.fieldApiName] = saveFields[0].value;
            fValue[LAST_NAME.fieldApiName] = saveFields[1].value;
            fValue[GENDER.fieldApiName] = saveFields[2].value;
            fValue[DOB.fieldApiName] = saveFields[3].value;
            //fValue[JOB_TITLE.fieldApiName] = saveFields[4].value;
            fValue[COVER_LETTER.fieldApiName] = saveFields[5].value;
            fValue[EXPERIENCE.fieldApiName] = saveFields[6].value;
            fValue[JOB_SKILLS.fieldApiName] = saveFields[7].value;
            fValue[EMAIL.fieldApiName] = saveFields[8].value;
            fValue[PHONE.fieldApiName] = saveFields[9].value;
            fValue[JOB_LOCATION.fieldApiName] = saveFields[10].value;

            var objRecordInput = {apiName: SEEKER_OBJECT.objectApiName, fields: fValue};

            // LDS method to create record.
            createRecord(objRecordInput).then(response => {
                console.log('record created :'+response.id);
            }).catch(error => {
                alert('Error: ' +JSON.stringify(error));
            });
        }
    }
    handleReset(){ 
        console.log('reset button clicked');
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){ 
            Array.from(inputFields).forEach(field=>{ 
                field.reset()
            })
        }
    }
}