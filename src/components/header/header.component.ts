import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MenuModule,ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  protected items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setUpMenu()
  }

  setUpMenu(){
    this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: 'pi pi-plus'},
          {label: 'Open', icon: 'pi pi-download'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Undo', icon: 'pi pi-refresh'},
          {label: 'Redo', icon: 'pi pi-repeat'}
      ]
  }];
  }

}
