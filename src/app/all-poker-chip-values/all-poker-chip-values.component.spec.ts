import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokerChipValuesComponent } from './all-poker-chip-values.component';

describe('AllPokerChipValuesComponent', () => {
  let component: AllPokerChipValuesComponent;
  let fixture: ComponentFixture<AllPokerChipValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPokerChipValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPokerChipValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
