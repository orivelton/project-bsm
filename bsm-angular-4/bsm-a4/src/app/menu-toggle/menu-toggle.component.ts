import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent {
  constructor() {}

  menuToggle = [
    {name: 'menu', title: 'menu', href: 'menu'},
    {name: 'sobre', title: 'sobre', href: 'sobre'},
    {name: 'brand', title: 'brand', href: 'brand'},
    {name: 'mídia', title: 'mídia', href: 'mídia'},
    {name: 'esportes & educação', title: 'esportes & educação', href: 'esportes & educação'},
    {name: 'BSM no mundo', title: 'BSM no mundo', href: 'BSM no mundo'},
    {name: 'contato', title: 'contato', href: 'contato.html'},
  ];

  toggleClassBody () {
    document.querySelector('body').classList.toggle('cbp-spmenu-push-toleft');
    document.querySelector('nav.top-nav-bottom').classList.toggle('cbp-spmenu-open');
  }
}
