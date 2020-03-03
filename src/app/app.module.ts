import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent.component';
import { ChildComponent } from './components/child.component';
import { FormsModule} from '@angular/forms';
import { PipesComponent } from './components/pipes/pipes.component';
import { registerLocaleData } from '@angular/common';
import  localeCo  from "@angular/common/locales/es-CO";
import  localeExtraCo  from "@angular/common/locales/extra/es-CO";
import { TuberiaHeroesVoladores } from './components/pipes/tuberiaHeroesVoladores';

registerLocaleData(localeCo, 'co', localeExtraCo)

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    TuberiaHeroesVoladores
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
