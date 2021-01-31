import { Component, OnInit } from '@angular/core';
import {FakeParticipantServiceService}  from '../fake-participant-service.service';
import { Participant } from '../participant';

@Component({
  selector: 'app-participant-item-list',
  templateUrl: './participant-item-list.component.html',
  styleUrls: ['./participant-item-list.component.css']
})
export class ParticipantItemListComponent implements OnInit {

  participantItems: Participant[] | undefined;
  constructor(private particpantItemService: FakeParticipantServiceService) { }

  ngOnInit(): void {
    this.participantItems = this.particpantItemService.get();
  }
  refresh(): void {
    window.location.reload();
  }

}
