import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  isText: boolean;
  @Output() onTextareaChanged: EventEmitter<any> = new EventEmitter<any>();
  constructor( private sharedservice: SharedService) { }

  ngOnInit() {
    this.isText = false;
  }
  onTextChange(evt) {
    if(evt.length==1){
      if(this.isText == true){
        return;
      }
      this.isText = true;
      this.sharedservice.isChanged.next(this.isText) ;
    }
    this.onTextareaChanged.emit(evt);
}
}
