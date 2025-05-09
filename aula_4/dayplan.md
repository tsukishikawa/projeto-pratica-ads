# DayPlan

O DayPlan é um aplicativo para gerenciar tarefas do dia a dia.

a) O sistema deverá permitir que o usuário crie, edite e exclua tarefas.

b) O sistema deverá permitir que o usuário filtre as tarefas por sua importância.

c) O sistema deverá permitir que o usuário configure alarmes para cada tarefa.

d) O sistema deverá permitir que o usuário marque as tarefas por status (concluído e em andamento).

## 1. Diagrama de casos de uso
``` plantuml
@startuml
left to right direction

actor Usuário
rectangle "DayPlan"{
    Usuario -- (Criar Tarefa)
    Usuario -- (Editar Tarefa)
    Usuario -- (Excluir Tarefa)
    Usuario -- (Filtrar tarefas)
    Usuario -- (Configurar alarmes)
    Usuario -- (Marcar tarefas por Status)
}
     
@enduml
```
## 2. Descrições dos casos de uso

### 2.1 Criar Tarefa (CT001)

**Resumo:** O usuário deseja adicionar tarefas ao seu aplicativo. Para executar essa tarefa, ele deverá abrir seu aplicativo clicar no ícone + e informar o título, categoria e descrição, definir a prioridade e salvar.  

**Ator principal:** Usuário

**Pré-condições:** O usuário estar logado em sua conta.

**Pós-condições:** A tarefa está registrada no sistema. Com título, categoria, descrição e prioridade.  

#### Fluxo Principal

1. O usuário loga no sistema e cria uma nova tarefa.
2. O sistema solicita os dados da nova tarefa, título, descrição e prioridade.
3. O usuário fornece os dados solicitados.
4. O sistema inclui a nova tarefa.

### 2.2 Editar Tarefa (CT002)

**Resumo:** O usuário deseja editar tarefas ao seu aplicativo. Para executar essa tarefa, ele deverá solicitar a edição, buscar a tarefa em específico, editar e salvar mudanças.

**Ator principal:** Usuário

**Pré-condições:** O usuário estar logado em sua conta.

**Pós-condições:** A tarefa está editada no sistema. Com título, descrição ou prioridade alterados.  

#### Fluxo Alternativo

1. O usuário solicita edição de uma tarefa.
2. O sistema solicita a alteração dos dados da tarefa, título, descrição e prioridade.
3. O usuário fornece os dados solicitados.
4. O sistema inclui a alteração na tarefa.

#### Fluxo de Exceção

##### Passo 1a (O usuário solicita edição de uma tarefa.):

* O sistema verifica se a tarefa solicitada existe e retorna uma mensagem de erro "tarefa não encontrada" e retorna para o passo 1 do fluxo alternativo.

### 2.3 Excluir Tarefa (CT003)

**Resumo:** O usuário deseja excluir tarefas ao seu aplicativo. Para executar essa tarefa, ele deverá solicitar a exclusão e deletar a tarefa.

**Ator principal:** Usuário

**Pré-condições:** O usuário estar logado em sua conta.

**Pós-condições:** A tarefa está excluída do sistema.

#### Fluxo Alternativo

1. O usuário solicita exclusão de tarefa.
2. O sistema pergunta se deseja deletar essa tarefa.
3. O usuário confirma a exclusão da tarefa.
4. O sistema exclui a tarefa. 

#### Fluxo de Exceção

##### Passo 1a (O usuário solicita exclusão de tarefa):

* O sistema verifica que a tarefa já foi excluída e informa "tarefa não encontrada" e retorna para o passo 1 do fluxo alternativo.

### 2.4 Filtrar tarefas (CT004)

**Resumo:** O usuário deseja filtrar tarefas ao seu aplicativo por prioridades. Para executar essa tarefa o usuário deverá solicitar a filtragem das tarefas, se por prioridade, data ou status.

**Ator principal:** Usuário

**Pré-condições:** O usuário estar logado em sua conta.

**Pós-condições:** A lista de tarefas estará filtrada.

#### Fluxo Principal 

1. O usuário solicita filtragem das tarefas.
2. O sistema pergunta o critério da filtragem.
3. O usuário confirma o tipo de filtragem.
4. O sistema filtra as tarefas. 

#### Fluxo Alternativo

1. O usuário solicita outra filtragem das tarefas.
2. O sistema pergunta o critério da filtragem.
3. O usuário confirma mais um tipo de filtragem.
4. O sistema retorna as tarefas filtradas de acordo com dois tipo de filtragem.


### 2.5 Configurar alarmes (CT005)

**Resumo:** O usuário deseja configurar alarmes para tarefas no seu aplicativo. Para executar essa tarefa, ele deverá entrar na configuração de alarmes e solicitar a data e hora do alarme.

**Ator principal:** Usuário

**Pré-condições:** O usuário estar logado em sua conta.

**Pós-condições:** A tarefa será notificada no dia e horário do alarme.

#### Fluxo Principal

1. O usuário acessa a configuração de alarme.
2. O usuário solicita a data e hora do alarme.
3. O sistema procura a tarefaID.
4. O sistema encontra a tarefa.
5. O sistema define o alarme. 

#### Fluxo Alternativo 1

1. O usuário acessa a configuração de alarme.
2. O usuário solicita a edição de data e hora do alarme.
3. O sistema procura a tarefaID.
4. O sistema edita a data e hora do alarme.
5. O sistema confirma a edição do alarme.

#### Fluxo Alternativo 2

1. O usuário acessa a configuração de alarme.
2. O usuário solicita a desativação de data e hora do alarme.
3. O sistema procura a tarefaID.
4. O sistema desativa a data e hora do alarme.
5. O sistema confirma a edição do alarme.


#### Fluxo de Exceção

##### Passo 2a (O usuário solicita a edição de data e hora do alarme):

* O sistema verifica que a tarefaID não existe e retorna informa "tarefa não encontrada" e retorna para o passo 1 do fluxo principal.

### 2.6 Marcar tarefas por Status (CT006)

**Resumo:** O usuário deseja marcar as tarefas por status no seu aplicativo. Para executar essa tarefa, ele deverá acessar a lista de tarefas e alterar os status.

**Ator principal:** Usuário

**Pré-condições:** O usuário estar logado em sua conta.

**Pós-condições:** As tarefas serão marcadas por status.

#### Fluxo Principal

1. O usuário acessa a lista de tarefas.
2. O sistema exibe a lista de tarefas.
3. O usuário altera o status da tarefa.
4. O sistema atualiza o status da tarefa.
5. O sistema exibe a tarefa atualizada. 

#### Fluxo Alternativo 

1. O usuário acessa a lista de tarefas.
2. O sistema exibe a lista de tarefas.
3. O usuário solicita a visualização de tarefas por um tipo de status.
4. O sistema exibe a lista de tarefas reorganizada por status.


