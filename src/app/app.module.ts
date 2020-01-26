import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    CreateNoteComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
