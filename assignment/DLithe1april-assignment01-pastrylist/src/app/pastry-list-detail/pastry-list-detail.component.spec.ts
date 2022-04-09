import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryListDetailComponent } from './pastry-list-detail.component';

describe('PastryListDetailComponent', () => {
  let component: PastryListDetailComponent;
  let fixture: ComponentFixture<PastryListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastryListDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
