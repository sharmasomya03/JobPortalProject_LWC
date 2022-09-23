public class filterData {
// for adavance search
      @AuraEnabled(cacheable=true)
    public static List<Job_Recruiter__c> getCases(
       String caseNumber,
     //   String subject,
        String experience,
        String salary
      //  String accountName,
     //   String contactName
    ) {
        String query;
        
        
   
          String condition = (String.isNotBlank(caseNumber)
            ? 'CaseNumber LIKE \'' + '%' + caseNumber + '%\''
            : '');
        
         condition +=(String.isNotBlank(experience)
            ? (String.isNotBlank(condition) ? +' AND ' : '') +
              ' experience LIKE \'' +
              '%' +
              experience +
              '%\''
            : '');

        condition += (String.isNotBlank(salary)
            ? (String.isNotBlank(condition) ? +' AND ' : '') +
              ' salary LIKE \'' +
              '%' +
              salary +
              '%\''
            : '');

        System.debug('condition ' + condition);
         if (String.isNotBlank(condition)) {
            query =
                'SELECT experience__c,salary__c  FROM Job_Recruiter__c WHERE ' +
                condition +
                ' ';
        } else {
            query = 'SELECT experience__c,salary__c  FROM Job_Recruiter__c  LIMIT 200';
        }

        List<Job_Recruiter__c> records = Database.query(query);
        return records;
    
    }
}