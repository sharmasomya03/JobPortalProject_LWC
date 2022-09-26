import { LightningElement } from 'lwc';
import getProfileInfo from '@salesforce/apex/SeekerProfileInfo.getProfileInfo';
import {NavigationMixin} from 'lightning/navigation';
export default class ProfilePage extends NavigationMixin(LightningElement) {

  showProfileDetails=''

  connectedCallback(){
    getProfileInfo()
    .then(responce =>{
        this.showProfileDetails = responce;
        console.log('responce'+JSON.stringify(responce))
    })
    

  }

  handleSearch(){
    var CompDetails = {
      componentDef : "c:jobSeekerSearch",
      attributes:{


      }
  };

  var  encodedDef = btoa(JSON.stringify(CompDetails));
  
  this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
          url: "/one/one.app#" + encodedDef
      }
  });
  }
  }

    // get uppercasedFullName() {
    //     return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    // }
