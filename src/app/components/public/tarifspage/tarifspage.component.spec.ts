import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifspageComponent } from './tarifspage.component';

describe('TarifspageComponent', () => {
  let component: TarifspageComponent;
  let fixture: ComponentFixture<TarifspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
