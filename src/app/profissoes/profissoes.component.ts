import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ProfissoesService } from '../profissoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissoes',
  templateUrl: './profissoes.component.html',
  styleUrls: ['./profissoes.component.css']
})

export class ProfissoesComponent implements OnInit {
  private id:number;

  displayedColumns = ['nome', 'id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:ProfissoesService, private router:Router) {

  }

  private getAll() {
    let list = this.service.all().subscribe(suc=>{
      this.dataSource = new MatTableDataSource<any>(suc);
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id){
    return this.service.delete(id).subscribe(suc=> {
      this.getAll();
    });
  }

  edit(id:number) {
    this.router.navigate(['/editar-profissao', id]);
  }

  ngOnInit() {
    this.getAll();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

export interface PeriodicElement {
  nome: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: ''},
];
