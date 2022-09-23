import { LightningElement ,track} from 'lwc';
import jobsearch from '@salesforce/apex/JobRecruiterSearchClass.jobsearch';

export default class JobRecruiterSearch extends LightningElement {

    searchJob;
    search;
    @track titleList;
    HideTable = false;

    handleSearch(event){
        this.search=event.target.value;
        jobsearch({searchProfile: this.search})
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
}