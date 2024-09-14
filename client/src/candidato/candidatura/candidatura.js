document.addEventListener('DOMContentLoaded', () => {
    // Dados simulados para a vaga
    const vaga = {
        empresa: 'Tech Innovators',
        nome: 'Desenvolvedor Front-end',
        descricao: 'Estamos procurando um desenvolvedor front-end apaixonado por criar interfaces de usuário incríveis.',
        modalidade: 'Remoto'
    };

    // Preencher os detalhes da vaga
    document.getElementById('empresaNome').textContent = vaga.empresa;
    document.getElementById('vagaNome').textContent = vaga.nome;
    document.getElementById('vagaDescricao').textContent = vaga.descricao;
    document.getElementById('vagaModalidade').textContent = vaga.modalidade;

    // Função para lidar com o clique no botão "Candidatar-se"
    document.getElementById('btnCandidatar').addEventListener('click', () => {
        // Aqui você pode redirecionar para a página de preenchimento da candidatura
        window.location.href = 'preenchimento.html';
    });

    // Função para lidar com o clique no botão "Voltar"
    document.getElementById('btnVoltar').addEventListener('click', () => {
        window.history.back();
    });
});
