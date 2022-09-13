import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile
  date: Date = new Date();

  constructor() { 
    this.profile = {
      studentid: 'B6220709',
      name: 'Wanatthapong Wongbuthong',
      gender: 'Male',
      birthyear: 2000,
      email: 'B6220709@g.sut.ac.th',
      phone: '086-2275814',
      img: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Character_Ganyu_Thumb.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }

  onClick() {
    alert(this.profile.address);
  }

}
