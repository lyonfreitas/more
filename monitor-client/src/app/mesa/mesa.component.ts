import { Component, OnInit } from '@angular/core';
import { MesaService } from '../_services/mesa.service';
import { Observable } from 'rxjs';

import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  private otspendentes;

  displayedColumns: string[] = ['tanum', 'matnr', 'maktx', 'volum', 'status'];
  dataSource: MatTableDataSource<any>;

  constructor(private ms:MesaService) { }

  ngOnInit() {
  	this.dataSource = new MatTableDataSource([]);
  }

  getInfoMesa(deposito, mesa) {
  	this.ms.getInfoMesa(deposito, mesa).subscribe(
  		(data:any) => {
  			this.otspendentes = data.otspendentes;
  			this.dataSource.data = data.itens;
  		},
  		(errorEvent:ErrorEvent) => {
  			console.log(errorEvent);
  		}
  	);
  }

}
