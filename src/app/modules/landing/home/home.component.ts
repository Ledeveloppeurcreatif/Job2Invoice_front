import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, ButtonModule, CarouselModule]
})
export class HomeComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadTestimonials();
  }

  loadTestimonials(): void {
    // Données de démonstration pour les témoignages
    this.testimonials = [
      {
        name: 'Sophie Martin',
        position: 'Directrice',
        company: 'Design Studio',
        text: 'InvoicePlanner a complètement transformé notre processus de facturation. Nous économisons des heures chaque semaine et nos clients sont ravis de la qualité professionnelle de nos factures.',
        avatar: 'https://i.pravatar.cc/150?img=1'
      },
      {
        name: 'Thomas Dubois',
        position: 'Fondateur',
        company: 'Agence Web',
        text: 'Après avoir essayé plusieurs solutions, InvoicePlanner est de loin la plus intuitive et complète. La possibilité de convertir les devis en factures en un clic est un vrai gain de temps.',
        avatar: 'https://i.pravatar.cc/150?img=2'
      },
      {
        name: 'Marie Leroy',
        position: 'Comptable',
        company: 'Cabinet Conseil',
        text: 'Les rapports détaillés et la gestion des paiements en ligne ont considérablement amélioré notre trésorerie. Je recommande vivement InvoicePlanner à toutes les entreprises.',
        avatar: 'https://i.pravatar.cc/150?img=3'
      }
    ];
  }

  navigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/auth']);
  }
} 