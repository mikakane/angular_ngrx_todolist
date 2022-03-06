import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopPageComponent } from './top-page/top-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo.state';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([TodoState], {
      developmentMode: false,
    }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopPageComponent,
    FormPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
