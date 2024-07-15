import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recherche-paiement',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './recherche-paiement.component.html',
  styleUrls: ['./recherche-paiement.component.css'],
})
export class RecherchePaiementComponent {

  isResult: boolean = false;
  searchTerm: string = ''; // Variable to hold the search term
  foundFacture: any = null; // Variable to hold the found facture

  constructor() {}

  onSearch() {
    // Perform search in the factures array
    this.foundFacture = this.factures.find(
      (facture) => facture.reference === this.searchTerm
    );

    // Set isResult to true if foundFacture is not null, otherwise false
    this.isResult = this.foundFacture !== null;
  }

  factures: any[] = [
    {
      reference: 'ENA_0001',
      emisePar: 'Ecole Nationale Administration',
      date: '10/07/2024',
      statut: 'En attente de paiement',
      montant: '10 000 Fcfa',
    },
  ];

  moyenPaiement: { img: string; title: string; id: number }[] = [
    {
      img: 'assets/images/om.png',
      title: 'Orange Money',
      id: 1,
    },
    {
      img: 'assets/images/wave.png',
      title: 'Wave',
      id: 2,
    },
    {
      img: 'assets/images/ria.png',
      title: 'Ria',
      id: 3,
    },
    {
      img: 'assets/images/wizall.png',
      title: 'Wizall',
      id: 4,
    },
    {
      img: 'assets/images/freemoney.png',
      title: 'Freemoney',
      id: 5,
    },
  ];
}
