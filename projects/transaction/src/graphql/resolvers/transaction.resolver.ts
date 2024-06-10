import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  TransactionInput,
  TransactionModel,
} from '../models/transaction.model';
import { TransationService } from '../../transaction/transaction.service';

@Resolver()
export class TransactionResolver {
  constructor(private readonly service: TransationService) {}

  @Query(() => [TransactionModel])
  async getTransaction() {
    return this.service.find();
  }

  @Mutation(() => TransactionModel, { nullable: true })
  async createTransaction(
    @Args('createTransactionInput')
    transactionInput: TransactionInput,
  ) {
    await this.service.create(transactionInput);
  }
}
