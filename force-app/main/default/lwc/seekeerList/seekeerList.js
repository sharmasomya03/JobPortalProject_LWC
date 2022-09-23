import { LightningElement,api,wire , track } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
import getSeekerInfo from '@salesforce/apex/AppliedJobsClass1.getSeekerInfo';
import getAllSeekerList from '@salesforce/apex/SeekerProfileInfo.getAllSeekerList'
//import getUserId from '@salesforce/apex/CurrentSeekerData.getUserId';
//import getCurrentSeekerId from '@salesforce/apex/RetrieveSeekerId.getCurrentSeekerId';
//import  getAllSeekerList from '@salesforce/apex/SeekerProfileInfo.getAllSeekerList';
//import {NavigationMixin} from 'lightning/navigation';

export default class SeekeerList extends LightningElement 
{


@api seekerList;
//@track seekerInfo =false;
@wire (CurrentPageReference) pageRef;
SeekUserId;
seekCname;
seekLocation;
seekEmail;
seekExperience;
@track lst;





connectedCallback(){
    getSeekerInfo()
    .then(result =>{
        console.log('result is '+JSON.stringify(result));
        this.lst=result.map(function(item){
            return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
            
        })
        
        console.log('lst');
        console.log(JSON.stringify(this.lst));
    })
    .catch(error =>{
        console.error(error);
    })
   
}
// connectedCallback(){
//     getAllSeekerList()
//     .then(result =>{
//         this.seekerList = result;
//         //this.naam = result[0].Name
//         console.log('result is '+JSON.stringify(this.naam));
//     })
//     .catch(error =>{
//         console.error(error);   
//     })
// }
handleClick(event){
    const currentValue = event.currentTarget.dataset.id;
    console.log('current id is==', currentValue);
   fireEvent(this.pageRef, 'SeekerDetails', currentValue);
}



   
}