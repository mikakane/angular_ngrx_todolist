import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from '../top-page/top-page.component';
import { FormPageComponent } from '../form-page/form-page.component';

const routes: Routes = [
  { path: '', component: TopPageComponent },
  { path: 'form', component: FormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
