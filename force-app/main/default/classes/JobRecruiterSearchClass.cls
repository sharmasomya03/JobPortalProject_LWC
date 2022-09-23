public class JobRecruiterSearchClass {
   @AuraEnabled
    public static List<Job_Seeker__c> jobsearch(string searchProfile){
        List<Job_Seeker__c> titleList=new List<Job_Seeker__c>();
        if(searchProfile!=NULL  && searchProfile!='')
        {
            String handleSearch = searchProfile;
            List<Job_Seeker__c> lst = [Select Id,Name,Last_Name__c,Email__c,Expected_CTC__c,Experience__c,Job_Skills__c,Job_Location__c,Phone__c FROM Job_Seeker__c WHERE Job_Skills__c  =:handleSearch];
            return lst; 
        }
        else{
            return Null;
        }
      
    }
}