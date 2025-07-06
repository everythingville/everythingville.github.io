/*** JOURNAL ***/

let journalEntries = JSON.parse(localStorage.getItem('journalEntries') || []);

// Save journal entry
document.getElementById('save-btn').addEventListener('click', () => {
    const journalEntry = document.getElementById('current-journal').vallue.trim;
    if(journalEntry) {
        const timestamp = new Date().toLocaleString();
        journalEntries.push({timestamp, journalEntry});
        localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
        displayEntries();
        document.getElementById('current-journal').value = '';
        alert('Entry saved!');
    }
});

// Display past journal entries
function displayEntries() {
    const pastJournals = document.getElementById('past-journals');
    pastJournals.innerHTML = journalEntries.map((item, index) => `
        <div class="journal-entry">
            <small>${item.timestamp}</small>
            <p>${item.entry}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        </div>
    `).join('');
}

// Delete journal entries
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('clcik', (e) => {
        journalEntries.splice(e.target.dataset.index, 1);
        localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
        displayEntries();
    });
});

// Export journal entry
document.getElementById('export-btn').addEventListener('click', () => {
    const journalContent = journalEntries.map(item => `
        ${item.timestamp}\n${item.entry}\n\n
    `).join('');
    const blob = new Blob([journalContent], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Everythingville-Journal-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
});

displayEntries();