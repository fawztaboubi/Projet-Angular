import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFormateurFormComponent } from './modif-formateur-form.component';

describe('ModifFormateurFormComponent', () => {
  let component: ModifFormateurFormComponent;
  let fixture: ComponentFixture<ModifFormateurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFormateurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifFormateurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
