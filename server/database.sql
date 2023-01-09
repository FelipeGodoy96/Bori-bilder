CREATE DATABASE boribilder;

CREATE TABLE substancias (
  substancia_id SERIAL PRIMARY KEY NOT NULL ,
  nome VARCHAR(255) NOT NULL,
  meia_vidah INTEGER NOT NULL,
  descricao TEXT,
  colaterais TEXT
);

CREATE TABLE locaisAplicacao (
  local_id SERIAL PRIMARY KEY NOT NULL,
  localNome VARCHAR(50) NOT NULL,
  lado VARCHAR(20),
  quadrante VARCHAR(20)
);

CREATE TABLE aplicacoes (
  aplicacao_id SERIAL PRIMARY KEY NOT NULL,
  substanciaID INT NOT NULL,
  FOREIGN KEY (substanciaID) REFERENCES substancias (substancia_id),
  dosagem VARCHAR(15) NOT NULL,
  data_horario TIMESTAMP,
  localAplicacaoID INT NOT NULL,
  FOREIGN KEY (localAplicacaoID) REFERENCES locaisAplicacao (local_id)
);


/* SUBSTANCIAS 

INSERT INTO substancias (nome, meia_vidah, descricao, colaterais) VALUES ('Enantato de Testosterona', 120, 'texto', 'Acne, estrias, alterações nas articulações, atrofia dos testículos e diminuição dos espermatozóides, alterações no desejo sexual e impotência, automento das mamas em homens, masculinização da mulher, risco de doença cardiovascular, problemas no fígado, queda de cabelo.');