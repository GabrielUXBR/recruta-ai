document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');

    // Simulação de dados dos processos seletivos
    const candidaturas = [
        {
            empresa: 'Tech Innovators',
            vaga: 'Desenvolvedor Front-end',
            status: 'Em andamento'
        },
        {
            empresa: 'Design Studio',
            vaga: 'UI/UX Designer',
            status: 'Finalizado'
        },
        {
            empresa: 'Creative Solutions',
            vaga: 'Analista de Marketing',
            status: 'Cancelado'
        }
    ];

    candidaturas.forEach(candidatura => {
        const card = document.createElement('div');
        card.className = 'card mb-3'; 
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${candidatura.vaga}</h5>
                <p class="card-text"><strong>Empresa:</strong> ${candidatura.empresa}</p>
                <p class="card-text"><strong>Status:</strong> ${candidatura.status}</p>
                <a class="btn btn-primary" href="/client/src/candidato/inicio/detalhes-vaga.html">Ver detalhes</a>
            </div>
        `;
        cardContainer.appendChild(card);
    });
});
