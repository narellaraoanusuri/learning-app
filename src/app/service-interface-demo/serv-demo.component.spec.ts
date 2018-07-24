import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServDemoComponent } from './serv-demo.component';

describe('ServDemoComponent', () => {
  let component: ServDemoComponent;
  let fixture: ComponentFixture<ServDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
