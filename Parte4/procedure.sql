DROP DATABASE IF EXISTS TechMarket;
CREATE DATABASE TechMarket;
USE TechMarket;

-- ==========================
-- 1. Criação das Tabelas
-- ==========================
CREATE TABLE Contas (
    id_conta INT AUTO_INCREMENT PRIMARY KEY,
    nome_conta VARCHAR(100) NOT NULL
);

CREATE TABLE Transacoes (
    id_transacao INT AUTO_INCREMENT PRIMARY KEY,
    id_conta INT NOT NULL,
    tipo ENUM('CREDITO','DEBITO') NOT NULL,
    valor DECIMAL(15,2) NOT NULL,
    data_transacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_conta) REFERENCES Contas(id_conta),
    INDEX idx_conta_data (id_conta, data_transacao)
);

-- ==========================
-- 2. Dados de Teste
-- ==========================
INSERT INTO Contas (nome_conta) VALUES
('João Silva'),
('Maria Oliveira');

INSERT INTO Transacoes (id_conta, tipo, valor, data_transacao) VALUES
(1, 'CREDITO', 500.00, '2025-10-01 10:00:00'),
(1, 'DEBITO', 200.00, '2025-10-05 15:00:00'),
(1, 'CREDITO', 300.00, '2025-10-10 09:30:00'),
(1, 'DEBITO', 100.00, '2025-10-15 14:45:00'),
(1, 'CREDITO', 700.00, '2025-10-20 08:00:00'),
(2, 'CREDITO', 1000.00, '2025-10-02 12:00:00'),
(2, 'DEBITO', 500.00, '2025-10-07 16:30:00'),
(2, 'CREDITO', 200.00, '2025-10-12 11:00:00');

-- ==========================
-- 3. Procedure: Extrato da Conta
-- ==========================
DELIMITER //

DROP PROCEDURE IF EXISTS EP_ExtratoConta //
CREATE PROCEDURE EP_ExtratoConta (
    IN p_id_conta INT,
    IN p_data_inicio DATETIME
)
BEGIN
    DECLARE saldo_atual DECIMAL(15,2);

    -- Calcula o saldo atual da conta
    SELECT 
        SUM(CASE 
            WHEN tipo = 'CREDITO' THEN valor
            ELSE -valor
        END)
    INTO saldo_atual
    FROM Transacoes
    WHERE id_conta = p_id_conta;

    -- Retorna o saldo
    SELECT 
        p_id_conta AS ID_Conta,
        saldo_atual AS Saldo_Atual;

    -- Retorna as últimas 10 transações após a data informada
    SELECT
        id_transacao AS ID_Transacao,
        tipo AS Tipo_Transacao,
        valor AS Valor_Transacao,
        data_transacao AS Data_Transacao
    FROM Transacoes
    WHERE id_conta = p_id_conta
      AND data_transacao >= p_data_inicio
    ORDER BY data_transacao DESC
    LIMIT 10;
END //

DELIMITER ;

-- ==========================
-- 4. Testes
-- ==========================
CALL EP_ExtratoConta(1, DATE_SUB(CURDATE(), INTERVAL 30 DAY));
CALL EP_ExtratoConta(2, '2025-10-01');
