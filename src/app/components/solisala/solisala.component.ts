import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Soli} from '../../models/soli';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';

@Component({
  selector: 'app-solisala',
  templateUrl: './solisala.component.html',
  styleUrls: ['./solisala.component.scss']
})
export class SolisalaComponent implements OnInit {
  public form: DynamicFormGroup<Soli>;
  constructor(private fb: DynamicFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(Soli, {
      date: new Date(), name: '', lab: '', asign: '', teacher: '', faculty: '', 
      students: '', cantMachines: '', cantConsume: '', observation: '', useMachines: false,
      useLab: false, guide: false, aux: false, useConsume: false
    });
  }

}
