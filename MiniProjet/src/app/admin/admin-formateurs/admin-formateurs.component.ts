import {FakeformateursitemService} from '../fakeformateursitem.service'
import { Component, OnInit, Input } from '@angular/core';
import { formateur } from '../formateur';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-principale',
  templateUrl: './admin-formateurs.component.html',
  styleUrls: ['./admin-formateurs.component.css']

})
export class AdminFormateursComponent implements OnInit {
  S:any;
  personne: any;
  constructor(private formateurItemService: FakeformateursitemService) { 
   
   this.personne=formateurItemService.get();
  }

  ngOnInit(): void {
  }
  onDelete()
  {
this.formateurItemService.delete(this.S);
  }
}
/* Static data */ 





