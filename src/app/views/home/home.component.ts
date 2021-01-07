import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  zerarCache(){
    window.localStorage.setItem('fornos', "false");
    window.localStorage.setItem('chapas', "false");
    window.localStorage.setItem('fogoes', "false");
  }

  


 

}
