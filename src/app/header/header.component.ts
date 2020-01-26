import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() childMessage: any=[];
  allNotes: any;
  constructor(private sharedservice: SharedService) { }

  ngOnInit() {

  }
  onCreateClick() {
this.sharedservice.isCreateClicked.next(true);
  }
  onDeleteClick() {
    this.allNotes = JSON.parse(localStorage.getItem('allNotes'));
    this.allNotes.map(ele=>{
      if(this.childMessage.id == ele.id){
        let index = this.allNotes.indexOf(ele);
        this.allNotes.splice(index,1);
      }
    })
    console.log('this.allNotesdeleted', this.allNotes)
    localStorage.setItem('allNotes', JSON.stringify(this.allNotes));
    this.sharedservice.isDeleteClicked.next(true);
  }
}
