import { Component } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})

export class ButtonComponentComponent {
  name: String = "Luke"

  clickMethod(){
    // alert('hello')
    if (this.name==="Luke"){
      this.name = "Samuel"
    } else{
      this.name="Luke"
    };
    }
  };
