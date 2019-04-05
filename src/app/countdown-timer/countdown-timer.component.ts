import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import {allBlindValues} from './../blind-values';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  startTime: moment.Moment = moment.utc();
  endTime: moment.Moment = this.CalculateNewEndTime();
  differenceTime: string = this.CalculateTimeExpired();

  @Input() amountOfTimesBlindsHaveRaised: number;
  @Output() amountOfTimesBlindsHaveRaisedChange = new EventEmitter();
  
  maxNumberBlindsShouldRaise: number = allBlindValues.length;

  timerFunc = setInterval(() => {
    var timerExpired: boolean = this.differenceTime == '00:00:00';
    if(timerExpired){
      if(this.amountOfTimesBlindsHaveRaised >= this.maxNumberBlindsShouldRaise){
        clearInterval(this.timerFunc);
      }
      else {
        this.amountOfTimesBlindsHaveRaised++;
        this.startTime = moment.utc();
        this.endTime = this.CalculateNewEndTime();  
        this.differenceTime = this.CalculateTimeExpired()

        this.amountOfTimesBlindsHaveRaisedChange.emit(this.amountOfTimesBlindsHaveRaised);
      }
    }
    else{
      this.startTime = moment.utc();
      this.differenceTime = this.CalculateTimeExpired();
    }  
  }, 1000);
  

  constructor() { }

  private CalculateNewEndTime(): moment.Moment {
    return moment.utc().add(10, 'seconds');
  }

  private CalculateTimeExpired(): string {
    return moment.utc(this.endTime.diff(this.startTime)).format("HH:mm:ss");
  }

  ngOnInit() {
  }

}
