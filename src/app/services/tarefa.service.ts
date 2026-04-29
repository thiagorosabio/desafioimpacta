import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';
@Injectable({ providedIn: 'root' })
export class TarefaService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7001/api/tarefas';

  listar() {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  buscar(id: number) {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  criar(t: Tarefa) {
    return this.http.post<Tarefa>(this.apiUrl, t);
  }

  atualizar(t: Tarefa) {
    return this.http.put<void>(`${this.apiUrl}/${t.id}`, t);
  }

  excluir(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
