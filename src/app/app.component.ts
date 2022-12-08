import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Produto } from './model/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: AppService) {

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






  onDeleteConfirm(event: any) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      alert(event.data.id);
      this.service.apagarRegistro(event.data.id);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event: any) {
    console.log("Create Event In Console")
    const newProduto = new Produto(event.newData.id, event.newData.nome, event.newData.codigo, event.newData.codigoncm,);
    this.service.inserirRegistro(newProduto);
  }

  onEditConfirm(event: any) {
    console.log("Edit Event In Console")
    console.log(event);
    const newProduto = new Produto(event.newData.id, event.newData.nome, event.newData.codigo, event.newData.codigoncm,);
    this.service.atualizarRegistro(newProduto);
  }


  obterProdutos() {
    this.service.obterProdutos().subscribe((ret) => {
      this.listaDeProduto = ret;
    })
  }





}
