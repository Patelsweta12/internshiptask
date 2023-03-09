import { Component } from '@angular/core';
import { myData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-One';
  public myclass: boolean = true;
  public myattr: number = 5;
  fname: string = "jdhvdjhg";
  getData: myData = {
    fname: "sweta",
    age: 22,
    add:"valsad"
  }
  addData() {
    console.log(`${this.getData.fname}\n${this.getData.age}\n${this.getData.add}`);
    
  }

}
