import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresRequestsComponent } from './stores-requests.component';

describe('StoresRequestsComponent', () => {
  let component: StoresRequestsComponent;
  let fixture: ComponentFixture<StoresRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
