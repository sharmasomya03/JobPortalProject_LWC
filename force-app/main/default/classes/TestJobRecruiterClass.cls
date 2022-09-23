@isTest
public class TestJobRecruiterClass {
    static testMethod void testcreateJobRecruiterRecord()
    {
         List<Job_Recruiter__c> jrList=new List<Job_Recruiter__c>();
           
         Job_Recruiter__c jr = new Job_Recruiter__c();
        jr.Company_Name__c = 'info';
        jr.Name = 'html';
        jr.Job_Description__c = 'starte from 2015';
        jr.Job_Posted_Date__c = date.valueOf('2022-01-03');
        jr.Job_End_Date__c = date.valueOf('2022-07-03');
        jr.Experience__c = '3';
        jr.Salary__c = '3LPA';
        jr.City__c = 'Indore';
        jr.Email__c ='a@gmail.com';
        //jr.Phone__c= 7878788748;
        jr.Address__c = 'infore,M.P.';
        jr.State__c = 'madhya pradesh';
        jrList.add(jr);
        
        insert jrList;
        test.starttest();
         JobRecruiterClass.createJobRecruiterRecord('info', 'html', 'abc','2022-01-03', '2022-07-03', 'Indore','3', '3LPA', 'Indore','madhya pradesh','g@gmail.com' , '7878548524', 'Address');
         JobRecruiterClass.createJobPostRecord('info', 'salesforce', 'xyz', '2022-01-03','2022-07-03', 'Indore', '5', '4LPA', 'Bhopal', 'madhya pradesh');
        test.stoptest();
          // system.assertEquals(jrList, jrList); 
    }
}