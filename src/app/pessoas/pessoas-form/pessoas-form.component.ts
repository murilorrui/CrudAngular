import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PessoasService } from '../../pessoas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoasFormComponent implements OnInit {
  private id:number;

  myForm: FormGroup;

  sexos = [
    { id: "MASCULINO", descricao: 'Masculino' },
    { id: "FEMININO", descricao: 'Feminino' }
  ];

  constructor(
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service:PessoasService,
    private router:Router
  ) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      id: "",
      nome: ['', Validators.required ],
      sobrenome: ['', Validators.required ],
      sexo: '',
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ]) ],
      cidade: '',
      estado: '',
      formacao: ['', Validators.required ],
      profissao: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id = params.id;
    });
    if (this.id) {
      this.service.getById(this.id).subscribe(response=>{
        this.myForm.setValue(response);
      });
    }
  }

  saveUser() {
    if (this.myForm.valid) {
      if(this.id) {
        this.service.edit(this.myForm.value).subscribe(
          response => {
            this.router.navigate(['/pessoas']);
          });
      } else {
        this.service.add(this.myForm.value).subscribe(
          suc=>{
            this.myForm.reset();
            this.router.navigate(['/pessoas']);
          }
        );
      }
    }
  }
}
