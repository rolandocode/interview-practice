import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './Components/first-component/first-component.component';
import { StrongLettersDirective } from './Directives/strong-letters.directive';
import { HttpClientModule } from '@angular/common/http';
import { DogsComponent } from './Components/dogs/dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    StrongLettersDirective,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StrongLettersDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
