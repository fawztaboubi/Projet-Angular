
import { Component, OnInit,Input } from '@angular/core';
import{FakeParticipantServiceService} from '../fake-participant-service.service';
import{Participant} from'../participant';

@Component({
  selector: 'app-participant-item',
  templateUrl: './participant-item.component.html',
  styleUrls: ['./participant-item.component.css']
})
export class ParticipantItemComponent implements OnInit {
   @Input() participant:any;
  
  constructor(private participantItemService:FakeParticipantServiceService ) {
    //this.participant=this.participantItemService.get();
   }

  ngOnInit(): void {
  }
  onDelete()
  {
  this.participantItemService.delete(this.participant);
  }

}

