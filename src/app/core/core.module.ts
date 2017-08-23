/**
 *  Core模块 整个系统中只加载一次，单例模式
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {HttpModule} from "@angular/http";
import {DomSanitizer} from "@angular/platform-browser";
import {loadSvgResource} from "../utils/svg.utils";
import {SharedModule} from "../shared/shared.module";
import {MdIconRegistry} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    HttpModule,  // Md-Icon 价值外部 SVG 图标的时候 需要 http依赖， 涉及到http的解析
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})

/**
 * 跳过自身与可选
 * 当我们不想从当前元素获取依赖的时候，可以使用@SkipSelf()，这样注入器从一个在自己 上一级 的组件开始搜索一个 Parent 依赖。
 * 同时，当无法确保依赖是否存在的情况下，而又为了避免抛出找不到依赖的错误情况，可以使用@Optional()注解，这样该依赖是可选的
 */
export class CoreModule {
  // @SkipSelf() 去父级找依赖，如果父依赖不存在的话，才去注入
  // 第一次加载的时候 在父级容器中找不到，需要进行注入
  // @Optional() 表明注入是可选择的，当CoreModule不存在的时候 就正常的执行构成方法进行构造即可
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer
  ) {
    if (parent) { // 系统中只加载一次， 如果加载过了 就抛出异常
      throw new Error('模块已经加载，不能再次加载！');
    }
    loadSvgResource(iconRegistry, sanitizer);
  }
}
