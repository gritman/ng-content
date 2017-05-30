import {AfterContentChecked, AfterContentInit, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, AfterContentChecked, AfterViewInit{

  title = 'app works!';
  divContent = '<div>父组件属性</div>';

  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('父组件投影内容检测完毕');
  }

  ngAfterViewInit(): void {
    console.log('父组件视图内容初始化完毕');
  }
}
