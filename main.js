const formulario = document.getElementById("form-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const campoHora = document.getElementById("hora-tarefa");
  const campoDescricao = document.getElementById("descricao-tarefa");

  const hora = campoHora.value;
  const descricao = campoDescricao.value.trim();

  if (hora && descricao) {
    adicionarTarefa(hora, descricao);
    campoHora.value = "";
    campoDescricao.value = "";
  }
});

function adicionarTarefa(hora, descricao) {
  const itemLista = document.createElement("li");
  itemLista.className = "task-item";

  const infoTarefa = document.createElement("div");
  infoTarefa.className = "task-info";

  const spanHora = document.createElement("span");
  spanHora.className = "task-time";
  spanHora.textContent = hora;

  const spanDescricao = document.createElement("span");
  spanDescricao.textContent = descricao;

  infoTarefa.appendChild(spanHora);
  infoTarefa.appendChild(spanDescricao);

  
  const botaoConcluir = document.createElement("button");
  botaoConcluir.className = "complete-btn";
  botaoConcluir.textContent = "Concluir";
  botaoConcluir.addEventListener("click", () => {
    itemLista.classList.toggle("completed");
  });

  
  const botaoExcluir = document.createElement("button");
  botaoExcluir.className = "delete-btn";
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.addEventListener("click", () => {
    itemLista.remove();
  });

  const containerBotoes = document.createElement("div");
  containerBotoes.className = "task-buttons";
  containerBotoes.appendChild(botaoConcluir);
  containerBotoes.appendChild(botaoExcluir);

  itemLista.appendChild(infoTarefa);
  itemLista.appendChild(containerBotoes);
  listaTarefas.appendChild(itemLista);
}