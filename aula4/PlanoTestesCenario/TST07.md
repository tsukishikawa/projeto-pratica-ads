## TST07 Filtrar tarefas.

**Caso de uso em que se baseia:** CT004 Filtrar tarefas.

**Cenário:** Fluxo Alternativo

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
|-------     | ---------  | ----------            | ---------- | ------       |
| Treinar    | Academia   | Treinar braços        | Baixa      | Pendente     |
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      | Em andamento |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       | Pendente     |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       | Em andamento |

**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a filtragem das tarefas.
4. Filtrar por prioridade e categoria.

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Filtrado"

b) A lista de tarefas é reorganizada pelo tipo de filtro.

c) São feita alterações e a página inicial fica com as seguintes informações: 
| Título     | Categoria  | Descrição             | Prioridade | Status       |
|-------     | ---------  | ----------            | ---------- | -----        |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       | Em andamento |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       | Pendente     | 
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      | Em andamento |
| Treinar    | Academia   | Treinar braços        | Baixa      | Pendente     |


**Resultado Obtido:**

(x) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefas listadas de acordo com o tipo de filtro.

**Data da última execução do teste:**

01/04/2025