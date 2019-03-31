import {Blinds} from './blinds'
import { allPokerChipValues } from "./poker-chip-values";

//TODO: double check these values, assign new ones
export const allBlindValues: Blinds[] = [
  {smallBlind: allPokerChipValues[0].value, bigBlind: allPokerChipValues[0].value  * 2},
  {smallBlind: allPokerChipValues[1].value, bigBlind: allPokerChipValues[1].value  * 2},
  {smallBlind: allPokerChipValues[2].value, bigBlind: allPokerChipValues[2].value  * 2},
  {smallBlind: allPokerChipValues[3].value, bigBlind: allPokerChipValues[3].value  * 2},
  {smallBlind: allPokerChipValues[4].value, bigBlind: allPokerChipValues[4].value  * 2},
];