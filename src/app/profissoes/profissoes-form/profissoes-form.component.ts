import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfissoesService } from '../../profissoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissoes-form',
  templateUrl: './profissoes-form.component.html',
  styleUrls: ['./profissoes-form.component.css']
})
export class ProfissoesFormComponent implements OnInit {
  private id:number;

  myForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private profissoesService:ProfissoesService,
    private router:Router
  ) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      id: "",
      nome: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id = params.id;
    });
    if (this.id) {
      this.profissoesService.getById(this.id).subscribe(response=>{
        this.myForm.setValue(response);
      });
    }
  }

  save() {
    if (this.myForm.valid) {
      if(this.id) {
        this.profissoesService.edit(this.myForm.value).subscribe(
          response => {
            this.router.navigate(['/profissoes']);
          });
      } else {
        this.profissoesService.add(this.myForm.value).subscribe(
          suc=>{
            this.myForm.reset();
            this.router.navigate(['/profissoes']);
          }
        );
      }
    }
  }
};
