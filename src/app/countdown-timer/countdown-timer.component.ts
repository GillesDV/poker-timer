import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  startTime: moment.Moment = moment.utc();
  endTime: moment.Moment = moment.utc().add(10, 'minutes');
  differenceTime: string = this.CalculateTimeExpired();

  amountOfTimesBlindsHaveRaised: number = 0;

  timerFunc = setInterval(() => {
    var timerExpired: boolean = this.differenceTime == '00:00:00';
    if(timerExpired){
      this.amountOfTimesBlindsHaveRaised++;
    }
    else{
      this.startTime = moment.utc();
      this.differenceTime = this.CalculateTimeExpired();
    }
  
  }, 1000);
  

  constructor() { }

  private CalculateTimeExpired(): string {
    return moment.utc(this.endTime.diff(this.startTime)).format("HH:mm:ss");
  }

  ngOnInit() {
  }

}
