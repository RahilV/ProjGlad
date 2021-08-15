import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/test', title: 'Test',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/userProducts', title: 'User Prodcuts',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/logout', title: 'Logout',  icon:'ni-circle-08 text-pink', class: '' }
];
export const adminRoutes: RouteInfo[] = [
    { path: '/dashboard', title: 'Consumers List',  icon: 'ni-circle-08 text-pink', class: '' },
    { path: '/logout', title: 'Logout',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/addProduct', title: 'Add Product',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('userType') == "1")
    {
      this.menuItems = adminRoutes.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }
    else {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
      });
    }
    
  }
}
