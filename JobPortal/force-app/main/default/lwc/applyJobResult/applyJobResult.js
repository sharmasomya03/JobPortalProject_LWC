import { LightningElement,track, wire } from 'lwc';
import getAppliedJobsResult from '@salesforce/apex/ApplyJobResultClass.getAppliedJobsResult';
//import getAppliedName from '@salesforce/apex/AppliedJobsClass.getAppliedName';
import getAppliedName1 from '@salesforce/apex/AppliedJobsClass1.getAppliedName1';

export default class ApplyJobResult extends LightningElement {

@track lst;
searchKey;
search;
sStr='';
//handleAppliedJobs(event)
connectedCallback()
{
    getAppliedJobsResult()
    .then(result =>{
        console.log('result is '+JSON.stringify(result));
        this.lst=result.map(function(item){
            return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
            
        })
        
        console.log('lst');
        console.log(this.lst);
    })
    .catch(error =>{
        console.error(error);
    })

}
// handelSearchKey(event)
// {
//     this.search=event.target.value;
//     getAppliedName({searchSeeker: this.search})
//     .then(result => {
//         if(result!==null)
//         {
            
//             this.lst = result;
//             console.log('result--'+JSON.stringify(this.lst));
//         }
//         else if(result===null)
//         {
//             this.lst=result;
//             console.log('output is'+JSON.stringify(this.lst));
            
//             return this.lst='Type the correct word';
//         }
        
            
//     })
//     .catch( error=>{
//         this.lst = null;
//     })  

// }

handelSearchKey(event)
{
    this.sStr=event.target.value;
  // this.searchPost=event.target.value;
}

//@track sRes;
SearchJobHandler(event)
{
    getAppliedName1({sStr:this.sStr})
    .then(data =>{
       // this.sRes=data;
        console.log('data is');
        console.log(JSON.stringify(data));
        this.lst=data.map(function(item){
            return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
        })
        console.log('lst');
        console.log(this.lst);
    })
}
// searchPost='';
// @wire(findName, {searchPost: '$searchPost'})
// post;
// SearchJobHandler(event)
// {
//     const searchPost= event.target.value;
//     this.searchPost=searchPost;
// }

}