import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  @ViewChild('personForm') personForm!: NgForm; //using "!" to tell typescript that this variable might be undefined while defining
  countryDefaultValue = "India";
  aboutValue = "";
  formSubmitted = false;
  states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];

  personFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    address: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      country: ""
    },
    consent: false,
    aboutYourself: ""
  }

  /**
   *  => The setValue - overrides the whole form value if you just update a single value of the form, not the good 
   *                way to handle the update the from value
   * 
   *  => Instead we can use the patchValue of the form object from the ngForm. eg this.personForm.form.pathValue({})
   */

  suggestUserName() {
    const suggestName = "ghost_rider";
    // this.personForm.setValue({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   phoneNumber: "",
    //     address:{
    //      city:""
    //   }
    // })

    // this.personForm.form.patchValue({
    //   address: {
    //     city: "New Value"
    //   }
    // });
  }


  //Using template variable here : #personForm
  // onFormSubmit(formData: NgForm) {
  //   console.log("formData__________", formData);
  // }

  //Using @ViewChild 
  onFormSubmit() {
    this.formSubmitted = true;
    this.personFormData.firstName = this.personForm.value.firstName;
    this.personFormData.lastName = this.personForm.value.lastName;
    this.personFormData.email = this.personForm.value.email;
    this.personFormData.phoneNumber = this.personForm.value.phoneNumber;
    this.personFormData.gender = this.personForm.value.gender;
    this.personFormData.dob = this.personForm.value.dob;
    this.personFormData.address.address1 = this.personForm.value.address.address1;
    this.personFormData.address.address2 = this.personForm.value.address.address2;
    this.personFormData.address.city = this.personForm.value.address.city;
    this.personFormData.address.state = this.personForm.value.address.state;
    this.personFormData.address.zipcode = this.personForm.value.address.zipcode;
    this.personFormData.address.country = this.personForm.value.address.address1;
    this.personFormData.consent = this.personForm.value.consent;
    this.personFormData.aboutYourself = this.personForm.value.aboutYourself;

  }
}
