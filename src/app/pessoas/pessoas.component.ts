import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PessoasService } from '../pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})

export class PessoasComponent implements OnInit {
  private id:number;

  displayedColumns = ['nome', 'sobrenome', 'email', 'profissao', 'formacao', 'id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:PessoasService, private router:Router) {

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
    this.router.navigate(['/editar-pessoa', id]);
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
  sobrenome: string;
  email: string;
  sexo: string;
  formacao: string;
  profissao: string;
  estado: string;
  cidade: string;
  id: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: '', sobrenome: '', email: '', sexo: '',  profissao: '', formacao: '', estado: '', cidade: '', id: ''},
];
