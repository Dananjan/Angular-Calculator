import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  calValue:number = 0;
  funcT:any ='.....';

  calNumber: string = 'noValue';

  firstNumber: number =0;
  secondNumber: number =0;


  onClickValue(val:string,type:any){
    if (type=='number'){
      this.onNumberClick(val);
    } else if (type=='function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val:string){
    if (this.calNumber!= 'noValue'){
      this.calNumber = this.calNumber+val;
    } else {
      this.calNumber=val;
    }

    this.calValue =parseFloat(this.calNumber);
  }

  onFunctionClick(val:string){

    if (val=="c"){
      this.onClearClick();
    } else if (this.funcT == '.....'){
      this.firstNumber = this.calValue;
      this.calValue=0;
      this.calNumber='noValue';
      this.funcT=val;
    } else if (this.funcT != '.....'){
      this.secondNumber=this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val:string){
    if(this.funcT=='+'){
      const total = this.firstNumber+this.secondNumber;
      this.totalAssignValues(total,val); 
    }
    if(this.funcT=='-'){
      const total = this.firstNumber-this.secondNumber;
      this.totalAssignValues(total,val);
    }
    if(this.funcT=='*'){
      const total = this.firstNumber*this.secondNumber;
      this.totalAssignValues(total,val);
    }
    if(this.funcT=='/'){
      const total = this.firstNumber/this.secondNumber;
      this.totalAssignValues(total,val);
    }
    if(this.funcT=='%'){
      const total = this.firstNumber%this.secondNumber;
      this.totalAssignValues(total,val);
    }
    if (val == '='){
      this.onEqualClick();
    }
  }

  totalAssignValues(total:number,val:string){
    this.calValue=total;
    this.firstNumber=total;
    this.secondNumber=0;
    this.calNumber='noValue';
    this.funcT=val;
  }

  onEqualClick(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.funcT='.....';
    this.calNumber='noValue';
  }

  onClearClick(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.calValue=0;
    this.funcT='.....';
    this.calNumber='noValue';
  }
}
