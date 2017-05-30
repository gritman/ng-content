import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import {RouterModule, Routes} from '@angular/router';

const routeConfig: Routes = [
  {path: '', component: ChildComponent},
  {path: 'child2', component: Child2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig) // 要把路由配置导入进来
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
