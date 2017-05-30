import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

  constructor() { }

  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('子组件投影内容检测完毕');
  }

  ngAfterViewInit(): void {
    console.log('子组件视图内容初始化完毕');
  }

  ngOnDestroy() {
    console.log('child组件被销毁');
  }

}
