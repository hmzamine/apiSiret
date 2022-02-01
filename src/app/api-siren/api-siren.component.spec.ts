import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSirenComponent } from './api-siren.component';

describe('ApiSirenComponent', () => {
  let component: ApiSirenComponent;
  let fixture: ComponentFixture<ApiSirenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSirenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSirenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
