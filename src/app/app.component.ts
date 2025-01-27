import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isBusy } from './store/busy.selectors';
import { increaseBusy, decreaseBusy } from './store/busy.actions';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  busy$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.busy$ = this.store.select(isBusy);
  }

  triggerBusy() {
    this.store.dispatch(increaseBusy());
    setTimeout(() => {
      this.store.dispatch(decreaseBusy());
    }, 3000);
  }
}
