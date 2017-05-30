import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {

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

}
