import { Component, VERSION } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User(
    'Akram',
    'akram@shaikh.com',
    '96730',
    'Angular',
    'Morning',
    true
  );
}
