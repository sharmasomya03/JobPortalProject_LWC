public class jobSeekerAppliedJob {
    
    @AuraEnabled
    public static List<Job__c> getAppliedJobs()
    {
        user u=new user();	
        u=[ SELECT Id FROM User WHERE Id= : UserInfo.getUserId()]; 
        string varr=u.Id;
        system.debug('output3 :'+varr);
 		List<Job__c> appliedJb =new List<Job__c>();
        appliedJb=[select job_Title__r.Company_Name__c,job_Title__r.Name,SeekerName__r.name from job__c where SeekUserId__c =: varr];
        
        /*for(Job__c app : appliedJb){
            System.debug(app.job_Title__r.Company_Name__c);
            System.debug(app.job_Title__r.Name);
        }*/
        //for(Integer i=0;i<appliedJb.size();i++)
        //{
           // system.debug('value is '+appliedJb[i]);
        //}
        //system.debug(appliedJb);
        return appliedJb;
    }
    
     @AuraEnabled
    public static List<Job__c> getSavedJobs()
    {
 		List<Job__c> savedJb =new List<Job__c>();
        savedJb=[SELECT job_Title__c, SeekerName__c FROM Job__c ORDER BY CreatedDate DESC LIMIT 4];
        return savedJb;
    }
    
    
}