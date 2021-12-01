import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  image1: string;
  constructor() {
    this.image1 = '../assets/signup.png'; }

  ngOnInit() {
  }

}
