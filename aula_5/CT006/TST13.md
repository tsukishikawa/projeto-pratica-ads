## TST013 Marcar tarefas por Status

**Caso de uso em que se baseia:** CT006 Marcar tarefas por Status.

**Cenário:** Fluxo Alternativo

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome          | Login    | Senha  |
|----------     | ------   |------  |
| usuario_teste | autenticacaotestes@gmail.com | Autenticacao123@ |

b) Credenciais deverão estar cadastradas no sistema.
* Username: usuario_teste
* Senha: Autenticacao123@

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
4. Filtrar as tarefas por status "Em Andamento".

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Tarefas listadas"

b) A lista de tarefas é alterada por status.

c) Não é feita nenhuma alteração e a página inicial fica com as seguintes informações: 

| Título     | Categoria  | Descrição             | Prioridade |
|-------     | ---------  | ----------            | ---------- |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       |
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      |
| Treinar    | Academia   | Treinar braços        | Baixa      |


**Resultado Obtido:**

( ) Sucesso

(x) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Teste não executado, pois a funcionalidade de marcação por status não foi implementada.

**Data da última execução do teste:**

30/05/2025
