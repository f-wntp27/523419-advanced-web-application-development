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

  constructor() { console.log("children constructor worked!"); }

  ngOnInit(): void {
    this.childData = 0;
    console.log("children ngOnInit worked!");
    
  }

  onClick2Parent() {
    this.childData += 1;
    this.messageEvent.emit(this.childData);
  }

  ngOnChanges() {
    console.log("children ngOnChanges worked!");
  }
  
  ngDoCheck() {
    console.log("children ngDoCheck worked!");
  }
  
  ngAfterContentInit() {
    console.log("children ngAfterContentInit worked!");
  }
  
  ngAfterContentChecked() {
    console.log("children ngAfterContentChecked worked!");
  }
  
  ngAfterViewInit() {
    console.log("children ngAfterViewInit worked!");
  }
  
  ngAfterViewChecked() {
    console.log("children ngAfterViewChecked worked!");
  }
  
  ngOnDestroy() {
    console.log("children ngOnDestroy worked!");
  }
}
