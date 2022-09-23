import { LightningElement,wire} from 'lwc';
import adSearch from '@salesforce/apex/jobSeekerSearchClass.adSearch';

export default class AnotherSearch extends LightningElement {
    exp = '';
    colorExp ;
    advanc='';
    value = '';

    get options() {
        return [
            { label: 'All', value: '' },
            { label: '01', value: '1' },
            { label: '02', value: '2' },
            { label: '03', value: '3' },
            { label: '04', value: '4' },
            { label: '05', value: '5' },
        ];
    }

    // get option(){
    //     return [
    //         { label: '01', value: '01' },
    //         { label: '02', value: '02' },
    //         { label: '03', value: '03' },
    //         { label: '04', value: '04' },
    //         { label: '05', value: '05' },
    //     ];
    // }

    

    handleChange(event){
        this.exp = event.detail.value;
        console.log("Experience",this.exp);
        adSearch({advSearch : this.exp})
         .then(result =>{
            console.log("RESSS is",result);
            this.advanc = result;
            console.log("Result is",this.advanc);
         })
         .catch(error =>{
            this.err = error;
         })
    }
    }

    // @wire(adSearch,{advSearch : this.exp})
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