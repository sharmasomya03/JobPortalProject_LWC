public class CurrentSeekerData 
{
    @AuraEnabled
    public static List<User> getUserId()
    {    
        List<User> us=new List<User>();
        user u=new user();
        u=[select Id from user where Id= : UserInfo.getUserId()];
        us.add(u);
        return us;
        
    }
}