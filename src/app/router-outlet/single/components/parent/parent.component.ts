import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  // A variable which will store a reference to any type of component
  childComponentRef: any;

  // Method gets called when the router loads the child component into the router outlet
  setComponentReference(component: any) {

    // Stores a reference to the child component
    this.childComponentRef = component;
  }

  // Calls method on the child component using the reference
  logFromChildComponent() {
    this.childComponentRef.logToConsole();
  }
}
