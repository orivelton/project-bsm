import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent {
  constructor() {}

  menuToggle = [
    {name: 'menu', title: 'menu', routerLink: ''},
    {name: 'sobre', title: 'sobre', routerLink: ''},
    {name: 'brand', title: 'brand', routerLink: ''},
    {name: 'mídia', title: 'mídia', routerLink: ''},
    {name: 'esportes & educação', title: 'esportes & educação', routerLink: ''},
    {name: 'BSM no mundo', title: 'BSM no mundo', routerLink: 'BSM no mundo'},
    {name: 'contato', title: 'contato', routerLink: '/contato'},
  ];

  toggleClassBody () {
    document.querySelector('body').classList.toggle('cbp-spmenu-push-toleft');
    document.querySelector('nav.top-nav-bottom').classList.toggle('cbp-spmenu-open');
  }

  backgroundBody (url) {
    if(url == "/contato")
      var selector = document.querySelector('body');
      selector.removeAttribute('class');
      selector.classList.add('cbp-spmenu-push');
      selector.classList.add('contato');      
  }
}
