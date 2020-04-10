import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonHomepageComponent } from './pokemon-homepage/pokemon-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHeaderComponent,
    PokemonHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
