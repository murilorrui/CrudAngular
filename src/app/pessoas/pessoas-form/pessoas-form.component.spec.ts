import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasFormComponent } from './pessoas-form.component';

describe('PessoasFormComponent', () => {
  let component: PessoasFormComponent;
  let fixture: ComponentFixture<PessoasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
