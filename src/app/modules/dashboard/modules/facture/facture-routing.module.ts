import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture.component';
import { ListFactureComponent } from './components/list-facture/list-facture.component';
import { EditFactureComponent } from './components/edit-facture/edit-facture.component';
import { AddFactureComponent } from './components/add-facture/add-facture.component';

const routes: Routes = [
  { path: '', component: ListFactureComponent },
  { path: 'edit-facture/:id', component: EditFactureComponent },
  { path: 'add-facture', component: AddFactureComponent },
  { path: 'details/:id', component: EditFactureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
