import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustommerComponent } from './form-custommer.component';

describe('FormCustommerComponent', () => {
  let component: FormCustommerComponent;
  let fixture: ComponentFixture<FormCustommerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCustommerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCustommerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
