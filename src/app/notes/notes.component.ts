
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CreateNoteComponent } from './../create-note/create-note.component';
import { HeaderComponent } from './../header/header.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, AfterViewInit {
  @ViewChild(HeaderComponent, { static: false }) header;
  @ViewChild(CreateNoteComponent, { static: false }) createNote;
  notes = [
    { id: '1', noteTitle: 'PRIVMSG', noteText: 'newURI notes first' },
    { id: '2', noteTitle: 'PRIVMSG', noteText: 'newURI notes second' },
    { id: '3', noteTitle: 'PRIVMSG', noteText: 'newURI notes third' },
    { id: '4', noteTitle: 'PRIVMSG', noteText: 'newURI notes fourth' },
    { id: '5', noteTitle: 'PRIVMSG', noteText: 'newURI notes fifth' },
    { id: '6', noteTitle: 'PRIVMSG', noteText: 'newURI notes sixth' },
    { id: '7', noteTitle: 'PRIVMSG', noteText: 'newURI notes seventh' },
  ];
  noteDefaultTime: string;
  isText: boolean;
  changeSubscription: any;
  changeCreateSubscription: any;
  newNote: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    var time = new Date();
    this.noteDefaultTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    localStorage.setItem('allNotes', JSON.stringify(this.notes));
    this.changeSubscription = this.sharedService.isChanged.subscribe(resp => {
      if (resp == true) {
        this.notes.unshift({ id: '8', noteTitle: 'New Note', noteText: 'No additional text' })
      }
    })
    this.changeCreateSubscription = this.sharedService.isCreateClicked.subscribe(resp => {
      if (resp == true) {
        this.notes.unshift({ id: '8', noteTitle: this.newNote, noteText: 'No additional text' })
      }
    })
  }
  ngAfterViewInit() {
    this.isText = this.createNote.isText;
  }
  public doSomething(data: any): void {

    var selectedObj = this.notes.map(x => {
      if (x.id == (this.notes.length).toString()) {
        if(data == ''){
          x.noteTitle = 'New Note';
        }else{
          x.noteTitle = data;
          this.newNote = data;
        }
      }
    });

  }
}
