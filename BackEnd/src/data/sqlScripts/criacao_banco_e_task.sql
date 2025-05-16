CREATE DATABASE ToList;

USE ToList;

CREATE TABLE Task (
	TaskId 			INT AUTO_INCREMENT PRIMARY KEY,
    TaskTarefa 		VARCHAR(200),
	TaskDescricao 	VARCHAR(200)
);

SELECT * FROM Task;

INSERT INTO Task 
	(TaskTarefa, TaskDescricao)
VALUES 
	('Tarefa 1', 'Faz aí a primeira coisa'),
    ('Tarefa 2', 'Faz aí a segunda parada'),
    ('Tarefa 3', 'Agora, a terceira'),
    ('Tarefa 4', 'Na quarta tu pega o jeito, vai lá'),
    ('Tarefa 5', 'Pra fechar, quinta e última(até agora) tarefa');

SELECT * FROM Task;