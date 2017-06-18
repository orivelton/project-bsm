import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuHoverComponent } from './menu-hover/menu-hover.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { ContatoComponent } from './contato/contato.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ 
    AppComponent,
    MenuHoverComponent,
    MenuToggleComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
