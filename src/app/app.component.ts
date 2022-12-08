import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produto } from './model/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }
  title = 'crud';

  listaDeProduto: Produto[] = [
    new Produto(1, "aaa", "00010101", "aaaaaa"),
    new Produto(2, "bbb", "00020202", "bbbbbb"), new Produto(1, "aaa", "00010101", "aaaaaa"),
    new Produto(2, "bbb", "00020202", "bbbbbb")
  ];

  settings = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'ID'
      },
      nome: {
        title: 'Name'
      },
      codigo: {
        title: 'Codigo'
      },
      codigoncm: {
        title: 'Codigo NCM'
      }
    }
  };



  async obterProdutos() {
    this.http.get<Produto[]>('http://192.168.1.19:3000/produto').subscribe((ret) => {
      this.listaDeProduto = ret;
      console.log(ret);
    });
  }


  onDeleteConfirm(event: any) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      alert(event.data.id);
      this.apagarRegistro(event.data.id);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event: any) {
    console.log("Create Event In Console")
    const newProduto = new Produto(event.newData.id, event.newData.nome, event.newData.codigo, event.newData.codigoncm,);
    this.inserirRegistro(newProduto);
  }

  onEditConfirm(event: any) {
    console.log("Edit Event In Console")
    console.log(event);
    const newProduto = new Produto(event.newData.id, event.newData.nome, event.newData.codigo, event.newData.codigoncm,);
    this.atualizarRegistro(newProduto);
  }



  apagarRegistro(id: number) {
    this.http.delete('http://192.168.1.19:3000/produto/' + id).subscribe((ret) => {
      alert('Produto excluido')
    });
  }


  inserirRegistro(p: Produto) {
    const data = {
      nome: p.nome,
      codigo: p.codigo,
      codigoncm: p.codigoncm,
    }
    this.http.post('http://192.168.1.19:3000/produto/', data).subscribe((ret) => {
      alert('Produto adicionado')
    });
  }

  atualizarRegistro(p: Produto) {

    this.http.put('http://192.168.1.19:3000/produto/' + p.id, p).subscribe((ret) => {
      alert('Produto editado')
    });
  }


}
