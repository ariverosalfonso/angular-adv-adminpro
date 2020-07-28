import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [BreadcrumbsComponent,
    SideBarComponent,
    HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    SideBarComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
