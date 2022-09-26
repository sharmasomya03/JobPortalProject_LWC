import { LightningElement } from 'lwc';
import getProfileInfo from '@salesforce/apex/SeekerProfileInfo.getProfileInfo';

export default class ProfilePage extends LightningElement {

  showProfileDetails=''

  connectedCallback(){
    getProfileInfo()
    .then(responce =>{
        this.showProfileDetails = responce;
        console.log('responce'+JSON.stringify(responce))
    })
    

  }

    // get uppercasedFullName() {
    //     return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    // }
}