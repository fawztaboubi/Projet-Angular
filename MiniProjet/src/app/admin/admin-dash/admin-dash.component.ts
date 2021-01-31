import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{MatGridListModule}from'@angular/material/grid-list';
import{ FakesessionitemService} from '../fakesessionitem.service';
@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})



export class AdminDashComponent implements OnInit {
  items:any;
  //keys:any;
  S=[0];
  tracklist=["Track"]; //list of keys
  //values:any;
  
  constructor(private sessionItemService: FakesessionitemService) {
    this.items=sessionItemService.get(); 
    for( let session of this.items){
      if(this.tracklist.includes(session.track)){}
      else{
      this.tracklist.push(session.track);}
      
    }

    //this.keys=Object.keys(this.tracklist);
    this.S.pop();
    
    for( let session of this.tracklist)
        {
          var M=0;
          for( let ses of this.items)
          {
             if(session===ses.track)
             {M=M+1;}
          }
          
          this.S.push(M);
        }
        
    //this.values=Object.values(this.S);   
    this.S.shift();
  }


  ngOnInit(): void {
  }

}
