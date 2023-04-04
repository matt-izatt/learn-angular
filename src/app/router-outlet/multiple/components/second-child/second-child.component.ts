import {Component} from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent {

  message: string;

  logToConsole() {
    console.log('Log from second child');
    this.message = 'Method called on second child';
  }
}
