import { LightningElement ,track} from 'lwc';
import jobsearch from '@salesforce/apex/jobSeekerSearchClass.jobsearch';
import getCurrentRecord from '@salesforce/apex/JobsDetail.getCurrentRecord';

export default class AdvanceSearch extends LightningElement {

//import insertRecord from '@salesforce/apex/JobSavedRecordClass/insertRecord';

    HideTable = false;
    searchKey;
    @track titleList;
    sname='';
    rTitle='';
    // cols = [
    //     {label:'JobId', fieldName:'Id' , type:'text'},
    //     {label:'JobTitle', fieldName:'Name' , type:'text'} ,
    //     { label: 'Company Name', fieldName:'Company_Name__c', type:'text'},
    //     { label: 'Email', fieldName:'Email__c', type:'text'},
    //     { label: ' Job Post Date', fieldName:'Job_Posted_Date__c', type:'text'},
    //     {label:'Job End Date', fieldName:'Job_End_Date__c' , type:'text'} ,
    //    
    //     {label:'CTC', fieldName:'Salary__c' , type:'text'} ,
    //     {label:'Experience', fieldName:'Experience__c' , type:'text'} ,
    //     {label:'Location', fieldName:'Job_Location__c' , type:'text'},
       
    
    //     {
    //         type:'button',
    //         //onclick:{handleApply},
    //         fixedWidth: 120,
    //         typeAttributes: {
    //              label: 'Apply',
    //             name: 'Apply',
    //              variant: 'brand',
    //              onclick:'handleApply'

                
    //         }
    //     }
                 
        
              
    // ]; 
    
    
        handelSearchKey(event){
        this.searchKey=event.target.value;
        console.log('type '+typeof(this.searchKey));
        console.log('searchkey--'+this.searchKey);

    }
    
    SearchJobHandler(event){
            //call Apex method.
        console.log('searchkey--'+this.searchKey);
        jobsearch({searchJob: this.searchKey})
        .then(result => {
            if(result!==null)
            {
                this.HideTable = true;
                this.titleList = result;
                console.log('result--'+JSON.stringify(this.titleList));
            }
            else if(result===null)
            {
                this.titleList=result;
                console.log('output is'+JSON.stringify(this.titleList));
                this.HideTable = false;
                return this.titleList='Type the correct word';
            }
            
                
        })
        .catch( error=>{
            this.titleList = null;
        });
        
        }


        handlesave( event)
        {
            
            console.log(event.currentTarget.dataset.id);
            getCurrentRecord()
            .then(data =>{
                console.log('data '+JSON.stringify(data));
                this.sId=data[0].Id;
                console.log('id is '+this.sId);
                
                this.Name=event.currentTarget.dataset.id;

                console.log('titleList '+JSON.stringify(this.Name));
                

            })
           // insertRecord({})

        }
}