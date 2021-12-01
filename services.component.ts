import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  imgpath1: string;
  imgpath: string;
  imgpath2: string;
  imgpath3: string;
  imgpath4: string;
  imgpath5: string;
  imgpath6: string;
  imgpath7: string;
  imgpath8: string;
  imgpath9: string;
  imgpath10: string;
  imgpath11: string;
  imgpath12: string;
  imgpath13: string;
  imgpath14: string;
  imgpath15: string;

  constructor() {

    this.imgpath1 = '../assets/Entrance.jpg';
    this.imgpath = '../assets/int1.jpg';
    this.imgpath2 = '../assets/int2.jpg';
    this.imgpath3 = '../assets/Balcony.jpg';
    this.imgpath4 = '../assets/SuperiorRoom.jpg';
    this.imgpath5 = '../assets/DeluxeRoom.jpg';
    this.imgpath6 = '../assets/BusinessRoom.jpg';
    this.imgpath7 = '../assets/exterior.jpg';
    this.imgpath8 = '../assets/room.jpg';
    this.imgpath9 = '../assets/EventHall.jpeg';
    this.imgpath10 = '../assets/wifilogo.png';
    this.imgpath11 = '../assets/tv.png';
    this.imgpath12 = '../assets/table.png';
    this.imgpath13 = '../assets/fridge.png';
    this.imgpath14 = '../assets/ac.png';
    this.imgpath15 = '../assets/amenities1.png';
   }

  ngOnInit() {
  }

}
