import { LightningElement,track } from 'lwc';
import {NavigationMixin } from 'lightning/navigation';

export default class JobSeekerDashboard extends NavigationMixin(LightningElement) {

    @track showTile = false;

   


    //it will show all the Appliedjobs 
    handleAppliedJob(){
        this.showTile =true;

    //    alert('here applied jobs will be display');

    }


    //Already Applied jobs
    handleAlreadyApplied(){
        alert('you have already applied this job');
    }

    //logic for disabling a button when already applied 
    // get disableButton(){
    //     return !(this.options && this.options.data && this.options.data.length);
    // }
    

    // on click  it will naviagte to search page
    handleSearchJob(){
        var CompDetails = {
            componentDef : "c:jobSeekerSearch",
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