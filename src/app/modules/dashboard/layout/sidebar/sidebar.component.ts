import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/Auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() isCollapsed: boolean = false;

  userName: string = '';
  userEmail: string = '';
  userAvatarUrl: string = '';
  userRole: string = 'User';

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
      this.userRole = currentUser.user.role === 'ADMIN' ? 'Admin' : 'User';
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
