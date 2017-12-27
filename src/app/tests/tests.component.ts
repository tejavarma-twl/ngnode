import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  sampleForm:FormGroup;
  persons:Array<any> = [
    {fname:'Teja',lname:'Varma'}
  ];

  constructor(private reqs:ServiceService) { }

  ngOnInit() {
    this.sampleForm = new FormGroup({
      'fname':new FormControl(null),
      'lname':new FormControl(null)
    });
  }

  submitForm(){
    this.reqs.sendSomeData(this.sampleForm.value);
  }

}
