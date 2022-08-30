import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    stdid: new FormControl('', [Validators.required, Validators.pattern('B[0-9]{7}')]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  });

  get email() {
    return this.profileForm.get('email');
  }

  get stdid() {
    return this.profileForm.get('stdid');
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(new FormControl(''));
  }

  constructor() { }

  ngOnInit(): void {
  }
}
