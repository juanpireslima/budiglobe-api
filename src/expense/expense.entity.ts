import { Currency } from '../currency/currency.entity';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Expense extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'name'})
  name: string;

  @Column({ type: 'varchar', name: 'description', nullable: true})
  description?: string;

  @Column({ type: 'integer', name: 'value_in_cents' })
  valueInCents: number;

  @Column({ type: 'integer', name: 'fees_in_cents', nullable: true })
  feesInCents?: number;

  @Column({ type: 'varchar', name: 'city', nullable: true})
  city?: string;

  @Column({ type: 'varchar', name: 'country', nullable: true})
  country?: string;

  @Column({ type: 'date', name: 'payment_date' })
  paymentDate: Date;

  @Column({ type: 'date', name: 'expense_date' })
  expenseDate: Date;

  @ManyToOne(
    () => Currency,
    (currency) => currency.id,
    {
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
      nullable: true,
    },
  )
  @JoinColumn({ name: 'currency_id' })
  currency: Currency;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp with time zone' })
  deletedAt: Date;
}