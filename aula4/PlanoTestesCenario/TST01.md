## TST01 Tarefa Incluida 

**Caso de uso em que se baseia:** CT001 Criar Tarefa

**Cenário:** Fluxo Principal

**Preparaçao:** 
a) O usuário deverá estar logado no sistema

| Nome               | Login    | Senha  |
|----------          | ------   |------  |
| Mariana            | mari1    | senha1 |

b) Credenciais deverão estar cadastradas no sistema.
* Username: mari1
* Senha: senha1

**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar o "+".
4. Adicionar um título "Atividade 3" para tarefa.
5. Adicionar uma categoria "Faculdade" para tarefa.
6. Adicionar uma descrição "Entrega da atividade" para tarefa.
7. Adicionar a prioridade "Alta" da tarefa.
8. Salvar os dados da tarefa.

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Tarefa Salva"

b) Uma nova tarefa está cadastrada com as informações:

| Título    | Categoria | Descrição           | Prioridade | Status   |
|-------    | --------- | ----------          |--------    | ------   |
|Atividade 3| Faculdade | Entrega da atividade| Alta       | Pendente |

**Resultado Obtido:**

(X) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefa criada com sucesso com título, descrição e prioridade.

**Data da última execução do teste:**

01/04/2025