import { Component, EventEmitter, Input, Output,
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, 
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterContentChecked, OnDestroy
{

  @Input() parentDataInChild!: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData!: number;

  constructor() { console.log("constructor worked!"); }

  ngOnInit(): void {
    this.childData = 0;
  }

  onClick2Parent() {
    this.childData += 1;
    this.messageEvent.emit(this.childData);
  }

  ngOnChanges() {
    console.log("ngOnChanges worked!");
  }
  
  ngDoCheck() {
    console.log("ngDoCheck worked!");
  }
  
  ngAfterContentInit() {
    console.log("ngAfterContentInit worked!");
  }
  
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked worked!");
  }
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit worked!");
  }
  
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked worked!");
  }
  
  ngOnDestroy() {
    console.log("ngOnDestroy worked!");
  }
}
