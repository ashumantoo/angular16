import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-examples',
  templateUrl: './form-examples.component.html',
  styleUrls: ['./form-examples.component.css']
})
export class FormExamplesComponent {
  isTemplateFormActive = true;
  isReactiveFormActive = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  goToTemplateDrivernform() {
    this.router.navigate(['template-driven-forms'], { relativeTo: this.activatedRoute });
    this.isTemplateFormActive = true;
    this.isReactiveFormActive = false;
  }

  goToReactiveform() {
    this.router.navigateByUrl('/forms-example/reactive-forms');
    this.isTemplateFormActive = false;
    this.isReactiveFormActive = true;
  }
}
