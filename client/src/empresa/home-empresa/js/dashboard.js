document.addEventListener('DOMContentLoaded', () => {
    const jobTableBody = document.getElementById('jobTableBody');
    const createJobButton = document.getElementById('createJobButton');
    const statusFilter = document.getElementById('statusFilter');
    const searchFilter = document.getElementById('searchFilter');

    // Sample job data
    const jobs = [
        { id: 1, name: 'Desenvolvedor Front-end', candidates: 10, status: 'em_andamento', date: '2024-09-01' },
        { id: 2, name: 'Analista de Sistemas', candidates: 5, status: 'finalizado', date: '2024-08-15' },
        { id: 3, name: 'Gerente de Projetos', candidates: 7, status: 'cancelado', date: '2024-07-20' }
    ];

    function renderJobs(filteredJobs) {
        jobTableBody.innerHTML = '';
        filteredJobs.forEach(job => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${job.id}</td>
                <td>${job.name}</td>
                <td>${job.candidates}</td>
                <td>${job.status}</td>
                <td>${job.date}</td>
                <td class="actions">
                    <button class="table-button" onclick="copyLink(${job.id})"><img src="/client/src/assets/search-2-line.svg" title="Ver detalhes"></button>
                    <button class="table-button" onclick="editJob(${job.id})"><img src="/client/src/assets/pencil-line.svg" title="Editar"></button>
                    <button class="table-button" onclick="deleteJob(${job.id})"><img src="/client/src/assets/delete-bin-6-line.svg" title="Excluir"></button>
                </td>
            `;
            jobTableBody.appendChild(row);
        });
    }

    function copyLink(jobId) {
        alert(`Link da vaga ${jobId} copiado!`);
    }

    function editJob(jobId) {
        alert(`Editando vaga ${jobId}`);
    }

    function deleteJob(jobId) {
        alert(`Vaga ${jobId} excluída!`);
    }

    function filterJobs() {
        const status = statusFilter.value;
        const search = searchFilter.value.toLowerCase();
        const filteredJobs = jobs.filter(job => 
            (status === '' || job.status === status) &&
            (job.name.toLowerCase().includes(search))
        );
        renderJobs(filteredJobs);
    }

    createJobButton.addEventListener('click', () => {
        window.location.href = '../criacao-vaga-empresa/create-job.html'; // Caminho relativo correto
    });
    
    statusFilter.addEventListener('change', filterJobs);
    searchFilter.addEventListener('input', filterJobs);

    renderJobs(jobs); // Initial render
});
