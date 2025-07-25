async function falarComJarbas() {
  const pergunta = document.getElementById("question").value;
  const respostaEl = document.getElementById("resposta");

  if (!pergunta.trim()) {
    respostaEl.innerText = "Escreve algo aí, parceiro!";
    return;
  }

  respostaEl.innerText = "Jarbas está pensando...";

  // URL fixa pro Railway
  const apiUrl = "https://wex-dockercompose-challenge-production.up.railway.app/api/chat";

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: pergunta })
    });

    if (!res.ok) throw new Error("Erro na resposta da API");

    const data = await res.json();
    respostaEl.innerText = marked.parse(data.answer);
  } catch (err) {
    console.error("Erro ao falar com o Jarbas:", err);
    respostaEl.innerText = "Deu ruim... o Jarbas não respondeu 😢";
  }
}