import { LightningElement,track } from 'lwc';
//import getRecInfo from '@salesforce/apex/SearchRecDemo.getRecInfo';
//import getSearchInfo from '@salesforce/apex/SearchRecDemo.getSearchInfo';
import getSearchRecord from '@salesforce/apex/SearchRecDemo.getSearchRecord';

export default class SearchDemo extends LightningElement 
{
    searchStr='';
    @track res;
    dataVisible = true;
    connectedCallback()
    {
        
        getSearchRecord({searchStr:this.searchStr})
        .then(result =>{
            this.res=result;
            console.log('result');
            console.log(JSON.stringify(this.res));
        })
    }

    handleSearchInput(event)
    {
        this.searchStr=event.target.value;
        console.log(this.searchStr);
    }

    handleSearchClick(event)
    {
        getSearchRecord({searchStr:this.searchStr})
        .then(data =>{
            this.res=data;
            console.log('data is');
            console.log(JSON.stringify(this.res2));
        })
    }
}