## TST07 Filtrar tarefas.

**Caso de uso em que se baseia:** CT004 Filtrar tarefas.

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
| Treinar    | Academia   | Treinar braços        | Baixa      |
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       |

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

Teste não executado, pois a funcionalidade de filtragem por prioridade e categoria não está implementada.

**Data da última execução do teste:**

30/05/2025