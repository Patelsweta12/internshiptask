import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive-task';
  public myclass:boolean=true;
  headerArr=[
    {id:'id',name:'Name',email:'Email',age:'Age',button:'Buttons'}
  ]
  studentArray=[
    {id: 1, name:'Sweta',email:'sweta123@gmail.com',age:23,enableDisable:false},
    {id: 2, name:'Harsh',email:'harsh123@gmail.com',age:18,enableDisable:true},
    {id: 3, name:'Namrata',email:'namrata123@gmail.com',age:26,enableDisable:true},
    {id: 4, name:'Tejes',email:'tejas123@gmail.com',age:30,enableDisable:false},
  ]
data: any;
// public isButtonVisible = true;
// weekdayarr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

selectedDay:string | undefined;

getDayValue(val: any): void{
  console.log(val.target.value);
  this.selectedDay=val.target.value;
  
}
public myClass:boolean=true

myStyle(){
  return{
   ' background-color': 'red',
   'color':'green',
   'font-weight': 'bold'
  }
}


}
