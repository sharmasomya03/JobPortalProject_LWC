import { LightningElement } from 'lwc';
import getValidUser from '@salesforce/apex/LoginClass.getValidUser';
import {NavigationMixin} from 'lightning/navigation';
export default class LoginComp extends NavigationMixin(LightningElement)
{
    uid='';
    boolVal;
    changeUserId(event)
    {
        this.uid=event.target.value;
    }
    handleSubmit()
    {
        getValidUser({uid:this.uid})
        .then(result =>{
            console.log('result');
            console.log(JSON.stringify(result));
            console.log(typeof(result));
            this.boolVal=result;
            if(this.boolVal == true)
            {
                console.log('boolVal');
                this[NavigationMixin.Navigate]({
                    type: 'standard__navItemPage',
                    attributes:{
            
                        apiName: 'SeekerDashBoard',
                    }
                })
                   

            }
            else
            {
                console.log('page not changed'+this.boolVal);
            }
        })
    
        .catch(error)
        {
            console.error(error);
        }


        
    }
}