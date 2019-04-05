import { Component, OnInit, ViewChild } from '@angular/core';
import { Blinds } from '../blinds';
import {CountdownTimerComponent} from '../countdown-timer/countdown-timer.component';
import {allBlindValues} from './../blind-values';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  @ViewChild(CountdownTimerComponent) timerComponent;  
  amountOfTimesBlindsHaveRaised: number = 0;

  startBlinds: Blinds = allBlindValues[this.amountOfTimesBlindsHaveRaised];

  constructor() { }

  ngOnInit() {
  }

}
