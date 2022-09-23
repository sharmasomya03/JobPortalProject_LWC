import { LightningElement ,api} from 'lwc';
import SEEKER_OBJECT from '@salesforce/schema/Job_Seeker__c'
import COVER_LETTER from '@salesforce/schema/Job_Seeker__c.Cover_Letter__c'
import DOB from '@salesforce/schema/Job_Seeker__c.DOB__c'
//import EXPECTED_CTC from '@salesforce/schema/Job_Seeker__c.Expected_CTC__c'
import CTC_Expected from '@salesforce/schema/Job_Seeker__c.CTC_Expected__c';
import EMAIL from '@salesforce/schema/Job_Seeker__c.Email__c';
import EXPERIENCE from '@salesforce/schema/Job_Seeker__c.Experience__c';
import NAME from '@salesforce/schema/Job_Seeker__c.Name';
import GENDER from '@salesforce/schema/Job_Seeker__c.Gender__c';
import JOB_LOCATION from '@salesforce/schema/Job_Seeker__c.Job_Location__c';
import JOB_SKILLS from '@salesforce/schema/Job_Seeker__c.Job_Skills__c';

import LAST_NAME from '@salesforce/schema/Job_Seeker__c.Last_Name__c';
import PHONE from '@salesforce/schema/Job_Seeker__c.Phone__c';

export default class ProfilePageJobSeeker extends LightningElement {

    objectName = SEEKER_OBJECT;
   //recordId=$recordId;
    @api recordId;
   // @api objectName;
    fields={ 
        coverLetter:COVER_LETTER,
        nameField:NAME,
        
        lastName:LAST_NAME,
        DateOfBirth:DOB,
        phoneField:PHONE,
        emailField:EMAIL,
        //expectedCTC:EXPECTED_CTC,
        experience:EXPERIENCE,
        gender:GENDER,
        jobLocation:JOB_LOCATION,
        jobSkills:JOB_SKILLS,
        
        ctcExpected:CTC_Expected,

    }


}