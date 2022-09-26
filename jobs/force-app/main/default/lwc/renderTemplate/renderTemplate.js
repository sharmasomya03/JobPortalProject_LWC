import { LightningElement } from 'lwc';
import recruiterJobPageTemplate from './recruiterJobPage.html';
import seekerJobPageTemplate from './seekerJobPage.html';
import renderTemplate from './renderTemplate.html';

export default class RenderTemplate extends LightningElement {

    value = "";
    get roleOptions (){
        return [
            {label :'Job Seeker', value:'JobSeeker' },
            {label :'Job Recruiter', value: 'JobRecruiter'}
        ];

    }
    //selected = null;
    render(){
        return this.value === 'JobSeeker' ? seekerJobPageTemplate:
         this.value === 'JobRecruiter' ?   recruiterJobPageTemplate :
         renderTemplate
    }

    handleChange(event){
        this.value = event.detail.value;
    }
    // handleClick(event){
    //     this.selected = event.target.label;
    // }
    submitHandler(event){
        if(event.target.label === 'Sign In'){
            console.log("Sign In Successfully")
        } else if (event.target.label === 'Sign Up'){
            console.log("Sign Up Successfully")
        } else {

        }
    }
}