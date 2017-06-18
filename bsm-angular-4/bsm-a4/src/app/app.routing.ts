import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { MenuHoverComponent } from './menu-hover/menu-hover.component'


const APP_ROUTES: Routes = [
    {path: '', component: MenuHoverComponent, pathMatch: 'full'},
    {path: 'contato', component: ContatoComponent}
    

    
];

export const routing = RouterModule.forRoot(APP_ROUTES);    