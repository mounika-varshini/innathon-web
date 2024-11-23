import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navItems = [
    { name: 'Projects', link: '/' },
    { name: 'Equipments', link: '/equipments' },
    { name: 'Mapping Equipments to Work', link: '/mapping' },
    { name: 'Maintainance & Tracking', link: '/maintainance-tracking' },
    { name: 'Patterns', link: '/patterns' },
    { name: 'Samsara', link: '/samsara' },
    { name: 'AI', link: '/ai' },
  ];

  selectedItem = this.navItems[0];

  ngOnInit() {
    this.router.navigate([`${this.selectedItem.link}`])
  }
  constructor(private router: Router) {

  }

  navItemClicked(navItem: { name: string, link: string }) {
    this.selectedItem = navItem;
    this.router.navigate([`${navItem.link}`])
  }
}
