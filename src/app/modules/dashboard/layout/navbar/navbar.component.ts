import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../../services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<void>();

  userName: string = '';
  userEmail: string = '';
  userRole: string = '';
  userAvatarUrl: string = '';
  notificationCount: number = 0;
  menuItems: MenuItem[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeUserInfo();
  }

  initializeUserInfo(): void {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.user) {
      this.userName = currentUser.user.email.split('@')[0];
      this.userEmail = currentUser.user.email;
      this.userRole = currentUser.user.role;
      // this.userAvatarUrl = currentUser.user.avatar;
    }

    // Simuler des notifications pour la démo
    this.notificationCount = 3;
  }



  logout(): void {
    this.authService.logout();
  }
}
