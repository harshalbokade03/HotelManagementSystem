import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgpath1: string;
  imgpath2: string;
  phone: string;
  pointer: string;
  slider2: string;
  qoute1: string;
  qoute2: string;
  icon1: string;
  icon2: string;
  iocn3: string;
  sss1: string;
  ss2: string;
  ss3: string;
  slider3: string;
  offer: string;
  social: string;
  offer1: string;
  ReadMore: string;
  constructor() {
    this.offer1 = "../assets/offer1.jpg";
    this.imgpath1 = "../assets/logo2.png";
    this.slider3 = "../assets/slider3.jpg";
    this.phone = "../assets/phone.png";
    this.pointer = "../assets/pointer.png";
    this.slider2 = "../assets/slider2.jpg";
    this.qoute1 = "../assets/qoute1.png";
    this.qoute2 = "../assets/qoute2.png";
    this.icon1 = "../assets/icon1.png";
    this.icon2 = "../assets/icon2.png";
    this.iocn3 = "../assets/iocn3.png";
    this.sss1 = "../assets/sss1.jpg";
    this.ss2 = "../assets/ss2.jpg";
    this.offer = "../assets/offer.jpg";
    this.ss3 = "../assets/ss3.jpg";
    this.social = "../assets/social.jpg;"

  }

  ngOnInit() {
  }

}
