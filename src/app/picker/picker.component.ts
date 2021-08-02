import { Component } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent{

  currentNumber: number = 100;
  currentColor: string = 'yellow';
  items: Array<{color:string}> =[];
  color!:string;
  
  constructor() { }

  generate(circlesCount: number){
    this.items = Array(circlesCount).fill(0).map(i => ({color:'white'}))
    console.log(this.items);
  }

  fill(item: any){
     item.color = this.currentColor;
   }
 
  resetAll(){
    this.items.length = 0;
  }
}
