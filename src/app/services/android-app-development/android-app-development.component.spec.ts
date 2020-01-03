import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidAppDevelopmentComponent } from './android-app-development.component';

describe('AndroidAppDevelopmentComponent', () => {
  let component: AndroidAppDevelopmentComponent;
  let fixture: ComponentFixture<AndroidAppDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidAppDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
