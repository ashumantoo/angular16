import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;

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

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'address': new FormGroup({
        'street': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'state': new FormControl(null, Validators.required),
        'zipcode': new FormControl(null, [Validators.required]),
        'country': new FormControl(null, Validators.required),
      }),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onAddHubby() {
    const hobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobbyControl);
  }

  get hobbiesControls(): AbstractControl[] {
    // Use a type assertion within the TS file
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
}
