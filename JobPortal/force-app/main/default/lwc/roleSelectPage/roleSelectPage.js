import { LightningElement } from 'lwc';
import {NavigationMixin } from 'lightning/navigation';
import images from '@salesforce/resourceUrl/images';

export default class RoleSelectPage extends NavigationMixin(LightningElement) {
    pageImg = images;

    value = "";
        get roleOptions (){
            return [
                {label :'Job Seeker', value:'JobSeeker' },
                {label :'Job Recruiter', value: 'JobRecruiter'}
            ];

        }
        handleChange(event){
            this.value = event.detail.value;
            if(this.value == 'JobSeeker'){
            var CompDetails = {
                componentDef : "c:jobSeekerProfilePage1",
                attributes:{

                }
            };
      
            var  encodedDef = btoa(JSON.stringify(CompDetails));
            //this.value = event.detail.value;
          // if(this.value === 'JobSeeker'){
            this[NavigationMixin.Navigate]({
                type: "standard__webPage",
                attributes: {
                    url: "/one/one.app#" + encodedDef
                }
            });
           

           }
           else if(this.value=='JobRecruiter'){
            var CompDetails = {
                componentDef : "c:jobRecruiterProfilePage",
                attributes:{

                }
            };
      
            var  encodedDef = btoa(JSON.stringify(CompDetails));
            //this.value = event.detail.value;
          // if(this.value === 'JobSeeker'){
            this[NavigationMixin.Navigate]({
                type: "standard__webPage",
                attributes: {
                    url: "/one/one.app#" + encodedDef
                }
            });
       
        }

        } 

        }