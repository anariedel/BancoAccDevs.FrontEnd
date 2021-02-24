import { EnumTransacao } from './enumtransacao.enum';
import { PlanoConta } from './planoconta.interface';

export interface Lancamento {
    conta: bigint,
    data: string,
    descricao: string,
    id: bigint,
    planoConta: PlanoConta,
    tipo: EnumTransacao,
    valor: number
}