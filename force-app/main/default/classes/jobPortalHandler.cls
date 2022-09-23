public class jobPortalHandler {

    @AuraEnabled(Cacheable=true)
    public static List<Job_Recruiter__c> searchJobs(string searchKey)
    { 
        string sKey = searchKey;
        if(sKey==null){
            list<Job_Recruiter__c> lst = [select Id,Job_Location__c,  Name, Company_Name__c,Email__c, Job_Posted_Date__c,Job_End_Date__c from Job_Recruiter__c];
            system.debug(lst);
            return[select Id,Job_Location__c,  Name, Company_Name__c,Email__c, Job_Posted_Date__c,Job_End_Date__c from Job_Recruiter__c];
        }else if(searchKey!=null){
            String handelSearchKey = '%' + searchKey + '%';
             list<Job_Recruiter__c> liist = [select Id,Job_Location__c,  Name, Company_Name__c,Email__c, Job_Posted_Date__c,Job_End_Date__c from Job_Recruiter__c where Name like:handelSearchKey];
            system.debug(liist);
        
        List<Job_Recruiter__c> titleList= [select Id,Job_Location__c,  Name, Company_Name__c,Email__c, Job_Posted_Date__c,Job_End_Date__c from Job_Recruiter__c where Name like:handelSearchKey ];
            return titleList;
        }else{
            return null;
        }
    } 
}