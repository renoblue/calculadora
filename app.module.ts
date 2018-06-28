import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrutaComponent } from './calculadora/calculadora.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    // FormsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }