import { Component, OnInit } from '@angular/core';

interface DocumentType {
  id: number;
  shortName: string;
}

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  menuItems: any[];

  constructor() {
    
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    localStorage.setItem('menu', JSON.stringify(this.menuItems));
  }

  documentTypes: DocumentType[] = [
    { id: 0, shortName: 'CC' },
    { id: 1, shortName: 'TI' },
    { id: 2, shortName: 'RC' },
    { id: 3, shortName: 'PS' }
  ]

}
