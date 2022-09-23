public class DetailPage {
  @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        System.debug('contact list'+[
            SELECT Id, FirstName, LastName, Name, Title, Phone, Email
            FROM Contact
            WHERE Email != null
            WITH SECURITY_ENFORCED
            LIMIT 10
        ]);
        return [
            SELECT Id, FirstName, LastName, Name, Title, Phone, Email
            FROM Contact
            WHERE Email != null
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
}