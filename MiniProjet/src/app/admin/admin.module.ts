
import { FakesessionitemService } from './fakesessionitem.service';
import { AdminComponentComponent } from './../admin-component/admin-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule}from'@angular/material/grid-list';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminSessionsComponent } from './admin-sessions/admin-sessions.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import {  AdminFormateursComponent } from './admin-formateurs/admin-formateurs.component';
import { AdminParticipantsComponent } from './admin-participants/admin-participants.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { ModifFormateurFormComponent } from './modif-formateur-form/modif-formateur-form.component';
import { ParticipantItemListComponent } from './participant-item-list/participant-item-list.component';
import { ParticipantItemComponent } from './participant-item/participant-item.component';
import { ParticipantAddFormComponent } from './participant-add-form/participant-add-form.component';
import { ParticipantEditFormComponent } from './participant-edit-form/participant-edit-form.component';

const adminRoutes: Routes = [
  {
  path: '',
  component: AdminComponentComponent,
  children: [
  { path: 'adminSessions', component: AdminSessionsComponent, children:[
    { path: 'add', component: SessionAddFormComponent },
    { path: '/edit:id', component:
    SessionEditFormComponent },
    { path: 'list', component: SessionItemListComponent
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
    ], },

  { path: 'adminParticipant', component: AdminParticipantsComponent },
  { path: 'adminFormateurs', component: AdminFormateursComponent, children:[ {path:'modif-formateur',component:ModifFormateurFormComponent},{path:'/page1',redirectTo: 'adminFormateurs', pathMatch: 'full'}],},
  { path: 'adminDashboard', component: AdminDashComponent},
  { path: '', redirectTo: 'adminDashboard', pathMatch: 'full' },]
  
  
  
  },
  
    ];
  
@NgModule({
  declarations: [AdminComponentComponent, SessionItemComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent, AdminSessionsComponent, AdminDashComponent, AdminFormateursComponent, AdminParticipantsComponent, ModifFormateurFormComponent, ParticipantItemListComponent, ParticipantItemComponent, ParticipantAddFormComponent, ParticipantEditFormComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,MatGridListModule,MaterialModule,
  ],
  bootstrap: [AdminComponentComponent],
  providers: [FakesessionitemService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
