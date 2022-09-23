public class RetrieveSeekerData 
{
     public static List<Job_Seeker__c> getCurrentSeekerId()
    {
        user u=new user();
        u=[select Id from user where Id= : UserInfo.getUserId()];
        Job_Seeker__c js=new Job_Seeker__c();
        List<Job_Seeker__c> j=new List<Job_Seeker__c>();
        j=[select Id,UserId__c from Job_Seeker__c where UserId__c = : u.Id];
        system.debug(j);
        return j;
        
    }
}