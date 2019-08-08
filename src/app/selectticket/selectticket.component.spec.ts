import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectticketComponent } from './selectticket.component';

describe('SelectticketComponent', () => {
  let component: SelectticketComponent;
  let fixture: ComponentFixture<SelectticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
