import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AllPokerChipValuesComponent } from './all-poker-chip-values/all-poker-chip-values.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    AllPokerChipValuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
