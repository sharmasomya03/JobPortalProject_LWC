public with sharing class AppliedJobsClass 
{

  @AuraEnabled
  public static List<Job__c> getAppliedName(string searchSeeker)
  {
    List<Job__c> title=new List<Job__c>();
    if(searchSeeker!='')
    {
            String handelSearchKey = searchSeeker;
    title=[select job_Title__r.Name,SeekerName__r.name from job__c where SeekerName__r.name =: handelSearchKey ];
    return title;
   }
}
  
}
