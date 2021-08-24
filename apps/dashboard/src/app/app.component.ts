import { Component } from '@angular/core';


@Component({
  selector: 'sunglasses-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Sunglasses';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'sunglasses', icon: 'view_list', title: 'Sunglasses'}
  ]
}
