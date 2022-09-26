import { LightningElement } from 'lwc';

export default class JobSearch extends LightningElement {
    selectedType;
    selectRoleCard = true;
    seeker = false;
    recruiter = false;
    get searchOptions() {
        return [
            { label: 'Job Seeker', value: 'JobSeeker' },
            { label: 'Job Recruiter', value: 'JobRecruiter' },
        ];
    }

    handleSearch(event){
        this.selectedType=event.detail.value;
        if(this.selectedType=='JobSeeker'){
            this.seeker=true;
            this.selectRoleCard = false;
        }else if(this.selectedType=='JobRecruiter'){
            this.recruiter=true;
            this.selectRoleCard = false;
        }
    }
}