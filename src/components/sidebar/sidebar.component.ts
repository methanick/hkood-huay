import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList : menuItem[] = [
    {
      label:'ขูดหวย',
      path:'',
      isActive:true
    },
    {
      label:'ขูดหวย',
      path:'/aa',
      isActive:false
    },
    {
      label:'ขูดหวย',
      path:'',
      isActive:false
    },
    {
      label:'ขูดหวย',
      path:'',
      isActive:false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectMenu(selectItem:menuItem){

    this.menuList.forEach(item=>{
      if(item === selectItem){
        item.isActive = true
      }else{
        item.isActive = false
      }
    })

  }

}

interface menuItem{
  label:string,
  path:string,
  isActive:boolean
}
