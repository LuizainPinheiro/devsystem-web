# JavaScript Web Storage: sessionStorage

O **`sessionStorage`** é um recurso da API Web Storage do JavaScript que permite armazenar dados temporários no navegador do usuário no formato de chave e valor (`key: value`).

Ele é ideal para guardar dados voláteis que precisam ser preservados apenas enquanto o usuário navega na sessão atual daquela aba específica.

---

## Principais Características

- **Duração da Sessão:** Sobrevive a recarregamentos (*refresh*) da página, mas é totalmente apagado assim que a aba ou o navegador é fechado.
- **Isolamento por Aba:** Cada aba ou janela possui a sua própria sessão isolada. Abrir a mesma URL em uma nova aba criará um `sessionStorage` separado.
- **Apenas Texto (String):** Armazena dados exclusivamente no formato de texto. Tipos complexos (como objetos e arrays) precisam ser convertidos para *string* antes de serem armazenados.
- **Capacidade:** Geralmente suporta até $\approx 5\text{ MB}$ de dados por origem (um limite inferior ao do `localStorage`).
- **Lado do Cliente (Client-side):** Os dados permanecem apenas no navegador do usuário e **não** são enviados automaticamente ao servidor em requisições HTTP (diferente dos *cookies*).

---

## Como Usar (Sintaxe Básica)

### 1. Guardar um Dado (`setItem`)
```javascript
sessionStorage.setItem('chave', 'valor');
```

### 2. Resgatar um Dado (`getItem`)
```javascript
const usuario = sessionStorage.getItem('chave');
```

### 3. Armazenar Objetos ou Arrays (via JSON)
Como o `sessionStorage` aceita apenas *strings*, utilize `JSON.stringify()` para salvar e `JSON.parse()` para ler objetos:
```javascript
const perfil = { nome: "Ana", tema: "escuro" };

// Salvar convertendo para String
sessionStorage.setItem('preferencias', JSON.stringify(perfil));

// Ler convertendo de volta para Objeto
const perfilSalvo = JSON.parse(sessionStorage.getItem('preferencias'));
```

### 4. Remover um Item Especificado (`removeItem`)
```javascript
sessionStorage.removeItem('chave');
```

### 5. Limpar Todos os Dados da Sessão (`clear`)
```javascript
sessionStorage.clear();
```
---

## Comparativo: sessionStorage vs. localStorage vs. Cookies

| Recurso              | Persistência dos Dados                        | Enviado ao Servidor?          | Capacidade Média                |
|     :---             |             :---                              |           :---                |              :---               |
| **`sessionStorage`** | Até o fechamento da aba                       | Não                           | $\approx 5\text{ MB}$           |
| **`localStorage`**   | Até ser limpo manualmente pelo usuário/código | Não                           | $\approx 5\text{-}10\text{ MB}$ |
| **`Cookies`**        | Definida pela data de expiração               | Sim (em cada requisição HTTP) | $\approx 4\text{ KB}$           |

---
