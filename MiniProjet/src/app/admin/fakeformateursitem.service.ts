import { Injectable } from '@angular/core';
import {FORMATEURITEM} from "./formateurs";

@Injectable({
  providedIn: 'root'
})
export class FakeformateursitemService {

  constructor() { }
  get() {return FORMATEURITEM;}
  add(personne:any) {
    personne.id = FORMATEURITEM.length + 1;
    FORMATEURITEM.push(personne);
    }

    delete(personne:any) {
      let index;
      index = FORMATEURITEM.indexOf(personne);
      if (FORMATEURITEM.indexOf(personne) >= 0) {
        FORMATEURITEM.splice(index, 1);
      }
      }

      getFormateur(id: number) {
        return FORMATEURITEM[id - 1];
        }
}
