import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

import { NovoRegistroComponent } from './novo-registro/novo-registro.component';
import { ListarRegistroComponent } from './listar-registro/listar-registro.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [
    AppComponent,
    NovoRegistroComponent,
    ListarRegistroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
