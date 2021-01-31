import { RouterModule,Routes } from '@angular/router';
import { FakesessionitemService } from './../admin/fakesessionitem.service';
import { FakeformateursitemService} from'./../admin/fakeformateursitem.service'
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-component',
  providers :[FakesessionitemService,FakeformateursitemService],
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
