import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './services/electron.service';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
