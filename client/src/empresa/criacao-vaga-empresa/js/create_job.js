document.addEventListener('DOMContentLoaded', () => {
    const createJobForm = document.getElementById('createJobForm');
    const feedbackEnable = document.getElementById('feedbackEnable');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const modal = document.getElementById('modal');
    const modalLink = document.getElementById('modalLink');
    const copyLinkButton = document.getElementById('copyLinkButton');
    const cancelButton = document.getElementById('cancelButton');
    const createJobButton = document.getElementById('createJobButton');
    const closeModalButton = document.querySelector('.modal .close');

    // Função para habilitar/desabilitar o campo de mensagem de feedback
    function toggleFeedback() {
        feedbackMessage.disabled = feedbackEnable.value !== 'sim';
        feedbackMessage.style.display = feedbackEnable.value === 'sim' ? 'block' : 'none';
    }

    // Função para abrir o modal e exibir o link da vaga
    function openModal(link) {
        modal.style.display = 'flex'; // Mostra o modal
        modalLink.textContent = link; // Exibe o link no modal
    }

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none'; // Esconde o modal
    }

    // Habilita ou desabilita o campo de feedback com base na seleção do usuário
    feedbackEnable.addEventListener('change', toggleFeedback);

    // Intercepta o evento de submissão do formulário para abrir o modal
    createJobForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio tradicional do formulário

        // Placeholder do link da vaga (aqui você poderia adicionar a lógica real para gerar o link)
        const jobLink = 'https://example.com/vaga/123'; 
        openModal(jobLink); // Abre o modal com o link gerado
    });

    // Ação do botão de cancelar para voltar à página anterior
    cancelButton.addEventListener('click', () => {
        window.history.back(); // Volta para a página anterior
    });

    // Fechar o modal ao clicar no botão de fechar (X)
    closeModalButton.addEventListener('click', closeModal);

    // Copiar o link da vaga para a área de transferência
    copyLinkButton.addEventListener('click', () => {
        navigator.clipboard.writeText(modalLink.textContent).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    });

    // Fechar o modal ao clicar fora da área de conteúdo do modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(); // Fecha o modal se o usuário clicar fora dele
        }
    });
});
