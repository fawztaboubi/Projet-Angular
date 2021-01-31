import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormateursComponent } from './admin-formateurs.component';

describe('PrincipaleComponent', () => {
  let component: AdminFormateursComponent;
  let fixture: ComponentFixture<AdminFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
