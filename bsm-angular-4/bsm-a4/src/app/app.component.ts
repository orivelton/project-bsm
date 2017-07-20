import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container-content',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit(){
    var selector = document.querySelector('body');
    selector.removeAttribute('class');
    selector.classList.add('cbp-spmenu-push');
    selector.classList.add('home'); 
  }
}

