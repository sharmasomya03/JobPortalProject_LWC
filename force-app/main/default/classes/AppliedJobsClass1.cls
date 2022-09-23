public class AppliedJobsClass1 
{
    @AuraEnabled
    public static List<Job__c> getAppliedName1(String sStr)
    {
        List<Job__c> lst=new List<Job__c>();
        if(sStr!='')
        {
            lst=[select job_Title__r.Name,SeekerName__r.name from job__c where SeekerName__r.name LIKE :sStr ];
            
        }
        else if(sStr=='')
        {
            lst=[SELECT job_Title__r.Name, SeekerName__r.name FROM Job__c ];
        }
        return lst;
    }
    @AuraEnabled
    public  static List<Job__c> getSeekerInfo()
    {
                List<Job__c> lst2=new List<Job__c>();
       		    lst2=[SELECT job_Title__r.Name, SeekerName__r.Name, SeekerName__r.Last_Name__c, SeekerName__r.Job_Skills__c, SeekerName__r.Job_Location__c, SeekerName__r.Email__c, SeekerName__r.Experience__c, SeekerName__r.Cover_Letter__c FROM Job__c];
        		system.debug(lst2);
       		    return lst2;
        
    }
    @AuraEnabled(cacheable=true)
    public  static List<Job__c> getSeekerLst(string seekerId)
                                             
    {
                List<Job__c> lst=new List<Job__c>();
       		    lst=[SELECT job_Title__r.Name, SeekerName__r.Name, SeekerName__r.Last_Name__c, SeekerName__r.Job_Skills__c, SeekerName__r.Job_Location__c, SeekerName__r.Email__c, SeekerName__r.Experience__c, SeekerName__r.Cover_Letter__c FROM Job__c where Id=:seekerId];
        		system.debug(lst);
       		    return lst;
        
    }

    
}