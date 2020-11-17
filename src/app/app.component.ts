import { Component } from '@angular/core';
import { OperandEnums } from 'src/operands';
import { CalculatorService } from 'src/services/calculatorService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private clacService: CalculatorService){

  }
  firstNumber: number;
  secondNumber: number;
  subText = '';
  display = '';
  operationMode = '';
  operationString = '';
  answered = false;
  operationModeSet = false;


  allClear() {
    this.display = '';
    this.subText = '';
    this.operationModeSet = false;
  }

  getAnswer() {
   this.display =  this.clacService.CalculateAnswer(
    this.display,
    this.operationString,
    this.firstNumber,
    this.secondNumber,
    this.operationMode,
    this.subText,
    this.answered);
  }

  logKeyEntry(entry: string) {
    if (entry === OperandEnums.ADD || entry === OperandEnums.SUBTRACT || entry === OperandEnums.MULTIPLY || entry === OperandEnums.DIVIDE) {
      //get the last key entered
      let lastKey = this.display[this.display.length - 1];
      if (lastKey === OperandEnums.ADD || lastKey === OperandEnums.SUBTRACT || lastKey === OperandEnums.MULTIPLY || lastKey === OperandEnums.DIVIDE)  {
        this.operationModeSet = true;
      }
      if ((this.operationModeSet) || (this.display === '')) {
        return;
      }
      this.firstNumber = parseFloat(this.display);
      this.operationMode = entry;
      this.operationModeSet = true;
    }
    if (this.display.length === 10) {
      return;
    }
    this.display += entry;
  }

}
