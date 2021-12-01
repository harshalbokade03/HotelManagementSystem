import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    imgpath1: string;
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


  constructor() { 

    this.imgpath1 ='../assets/pizza.jpg';
      this.imgpath2= '../assets/cheese pizza.jpg';

      this.imgpath3= '../assets/veg burger.jpg';
      this.imgpath4='../assets/cheese burger.jpg';
    
      this.imgpath5= '../assets/red pasta.jpg';
      this.imgpath6= '../assets/white pasta.jpg';

      this.imgpath7= '../assets/sanwich.jpg';
      this.imgpath8= '../assets/choclate sandwich.jpg';

      this.imgpath9= '../assets/orange juice.jpg';
      this.imgpath10= '../assets/lemon juice.jpg';
      this.imgpath11= '../assets/hot coffe.jpg';
      this.imgpath12= '../assets/cold coffee.jpg';

  }

  ngOnInit() {
  }

}
