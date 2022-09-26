import { LightningElement, track } from 'lwc';
import jobsearch from '@salesforce/apex/jobSeekerSearchClass.jobsearch';
import getCurrentRecord from '@salesforce/apex/JobsDetail.getCurrentRecord';
//import adSearch from '@salesforce/apex/jobSeekerSearchClass.adSearch';
import {NavigationMixin} from 'lightning/navigation';
import insertRecordToJob from '@salesforce/apex/JobClass.insertRecordToJob';
import getUserId from '@salesforce/apex/CurrentSeekerData.getUserId';
import getCurrentSeekerId from '@salesforce/apex/RetrieveSeekerId.getCurrentSeekerId';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class JobSeekerSearch extends NavigationMixin(LightningElement) {
    HideTable = false;
    searchKey;
    @track titleList;
    sId='';
    rId='';
    advv='';
    advanc;
    exp = '';
    colorExp ;
    buttonVisible = false;
    @track advBtn= true;
   JobInfo =false;
    job;

    titId;
    titUserId;
    titName;
    titCname;
    titLocation;
    titJobEndDate;
    titJobPostedDate;
    titSalary;
    titExperience;
    titState;
    titCity;


    value = '';

    get options() {
        return [
            { label: '01', value: '1' },
            { label: '02', value: '2' },
            { label: '03', value: '3' },
            { label: '04', value: '4' },
            { label: '05', value: '5' },
        ];
    }

    get option(){
        return [
            { label: '01', value: '01' },
            { label: '02', value: '02' },
            { label: '03', value: '03' },
            { label: '04', value: '04' },
            { label: '05', value: '05' },
        ];
    }
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
    
    SearchJobHandler(event){
            //call Apex method.
      
        //this.searchKey = false;
        console.log('searchkey--'+this.searchKey);
        
        this.buttonVisible = true;
        this.advBtn = false;
        }


        handlesave(event)
        {
            
            getCurrentRecord()
            .then(data =>{
                console.log('data '+JSON.stringify(data));
                this.sId=data[0].Id;
                console.log('id is '+this.sId);
                
                this.rId=this.titleList;
                console.log('titleList '+JSON.stringify(this.rId));
                
            })
            
        }

        userId;
        id1;
        chkSaved1=true;

        handleSaveJob(event)
        {
          console.log('recruiter id '+this.titUserId);
          console.log('record Id '+this.titId);
          getUserId()
           .then(result=>{
                
        //console.log('userId '+JSON.stringify(result));
        this.userId=result[0].Id;
            console.log('seeker Id is '+this.userId);

            })
            .catch(error =>{
                console.error(error);
            });

            // get current seeker id
            getCurrentSeekerId()
            .then(res =>{
                this.id1=res[0].Id;
                console.log('seeker id is::'+this.id1);
            })
            .catch(error =>{
                console.error(error);
            });   
            
            //insertRecordToJob()
            
            insertRecordToJob({seekUserId:this.userId,seekRecId:this.id1,recUserId:this.titUserId,recRecordId:this.titId,chkSaved:this.chkSaved1})
            .then(data=>{
                console.log('data is '+JSON.stringify(data));
                this.ShowToastEvent();
            })
            .catch(error=>{
                console.error(error);

            
            });
            
        }

        chkSaved=false;
        handleApplyJob()
        {
            console.log('recruiter id '+this.titUserId);
          console.log('record Id '+this.titId);
          getUserId()
           .then(result=>{
                
        //console.log('userId '+JSON.stringify(result));
        this.userId=result[0].Id;
            console.log('seeker Id is '+this.userId);

            })
            .catch(error =>{
                console.error(error);
            });

            // get current seeker id
            getCurrentSeekerId()
            .then(res =>{
                this.id1=res[0].Id;
                console.log('seeker id is::'+this.id1);
            })
            .catch(error =>{
                console.error(error);
            });   
            //insertRecordToJob()
            insertRecordToJob({seekUserId:this.userId,seekRecId:this.id1,recUserId:this.titUserId,recRecordId:this.titId,chkSaved:this.chkSaved})
            .then(data=>{
                console.log('data is '+JSON.stringify(data));
                this.ShowToastEvent();
            })
            .catch(error=>{
                console.error(error);

            
            });
        }

        ShowToastEvent(){
            const event=new ShowToastEvent({
                title:'Success',
                message:'Job Applied successfully !!!',
                variant:'success'
             });
             this.dispatchEvent(event);
        }

        handleCancelJob(event)
        {
            this.JobInfo=false;      
            
        }



        handleClick(event)
        {
            //let titId,titName,titCname,titLocation;

           // [titId,titName,titCname,titLocation]=[event.currentTarget.dataset.id,event.currentTarget.dataset.name,event.currentTarget.dataset.cname,event.currentTarget.dataset.location];

            [this.titId,this.titUserId,this.titName,this.titCname,this.titLocation,this.titEmail,this.titJobPostedDate,this.titJobEndDate,this.titSalary,this.titExperience,this.titState,this.titCity]=
            [event.currentTarget.dataset.id,event.currentTarget.dataset.uid,event.currentTarget.dataset.name,event.currentTarget.dataset.cname,event.currentTarget.dataset.location,event.currentTarget.dataset.email,event.currentTarget.dataset.jobposteddate,event.currentTarget.dataset.jobenddate,event.currentTarget.dataset.salary,event.currentTarget.dataset.experience,event.currentTarget.dataset.state,event.currentTarget.dataset.city ];
            alert(`Selected contact - ${this.titId}; ${this.titName};${this.titUserId};${this.titCname};${this.titLocation};${this.titEmail};${this.titJobPostedDate};${this.titJobEndDate};${this.titSalary};${this.titExperience};${this.titState};${this.titCity}`);
            this.JobInfo=true;
        }
    

        handleChange(event){
         this.HideTable = true;
         this.exp = event.target.value;
         console.log("Experience",this.exp);
        adSearch({advSearch : this.exp})
         .then(result =>{
            console.log("RESSS is",JSON.stringify(result));
            this.titleList = result;
            console.log("Result is",this.advanc);
         })
         .catch(error =>{
            this.err = error;
         })
    }
    
    // handleJobDetailPage(event){
        
        
    //    this.JobInfo=true;
      
    //    adSearch({advSearch : this.exp})
    //    .then(result =>{
    //       console.log("RESSS is",JSON.stringify(result));
    //       this.titleList = result;
    //       console.log("Result is",this.titleList);
    //    })

    


        //this.JobInfo = this.titleList;
       

    //     console.log('JobInfo' +this.JobInfo);
    //     console.log('titleList' +this.titleList);


    // }

    //    var CompDetails = {
    //     componentDef : "c:profilePageJobSeeker",
    //     attributes:{

    //     }
    // };

    // var  encodedDef = btoa(JSON.stringify(CompDetails));
    
    // this[NavigationMixin.Navigate]({
    //     type: "standard__webPage",
    //     attributes: {
    //         url: "/one/one.app#" + encodedDef
    //     }
    // });
    // }

  
} // @wire(adSearch,{advSearch :this.advv})
    // wireSeeker({data, error})
    // {
    //     if(data)
    //     {
    //         this.advv= data;
    //     }
    //     else if(error)
    //     {
    //         this.advv = error;
    //     }
    // }
       
    // handleChange(event){
    //     this.advv = event.target.value;
    //     console.log("Advance",this.advv);
    //     adSearch({advSearch : this.advv})
    //      .then(result =>{
    //         this.advanc = result;
    //         console.log("Result is",this.advanc);
    //      })
    //      .catch(error =>{
    //         this.err = error;
    //      })
    // }

    

    // handleChange(event){
    //     this.exp = event.target.value;
    // }

    // @wire(adSearch,{Experience:'$exp'})
    // advanceSearch({error, data})
    // {
    //     if(data){
    //         this.colorExp = data;
    //         console.log('colorExp', this.colorExp);
    //     }
    //     else if (error)
    //     {
    //         console.log('eror:' , error)
    //     }
    // }