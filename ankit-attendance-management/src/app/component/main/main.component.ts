import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  constructor(private formBuilder: FormBuilder,private http: HttpClient, public ms : MainService) { }
  studentdata : any = [];
  ngOnInit(): void {
    console.log("check");
      if(!localStorage.getItem('token')){
        window.location.href = "/login"
      }

      this.http.get(this.ms.baseUrl()+'student',{headers: this.ms.headers()}).subscribe((response:any)=>{
        this.studentdata = response['data'];
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }
}
