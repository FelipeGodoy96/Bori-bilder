CREATE DATABASE boribilder;

CREATE TABLE substancias (
  substancia_id SERIAL PRIMARY KEY NOT NULL ,
  nome VARCHAR(255) NOT NULL,
  meia_vidah INTEGER NOT NULL,
  descricao TEXT,
  colaterais TEXT
);