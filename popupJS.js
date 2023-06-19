<!--Script JS para criação de POP UP -->

<script>
window.onload = function() {
  // Cria um elemento de div para o pop-up
  var popup = document.createElement("div");

  // Define o estilo do pop-up
  popup.style.position = "fixed";
  popup.style.zIndex = "9999";
  popup.style.width = "500px";
  popup.style.height = "auto";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "#ffffff";
  popup.style.borderRadius = "20px";
  popup.style.boxShadow = "0 20px 80px rgba(0, 0, 0, 0.15)";
  popup.style.overflow = "hidden";

  // Define o estilo da borda usando box-shadow
  popup.style.boxShadow = "inset 0 0 0 4px #FF6600, 0 0 6px rgba(0, 0, 0, 0.1)";

  // Define o conteúdo do pop-up com uma imagem
  var imageUrl = 'https://www.stmarie.com.br/wp-content/uploads/2023/06/EMKT_Compliance_Externo.png'; 
  var imageContainer = document.createElement("div");
  imageContainer.style.width = "100%";
  imageContainer.style.height = "100%";
  imageContainer.style.overflow = "hidden";
  imageContainer.innerHTML = "<a href='" + imageUrl + "' target='_blank'><img src='" + imageUrl + "' style='width: 100%; height: auto; object-fit: cover;'></a>";
  popup.appendChild(imageContainer);

  // Cria o botão de fechar como um "X" em um círculo 
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px"; // Posiciona o botão no canto superior direito
  closeButton.style.right = "10px"; // Posiciona o botão no canto superior direito
  closeButton.style.width = "24px";
  closeButton.style.height = "24px";
  closeButton.style.backgroundColor = "#d3d3d3";
  closeButton.style.color = "#ffffff";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "50%";
  closeButton.style.fontWeight = "bold";
  closeButton.style.fontSize = "16px";
  closeButton.style.cursor = "pointer";
  closeButton.style.display = "flex";
  closeButton.style.justifyContent = "center";
  closeButton.style.alignItems = "center";

  // Adiciona o evento de clique ao botão de fechar
  closeButton.onclick = function() {
    popup.style.display = "none";
  };

  // Adiciona o botão de fechar ao pop-up
  popup.appendChild(closeButton);

  // Adiciona o pop-up ao corpo do documento
  document.body.appendChild(popup);

  // Aplica estilos diferentes para dispositivos móveis
  if (window.innerWidth <= 768) { // Define a largura de visualização máxima para considerar como dispositivo móvel (ajuste conforme necessário)
    popup.style.width = "90%"; // Define a largura em porcentagem para se ajustar à tela do dispositivo móvel
    popup.style.height = "auto"; // Define a altura automática para se ajustar à altura do conteúdo
  }
};
</script>