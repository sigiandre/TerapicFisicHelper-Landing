import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWriteComponent } from './movies-write.component';

describe('MoviesWriteComponent', () => {
  let component: MoviesWriteComponent;
  let fixture: ComponentFixture<MoviesWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
