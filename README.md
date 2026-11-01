# Automação Web com Cypress

Projeto de automação dos casos de teste da aplicação [Automation Exercise](https://www.automationexercise.com/), desenvolvido como atividade individual.

## Requisitos

- Node.js 22.x ou compatível
- npm
- Acesso à internet para acessar a aplicação de teste

## Instalação

Na raiz do projeto, instale as dependências:

```bash
npm ci
```

## Executar os testes

Para executar todos os testes em modo headless:

```bash
npm test
```

O comando executa `cypress run`. A suíte cobre os casos 1, 2, 3, 4, 5, 8, 9, 10, 15 e 16 da página [Test Cases](https://www.automationexercise.com/test_cases).

Os testes acessam um site público externo, então a execução depende da disponibilidade desse serviço e da estabilidade da conexão. Os casos de login e cadastro existente usam os dados definidos em `cypress/modules/dados_teste.js`; a conta correspondente precisa estar disponível no site.

## Relatórios

Ao final da execução, o reporter Mochawesome gera o relatório HTML em:

```text
cypress/reports/html/index.html
```

Na execução do GitHub Actions, o diretório do relatório é publicado como artefato chamado `mochawesome-report`. Acesse-o pela execução correspondente na aba **Actions** do GitHub.

## GitHub Actions

O workflow está em `.github/workflows/pipeline.yaml` e pode ser iniciado:

- manualmente pela aba **Actions**;
- em push para a branch `main`;
- diariamente às 16h25, horário de São Paulo (UTC−3).

O workflow instala as dependências com `npm ci`, executa `npm test` e tenta publicar o relatório mesmo que os testes falhem.

## Organização do projeto

```text
cypress/
├── e2e/                 # Cenários de teste
├── modules/
│   ├── cadastro/        # Ações e validações de cadastro
│   ├── compra/          # Etapas do fluxo de compra
│   ├── login/           # Login e logout
│   ├── navegar/         # Navegação comum
│   ├── produtos/        # Listagem, detalhes e busca
│   ├── subscrever/      # Inscrição por e-mail
│   └── dados_teste.js   # Dados usados pelos cenários
└── support/             # Configuração e comandos de suporte do Cypress
```

As ações reutilizáveis ficam em módulos separados por responsabilidade. Os cenários em `cypress/e2e/` organizam o fluxo de cada caso e chamam esses módulos.
