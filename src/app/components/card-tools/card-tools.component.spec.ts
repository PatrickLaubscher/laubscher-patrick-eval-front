import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToolsComponent } from './card-tools.component';

describe('CardToolsComponent', () => {
  let component: CardToolsComponent;
  let fixture: ComponentFixture<CardToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
