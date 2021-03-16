import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NaviationtoolbarComponent } from './naviationtoolbar/naviationtoolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NaviationtoolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
