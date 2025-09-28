import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCurrency1759012065802 implements MigrationInterface {
    name = 'AddCurrency1759012065802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`CREATE TABLE "currency" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_723472e41cae44beb0763f4039c" UNIQUE ("code"), CONSTRAINT "UQ_77f11186dd58a8d87ad5fff0246" UNIQUE ("name"), CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "currency"`);
    }

}
