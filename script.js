// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. FUNCIONALIDADE DO BOTÃO "SAIBA MAIS"
    // ==========================================
    const btnConhecer = document.getElementById("btn-conhecer");
    const secaoImportancia = document.getElementById("importancia");

    if (btnConhecer && secaoImportancia) {
        btnConhecer.addEventListener("click", function() {
            // Faz a tela deslizar suavemente até a seção desejada
            secaoImportancia.scrollIntoView({ behavior: "smooth" });
        });
    }

    // ==========================================
    // 2. CALCULADORA DE IMPACTO LOCAL
    // ==========================================
    const btnCalcular = document.getElementById("btn-calcular");
    const inputValor = document.getElementById("valor-gasto");
    const divResultado = document.getElementById("resultado-simulacao");

    if (btnCalcular && inputValor && divResultado) {
        btnCalcular.addEventListener("click", function() {
            // Pega o valor digitado e transforma em número
            const valorGasto = parseFloat(inputValor.value);

            // Validação: verifica se o usuário digitou um número válido e maior que zero
            if (isNaN(valorGasto) || valorGasto <= 0) {
                divResultado.style.color = "#ff4d4d"; // Cor vermelha para erro
                divResultado.innerHTML = "Por favor, digite um valor válido maior que zero. 🌾";
                return;
            }

            // Lógica do cálculo (Simulação de economia social):
            // Numa economia justa, cerca de 80% do valor fica direto com o produtor (sem atravessadores)
            const valorRetidoLocalmente = (valorGasto * 0.8).toFixed(2);
            
            // Estimativa de famílias beneficiadas indiretamente ao longo do ano
            const familiasApoiadas = Math.ceil(valorGasto * 0.1); 

            // Muda a cor do texto de volta para o roxo do projeto
            divResultado.style.color = "#4a2874";

            // Exibe o resultado na tela usando Template Literals
            divResultado.innerHTML = `
                <hr style="border: 0; height: 1px; background: #c2a5f9; margin: 15px 0;">
                <p>✨ <strong>Resultado da sua simulação:</strong></p>
                <p>• Desses R$ ${valorGasto.toFixed(2)}, cerca de <strong>R$ ${valorRetidoLocalmente}</strong> vão direto para as mãos dos pequenos produtores da sua região.</p>
                <p>• Esse consumo consciente ajuda a fortalecer aproximadamente <strong>${familiasApoiadas}</strong> família(s) de agricultores locais.</p>
                <p><em>Obrigado por apoiar o desenvolvimento social e sustentável do Paraná!</em> 🚜💚</p>
            `;
        });
    }
});