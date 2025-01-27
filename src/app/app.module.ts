import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { busyReducer } from './store/busy.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ busy: busyReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
