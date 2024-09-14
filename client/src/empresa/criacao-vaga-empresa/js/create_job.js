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

    function toggleFeedback() {
        feedbackMessage.disabled = feedbackEnable.value !== 'sim';
        feedbackMessage.style.display = feedbackEnable.value === 'sim' ? 'block' : 'none';
    }

    function openModal(link) {
        modal.style.display = 'flex';
        modalLink.textContent = link;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    feedbackEnable.addEventListener('change', toggleFeedback);

    createJobForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const jobLink = 'https://example.com/vaga/123'; // Placeholder link
        openModal(jobLink);
    });

    cancelButton.addEventListener('click', () => {
        window.history.back(); // Go back to the previous page
    });

    closeModalButton.addEventListener('click', closeModal);

    copyLinkButton.addEventListener('click', () => {
        navigator.clipboard.writeText(modalLink.textContent).then(() => {
            alert('Link copiado para a área
