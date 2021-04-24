import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPropertyComponent } from './register-property.component';

describe('RegisterPropertyComponent', () => {
  let component: RegisterPropertyComponent;
  let fixture: ComponentFixture<RegisterPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
