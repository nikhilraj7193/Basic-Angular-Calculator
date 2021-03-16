import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber = '0'
  firstOperand = null
  operator = null
  waitForTheSecondNumber = false;

  public getNumber(v: string){
    if(this.waitForTheSecondNumber) {
      this.currentNumber = v;
      this.waitForTheSecondNumber = false;
    }else {
      if(this.currentNumber === '0') {
        this.currentNumber = v;
      }else {
        this.currentNumber += v;
      }
    }
  }

  getDecimal() {
    if(!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
  }
}

public getOperation(op: string){
  console.log(op);
  
  if(this.firstOperand === null){
    this.firstOperand = Number(this.currentNumber);
  
  }else if(this.operator){
    const result = this.doCalculation(this.operator , Number(this.currentNumber))
    this.currentNumber = String(result);
    this.firstOperand = result;
  }
  
  this.operator = op;
  this.waitForTheSecondNumber = true;
  console.log(this.firstOperand);

}
  
public clear(){
  this.currentNumber = '0';
  this.firstOperand = null;
  this.operator = null;
  this.waitForTheSecondNumber = false;
}  

  constructor() { }

  ngOnInit(): void {
  }

}
