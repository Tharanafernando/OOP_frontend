import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigaionComponent } from './navigaion.component';

describe('NavigaionComponent', () => {
  let component: NavigaionComponent;
  let fixture: ComponentFixture<NavigaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigaionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
