function submitOrder() {
    // Obter os valores dos produtos
    const quantity1 = parseInt(document.getElementById("quantity1").value) || 0;
    const quantity2 = parseInt(document.getElementById("quantity2").value) || 0;

    // Verificar se alguma quantidade foi preenchida
    if (quantity1 <= 0 && quantity2 <= 0) {
        alert("Por favor, insira a quantidade de pelo menos um dos produtos.");
        return;
    }

    // Obter opções de personalização
    const personalized1 = document.querySelector('input[name="personalized1"]:checked') ? "Sim" : "Não";
    const personalized2 = document.querySelector('input[name="personalized2"]:checked') ? "Sim" : "Não";

    // Montar a mensagem
    let message = "Olá, gostaria de fazer um pedido:\n";
    if (quantity1 > 0) {
        message += `- Produto: Faixa de Parachoque 3M\n  Quantidade: ${quantity1}\n  Personalizada: ${personalized1}\n`;
    }
    if (quantity2 > 0) {
        message += `- Produto: Lateral Refletiva 3M\n  Quantidade: ${quantity2}\n  Personalizada: ${personalized2}\n`;
    }

    // Número do WhatsApp
    const whatsappNumber = "554499630028";

    // Redirecionar para o WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}
