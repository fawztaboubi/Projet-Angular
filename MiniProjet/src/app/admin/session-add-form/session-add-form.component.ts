
import { SessionItemComponent } from './../../../app/admin/session-item/session-item.component';

import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../fakesessionitem.service';
@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService: FakesessionitemService) { }

  ngOnInit(): void {
  }
  addSession(sessionItem:any) {
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
}
}
