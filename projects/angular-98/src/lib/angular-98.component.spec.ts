import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular98Component } from './angular-98.component';

describe('Angular98Component', () => {
  let component: Angular98Component;
  let fixture: ComponentFixture<Angular98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular98Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Angular98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
