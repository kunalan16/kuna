import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutpharmComponent } from './routpharm.component';

describe('RoutpharmComponent', () => {
  let component: RoutpharmComponent;
  let fixture: ComponentFixture<RoutpharmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutpharmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutpharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
