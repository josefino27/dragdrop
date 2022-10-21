import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from 'src/app/components';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,
    TableComponent
  ]
})
export class HomeModule { }
