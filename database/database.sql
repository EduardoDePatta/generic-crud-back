CREATE DATABASE ng_cardapio_db;

USE ng_cardapio_db;

CREATE TABLE pizzas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    1200_id_categorias_prodico INT(11),
    1200_geral_preco FLOAT,
    1200_geral_publicado BOOLEAN,
    1200_geral_data_postagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    
    1200_geral_prodico_nome VARCHAR(50),
    1200_geral_prodico_aparencia VARCHAR(255),
    1200_geral_prodico_observacao TEXT,
    1200_geral_descricao VARCHAR(255),
    1200_geral_detalhe TEXT,
    1200_piz_tamanho SMALLINT(2),
    1200_piz_promocao_aplicada BOOLEAN,
    1200_aplica_meio SMALLINT(4)
);

DESCRIBE pizzas;
