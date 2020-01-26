import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedservice: SharedService) { }

  ngOnInit() {
  }
  onCreateClick() {
this.sharedservice.isCreateClicked.next(true);
  }
}
