## TST03 O usuário solicita edição de uma tarefa.

**Caso de uso em que se baseia:** CT002 Editar Tarefa

**Cenário:** Fluxo de Exceção (Passo 1a)

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome               | Login    | Senha  |
|----------          | ------   |------  |
| Mariana            | mari1    | senha1 |

b) Credenciais deverão estar cadastradas no sistema.
* Username: mari1
* Senha: senha1

c) Após logar, aparecerá a tarefa existente.

 Título             |Categoria   | Descrição            | Prioridade | Status   |
 -------            |---------   | ----------           |--------    | ------   |
 Aplicativo DayPlan |Pratica ADS |Entrega não concluída | Alta       | Pendente |

**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a edição da tarefa, item (c) da preparação.
4. Procurar pelo id de uma tarefa "Academia".

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Tarefa não existente"

b) A tarefa não é editada.

c) Não é feita nenhuma alteração e as tarefas continuam com as seguintes informações: 
 Título             |Categoria   | Descrição            | Prioridade | Status   |
 -------            |---------   | ----------           |--------    | ------   |
 Aplicativo DayPlan |Pratica ADS |Entrega não concluída | Alta       | Pendente |

**Resultado Obtido:**

( ) Sucesso

(x) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefa não editada pois não existe o id procurado.

**Data da última execução do teste:**

01/04/2025