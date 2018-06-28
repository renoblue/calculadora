import { Component } from '@angular/core'

@Component({
    selector:'fruta',
    template:`
   
    <h2>{{myNum1}}</h2>
    <p>{{myNum2}}</p>
    <p>{{resultado}}</p>`
})
export class FrutaComponent{
   
    num1:number;
    num2:number;
    resultado:number;  
 
   suma(){
    this.resultado=this.num1 * 1 + this.num2 * 1;