export interface Person {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string;
  ultimaOcorrencia: UltimaOcorrencia;
}

interface UltimaOcorrencia {
  dtDesaparecimento: string;
  dataLocalizacao: string;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO;
  listaCartaz: [
    {
      tipoCartaz: string;
      urlCartaz: string;
    }
  ];
  ocoId: number;
}

interface OcorrenciaEntrevDesapDTO {
  informacao: string;
  vestimentasDesaparecido: string;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: number;
}

export interface Response {
  content: Person[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: any;
  size: number;
  sort: any;
  totalElements: number;
  totalPages: number;
}
