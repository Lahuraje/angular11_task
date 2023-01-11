import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearchBtnClick(_searchText: String) {
    console.warn(_searchText);
    if (_searchText != null) {
      alert(_searchText);
    }
  }
}
