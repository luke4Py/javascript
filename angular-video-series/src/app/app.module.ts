import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { ButtonComponentComponent } from './button-component/button-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TextComponentComponent,
    ButtonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
