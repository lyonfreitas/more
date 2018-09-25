import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyMaterialModule } from './_modules/mymaterial.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MesaComponent } from './mesa/mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
   	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
