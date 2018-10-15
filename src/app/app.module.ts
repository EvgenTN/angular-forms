import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LevelFormComponent } from './level-form/level-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ReactiveFormComponent,
    LevelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
