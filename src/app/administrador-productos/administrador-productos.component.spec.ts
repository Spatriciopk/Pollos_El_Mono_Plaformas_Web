import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorProductosComponent } from './administrador-productos.component';

describe('AdministradorProductosComponent', () => {
  let component: AdministradorProductosComponent;
  let fixture: ComponentFixture<AdministradorProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
