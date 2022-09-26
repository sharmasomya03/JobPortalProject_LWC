import { LightningElement, wire } from 'lwc';
import createJobSeekerRecord from '@salesforce/apex/JobSeekerClass.createJobSeekerRecord';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import jobSeekerObj from '@salesforce/schema/Job_Seeker__c';
import jobSkills_c from '@salesforce/schema/Job_Seeker__c.Job_Skills__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin } from 'lightning/navigation';

export default class JobSeekerProfilePage1 extends NavigationMixin(LightningElement) {
    rdoGender='';
    get options()
    {
        return [
            {label:'Male',value:'male'},
            {label:'Female',value:'female'}
        ];
    }
    value='';

    value = '';

    
    get option() {
        return [
            { label: '01', value: '1' },
            { label: '02', value: '2' },
            { label: '03', value: '3' },
            { label: '04', value: '4' },
            { label: '05', value: '5' },
        ];
    }

    get optio(){
        return [
            { label: '01', value: '1LPA' },
            { label: '02', value: '2LPA' },
            { label: '03', value: '3LPA' },
            { label: '04', value: '4LPA' },
            { label: '05', value: '5LPA' },
            { label: '06', value: '6LPA' },
            { label: '07', value: '7LPA' },
            { label: '08', value: '8LPA' },
            { label: '09', value: '9LPA' },
            { label: '10', value: '10LPA' },
            { label: '11', value: '11LPA' },
            { label: '12', value: '12LPA' },
            { label: '13', value: '13LPA' },
            { label: '14', value: '14LPA' },
            { label: '15', value: '15LPA' },
  
        ];
    }
    // get options()
    // {
    //     return 
    // }


    firstname = '';
    lastname = '';
    dtDOB;
    coverLetter='';
    experience;
    email='';
    //JobSkills = '';
    phone;
    jobLocation='';
    skills = '';
    exp = '';

    // handleChange(event){
    //     this.exp = event.target.value;
    //     console.log("Experience is",this.exp);
    // }
    handleGender(event)
    {
        this.value=event.target.value;
        console.log('value is '+this.value);
    }

    handleFirstName(event){
    this.firstname=event.target.value;
    let a=this.firstname;
    console.log('first name'+a);

    }

    handleLastName(event){
        this.lastname=event.target.value;
        let b=this.lastname;
        console.log('last name'+b);

    }
    handleDOB(event)
    {
        this.dtDOB=event.target.value;
        let c=this.dtDOB;
        console.log('DOB type'+typeof(c));
        console.log('DOB'+c);

    }

    // handleJobTitle(event){
    //     this.JobTitle= event.target.value;
    //     let d=this.JobTitle;
    //     console.log('JobTitle type'+typeof(d));
    //     console.log('JobTitle'+c);

    // }
    handleCoverLetter(event)
    {
        this.coverLetter=event.target.value;
        let e=this.coverLetter;
        console.log('cover type'+typeof(e));
        console.log('DOB'+e);

    }

    handleExperience(event){
        this.Experience = event.target.value;
        console.log("Experience:",this.Experience);
        // var currExp=parseFloat(this.Experience);
        // let f=currExp;
        // console.log('exp type'+typeof(f));
        // console.log('exp'+f);

    }
    handleEmail(event)
    {
        this.email=event.target.value;
        let g=this.email;
        console.log('email type'+typeof(g));
        console.log('email'+g);

    }

    // handleJobSkills(event){
    //     this.JobSkills = event.target.value;
        
    // }

    handlePhone(event){
        this.Phone =event.target.value;
        console.log("Phone",this.Phone);
        // let h=this.Phone;
        // console.log('phone type'+typeof(h));
        // console.log('phone'+h);

        
    }
    handleJobLocation(event)
    {
        this.jobLocation=event.target.value;
        let i=this.jobLocation;
        console.log('JobLocation type'+typeof(i));
        console.log('JobLocation'+i);

    }
    handleChangeSkills(event)
    {
        this.skills = event.detail.value;

    }

    handleSalaryChange(event)
   {
      this.salary=event.target.value;
      console.log("salary is",this.salary);
   }
   
    @wire(getObjectInfo, { objectApiName: jobSeekerObj })
                seekerInfo;

    @wire(getPicklistValues,{
        recordTypeId:'$seekerInfo.data.defaultRecordTypeId',
        fieldApiName: jobSkills_c})
        jobSkills;
    
    
    handleSubmit(event){
        createJobSeekerRecord({firstname:this.firstname,lastname:this.lastname,dtDOB:this.dtDOB,coverLetter:this.coverLetter,experience:this.Experience,email:this.email,Phone:this.Phone,jobLocation:this.jobLocation,skills:this.skills,gender:this.value,salary:this.salary})
        .then(result => {
            console.log('result '+JSON.stringify(result)); 
             if(result!=null){
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
            this.showToast();
        }
        else{
            console.error('error '+JSON.stringify(error));
        }
        })
    
        .catch(error =>{
            console.error('error '+JSON.stringify(error));
            alert ("showing error")
        })



       
 // custom validation
        // let searchfname = this.template.querySelector(".fname");

        // let searchvalue = searchfname.value;

        // if(!searchvalue)
        // {
        //     searchfname.setCustomValidity("Name value is required");
        // }
        // else{
        //     searchfname.setCustomValidity("");
        // }
        // searchfname.reportValidity();

        
    
    
        // navigation
        
         
            this.handleReset();


    
        }
        showToast(){
            const event=new ShowToastEvent({
               title:'Success',
               message:'Record successfully created !!!',
               variant:'success'
            });
            this.dispatchEvent(event);
        }
    handleReset(event)
    {
        this.firstname = '';
        this.lastname = '';
        this.dtDOB='';
        this.coverLetter='';
        this.experience='';
        this.email='';
        //JobSkills = '';
        this.Phone='';
        this.jobLocation='';
        this.skills = '';
        this.exp = '';
    }


}