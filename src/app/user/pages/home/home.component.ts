import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    "../../../../assets/bg.png",
    "../../../../assets/bg1.png",
    "../../../../assets/bg2.png"
  ];
}
