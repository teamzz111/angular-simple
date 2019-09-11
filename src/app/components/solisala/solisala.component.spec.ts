import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolisalaComponent } from './solisala.component';

describe('SolisalaComponent', () => {
  let component: SolisalaComponent;
  let fixture: ComponentFixture<SolisalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolisalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolisalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
