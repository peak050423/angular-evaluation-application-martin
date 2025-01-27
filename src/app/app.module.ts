import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      red: [null, [Validators.required, Validators.min(3), Validators.max(15)]],
      green: [null, [Validators.required, Validators.min(3), Validators.max(15)]],
      blue: [null, [Validators.required, Validators.min(3), Validators.max(15)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value); // Placeholder for submit logic
    }
  }
}
