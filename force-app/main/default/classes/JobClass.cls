public class JobClass 
{
    @AuraEnabled
    public static List<Job__c> insertRecordToJob(String seekUserId,String seekRecId,Id recUserId,Id recRecordId )
    {
        List<Job__c> j=new List<Job__c>();
        Job__c jb=new Job__c();
        jb.SeekUserId__c=seekUserId;
        jb.RecUserId__c=recUserId;
        jb.SeekerName__c=seekRecId;
        jb.job_Title__c=recRecordId;
        j.add(jb);
        system.debug(j);
        insert j;
        return j;
        
    }
}