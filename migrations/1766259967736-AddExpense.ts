import { MigrationInterface, QueryRunner } from "typeorm";

export class AddExpense1766259967736 implements MigrationInterface {
    name = 'AddExpense1766259967736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "expense" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "value_in_cents" integer NOT NULL, "fees_in_cents" integer, "city" character varying, "country" character varying, "payment_date" date NOT NULL, "expense_date" date NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "currency_id" uuid, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_0faf8e64b8acbe65bbd92366578" FOREIGN KEY ("currency_id") REFERENCES "currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_0faf8e64b8acbe65bbd92366578"`);
        await queryRunner.query(`DROP TABLE "expense"`);
    }

}
