import { Routes } from '@angular/router';
import { ListaComponent } from './components/lista-tarefas/lista-tarefas.component';
import { FormComponent } from './components/form-tarefa/form-tarefa.component';
export const routes: Routes = [ { path:'', component:ListaComponent }, { path:'novo', component:FormComponent }, { path:'editar/:id', component:FormComponent }, { path:'**', redirectTo:'' } ];
