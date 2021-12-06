import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { SegundaParteComponent } from './components/segunda-parte/segunda-parte.component';
import { TerceraParteComponent } from './components/tercera-parte/tercera-parte.component';
import { CuartaParteComponent } from './components/cuarta-parte/cuarta-parte.component';
import { QuintaParteComponent } from './components/quinta-parte/quinta-parte.component';
import { SeptimaParteComponent } from './components/septima-parte/septima-parte.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    SegundaParteComponent,
    TerceraParteComponent,
    CuartaParteComponent,
    QuintaParteComponent,
    SeptimaParteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
