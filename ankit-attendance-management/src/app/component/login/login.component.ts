import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }
  loginForm =  new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  });
  baseUrl : string = "http://localhost:9090"

  onSubmit() {
    this.http.post(`${this.baseUrl}/login`, this.loginForm.value).subscribe((response:any) => {
      if (response['token'] && response['token'] !== ""){
        let token = response['token'].split(" ");
        if(token[0]==='Bearer'){
          localStorage.setItem('token',token[1]);
        }
        window.location.href = "/";
      }
      else{
        alert("invalid user")
      }
    });
  }
}
