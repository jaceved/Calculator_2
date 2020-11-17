import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperandEnums } from 'src/operands';

@Injectable()
export class CalculatorService { 

  constructor(){}
 
  CalculateAnswer(mainText: string, operationString: string,firstNumber: number, secondNumber:number,operator: string, subText: string, answered: boolean )
  :string 
  {
    operationString = mainText;
    secondNumber = parseFloat(mainText.split(operator)[1]);
    if (operator === OperandEnums.DIVIDE) {
      subText = mainText;
      mainText = (firstNumber / secondNumber).toString();
      subText = operationString;
      if (mainText.length > 9) {
        mainText = mainText.substr(0, 9);
      }
    } 
    //we must multiply here..
    else if (operator === OperandEnums.MULTIPLY) {
      subText = mainText;
      mainText = (firstNumber * secondNumber).toString();
      subText = operationString;
      if (mainText.length > 9) {
        mainText = 'ERROR';
        subText = 'Range Exceeded';
      }

    }
    //we must subtract here 
    else if (operator === OperandEnums.SUBTRACT) {
      subText = mainText;
      mainText = (firstNumber - secondNumber).toString();
      subText = operationString;
    }
    //we must add here 
    else if (operator === OperandEnums.ADD) {
      subText = mainText;
      mainText = (firstNumber + secondNumber).toString();
      subText = operationString;
      if (mainText.length > 9) {
        mainText = 'ERROR';
        subText = 'Range Exceeded';
      }
    } else {
      subText = 'ERROR: Invalid Operation';
    }
    answered = true;
    return mainText;
  }
}
