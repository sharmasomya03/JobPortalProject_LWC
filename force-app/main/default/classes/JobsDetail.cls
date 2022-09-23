public class JobsDetail 
{
    @AuraEnabled
    public static List<Job_Seeker__c> getCurrentRecord()
    {
 		List<Job_Seeker__c> js=new List<Job_Seeker__c>();
        js=[select Id,Name from Job_Seeker__c ORDER BY CreatedDate DESC LIMIT 1];
        return js;
    }
   
    
}