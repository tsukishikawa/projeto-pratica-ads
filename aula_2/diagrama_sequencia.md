# Diagramas de Sequência - Aplicativo de Gestão de Tarefas e Compromissos

## 1. Gerenciar Tarefas
### 1.1. Fluxo Principal

```plantuml

@startuml
title [Gerenciar Tarefas] Fluxo Principal - Criar Tarefa

actor "Usuário" as User
boundary "TarefaController" as Controller
control "TarefaService" as Service
database "TarefaRepository" as Repository

User -> Controller: (1) Acessa o (+) e começa criação\n(2) Insere título, descrição...
activate Controller

Controller -> Service: (3) Define prioridade\n(4) Solicita salvar tarefa
activate Service
Service -> Repository: save(novaTarefa)
activate Repository
Repository --> Service: retorna novaTarefa salva
destroy Repository

Service --> Controller: retorna tarefa salva
destroy Service

Controller --> User: (5) Sistema confirma criação
destroy Controller

@enduml
```

### 1.2. Fluxo Alternativo - Editar Tarefa

```plantuml

@startuml
title [Gerenciar Tarefas] Fluxo Alternativo - Editar Tarefa

actor "Usuário" as User
boundary "TarefaController" as Controller
control "TarefaService" as Service
database "TarefaRepository" as Repository

User -> Controller: Solicita edição (id da tarefa + novos dados)
activate Controller
Controller -> Service: buscarTarefa(id)
activate Service
Service -> Repository: findById(id)
activate Repository
Repository --> Service: retorna tarefa ou null
destroy Repository

alt Tarefa existe
    Service -> Service: aplica mudanças (título, descrição, prioridade, etc.)
    Service -> Repository: save(tarefa editada)
    activate Repository
    Repository --> Service: retorna tarefa atualizada
    destroy Repository
    Service --> Controller: edição concluída
    Controller --> User: Edição confirmada
else Tarefa não existe
    Service --> Controller: erro (não encontrada)
    Controller --> User: mensagem de erro
end

destroy Service
destroy Controller
@enduml
```

### 1.3. Fluxo Alternativo - Excluir Tarefa

```plantuml
@startuml
title [Gerenciar Tarefas] Fluxo Alternativo - Excluir Tarefa

actor "Usuário" as User
boundary "TarefaController" as Controller
control "TarefaService" as Service
database "TarefaRepository" as Repository

User -> Controller: Solicita exclusão (id da tarefa)
activate Controller
Controller -> Service: deletarTarefa(id)
activate Service
Service -> Repository: findById(id)
activate Repository
Repository --> Service: retorna tarefa ou null
destroy Repository

alt Tarefa existe
    Service -> Repository: delete(tarefa)
    activate Repository
    Repository --> Service: confirmação exclusão
    destroy Repository
    Service --> Controller: exclusão concluída
    Controller --> User: Tarefa excluída
else Tarefa não existe
    Service --> Controller: erro (não encontrada)
    Controller --> User: mensagem de erro
end

destroy Service
destroy Controller
@enduml
```

## 2. Filtrar Tarefas
```plantuml
@startuml
title Caso de Uso: Filtrar Tarefas (Fluxo Principal + Alternativo)

actor "Usuário" as User
boundary "TarefaController" as Controller
control "TarefaService" as Service
database "TarefaRepository" as Repository

User -> Controller: Solicitar Filtragem
activate Controller
Controller -> User: Pergunta qual critério (ex.: prioridade, data, status)
User --> Controller: Resposta (ex.: "Filtrar por prioridade=ALTA")

Controller -> Service: filtrarTarefas(usuarioId, "prioridade=ALTA")
activate Service
Service -> Repository: findAllByUsuarioId(usuarioId)
activate Repository
Repository --> Service: lista de tarefas
destroy Repository

alt Fluxo Principal (1 critério)
    Service -> Service: aplicarFiltroSimples(lista, prioridade=ALTA)
    Service --> Controller: tarefas filtradas
else Fluxo Alternativo (múltiplos critérios)
    Service -> Service: aplicarFiltroCombinado(lista, prioridade=ALTA, status=PENDENTE)
    Service --> Controller: tarefas filtradas
end

destroy Service
Controller --> User: Exibe resultado

destroy Controller
@enduml

```

## 3. Configurar Alarmes

```plantuml
@startuml
title Caso de Uso: Configurar Alarmes (Fluxo Principal + Alternativo)

actor "Usuário" as User
boundary "TarefaController" as Controller
control "TarefaService" as Service
database "TarefaRepository" as Repository
entity "Alarme" as AlarmEntity

User -> Controller: (1) Acessa Config de Alarme (tarefaId)
activate Controller
Controller -> User: (2) Solicita data/hora
User --> Controller: dataHora informada

Controller -> Service: configurarAlarme(tarefaId, dataHora)
activate Service
Service -> Repository: findById(tarefaId)
activate Repository
Repository --> Service: Tarefa encontrada ou null
destroy Repository

alt Tarefa existe
    alt Fluxo Principal (Criar Alarme)
        Service -> AlarmEntity: cria/atualiza Alarme
        Service -> Repository: save(alarme)
        activate Repository
        Repository --> Service: Alarme salvo
        destroy Repository
        Service --> Controller: confirmação
        Controller --> User: Alarme configurado
    else Fluxo Alternativo (Editar/Desativar)
        Service -> AlarmEntity: editarAlarme(dataHora) ou desativarAlarme()
        Service -> Repository: save(alarme)
        activate Repository
        Repository --> Service: Alarme atualizado
        destroy Repository
        Service --> Controller: confirmação
        Controller --> User: Alarme editado/desativado
    end
else Tarefa não existe
    Service --> Controller: erro
    Controller --> User: mensagem de erro
end

destroy Service
destroy Controller
@enduml

```

## 4. Marcação de Tarefas por Status
### 4.1. Fluxo Principal

```plantuml
@startuml
title Caso de Uso: Marcar Tarefa por Status

actor "Usuário" as User
boundary "TarefaController" as Controller
control "TarefaService" as Service
database "TarefaRepository" as Repository

User -> Controller: (1) Acessar lista de tarefas
activate Controller
Controller -> Service: listarTarefasDoUsuario(usuarioId)
activate Service
Service -> Repository: findAllByUsuarioId(usuarioId)
activate Repository
Repository --> Service: retorna lista de tarefas
destroy Repository
Service --> Controller: retorna lista
destroy Service
Controller --> User: exibe lista

User -> Controller: (2) Alterar status (Ex.: id=123, status=CONCLUIDO)
activate Controller
Controller -> Service: atualizarStatus(id, CONCLUIDO)
activate Service
Service -> Repository: findById(123)
activate Repository
Repository --> Service: retorna tarefa
destroy Repository

Service -> Service: tarefa.setStatus(CONCLUIDO)
Service -> Repository: save(tarefa)
activate Repository
Repository --> Service: tarefa atualizada
destroy Repository

Service --> Controller: confirmação
destroy Service

Controller --> User: (3) Exibe tarefa atualizada (status CONCLUIDO)

note right
Fluxo Alternativo:
(Visualizar somente status X)
Usuário filtra lista por status 
ex.: "Exibir somente pendentes".
end note

destroy Controller
@enduml
```

### 4.2. Fluxo Alternativo - Visualizar Tarefas por Status
```plantuml
@startuml
title [Marcar Tarefas] - Fluxo Alternativo: Visualizar Tarefas por Status

actor "Usuário" as User
boundary "TarefaController" as Controller
control "TarefaService" as Service
database "TarefaRepository" as Repository

User -> Controller: Visualizar Tarefas (status=EM_ANDAMENTO)
activate Controller
Controller -> Service: filtrarTarefas(usuarioId, status=EM_ANDAMENTO)
activate Service
Service -> Repository: findAllByUsuarioId(usuarioId)
activate Repository
Repository --> Service: listaTarefas
destroy Repository

Service -> Service: filtrarPorStatus(listaTarefas, EM_ANDAMENTO)
Service --> Controller: listaFiltrada
destroy Service
Controller --> User: lista de tarefas EM_ANDAMENTO

destroy Controller
@enduml
```