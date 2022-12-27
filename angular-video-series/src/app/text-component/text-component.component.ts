import { Component } from '@angular/core';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})

export class TextComponentComponent {
  console = console;
  buttonStatus: string= "you have clicked the button";
  title: string= "Luke-Angular-Exp";
  input_dummy: string = ""
  isDisabledBlurr: boolean= true;
  isDisabledMouse: boolean= false;
  isDisabledMouseleave: boolean= false;
  IsDisabledClick: boolean = true;
  backTitle: string = `>> this data is from Component.ts`;
  // title_img: string=`./src/assets/elephant.jpg`;
  title_img: string=`https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=600`;



  getMin(a: Number ,b: Number){
    if (a< b) {
      return a
    } else{
      return b
    }
  };


  enableButton(input_string:String){
    console.log(`this is from input event : ${input_string}`)
    if (input_string==""){
      this.IsDisabledClick =true
    } else {
      this.IsDisabledClick =false
    }

  }

  imageIsHidden:boolean=true;
  displayImage(){
      this.imageIsHidden=!this.imageIsHidden
    }

  buttonClicked(val:string){
    alert(val)
  }

  keyupFunc(eve:string){
    // keyup event operates or triggers the event as soon as the key is pressed, this is similar to input will little differences
    this.console.log(`this is from keyup event : ${eve}`)
  }

  blurCall(){
    console.log(this.isDisabledBlurr)
    this.isDisabledBlurr=!this.isDisabledBlurr
  }

  mouseOverCall(){
    this.isDisabledMouse=!this.isDisabledMouse;
    ;
  }

  mouseleaveCall(){
    this.isDisabledMouseleave=!this.isDisabledMouseleave;
    ;
  }

  }
