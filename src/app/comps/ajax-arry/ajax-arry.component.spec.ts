import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxArryComponent } from './ajax-arry.component';

describe('AjaxArryComponent', () => {
  let component: AjaxArryComponent;
  let fixture: ComponentFixture<AjaxArryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxArryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxArryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
