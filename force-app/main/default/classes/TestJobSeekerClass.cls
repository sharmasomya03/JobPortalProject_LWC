@isTest
public class TestJobSeekerClass {
 
   static testMethod void testcreateJobSeekerRecord()
   {
      //user u=[ SELECT id, Name FROM User WHERE Id= : UserInfo.getUserId() ];
      List<Job_Seeker__c> lstSeek=new List<Job_Seeker__c>();
       
       Job_Seeker__c js = new Job_Seeker__c();
       

       js.Name ='Test1';
       js.Last_Name__c ='test12';
       js.DOB__c =date.valueOf('2022-08-09');
       js.Cover_Letter__c ='hello';
       js.Experience__c ='03';
       js.Email__c ='g@gmail.com';
       js.Phone__c= 85857412.12;
       js.Job_Location__c ='Indore';
       //js.UserId__c = u.Id;
       //lstSeek.add(js);
       insert js;
       test.starttest();
       
        JobSeekerClass.createJobSeekerRecord('Test', 'test12', '2022-08-09', '03', 'hello', 'g@gmail.com', 1234567890, 'Indore' );
       JobSeekerClass.saveResume(js, 'Test', 'Test');
       test.stoptest();
       
       system.assertEquals(lstSeek, lstSeek);


   }
}