import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent {
  constructor() {}

  menuToggle = [
    {name: 'Menu', title: 'Menu', routerLink: ''},
    {name: 'Sobre', title: 'Sobre', routerLink: ''},
    {name: 'Boutique Sponsorship', title: 'Boutique Sponsorship', routerLink: ''},
    {name: 'Mídia', title: 'Mídia', routerLink: ''},
    {name: 'Sportes & Educação', title: 'Sportes & Educação', routerLink: ''},
    {name: 'BSM no Mundo', title: 'BSM no Mundo', routerLink: ''},
    {name: 'Contato', title: 'Contato', routerLink: '/contato'}
  ];

  toggleClassBody () {
    document.querySelector('body').classList.toggle('cbp-spmenu-push-toleft');
    document.querySelector('nav.top-nav-bottom').classList.toggle('cbp-spmenu-open');
  }

  showMenuSite () {
    document.querySelector('.menu-site').classList.toggle('hidden');
  }
  
  showMenuWorlds () {
    document.querySelector('.worlds-menu').classList.toggle('hidden');
  }

  hideMenuText() {
     document.querySelector('.menu-site').setAttribute("class", 'hidden');
     document.querySelector('.worlds-menu').setAttribute("class", 'hidden');
  }

  backgroundBody (url) {
    if(url == "/contato")
      var selector = document.querySelector('body');
      selector.removeAttribute('class');
      selector.classList.add('cbp-spmenu-push');
      selector.classList.add('contato');      
  }
}
