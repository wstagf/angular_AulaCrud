export class Produto {
    id: number | undefined;
    nome: string | undefined;
    codigo: string | undefined;
    codigoncm: string | undefined;

    constructor(_id: number, _nome: string, codigo: string, codigoncm: string) {
        this.id = _id;
        this.nome = _nome;
        this.codigo = codigo;
        this.codigoncm = codigoncm;
    }

}