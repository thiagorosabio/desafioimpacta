import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';
@Component({ selector: 'app-lista', standalone: true, imports: [CommonModule, RouterLink], templateUrl: './lista.component.html' })
export class ListaComponent implements OnInit {
  tarefas: Tarefa[] = [];
  private svc = inject(TarefaService);
  ngOnInit() { this.carregar(); }
  carregar() { this.svc.listar().subscribe(t => this.tarefas = t); }
  excluir(id?: number) { if (id && confirm('Excluir?')) this.svc.excluir(id).subscribe(() => this.carregar()); }
}
