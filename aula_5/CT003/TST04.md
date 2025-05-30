## TST04 Excluir Tarefa

**Caso de uso em que se baseia:** CT003 Excluir Tarefa

**Cenário:** Fluxo Alternativo

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome               | Login    | Senha  |
|----------     | ------   |------  |
| usuario_teste | autenticacaotestes@gmail.com | Autenticacao123@ |

b) Credenciais deverão estar cadastradas no sistema.
* Username: usuario_teste
* Senha: Autenticacao123@

c) Após logar, aparecerá a tarefa existente.

 Título             |Categoria   | Descrição            | Prioridade |
 -------            |---------   | ----------           |--------    |
 Aplicativo DayPlan |Pratica ADS |Entrega não concluída | Alta       |

**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a tarefa para edição, item (c) da preparação.
4. Selecionar a exclusão da tarefa clicando em "Deletar".
5. Confirmar a exclusão da tarefa.

**Resultado Esperado:** 

a) A tarefa é excluída.

c) É feita a alteração e a página inicial fica com as seguintes informações: 
| Título    | Categoria | Descrição           | Prioridade |
| -------   | --------- | ----------          |--------    |
|           |           |                     |            |

**Resultado Obtido:**

(x) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Tarefa excluída do sistema.

**Data da última execução do teste:**

30/05/2025