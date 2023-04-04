import {Component} from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent {

  message: string;

  logToConsole() {
    console.log('Log from first child');
    this.message = 'Method called on first child';
  }

}
