import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    {label:'First Page',path:'firstPage'},
    {label:'Second Page',path:'secondPage'},
    {label:'Third Page',path:'thirdPage'},

  ]
  title = 'angular-material';
}
