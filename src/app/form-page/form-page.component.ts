import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvaluatorService } from '../evaluator.service';
import { Store } from '@ngrx/store';
import { increaseBusy, decreaseBusy } from '../store/busy.actions';
import { isBusy } from '../store/busy.selectors';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  form: FormGroup;
  isBusy$: Observable<boolean>;
  concatenateResult: string | null = null;
  parityResult: boolean | null = null;

  constructor(
    private fb: FormBuilder,
    private evaluatorService: EvaluatorService,
    private store: Store<AppState>
  ) { 
    this.isBusy$ = this.store.select(isBusy);  // Observable for busy state
    // Creating the form with validations
    this.form = this.fb.group({
      red: [null, [Validators.required, Validators.min(3), Validators.max(15)]],
      green: [null, [Validators.required, Validators.min(3), Validators.max(15)]],
      blue: [null, [Validators.required, Validators.min(3), Validators.max(15)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Dispatching action to indicate the app is busy
      this.store.dispatch(increaseBusy());

      // Get form values
      const formData = this.form.value;

      // Call concatenate and parity functions from EvaluatorService
      this.evaluatorService.concatenate(formData).subscribe(result => {
        this.concatenateResult = result;  // Store the concatenated result
      });

      this.evaluatorService.parity(formData).subscribe(result => {
        this.parityResult = result;  // Store the parity result
        // Dispatch action to indicate the app is no longer busy
        this.store.dispatch(decreaseBusy());
      });
    }
  }
}
