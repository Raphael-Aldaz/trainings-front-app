import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapOrderComponent } from './recap-order.component';

describe('RecapOrderComponent', () => {
  let component: RecapOrderComponent;
  let fixture: ComponentFixture<RecapOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
