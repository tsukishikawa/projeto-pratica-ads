## TST02 Tarefa Editada

**Caso de uso em que se baseia:** CT002 Editar Tarefa

**Cenário:** Fluxo Alternativo

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome               | Login    | Senha  |
|----------          | ------   |------  |
| Mariana            | mari1    | senha1 |

b) Credenciais deverão estar cadastradas no sistema.
* Username: mari1
* Senha: senha1

c) Após logar, aparecerá a tarefa existente.

| Título    | Categoria | Descrição           | Prioridade | Status   |
|-------    | --------- | ----------          |--------    | ------   |
|Atividade 3| Faculdade | Entrega da atividade| Alta       | Pendente |

**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a edição da tarefa, item (c) da preparação.
4. Adicionar novo título "Aplicativo DayPlan".
5. Adicionar nova categoria "Pratica ADS".
5. Adicionar uma descrição "Entrega não concluída" para tarefa.
6. Adicionar a prioridade "Alta" da tarefa.
7. Salvar os dados da tarefa.

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Edição Concluída"

b) A alteração deverá ter as seguintes informações:
 Título             |Categoria   | Descrição            | Prioridade | Status   |
 -------            |---------   | ----------           |--------    | ------   |
 Aplicativo DayPlan |Pratica ADS |Entrega não concluída | Alta       | Pendente |

**Resultado Obtido:**

(X) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefa editada com sucesso.

**Data da última execução do teste:**

01/04/2025