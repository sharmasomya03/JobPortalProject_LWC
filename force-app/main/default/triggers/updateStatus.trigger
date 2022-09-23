trigger updateStatus on Job_Recruiter__c (before insert) {
 list<Job_Recruiter__c> jr =  new list<Job_Recruiter__c>();
    
        for(Job_Recruiter__c jre : trigger.new)
        {
            if(jre.Job_End_Date__c == system.today())
            {
                jre.Status__c = 'closed';
            }
            
            jr.add(jre);
              
           // update jr;
            insert jr;
          
        }
    
}