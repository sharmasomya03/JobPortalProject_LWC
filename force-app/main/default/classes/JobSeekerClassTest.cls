@isTest
public class JobSeekerClassTest {
    
    
        @isTest
   public  static void CreateSeekerRecord(){
        list<Job_Seeker__c> jsList = new list<Job_Seeker__c>();
        user u=new user();
       
        insert u;
        Job_Seeker__c j= new Job_Seeker__c();
        j.UserId__c = u.Id;
        j.Name ='arpit';
        j.Last_Name__c= 'Arpit';
        //j.DOB__c = Date.parse('04/08/2022');
        j.Cover_Letter__c ='cover';
        j.CTC_Expected__c='4 LPA';
        //j.Experience__c = '01';
        j.Email__c= 'a@g.com';
        j.Job_Location__c ='indore';
        j.Phone__c = 1234567897;
       
       // j.Job_Skills__c ='salesforce';
       /* jsList.add(j);
        insert jsList;*/
        insert j;
          Job_Seeker__c j2= [select Id,Name,Last_Name__c,DOB__c,Cover_Letter__c,CTC_Expected__c,Experience__c,Email__c,Job_Location__c,Phone__c,Job_Skills__c from Job_Seeker__c];
         
        
        test.startTest();
       
//JobSeekerClass.createJobSeekerRecord(j2.Name, j2.Last_Name__c , j2.Cover_Letter__c , j2.Email__c, j2.Phone__c, j2.Job_Location__c);
        test.stopTest();
  }


}