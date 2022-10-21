import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Card, GenteModel } from 'src/app/models/data';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardsService } from 'src/app/services/cards.service';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatFormFieldModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

 
  cartas : Card[] = [];
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<GenteModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cards:CardsService) { 
    this.dataSource = new MatTableDataSource();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadCards(){
    this.cards.trae().subscribe( resp => {
      this.cartas.push(...resp.cards)
    })
    console.log(this.cartas)
  }

}

