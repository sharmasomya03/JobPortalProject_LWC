import { LightningElement ,track, wire} from 'lwc';
import getCases from "@salesforce/apex/filterData.getCases";
import { NavigationMixin } from "lightning/navigation";
import { refreshApex } from "@salesforce/apex";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { getPicklistValues } from "lightning/uiObjectInfoApi";
import { getObjectInfo } from 'lightning/uiObjectInfoApi'
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import CASE_Object from "@salesforce/schema/Case";
import Job_Recruiter_Object from "@salesforce/schema/Job_Recruiter__c";
import Job_Experience from '@salesforce/schema/Job_Recruiter__c.Experience__c';
import Job_Salary from '@salesforce/schema/Job_Recruiter__c.Salary__c';
import PRIORITY_FIELD from "@salesforce/schema/Case.Priority";

export default class FilterAndSearch extends LightningElement {
    @track data;
    searchable = [];
    wiredCaseCount;
    wiredCases;

    doneTypingInterval = 0;
    //statusPickListValues;
    expPickListValues;
   // priorityPickListValues;
   salaryPickListValues;
    searchAllValue;


    // caseNumber = "";
    // accountName = "";
    // contactName = "";
    // subject = "";
    //status = null;
    experience = null;
//    priority = null;
    salary = null;


    @wire(getCases, {
        // caseNumber: "$caseNumber",
        // accountName: "$accountName",
        // contactName: "$contactName",
        // subject: "$subject",
     //   status: "$status",
       experience : "$Experience",
        salary:"$salary",
        //priority: "$priority"
    })
    wiredSObjects(result) {
        console.log("wire getting called");
        this.wiredCases = result;
        if (result.data) {
            this.searchable = this.data = result.data.map((caseObj, index) => ({
                caseData: { ...caseObj },
                index: index + 1,
                rowIndex: index
            }));
        } else if (result.error) {
            console.error("Error", error);
        }
    }

     @wire(getObjectInfo,{objectApiName: Job_Recruiter_Object})
     RecInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$RecInfo.data.defaultRecordTypeId',
        fieldApiName: Job_Experience
    })
    statusPickLists({ error, data }) {
        if (error) {
            console.error("error", error);
        } else if (data) {
            this.expPickListValues =data.values;
            console.log("expPickListValues" +expPickListValues);
        }
    }

    @wire(getPicklistValues, {
        recordTypeId: '$RecInfo.data.defaultRecordTypeId',
        fieldApiName: Job_Salary
    })
    priorityPickListPickLists({ error, data }) {
        if (error) {
            console.error("error", error);
        } else if (data) {
            this.salaryPickListValues =data.values;
        }
    }

    handleChange(event) {
        this[event.target.name] = event.target.value;
        console.log("change", this[event.target.name]);
    }

    // handleKeyUp(event) {
    //     clearTimeout(this.typingTimer);
    //     let value = event.target.value;
    //     let name = event.target.name;

    //     this.typingTimer = setTimeout(() => {
    //         this[name] = value;
    //     }, this.doneTypingInterval);
    // }

    // clearSearch() {
    //     // this.caseNumber = "";
    //     // this.accountName = "";
    //     // this.contactName = "";
    //     // this.subject = "";
    //     this.status = null;
    //     this.priority = null;
    //     this.searchable = this.data;
    //     this.searchAllValue = "";
    //     this.searchAll();
    // }

    // handleSearchAll(event) {
    //     this.searchAllValue = event.target.value;
    //     this.searchAll();
    // }

    // searchAll() {
    //     let searchStr = this.searchAllValue.toLowerCase();
    //     const regex = new RegExp(
    //         "(^" + searchStr + ")|(." + searchStr + ")|(" + searchStr + "$)"
    //     );
    //     if (searchStr.length > 2) {
    //         this.searchable = this.data.filter((item) => {
    //             if (
    //                 regex.test(
    //                     item.caseData.CaseNumber.toLowerCase() +
    //                         " " +
    //                         item.caseData.CaseNumber.toLowerCase()
    //                 ) ||
    //                 regex.test(
    //                     item.caseData.Status?.toLowerCase() +
    //                         " " +
    //                         item.caseData.Status?.toLowerCase()
    //                 ) ||
    //                 regex.test(
    //                     item.caseData.Subject?.toLowerCase() +
    //                         " " +
    //                         item.caseData.Subject?.toLowerCase()
    //                 ) ||
    //                 regex.test(
    //                     item.caseData.Account?.Name?.toLowerCase() +
    //                         " " +
    //                         item.caseData.Account?.Name?.toLowerCase()
    //                 ) ||
    //                 regex.test(
    //                     item.caseData.Contact?.Name?.toLowerCase() +
    //                         " " +
    //                         item.caseData.Contact?.Name?.toLowerCase()
    //                 ) ||
    //                 regex.test(
    //                     item.caseData.Priority?.toLowerCase() +
    //                         " " +
    //                         item.caseData.Priority?.toLowerCase()
    //                 )
    //             ) {
    //                 return item;
    //             }
    //         });
    //     } else if (this.caseNumber.length <= 2) {
    //         this.searchable = this.data;
    //     }
    //     console.log(this.searchable);
    // }

    handleNavigate(event) {
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
                actionName: "view",
                recordId: event.target.dataset.id
            }
        });
    }
}