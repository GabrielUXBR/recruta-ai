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
        card.className = 'card';
        card.innerHTML = `
            <h3>${candidatura.vaga}</h3>
            <p><strong>Empresa:</strong> ${candidatura.empresa}</p>
            <p><strong>Status:</strong> ${candidatura.status}</p>
        `;
        cardContainer.appendChild(card);
    });
});
