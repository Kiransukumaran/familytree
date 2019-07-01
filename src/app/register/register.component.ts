import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private fb: FormBuilder) { }

    profileForm = this.fb.group({
        name: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        email: ['', Validators.required],
        gender: ['', Validators.required],
        dob: [''],
        fatherName: [''],
        motherName: [''],
        profession: [''],

        address: this.fb.group({
            houseName: [''],
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        }),

        maritialStatus: [''],
        maritialDetails: this.fb.group({
            partnerName: [''],
            partnerEmail: [''],
            partnerMobileNumber: ['']
        }),

        referer: this.fb.group({
            refererName: [''],
            refererMobileNumber: [''],
            refererRelationship: ['']
        })


    });

    ngOnInit() {
    }

    onSubmit() {
        console.warn(this.profileForm.value.gender);
    }

}
