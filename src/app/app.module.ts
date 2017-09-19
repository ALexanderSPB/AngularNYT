import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { ServicesModule } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
