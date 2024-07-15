import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePaiementComponent } from './recherche-paiement.component';

describe('RecherchePaiementComponent', () => {
  let component: RecherchePaiementComponent;
  let fixture: ComponentFixture<RecherchePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecherchePaiementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecherchePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
