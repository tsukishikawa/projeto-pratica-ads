## TST03 O usuário solicita edição de uma tarefa.

**Caso de uso em que se baseia:** CT002 Editar Tarefa

**Cenário:** Fluxo de Exceção (Passo 1a)

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome          | Login    | Senha  |
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
3. Selecionar a edição da tarefa, item (c) da preparação.
4. Procurar pela categoria "Academia", clicando no ícone de lupa.

**Resultado Esperado:** 

a) Nenhuma tarefa é encontrada, pois a categoria "Academia" não existe.

b) A tarefa não é editada.

c) Não é feita nenhuma alteração e as tarefas continuam com as seguintes informações: 
 Título             |Categoria   | Descrição            | Prioridade |
 -------            |---------   | ----------           |--------    |
 Aplicativo DayPlan |Pratica ADS |Entrega não concluída | Alta       |

**Resultado Obtido:**

(x) Sucesso

( ) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Nenhuma tarefa encontrada, pois a categoria "Academia" não existe.

**Data da última execução do teste:**

30/05/2025