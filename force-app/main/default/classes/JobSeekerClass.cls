public class JobSeekerClass
{
    @AuraEnabled
    
    public static List<Job_Seeker__c> createJobSeekerRecord(String firstname,String lastname,String dtDOB,String experience, String coverLetter,String email,Integer phone,String jobLocation)
    {
        //String skills
        List<Job_Seeker__c> lstSeek=new List<Job_Seeker__c>();
        if(firstname!=NULL && lastname!='')
        {
            
            user u=new user();
         	u=[ SELECT Id FROM User WHERE Id= : UserInfo.getUserId() ]; 
            //u=[ SELECT Id,Name FROM User WHERE Name= : UserInfo.getName() ]; 
            Job_Seeker__c jSeek=new Job_Seeker__c();
            jSeek.UserId__c=u.Id;
            jSeek.Name=firstname;
            jSeek.Last_Name__c=lastname;
            jSeek.DOB__c=date.valueOf(dtDOB);
           
            jSeek.Cover_Letter__c=coverLetter;
            jSeek.Experience__c=experience;
            jSeek.Email__c=email;
            jSeek.Phone__c=phone;
            //jSeek.Job_Skills__c=skills;
            jSeek.Job_Location__c=jobLocation;
            lstSeek.add(jSeek);
        }
        
    
            if (!lstSeek.isEmpty())
            {
                insert lstSeek;
                return lstSeek;
            }
        return NULL;
    }
    
    @AuraEnabled
    public static string saveResume(Job_Seeker__c resume, string file, string fileName){
        string ResumeId;
        try{
            insert resume; 
            ResumeId = Resume.Id;
            if(file!= null || fileName!=''|| fileName!=''){
                string base64File = EncodingUtil.urlDecode(file, 'UTF-8');
                ContentVersion contentVersionRec = new ContentVersion();
                contentVersionRec.Title = fileName;
                ContentVersionRec.PathOnClient = '/' + fileName;
                ContentVersionRec.FirstPublishLocationId= Resume.Id;
                ContentVersionRec.VersionData = Encodingutil.base64Decode(base64File);
                Insert contentVersionRec;
            }
                
          }
        
        catch(Exception ex){
            system.debug('exception ===>' +ex.getMessage());
       		}
        return  ResumeId;
        }
    }