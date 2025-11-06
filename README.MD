# 💻 Projeto Integrado – TechMarket

> 🚀 **Soluções Integradas para Desafios Reais em Desenvolvimento de Sistemas**

Este repositório apresenta o desenvolvimento completo do **Projeto Integrado Interdisciplinar (PI)** do curso de **Análise e Desenvolvimento de Sistemas**, integrando múltiplas disciplinas em um projeto prático e funcional.

---

## 🧠 Contexto do Projeto

A **TechMarket**, uma empresa fictícia de e-commerce, enfrenta desafios de **desempenho, escalabilidade, responsividade, segurança e validação de dados**.  
A missão deste projeto foi propor e implementar **soluções técnicas completas**, aplicando conhecimentos de **computação em nuvem, frameworks, banco de dados e programação web**.

---

## 🧩 Estrutura do Projeto

| Etapa | Descrição | Tecnologias |
|:------|:-----------|:-------------|
| **1️⃣ Escalonamento em Nuvem** | Proposta técnica de melhoria de performance via escalonamento horizontal. | AWS, Docker, Load Balancer |
| **2️⃣ API de Transferência Bancária** | Implementação de uma API REST para transferências entre contas. | Node.js, Express, UUID |
| **3️⃣ Extrato Responsivo** | Interface web dinâmica com destaque de transações e design responsivo. | HTML5, CSS3, JavaScript |
| **4️⃣ Procedure SQL** | Criação de procedure para cálculo de saldo e histórico de transações. | MySQL |
| **5️⃣ Validação de Formulário** | Validação de CPF, telefone e data de nascimento no front-end. | JavaScript Puro |

---

## ⚙️ Tecnologias Utilizadas

<div align="center">

| Categoria | Tecnologias |
|:-----------|:-------------|
| **Back-End** | Node.js, Express, UUID |
| **Front-End** | HTML5, CSS3, JavaScript |
| **Banco de Dados** | MySQL |
| **Ferramentas de Teste** | Postman, MySQL Workbench |
| **Ambiente** | VS Code, Node.js 20+ |

</div>

---

## 📁 Estrutura de Pastas
```bash
📦 Projeto-Integrado-TechMarket

|── 📂 backend
| └── index.js
├── 📂 frontend 
| ├── index.html
| ├── style.css
| └── script.js
|── 📂 database
|└── procedure_techmarket.sql
└── README.md
```

---

## 🔧 Instalação e Execução da API

```bash
# Clonar este repositório
git clone https://github.com/seuusuario/projeto-integrado-techmarket.git

# Acessar o diretório do backend
cd backend

# Instalar dependências
npm install

# Executar o servidor
node index.js

Após iniciar o servidor, acesse:
👉 http://localhost:3000/api/transferencias

```

## Exemplo de requisição via POST:
```bash
{
  "contaOrigem": "12345",
  "contaDestino": "67890",
  "valor": 250
}
```

## 🧮 Procedure SQL – EP_ExtratoConta
```bash
CALL EP_ExtratoConta(1, DATE_SUB(CURDATE(), INTERVAL 30 DAY));
```
```Retorna o saldo atual da conta e as últimas transações realizadas.```

## 🎨 Layout Responsivo

O extrato bancário foi desenvolvido com foco em acessibilidade, usabilidade e responsividade, adaptando-se automaticamente a diferentes tamanhos de tela.
Transações acima de R$ 5.000,00 recebem destaque visual para rápida identificação.


## 🧰 Validação de Formulário

O formulário de abertura de conta inclui verificações automáticas:

- CPF com 11 dígitos válidos;

- Data de nascimento real (não futura);

- Telefone no formato (XX) XXXXX-XXXX.

``` 💡 Feedback visual em tempo real orienta o usuário durante o preenchimento.```

## 🧾 Prints de Execução

```📸 Os prints de execução de cada etapa (API, banco, layout, validação) estão disponíveis na pasta Imagem.```

## 🏁 Conclusão

O Projeto Integrado Anhanguera – TechMarket demonstra a integração entre diferentes áreas da tecnologia, refletindo o domínio de conceitos essenciais de:

- Arquitetura de sistemas;

- APIs RESTful;

- Banco de dados relacional;

- Validação e UX em front-end;

- Escalabilidade em nuvem.

```“A verdadeira integração de sistemas acontece quando teoria e prática convergem para resolver problemas reais.”```