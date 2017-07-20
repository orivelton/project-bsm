import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  constructor() {}

  ngOnInit(){
    var selector = document.querySelector('body');
    selector.removeAttribute('class');
    selector.classList.add('cbp-spmenu-push');
    selector.classList.add('contato'); 
   }

}
