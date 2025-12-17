import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { LifecycleMethodsComponent } from './lifecycle-methods/lifecycle-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    DataBindingComponent,
    LifecycleMethodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
