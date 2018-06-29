import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PessoasService } from '../../pessoas.service';
import { EnderecoService } from '../../endereco.service';
import { ProfissoesService } from '../../profissoes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoasFormComponent implements OnInit {
  private id:number;
  estados:Array<any>;
  profissoes:Array<any>;

  myForm: FormGroup;

  sexos = [
    { id: "MASCULINO", descricao: 'Masculino' },
    { id: "FEMININO", descricao: 'Feminino' }
  ];

  constructor(
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private pessoasService:PessoasService,
    private enderecoService:EnderecoService,
    private profissoesService:ProfissoesService,
    private router:Router
  ) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      id: "",
      nome: ['', Validators.required ],
      sobrenome: ['', Validators.required ],
      sexo: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ]) ],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      formacao: ['', Validators.required ],
      profissao: ['', Validators.required ],
    });
  }


  getState() {
    this.enderecoService.states().subscribe(suc=>{
      this.estados = suc;
    });
  }

  getJobs() {
    this.profissoesService.all().subscribe(suc=>{
      this.profissoes = suc;
    });
  }

  $scope.selectState = function() {
    this.enderecoService.cities(this.myForm.value.estado.id).subscribe(suc=>{
      this.cidades = suc;
    });
  }

  ngOnInit() {
    this.getJobs();
    this.getState();
    this.activatedRoute.params.subscribe(params=>{
      this.id = params.id;
    });
    if (this.id) {
      this.pessoasService.getById(this.id).subscribe(response=>{
        this.myForm.setValue(response);
      });
    }
  }

  saveUser() {
    if (this.myForm.valid) {
      this.myForm.value.estado = this.myForm.value.estado.nome;
      this.myForm.value.cidade = this.myForm.value.cidade.nome;
      if(this.id) {
        this.pessoasService.edit(this.myForm.value).subscribe(
          response => {
            this.router.navigate(['/pessoas']);
          });
      } else {
        this.pessoasService.add(this.myForm.value).subscribe(
          suc=>{
            this.myForm.reset();
            this.router.navigate(['/pessoas']);
          }
        );
      }
    }
  }
}
