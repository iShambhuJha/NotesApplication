import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  isText: boolean;
  @Output() onTextareaChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() childMessage: string;
  changeCreateSubscription: any;
  txtNotes: string;
  changeDelSubscription: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.isText = false;
  }
  // Input event for textbox
  onTextChange(evt) {
    if (evt.length == 1) {
      if (this.isText == true) {
        return;
      }
      this.isText = true;
      this.sharedService.isChanged.next(this.isText);
    }
    this.onTextareaChanged.emit(evt);
  }
}
