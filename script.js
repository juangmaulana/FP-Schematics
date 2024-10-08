const jobList = document.getElementById('jobList');
const jobTypeFilter = document.getElementById('jobType');

const jobs = [
    { title: 'Software Engineer', type: 'full-time' },
    { title: 'Data Scientist', type: 'part-time' },
    { title: 'Product Manager', type: 'contract' },
    { title: 'Web Developer', type: 'full-time' },
    { title: 'Graphic Designer', type: 'part-time' }
];

function displayJobs(filter) {
    jobList.innerHTML = '';
    const filteredJobs = jobs.filter(job => filter === 'all' || job.type === filter);
    filteredJobs.forEach(job => {
        const jobItem = document.createElement('li');
        jobItem.innerHTML = `<h2 class="job-title">${job.title}</h2><p class="job-type">${job.type}</p>`;
        jobList.appendChild(jobItem);
    });
}

jobTypeFilter.addEventListener('change', (event) => {
    displayJobs(event.target.value);
});

// Initial display
displayJobs('all');
