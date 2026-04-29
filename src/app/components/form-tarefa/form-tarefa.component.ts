import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';
@Component({ selector: 'app-form', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './form.component.html' })
export class FormComponent implements OnInit {
  t: Tarefa = { titulo: '', descricao: '', status: 'Pendente' };
  isEdit = false;
  private svc = inject(TarefaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.svc.buscar(+id).subscribe(x => this.t = x);
    }
  }

  salvar() {
    if (!this.t.titulo.trim()) {
      return alert('Título obrigatório');
    }

    const op = this.isEdit
      ? this.svc.atualizar(this.t)
      : this.svc.criar(this.t);

    (op as Observable<any>).subscribe(() => this.router.navigate(['/']));
  }
}
