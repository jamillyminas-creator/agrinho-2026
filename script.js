document.addEventListener("DOMContentLoaded", function() {
    
    // Extenso banco de dados focado em safras do estado do Paraná
    const dadosSafra = {
        janeiro: {
            titulo: "☀️ Alimentos de Verão (Foco em Hidratação e Energia)",
            descricao: "Com o pico do calor tropical, as frutas ricas em água e hortaliças de crescimento rápido ganham força máxima nas lavouras familiares locais.",
            itens: ["🍉 Melancia Fresca", "🌽 Milho Verde Doce", "🍅 Tomate Caipira", " Pineapple Abacaxi Pérola", "🥬 Alface Hidropônica", "🥒 Pepino Japonês", "🍇 Uva Niágara (Famosa no PR)"]
        },
        maio: {
            titulo: "🍁 Alimentos de Outono (Foco em Raízes e Vitaminas)",
            descricao: "É o momento ideal de colheita de raízes profundas, tubérculos e citros que começam a amadurecer com a mudança sutil da temperatura.",
            itens: ["🍠 Mandioca Mansa", "🥔 Batata-Doce Roxa", "🍊 Mexerica Ponkan", "🥕 Cenoura Orgânica", "🎃 Abóbora Cabotiá", "🍋 Limão Taiti", "🥑 Abacate Margarida"]
        },
        agosto: {
            titulo: "❄️ Alimentos de Inverno (Resistência e Folhas Escuras)",
            descricao: "As geadas e o frio do Paraná beneficiam o cultivo de plantas de folhas firmes e hortaliças que concentram mais açúcares naturais e nutrientes nesta época.",
            itens: [" Broccoli Brócolis Ramoso", "🥬 Couve Manteiga", "🍓 Morango Doce", "🥔 Batata Inglesa", "🥬 Espinafre Verdadeiro", "🥕 Nabo", "🧅 Alho-Poró"]
        },
        outubro: {
            titulo: "🌸 Alimentos de Primavera (Variedade e Cores Vivas)",
            descricao: "O período de floração traz colheitas multicoloridas, leguminosas e vegetais que equilibram o paladar na transição climática.",
            itens: ["🥭 Manga Ubá", "🟢 Ervilha Torto", "🌱 Vagem Macarrão", "🥬 Repolho Roxo", "🍠 Cará / Inhame", "🍌 Banana Prata", "🍅 Tomate Cereja"]
        }
    };

    const btnBuscar = document.getElementById("btn-buscar");
    const selecaoMes = document.getElementById("selecao-mes");
    const painelSafra = document.getElementById("painel-safra");

    if (btnBuscar && selecaoMes && painelSafra) {
        btnBuscar.addEventListener("click", function() {
            const mesSelecionado = selecaoMes.value;
            const dados = dadosSafra[mesSelecionado];

            // Monta as tags dinâmicas para cada produto
            let produtosHTML = "";
            dados.itens.forEach(function(produto) {
                produtosHTML += `<span class="item-produto">${produto}</span>`;
            });

            // Constrói e injeta o layout final
            painelSafra.innerHTML = `
                <h3>${dados.titulo}</h3>
                <p style="margin: 10px 0 20px 0; color: #4a3e56; font-size: 15px;">${dados.descricao}</p>
                <h4 style="color: var(--roxo-escuro); font-size: 16px;">O que comprar direto das famílias produtoras agora:</h4>
                <div class="lista-produtos">
                    ${produtosHTML}
                </div>
            `;
            
            // Ativa a exibição do painel
            painelSafra.style.display = "block";
            
            // Faz a tela rolar suavemente até o resultado gerado
            painelSafra.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }
});