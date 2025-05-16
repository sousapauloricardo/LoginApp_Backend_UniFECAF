#CREATE DATABASE ToList;

#USE ToList;

CREATE TABLE User (
	UserId 			INT AUTO_INCREMENT PRIMARY KEY,
    UserName 		VARCHAR(200),
	UserEmail 		VARCHAR(200)
);

SELECT * FROM User;

INSERT INTO User 
	(UserName, UserEmail)
VALUES 
	('Tarefa 1', 'Faz aí a primeira coisa'),
    ('Tarefa 2', 'Faz aí a segunda parada'),
    ('Tarefa 3', 'Agora, a terceira'),
    ('Tarefa 4', 'Na quarta tu pega o jeito, vai lá'),
    ('Tarefa 5', 'Pra fechar, quinta e última(até agora) tarefa');

SELECT * FROM Task;