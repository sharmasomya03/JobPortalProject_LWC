public class SeekRecSaveClass 
{
    @AuraEnabled
    public static List<Job__c> insertRecords(String sname,String rTitle)
    {
        List<Job__c> jb=new List<Job__c>();
        if(sname!=NULL  && rTitle!=NULL)
        {
            Job__c j=new Job__c();
            j.job_Title__c=rTitle;
            j.SeekerName__c=sname;
            jb.add(j);
        }
        if(!jb.isEmpty())
        {
            insert jb;
            return jb;
        }
        return NULL;
    }
}