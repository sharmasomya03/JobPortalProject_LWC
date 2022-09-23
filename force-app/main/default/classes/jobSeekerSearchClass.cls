public with sharing class jobSeekerSearchClass 
{
    @AuraEnabled
    public static List<Job_Recruiter__c> jobsearch(string searchJob)
    {
        List<Job_Recruiter__c> titleList=new List<Job_Recruiter__c>();
        if(searchJob!=NULL  && searchJob!='')
        {
        String handelSearchKey = searchJob + '%';
            
        list<Job_Recruiter__c> titleLis= [select Id, Job_Location__c,  Name, UserId__c, Company_Name__c, Email__c, Job_Posted_Date__c,Job_End_Date__c,Salary__c, Experience__c,State__c,City__c from Job_Recruiter__c where Name like:handelSearchKey ];
            return titleLis;
        }
        else
        {
            //titleList=NULL;
           // return titleList;
            return Null;
        }
           
    } 
    
    // Advanced Search
    @AuraEnabled
    public static List<Job_Recruiter__c> adSalExp(String exp,String sal)
    {
        List<Job_Recruiter__c> rec=new List<Job_Recruiter__c>();
        if(exp!=null && sal!=null)
        {
            rec=[select Id,Job_Location__c,  Name, Company_Name__c, Email__c, Job_Posted_Date__c, Job_End_Date__c, Salary__c, Experience__c from Job_Recruiter__c where salary__c =:sal AND experience__c =:exp];
            System.debug(rec);
            return rec;
            
        }
        else
        {
            return null;
         
        }
       
       
    }

    
    
}