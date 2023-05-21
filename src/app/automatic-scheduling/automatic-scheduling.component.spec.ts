import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticSchedulingComponent } from './automatic-scheduling.component';

describe('AutomaticSchedulingComponent', () => {
  let component: AutomaticSchedulingComponent;
  let fixture: ComponentFixture<AutomaticSchedulingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomaticSchedulingComponent]
    });
    fixture = TestBed.createComponent(AutomaticSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
