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

listOfClassses={
  itsMeColorClass:true,
  itsMeFontClass:true,
  itsMeFont:true
};
addStyle(){
  this.listOfClassses.itsMeColorClass=!this.listOfClassses.itsMeColorClass;
  this.listOfClassses.itsMeFontClass=!this.listOfClassses.itsMeFontClass;
  this.listOfClassses.itsMeFont=!this.listOfClassses.itsMeFont;
};
 onbtnClick:boolean=true
myStyle1(){
  return{
    'color': 'red',
    'font-family': 'Times New Roman',
 'font-style': 'italic'
  }
  
}
myStyle2(){
  return{
    'color': 'green',
  }
  }
}
