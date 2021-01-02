import { Component, OnInit, SecurityContext } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  QuantidadeCarrinho: number = 0;

  constructor() { }


  ngOnInit(): void {
    
  }



  

}
