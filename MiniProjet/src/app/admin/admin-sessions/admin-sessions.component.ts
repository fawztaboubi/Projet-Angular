import { FakesessionitemService } from './../fakesessionitem.service';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-sessions',
  providers :[FakesessionitemService],
  templateUrl: './admin-sessions.component.html',
  styleUrls: ['./admin-sessions.component.css']
})
export class AdminSessionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
