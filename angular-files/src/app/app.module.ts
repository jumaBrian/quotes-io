import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ButtonsComponent } from './components/buttons/buttons.component';


@NgModule({
  declarations: [AppComponent, NavBarComponent, QuotesComponent, ButtonsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
