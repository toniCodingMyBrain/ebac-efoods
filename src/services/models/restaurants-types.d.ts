declare interface Food {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  foto: string;
  porcao: string;
}

declare interface Restaurant {
  id: number;
  titulo: string;
  tipo: string;
  destacado: boolean;
  capa: string;
  avaliacao: string;
  descricao: string;
  cardapio: Food[];
}
