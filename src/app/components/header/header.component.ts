import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuModule, ButtonModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  protected items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setUpMenu();
  }

  setUpMenu() {
    this.items = [
      {
        label: 'ขอหวย',
        icon: 'pi pi-fw pi-ticket',
        routerLink: ['/pagename'],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      },
    ];
  }
}
