import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PopUpModule } from './common/pop-up/pop-up.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    PopUpModule   
    ],
  declarations: [ 
    AppComponent, 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
