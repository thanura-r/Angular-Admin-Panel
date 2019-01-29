import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Alert} from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Injectable()
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
    $.ajax({
      url: 'http://localhost/AngularBack/Service/service.php',
      method: 'GET',
      async: true,
      data: form + '&operation=add'
    }).done(function (resp) {
      alert(resp);
    });
  }
}
