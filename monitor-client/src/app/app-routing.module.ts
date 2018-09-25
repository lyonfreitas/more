import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MesaComponent } from './mesa/mesa.component';

const routes: Routes = [
	{path: '', redirectTo: '/mesa', pathMatch: 'full'},
	{path: 'mesa', component: MesaComponent}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
