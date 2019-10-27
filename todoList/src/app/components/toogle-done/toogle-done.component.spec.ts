import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleDoneComponent } from './toogle-done.component';

describe('ToogleDoneComponent', () => {
  let component: ToogleDoneComponent;
  let fixture: ComponentFixture<ToogleDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
