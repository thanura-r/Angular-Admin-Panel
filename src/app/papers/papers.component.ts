import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  @ViewChild('f') paperform: NgForm;
  @ViewChild('ppr') paperTable: NgModel;

  constructor() { }

  paper = {
    name: '',
    grades: '',
    description: ''
  }

  ngOnInit() {
  }
  onSubmit() {
    alert('done');
    this.paper.name = this.paperform.value.paperName;
    this.paper.grades = this.paperform.value.grade;
    this.paper.description = this.paperform.value.subject;
    console.log(this.paper);
    let row = '<tr>' +
      '<td>' + this.paper.name + '</td>' +
      '<td>' + this.paper.grades + '</td>' +
      '<td>' + this.paper.description + '</td>' +
      '</tr>';
  }

}
