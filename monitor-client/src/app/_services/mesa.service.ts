import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(protected http:HttpClient) { }

  getInfoMesa(lgnum, queue) {
  	return this.http.get("api/mesa/" + lgnum + "/" + queue);
  }

}
