import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    console.log("check");
      if(!localStorage.getItem('token')){
        window.location.href = "/login"
      }
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }
}
