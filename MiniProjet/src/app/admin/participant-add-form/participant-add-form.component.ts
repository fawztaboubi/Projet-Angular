import { Component, OnInit } from '@angular/core';
import{FakeParticipantServiceService} from '../fake-participant-service.service';
import{Participant} from '../participant';
@Component({
  selector: 'app-participant-add-form',
  templateUrl: './participant-add-form.component.html',
  styleUrls: ['./participant-add-form.component.css']
})
export class ParticipantAddFormComponent implements OnInit {

  constructor(private participantfakeservice: FakeParticipantServiceService) { }

  ngOnInit(): void {
  }
  addparticipant(participant: Participant) {
    console.log(participant);
    this.participantfakeservice.add(participant);
    }
}





  