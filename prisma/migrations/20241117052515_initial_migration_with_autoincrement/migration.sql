-- AlterTable
CREATE SEQUENCE curriculo_id_seq;
ALTER TABLE "Curriculo" ALTER COLUMN "Id" SET DEFAULT nextval('curriculo_id_seq');
ALTER SEQUENCE curriculo_id_seq OWNED BY "Curriculo"."Id";
