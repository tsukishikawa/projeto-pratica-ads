## TST09 Configurar alarmes.

**Caso de uso em que se baseia:** CT005 Configurar alarmes.

**Cenário:** Fluxo Alternativo 1

**Preparaçao:** 
a) O usuário deverá estar logado no sistema.

| Nome          | Login    | Senha  |
|----------     | ------   |------  |
| usuario_teste | silvaniagoularte@hotmail.com | Usu@ri0teste |

b) Credenciais deverão estar cadastradas no sistema.
* Username: usuario_teste
* Senha: Usu@ri0teste

c) Após logar, aparecerá a lista de tarefas:

| Título     | Categoria  | Descrição             | Prioridade |
|-------     | ---------  | ----------            | ---------- |
| Entrega2   | Trabalho   | Entregar projeto      | Alta       |
| Entrega1   | Faculdade  | Entrega da atividade1 | Alta       |
| Entrega3   | Faculdade  | Entrega da atividade2 | Baixa      |
| Treinar    | Academia   | Treinar braços        | Baixa      |


**Passos para execução do teste:**
1. Acessar sua conta DayPlan.
2. Entrar com suas credenciais do item (b) da preparação.
3. Selecionar a configuração de alarmes.
4. Procurar pelo ID da tarefa "Entrega1".
5. Editar a data e hora do alarme.

**Resultado Esperado:** 

a) O sistema apresenta a mensagem: 
> "Alarme editado"

b) Um alarme é definido para tarefa "Entrega1".

c) São feitas as alterações e um alarme é alterado para a "Entrega1":
| TítuloID | Data e hora   |
| -------- | -----------   |
| Entrega1 | 11/04 - 18:30 |

**Resultado Obtido:**

( ) Sucesso

(x) Não executado

( ) Falha

( ) Cancelado

**Descrição do resultado obtido:**

Teste não executado, pois a funcionalidade de alarmes não foi implementada.

**Data da última execução do teste:**

30/05/2025