import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppService } from './app.service';
import { CustomHttpClient } from './customHTTPClient';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [AppService, CustomHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
