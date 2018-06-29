import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatOptionModule, MatSelectModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasFormComponent } from './pessoas/pessoas-form/pessoas-form.component';
import { ProfissoesComponent } from './profissoes/profissoes.component';
import { ProfissoesFormComponent } from './profissoes/profissoes-form/profissoes-form.component';

import { PessoasService } from './pessoas.service'
import { ProfissoesService } from './profissoes.service'
import { EnderecoService } from './endereco.service';

const appRoutes: Routes = [
  { path: 'pessoas', component: PessoasComponent },
  { path: 'criar-pessoa', component: PessoasFormComponent },
  { path: 'editar-pessoa/:id', component: PessoasFormComponent },
  { path: 'profissoes', component: ProfissoesComponent },
  { path: 'criar-profissao', component: ProfissoesFormComponent },
  { path: 'editar-profissao/:id', component: ProfissoesFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    PessoasComponent,
    PessoasFormComponent,
    ProfissoesComponent,
    ProfissoesFormComponent
  ],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [PessoasService, EnderecoService, ProfissoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
