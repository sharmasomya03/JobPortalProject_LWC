import { LightningElement } from 'lwc';
// import NavigationMixin from 'lighnting/navigation';
import render from './htmlExt1.html';
import render1 from './htmlExt2.html';
import  render3 from './renderExample.html';





export default class RenderExample extends LightningElement {
    value ='';

    roleOptions=[
       { label:"JobSeeker", value:"JobSeeker"},
        { label :"JobRecruiter", value : "JobRecruiter"}
    ]
    render(){
       return this.value === 'JobSeeker' ? render:
        this.value === 'JobRecruiter'   ? render1:
        render3;
     }
    handleChange(event){
        this.value = event.target.value;
        if(this.value = 'JobSeeker'){
        var componentDetails ={
            compdef : "c/profilePageJobSeeker",
            attributes : {

            }
        };
        var encodedDef = btoa(JSON.stringify(componentDetails));
        this[NavigationMixin.Navigate]({
            type :"Standard__webPage",
            attributes:{
                URL:"one/one.app#"+encodedDef
            }
        })


    }
    else if (this.value='JobRecruiter') {
   var componentDetails ={
    componentDef : "c:profilePageJobRecruiter",
        attributes:{

        }
   }
   var encodedDef = btoa(JSON.stringify(componentDetails));
        this[NavigationMixin.Navigate]({
            type :"Standard__webPage",
            attributes:{
                URL:"one/one.app#"+encodedDef
            }
        })

    }
}

}