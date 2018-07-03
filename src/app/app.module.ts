import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JsonService } from './json.service';
import { FormsModule} from '@angular/forms';    //se agrega para poder usar la banana en la caja: [(ngModel)]
import { MapinComponent } from './mapin/mapin.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MapinComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
