import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
const TILE_WRAPPER_SELECTED_CLASS = "tile-wrapper selected";
const TILE_WRAPPER_UNSELECTED_CLASS = "tile-wrapper";

export default class JobDescriptionCard extends LightningElement {
    @api recruiterValue;
    @api selectedJobId;
    selectedCardId = false;

    @wire(CurrentPageReference) pageRef;

    handleDiv(event){
        event.preventDefault();
        console.log('apply button clicked=='+this.recruiterValue.Id);
        console.log('apply button clicked');
        this.selectedJobId = !this.selectedJobId;
        this.selectedCardId = true;
    // const jobselect = new CustomEvent('getjobselect', {
    // detail:  this.recruiterValue.Id
    // });
    // this.dispatchEvent(jobselect);

    fireEvent(this.pageRef, 'pubcardselect', this.recruiterValue);

    console.log('apply button clicked=='+JSON.stringify(this.recruiterValue));
    }

    get tileClass() {
        return this.selectedCardId ? TILE_WRAPPER_SELECTED_CLASS : TILE_WRAPPER_UNSELECTED_CLASS;
    }

    handleSaveIcon(){
        console.log('save bookmark clicked');
    }

}