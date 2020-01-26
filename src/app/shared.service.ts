import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
  public isChanged = new Subject<any>();
  public isCreateClicked = new Subject<any>();
  public isDeleteClicked = new Subject<any>();
}
