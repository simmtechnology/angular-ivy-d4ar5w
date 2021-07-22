import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytutorComponent } from './mytutor.component';

describe('MytutorComponent', () => {
  let component: MytutorComponent;
  let fixture: ComponentFixture<MytutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
