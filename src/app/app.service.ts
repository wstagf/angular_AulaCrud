import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CustomHttpClient } from "./customHTTPClient";
import { Produto } from "./model/produto.model";

@Injectable()
export class AppService {
    constructor(private customClient: CustomHttpClient) {

    }

    obterProdutos(): Observable<Produto[]> {
        return this.customClient.get('/produto');
    }

    apagarRegistro(id: number) {
        this.customClient.delete('/produto/' + id).subscribe((ret) => {
            alert('Produto excluido')
        });
    }


    inserirRegistro(p: Produto) {
        const data = {
            nome: p.nome,
            codigo: p.codigo,
            codigoncm: p.codigoncm,
        }
        this.customClient.post('/produto/', data).subscribe((ret) => {
            alert('Produto adicionado')
        });
    }

    atualizarRegistro(p: Produto) {
        this.customClient.put('/produto/' + p.id, p).subscribe((ret) => {
            alert('Produto editado')
        });
    }

}