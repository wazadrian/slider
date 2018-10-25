import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
