import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobinComponent } from './jobin.component';

describe('JobinComponent', () => {
  let component: JobinComponent;
  let fixture: ComponentFixture<JobinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
