const companies = [
    {
        name: "VitalSphere",
        goal: "Continuous health prediction AI built into wearables, homes, and clinics.",
        plan: "Ingest real-time biomarkers, sleep, and environmental data to form the core input layer of the ecosystem.",
        status: "Phase 1 (Foundation)",
        statusClass: "status-active"
    },
    {
        name: "MediTwin",
        goal: "Creates a real-time digital twin of every human body for preventive medicine.",
        plan: "Map organ-level models and simulate therapy responses to act as the central source of truth for the patient.",
        status: "Phase 1 (Foundation)",
        statusClass: "status-active"
    },
    {
        name: "OncoMind Systems",
        goal: "Autonomous cancer detection, treatment design, and monitoring.",
        plan: "Scan for early cancer signals via liquid biopsies and simulate tumor evolution to suggest precision treatments.",
        status: "Phase 1 (Foundation)",
        statusClass: "status-active"
    },
    {
        name: "NeuroBloom AI",
        goal: "Brain-health AI for dementia prevention, cognitive repair, and enhancement.",
        plan: "Model brain aging trajectories and recommend neurotherapeutics to preempt cognitive decline.",
        status: "Phase 1 (Foundation)",
        statusClass: "status-active"
    },
    {
        name: "PharmaVerse AI",
        goal: "End-to-end AI drug discovery and simulation company.",
        plan: "Simulate billions of biological pathways to discover new protein targets and validate drugs before physical trials.",
        status: "Phase 2 (Expansion)",
        statusClass: "status-expansion"
    },
    {
        name: "FertiliGen",
        goal: "AI reproductive health company optimizing fertility and embryo health.",
        plan: "Predict reproductive trajectories and safeguard maternal-fetal health using advanced predictive modeling.",
        status: "Phase 2 (Expansion)",
        statusClass: "status-expansion"
    },
    {
        name: "Longevica",
        goal: "AI longevity platform that predicts, slows, and reverses aging pathways.",
        plan: "Track biological age and coordinate nutrition, regenerative therapies, and prevention plans to maximize healthspan.",
        status: "Phase 2 (Expansion)",
        statusClass: "status-expansion"
    },
    {
        name: "GenomeForge AI",
        goal: "AI that designs personalized gene therapies for every patient.",
        plan: "Integrate CRISPR and AI to simulate and compile custom genomic edits for rare and complex diseases.",
        status: "Phase 3 (Deep Biotech)",
        statusClass: "status-biotech"
    },
    {
        name: "NanoCure Intelligence",
        goal: "AI-guided nanorobotic drug delivery for targeted disease treatment.",
        plan: "Determine exact tissue targeting with programmable micro-delivery to maximize payload impact and minimize side effects.",
        status: "Phase 3 (Deep Biotech)",
        statusClass: "status-biotech"
    },
    {
        name: "AutoSurg Robotics",
        goal: "Fully autonomous surgical robotics with AI precision.",
        plan: "Execute AI-guided micro-scale physical interventions and precise tumor removals based on MediTwin planning.",
        status: "Phase 4 (Robotics)",
        statusClass: "status-robotics"
    }
];

const grid = document.getElementById('company-grid');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

// Modal Elements
const modalTitle = document.getElementById('modal-title');
const modalGoal = document.getElementById('modal-goal');
const modalPlan = document.getElementById('modal-plan');
const modalStatus = document.getElementById('modal-status');

// Render Cards
companies.forEach(company => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-content">
            <h2>${company.name}</h2>
            <p class="goal-preview">${company.goal}</p>
            <span class="status-badge ${company.statusClass}">${company.status}</span>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(company));
    grid.appendChild(card);
});

// Modal Logic
function openModal(company) {
    modalTitle.textContent = company.name;
    modalGoal.textContent = company.goal;
    modalPlan.textContent = company.plan;
    modalStatus.textContent = company.status;
    modalStatus.className = `status-badge ${company.statusClass}`;
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
