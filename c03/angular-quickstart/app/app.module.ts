import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent01insert }   from './app.component01insert';
import { AppComponent02for }   from './app.component02for';
import { AppComponent021forobj }   from './app.component021forobj';
import { AppComponent03if }   from './app.component03if';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
                  // AppComponent01insert
                  // AppComponent02for
                  //   AppComponent021forobj
                    AppComponent03if
                ],
  bootstrap:    [
                    // AppComponent01insert
                    // AppComponent02for
                    // AppComponent021forobj
                    AppComponent03if
                ]
})
export class AppModule { }
