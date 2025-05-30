## TST012 Marcar tarefas por Status

**Caso de uso em que se baseia:** CT006 Marcar tarefas por Status.

**Cenário:** Fluxo Principal

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome          | Login    | Senha  |
|----------     | ------   |------  |
| usuario_teste | silvaniagoularte@hotmail.com | Usu@ri0teste |

b) Credenciais deverão estar cadastradas no sistema.
* Username: usuario_teste
* Senha: Usu@ri0teste

c) Após logar, aparecerá a lista de tarefas:

| Título     | Categoria  | Descrição             | Prioridade |
|-------     | ---------  | ----------            | ---------- |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       |
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      |
| Treinar    | Academia   | Treinar braços        | Baixa      |


**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a visualização de tarefas.
4. Selecionar "Entrega1".
5. Alterar status para "Concluído", clicando no ícone "X" ao lado do título da categoria.

**Resultado Esperado:** 

a) A tarefa é concluída e movida para "Organizar".

b) A página inicial fica com as seguintes informações: 

| Título     | Categoria  | Descrição             | Prioridade |
|-------     | ---------  | ----------            | ---------- |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       |
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      |
| Treinar    | Academia   | Treinar braços        | Baixa      |


**Resultado Obtido:**

(x) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefa "Entrega1" marcada como concluída e movida para a seção "Organizar".

**Data da última execução do teste:**

30/05/2025
