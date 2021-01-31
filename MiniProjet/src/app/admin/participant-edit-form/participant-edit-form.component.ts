import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{FakeParticipantServiceService} from '../fake-participant-service.service';
import{Participant} from '../participant';

@Component({
  selector: 'app-participant-edit-form',
  templateUrl: './participant-edit-form.component.html',
  styleUrls: ['./participant-edit-form.component.css']
})
export class ParticipantEditFormComponent implements OnInit {

  id: number = 0;
  private sub: any;
  participant: any;
  constructor(private route: ActivatedRoute, private participantItemService:FakeParticipantServiceService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      });
      this.participant = this.participantItemService.getParticipant(this.id);
  }
  modifierparticipant(participantitem: Participant) {
    console.log(participantitem);
    }

}
