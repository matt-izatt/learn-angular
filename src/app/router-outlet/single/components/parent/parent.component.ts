import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  childComponentRef: any;

  setComponentReference(component: any) {
    this.childComponentRef = component;
  }

  logFromChildComponent() {
    this.childComponentRef.logToConsole();
  }
}
