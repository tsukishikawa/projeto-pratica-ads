## TST05 O usuário solicita exclusão de tarefa.

**Caso de uso em que se baseia:** CT003 Excluir Tarefa

**Cenário:** Fluxo de Exceção (Passo 1a)

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome               | Login    | Senha  |
|----------          | ------   |------  |
| Mariana            | mari1    | senha1 |

b) Credenciais deverão estar cadastradas no sistema.
* Username: mari1
* Senha: senha1

c) Após logar, aparecerá a lista de tarefas:
| Título    | Categoria | Descrição           | Prioridade | Status   |
| -------   | --------- | ----------          |--------    | ------   |
|           |           |                     |            |          |

**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a exclusão da tarefa.
4. Procurar pelo id de uma tarefa "Faculdade".

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Tarefa não existe"

b) A tarefa não é modificada pois o id é inexistente.

c) Não é feita nenhuma alteração e a página inicial fica com as seguintes informações: 
| Título    | Categoria | Descrição           | Prioridade | Status   |
| -------   | --------- | ----------          |--------    | ------   |
|           |           |                     |            |          |

**Resultado Obtido:**

( ) Sucesso

(x) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefa não modificada pois id não existe.

**Data da última execução do teste:**

01/04/2025