import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-hover',
  templateUrl: './menu-hover.component.html',
  styleUrls: ['./menu-hover.component.css']
})
export class MenuHoverComponent  {
  menuHover = [
    {title:'Boutique Sponsorship'},
    {title:'Mídia'},
    {title:'Sportes & \n Educação'}
  ];
}
