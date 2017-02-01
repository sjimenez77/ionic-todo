import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('todos');  
  }
 
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

}
