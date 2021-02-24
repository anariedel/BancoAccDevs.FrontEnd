import { EnumConta } from '../enumconta.enum';

export interface Conta {
    descricao: string;
    id: bigint;
    numero: string;
    saldo: number;
    tipo: EnumConta
}