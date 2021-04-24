import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsearchComponent } from './propsearch.component';

describe('PropsearchComponent', () => {
  let component: PropsearchComponent;
  let fixture: ComponentFixture<PropsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
