import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  firstChildComponentRef: any;
  secondChildComponentRef: any;

  setFirstComponentReference(component: any) {
    this.firstChildComponentRef = component;
  }

  setSecondComponentReference(component: any) {
    this.secondChildComponentRef = component;
  }

  logFromFirstChildComponent() {
    this.firstChildComponentRef.logToConsole();
  }

  logFromSecondChildComponent() {
    this.secondChildComponentRef.logToConsole();
  }
}
