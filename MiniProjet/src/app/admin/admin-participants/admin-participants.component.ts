import { Component, OnInit } from '@angular/core';
import { FakeParticipantServiceService} from '../fake-participant-service.service'
import { Participant } from '../participant';

@Component({
  selector: 'app-admin-participants',
  templateUrl: './admin-participants.component.html',
  styleUrls: ['./admin-participants.component.css']
})
export class AdminParticipantsComponent implements OnInit {

  participantItems: Participant[] | undefined;
  constructor(private particpantItemService: FakeParticipantServiceService) { }

  ngOnInit(): void {
    this.participantItems = this.particpantItemService.get();
  }
  refresh(): void {
    window.location.reload();
  }
}
