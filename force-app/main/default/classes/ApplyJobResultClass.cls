public with sharing class ApplyJobResultClass {
    @AuraEnabled
    public static List<Job__c> getAppliedJobsResult()
    {
 		List<Job__c> apliedJob =new List<Job__c>();
        apliedJob=[SELECT job_Title__r.Name, SeekerName__r.name FROM Job__c ];
        return apliedJob;
    }
}