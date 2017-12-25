import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sampleForm:FormGroup;
  persons:Array<any> = [
    {fname:'Teja',lname:'Varma'}
  ];

  constructor(){

  }

  ngOnInit(){
    this.sampleForm = new FormGroup({
      'fname':new FormControl(null),
      'lname':new FormControl(null)
    });
  }

  submitForm(){
    console.log(this.sampleForm.value);
  }

}
