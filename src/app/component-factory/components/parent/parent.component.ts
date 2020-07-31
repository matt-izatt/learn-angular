import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {PlaceholderDirective} from "../../directives/placeholder.directive";
import {FirstChildComponent} from "../first-child/first-child.component";
import {SecondChildComponent} from "../second-child/second-child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {

  // Reference to the element in the DOM
  @ViewChild(PlaceholderDirective, {static: true}) placeholder: PlaceholderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.loadFirstChild();
  }

  loadFirstChild(): void {
    this.loadComponent(FirstChildComponent);
  }

  loadSecondChild(): void {
    this.loadComponent(SecondChildComponent);
  }

  loadComponent(component): void {
    // Create a new instance of the component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    // Get a reference to container in which the component will be injected (in this case ng-template)
    const viewContainerRef = this.placeholder.viewContainerRef;

    // Clear the container before injecting a new component
    viewContainerRef.clear();

    // Inject the component (can assign to a variable to have a reference to that components class)
    viewContainerRef.createComponent(componentFactory);
  }
}
