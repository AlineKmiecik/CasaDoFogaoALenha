import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogoesEstufasComponent } from './fogoes-estufas.component';

describe('FogoesEstufasComponent', () => {
  let component: FogoesEstufasComponent;
  let fixture: ComponentFixture<FogoesEstufasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FogoesEstufasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FogoesEstufasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
