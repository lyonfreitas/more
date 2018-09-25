import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MyMaterialModule } from './_modules/mymaterial.module';
import { AppRoutingModule } from './app-routing.module';

import { MesaService } from './_services/mesa.service';

import { AppComponent } from './app.component';
import { MesaComponent } from './mesa/mesa.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    MesaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
   	AppRoutingModule,
    HttpClientModule
  ],
  providers: [MesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
