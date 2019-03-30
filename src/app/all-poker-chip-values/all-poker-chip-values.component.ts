import { Component, OnInit, Input } from '@angular/core';
import { PokerChip } from '../poker-chip';
import { allPokerChipValues } from '../poker-chip-values';

@Component({
  selector: 'app-all-poker-chip-values',
  templateUrl: './all-poker-chip-values.component.html',
  styleUrls: ['./all-poker-chip-values.component.css']
})
export class AllPokerChipValuesComponent implements OnInit {
  pokerChipValues = allPokerChipValues;

  constructor() { }

  ngOnInit() {
  }

}
