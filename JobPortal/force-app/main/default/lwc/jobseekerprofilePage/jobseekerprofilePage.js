import { LightningElement } from 'lwc';

export default class ProfilePage extends LightningElement {

    firstname = '';
    lastname = '';
    JobTitle = '';
    Experience ='';
    JobSkills = '';
    Phone = '';
    handlefirstName(event){
    this.firstname=event.target.value;
    }

    handleLastName(event){
        this.lastname=event.target.value;
    }

    handleJobTitle(event){
        this.JobTitle= event.target.value;
    }

    handleExperience(event){
        this.Experience = event.target.value;
    }

    handleJobSkills(event){
        this.JobSkills = event.target.value;
    }

    handlePhone(event){
        this.Phone =event.target.value;
    }


}