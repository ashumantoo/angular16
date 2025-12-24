import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ServiceExampleComponent } from './service-example/service-example.components';
import { FormExamplesComponent } from './form-examples/form-examples.component';

const routes: Routes = [
  { path: 'basic-concepts', component: BasicComponent },
  { path: 'service-example', component: ServiceExampleComponent },
  { path: 'forms-example', component: FormExamplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
