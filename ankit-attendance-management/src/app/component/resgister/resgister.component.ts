import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent {
  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }
  registerForm =  new FormGroup({
    username : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  });
  baseUrl : string = "http://localhost:9090"


  onSubmit() {
    this.http.post(`${this.baseUrl}/register`, this.registerForm.value).subscribe((response:any) => {
      if (response['msg' && response['msg'].includes('success')]){
        window.location.href = "/";
      }
      else{
        alert("user not found")
      }
    });
  }
}
