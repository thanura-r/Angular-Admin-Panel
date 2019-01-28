import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Alert} from 'selenium-webdriver';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    alert('New Grade Added Successfully');
  }
}
