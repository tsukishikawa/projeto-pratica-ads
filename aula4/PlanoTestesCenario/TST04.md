## TST04 Excluir Tarefa

**Caso de uso em que se baseia:** CT003 Excluir Tarefa

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

 Título             |Categoria   | Descrição            | Prioridade | Status   |
 -------            |---------   | ----------           |--------    | ------   |
 Aplicativo DayPlan |Pratica ADS |Entrega não concluída | Alta       | Pendente |

**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a exclusão da tarefa.
4. Procurar pelo id de uma tarefa "Faculdade".
5. Confirmação da exclusão.

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Tarefa excluída"

b) A tarefa é excluída.

c) É feita a alteração e a página inicial fica com as seguintes informações: 
| Título    | Categoria | Descrição           | Prioridade | Status   |
| -------   | --------- | ----------          |--------    | ------   |
|           |           |                     |            |          |

**Resultado Obtido:**

(x) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefa excluída do sistema.

**Data da última execução do teste:**

01/04/2025