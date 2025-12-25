import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningComponent } from './basic/warning/warning.component';
import { SuccessComponent } from './basic/success/success.component';
import { DataBindingComponent } from './basic/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { LifecycleMethodsComponent } from './basic/lifecycle-methods/lifecycle-methods.component';
import { ParentComponentComponent } from './basic/input-output/parent-component/parent-component.component';
import { ChildComponentComponent } from './basic/input-output/child-component/child-component.component';
import { ActiveUsersComponent } from './service-example/active-users/active-users.component';
import { InactiveUsersComponent } from './service-example/inactive-users/inactive-users.component';
import { CounterService } from './service-example/counter.service';
import { BasicComponent } from './basic/basic.component';
import { ServiceExampleComponent } from './service-example/service-example.components';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { TemplateDrivenFormComponent } from './form-examples/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form-examples/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    DataBindingComponent,
    LifecycleMethodsComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ServiceExampleComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    BasicComponent,
    FormExamplesComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //FormModule required to import, to work with the form otherwise it will not work
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
