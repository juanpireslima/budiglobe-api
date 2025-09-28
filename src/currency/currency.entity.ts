import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'code', unique: true })
  code: string;

  @Column({ type: 'varchar', name: 'name', unique: true })
  name: string;
}
