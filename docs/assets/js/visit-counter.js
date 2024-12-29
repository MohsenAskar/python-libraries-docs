function createVisitorCounter() {
    const counter = document.createElement('div');
    counter.className = 'visitor-counter';
    
    counter.innerHTML = `
        <div class="counter-container">
            <div class="counter-label"></div>
            <div class="counter-display">
                <img src="https://visitor-badge.laobi.icu/badge?page_id=mohsenaskar.python-libraries-docs" 
                     alt="Visitor Count"
                     class="counter-image"
                />
            </div>
        </div>
    `;
    document.body.appendChild(counter);
}

document.addEventListener('DOMContentLoaded', createVisitorCounter);