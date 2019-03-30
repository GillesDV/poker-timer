import { Component, OnInit } from '@angular/core';
import { Blinds } from '../blinds';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  startBlinds: Blinds = {
    bigBlind: 20,
    smallBlind: 10
  };

  constructor() { }

  ngOnInit() {
  }

}
