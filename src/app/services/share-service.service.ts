import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  private details;
  constructor() { }

setDetails(data) {
  this.details = data;
}

getDetails(){
  return this.details;
}
}
