import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ServiceExampleComponent } from './service-example/service-example.components';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { TemplateDrivenFormComponent } from './form-examples/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form-examples/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'basic-concepts', component: BasicComponent },
  { path: 'service-example', component: ServiceExampleComponent },
  {
    path: 'forms-example', component: FormExamplesComponent,
    children: [
      { path: 'template-driven-forms', component: TemplateDrivenFormComponent },
      { path: 'reactive-forms', component: ReactiveFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
