public with sharing class SeekerProfileInfo {
   
        @AuraEnabled
        public static list<user> getProfileInfo()
        {
            list<user> lstUser = new list<user>();
            user u = new user();
            u=[ SELECT Name,  Email  FROM User WHERE Id= : UserInfo.getUserId() ]; 
            lstUser.add(u);
            return lstUser;
            
           /*  List<Job_Seeker__c> profileInfo =new List<Job_Seeker__c>();
            profileInfo = [SELECT Name , Last_Name__c, Experience__c,  Email__c FROM Job_Seeker__c ORDER BY CreatedDate DESC LIMIT 1];
            return profileInfo;*/
          //  system.debug(u);
        }

    
}