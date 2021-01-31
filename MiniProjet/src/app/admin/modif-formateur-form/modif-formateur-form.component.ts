
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FakeformateursitemService} from '../fakeformateursitem.service';
import { formateur } from './../formateur';

@Component({
  selector: 'app-modif-formateur-form',
  templateUrl: './modif-formateur-form.component.html',
  styleUrls: ['./modif-formateur-form.component.css']
})
export class ModifFormateurFormComponent implements OnInit {

  id: number = 0;
  private sub: any;
  formateur: any;
  constructor(private route: ActivatedRoute, private formateurItemService: FakeformateursitemService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];  });
     
      this.formateur = this.formateurItemService.getFormateur(this.id);
  }
  editFormateur(formateuritem: formateur) {
    console.log(formateuritem);
    }

}
