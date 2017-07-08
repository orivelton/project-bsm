import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleClassBody () {
    document.querySelector('body').classList.toggle('cbp-spmenu-push-toleft');
    document.querySelector('nav.top-nav-bottom').classList.toggle('cbp-spmenu-open');
  }

  showMenuWorlds () {
    document.querySelector('.worlds-menu').classList.toggle('hidden');
  }

}
