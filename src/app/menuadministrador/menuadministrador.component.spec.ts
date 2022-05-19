import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadministradorComponent } from './menuadministrador.component';

describe('MenuadministradorComponent', () => {
  let component: MenuadministradorComponent;
  let fixture: ComponentFixture<MenuadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuadministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
