import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BuscadorPipe } from 'src/app/pipes/buscador.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    BuscadorPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class HomeModule { }
