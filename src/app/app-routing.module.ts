import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'form', component: FormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
