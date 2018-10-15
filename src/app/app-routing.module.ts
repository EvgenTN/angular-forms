import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LevelFormComponent } from './level-form/level-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/levelform', pathMatch: 'full' },
  { path: 'heroform', component: HeroFormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'levelform', component: LevelFormComponent },
  { path: '**', redirectTo: '/levelform', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
