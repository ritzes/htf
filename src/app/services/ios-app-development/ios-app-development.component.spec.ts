import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosAppDevelopmentComponent } from './ios-app-development.component';

describe('IosAppDevelopmentComponent', () => {
  let component: IosAppDevelopmentComponent;
  let fixture: ComponentFixture<IosAppDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosAppDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
