## TST012 Marcar tarefas por Status

**Caso de uso em que se baseia:** CT006 Marcar tarefas por Status.

**Cenário:** Fluxo Principal

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome               | Login    | Senha  |
|----------          | ------   |------  |
| Mariana            | mari1    | senha1 |

b) Credenciais deverão estar cadastradas no sistema.
* Username: mari1
* Senha: senha1

c) Após logar, aparecerá a lista de tarefas:

| Título     | Categoria  | Descrição             | Prioridade | Status       |
|-------     | ---------  | ----------            | ---------- | -----        |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       | Em andamento |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       | Pendente     | 
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      | Em andamento |
| Treinar    | Academia   | Treinar braços        | Baixa      | Pendente     |


**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a visualização de tarefas.
4. Selecionar "Entrega1".
5. Alterar status para "Concluído"

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Tarefa alterada"

b) O status da tarefa é alterado.

c) Não é feita nenhuma alteração e a página inicial fica com as seguintes informações: 

| Título     | Categoria  | Descrição             | Prioridade | Status       |
|-------     | ---------  | ----------            | ---------- | -----        |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       | Em andamento |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       | Concluído    | 
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      | Em andamento |
| Treinar    | Academia   | Treinar braços        | Baixa      | Pendente     |


**Resultado Obtido:**

(x) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefas listadas por status.

**Data da última execução do teste:**

01/04/2025
