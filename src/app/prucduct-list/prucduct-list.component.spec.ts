import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrucductListComponent } from './prucduct-list.component';

describe('PrucductListComponent', () => {
  let component: PrucductListComponent;
  let fixture: ComponentFixture<PrucductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrucductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrucductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
