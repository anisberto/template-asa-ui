export class Produto {

    id!: any;
    name: any;
    description: any;
    code: any;
    image: any;
}

export class ListaProdutos {
    total: string="";
    list: Produto[] = [];
}

export class ObjetoMontadora {
    total: string="";
    list: Montatora[] = [];
}

export class Montatora {
    id!: number;
    name: string="";
}

export class ObjetoModelo {
    total: string="";
    list: Modelo[] = [];
}

export class Modelo {
    id!: number;
    name: string="";
}