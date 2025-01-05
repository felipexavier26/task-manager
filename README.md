# Sistema de Lista de Tarefas

Este é um sistema para gerenciamento de tarefas, desenvolvido com Laravel no backend e React no frontend. O sistema oferece funcionalidades para listar, adicionar, editar e excluir tarefas, garantindo uma interface responsiva e intuitiva. O Laravel Breeze foi utilizado para autenticação, e o design foi construído com Tailwind CSS.

---

## Tecnologias Utilizadas

- **Laravel**: Framework PHP para construção do backend e da API RESTful.
- **Laravel Breeze**: Implementação de autenticação simples para registro, login e logout.
- **React**: Biblioteca JavaScript para a criação de uma interface de usuário dinâmica.
- **MySQL**: Banco de dados utilizado para armazenamento de informações.
- **Inertia.js**: Permite integração perfeita entre Laravel e React para a criação de SPAs.
- **Tailwind CSS**: Framework CSS para o design responsivo e estilizado da interface.
- **SweetAlert2**: Biblioteca JavaScript para exibir alertas e notificações modais elegantes.
- **Bootstrap**: Framework CSS para estilização e estruturação responsiva da interface.

---

## Funcionalidades Principais

### Backend
- **API RESTful**:
  - Suporte a operações CRUD (criação, leitura, atualização e exclusão) de tarefas.
  - Endpoints para consumir e gerenciar tarefas:

  - Listar tarefas: GET /api/tarefas
  - Obter detalhes de uma tarefa: GET /api/tarefas/{id}
  - Criar tarefa: POST /api/tarefas
  - Atualizar tarefa: PUT /api/tarefas/{id}
  - Excluir tarefa: DELETE /api/tarefas/{id}
  - Exemplo de resposta de uma tarefa:
  
    ```json
  {
        "id_tarefa": 5,
        "titulo": "Tarefa 5",
        "descricao": "Descrição da tarefa 5",
        "data_hora_criacao": "2025-01-04 16:59:42",
        "data_hora_conclusao": null,
        "status": "pendente",
        "created_at": null,
        "updated_at": null
    },
    ```
- **Autenticação**:  - Implementada com Laravel Breeze para registro, login e logout.

### Frontend
- **CRUD de Tarefas**:  - Funcionalidades completas para listar, adicionar, editar e excluir tarefas.
- **Paginação**:  - Componente de paginação dinâmica para navegar entre páginas de tarefas.
- **Interface Responsiva**:  - Desenvolvida com React e estilizada com Tailwind CSS.
- **Status de Tarefas**:  - Exibição clara dos status: "Pendente", "Em andamento" ou "Concluída".
- **Alertas e Validação**:  - Mensagens claras de sucesso e erro para feedback ao usuário.

---


## Configuração do Banco de Dados
    
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=postgres
    DB_USERNAME=postgres
    DB_PASSWORD=123

## Instruções de Instalação e Execução

### Requisitos
- **PHP**: >= 8.0
- **Composer**: Para gerenciar as dependências do Laravel.
- **Node.js e npm**: Para o frontend React.
- **MySQL**: Banco de dados configurado e acessível.

### Passos
1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/felipexavier26/task-manager.git
   cd task-manager

2. **Configuração do Backend**:
   ```bash

   - Instale as dependências do Laravel
   composer install

   - Copie o arquivo de exemplo de configuração
   cp .env.example .env


3. **Execute as migrações e seeders**:
   ```bash
    php artisan migrate --seed

4. **Geração de Chave da Aplicação**:
   ```bash
    php artisan key:generate


5. **Configuração do Frontend**:
    ```bash
    - Instale as dependências do npm:
        npm install
    
    - Compile os arquivos do frontend
        npm run dev


6. **Inicie o Servidor de Desenvolviment**:
    ```bash
    php artisan serve

7. **Inicie o Servidor de Desenvolviment**:
    ```bash
    Abra o navegador em http://localhost:8000.
