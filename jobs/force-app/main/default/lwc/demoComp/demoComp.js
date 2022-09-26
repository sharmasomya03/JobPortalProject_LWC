import { LightningElement } from 'lwc';

export default class DemoComp extends LightningElement 
{
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
    handleContactClick(event) {
        let contactId,contactName,contactTitle;
        [contactId,contactName,contactTitle] = [event.currentTarget.dataset.id,event.currentTarget.dataset.name,event.currentTarget.dataset.title];          
        alert(`Selected contact - ${contactId}; ${contactName}; ${contactTitle}`);
    }
}