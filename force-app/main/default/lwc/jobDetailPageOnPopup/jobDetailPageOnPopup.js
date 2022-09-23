import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/DetailPage.getContactList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class JobDetailPageOnPopup extends LightningElement {
    contactId='';
contactName='';
contactTitle='';
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];

    jobDetail = false;

    handleContactClick(event) {
     //   let contactId,contactName,contactTitle;

        [this.contactId,this.contactName,this.contactTitle] = [event.currentTarget.dataset.id,event.currentTarget.dataset.name,event.currentTarget.dataset.title];          
        alert(`Selected contact - ${this.contactId}; ${this.contactName}; ${this.contactTitle}`);

    
  this.jobDetail =true;
    }


    //code for Detail page
    // error;  
    // columns = columns;
    // contact=[];
    // contactRecord;
    // connectedCallback()
    // {
    //     getContactList()
    //     .then((result,error) => {
    //         if (result) {
    //            this.contact=result;
    //         } else if (error) {
    //             console.error(error);
    //         }
    //     })
    // }
    // handleRowSelection = event => {
    //     var selectedRows=event.detail.selectedRows;
        
    //     console.log('selectedRows');
    //     console.log(selectedRows);
    //     this.contactRecord = selectedRows[0];
    //     if(selectedRows.length>1)
    //     {
    //         var el = this.template.querySelector('lightning-datatable');
    //         selectedRows=el.selectedRows=el.selectedRows.slice(1);
    //         this.showNotification();
    //         event.preventDefault();
    //         return;
    //     }
    // }
    // showNotification() {
    //     const event = new ShowToastEvent({
    //         title: 'Error',
    //         message: 'Only one row can be selected',
    //         variant: 'warning',
    //         mode: 'pester'
    //     });
    //     this.dispatchEvent(event);
    // }
    
    // closeModal() {
    //     // to close modal set isModalOpen tarck value as false
    //     this.contactRecord = null;
    // }

    // handleContactClick(event) {
    //         let contactId,contactName,contactTitle;
    // [contactId,contactName,contactTitle] = [event.currentTarget.dataset.id,event.currentTarget.dataset.name,event.currentTarget.dataset.title];         
    
    
    
    //        alert(`Selected contact - ${contactId}; ${contactName}; ${contactTitle}`);
    //        this.jobDetail = true;
    
    //      }
      
}