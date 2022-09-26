import { LightningElement } from 'lwc';
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

export default class ProfilePageJobRecruiter extends LightningElement {
     
    ObjectApiName = Job_Object;
    jobTitle=Job_Name;
    companyName=Job_Company;
    description =Job_Description;
    jobPosted= Job_Posted_Date;
    jobEnd=Job_End_Date;
    jobEXp=Job_Experience;
    jobEmai=Job_Email;
    phone=Job_Phone;
    state=Job_State;
    city=Job_City;
   address= Job_Address;

}