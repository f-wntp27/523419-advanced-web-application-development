import { Component, ViewChild,
 OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterContentChecked, OnDestroy
{

  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;
  showChild: boolean = true;

  parentData!: number;
  childDataInParent!: number;
  textMessage: string = "";
  status!: string;

  constructor() { console.log("parent constructor worked!"); }

  ngOnInit(): void {
    this.parentData = 0;
    this.childDataInParent = 0;
    console.log("parent ngOnInit worked!");
  }

  onClick2Child() {
    this.parentData += 1; 
  }

  receiveData($event: number) {
    this.childDataInParent = $event;
  }

  onClickViewChild() {
    this.childComponent.onClick2Parent();
  }
  
  ngOnChanges() {
    console.log("parent ngOnChanges worked!");
  }
  
  ngDoCheck() {
    console.log(this.textMessage);
    console.log("parent ngDoCheck worked!");
  }
  
  ngAfterContentInit() {
    console.log("parent ngAfterContentInit worked!");
  }
  
  ngAfterContentChecked() {
    if (this.textMessage == "B6220709") {
      this.status = "Your ID is OK";
    } else {
      this.status = "Error";
    }
    console.log("parent ngAfterContentChecked worked!");
  }
  
  ngAfterViewInit() {
    console.log("parent ngAfterViewInit worked!");
  }
  
  ngAfterViewChecked() {
    console.log("parent ngAfterViewChecked worked!");
  }
  
  ngOnDestroy() {
    console.log("parent ngOnDestroy worked!");
  }

  update() {
    this.showChild = !this.showChild;
  }
  
}
