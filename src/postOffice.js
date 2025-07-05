/*** LETTER GUIDES ***/

const letterTemplates = {
    formal: {
        title: "Formal Letter (Job Application)",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's address</li>
                    <li><b>Subject line</b></li>
                    <li>Greeting (ex. Dear Mr./Ms. LastName)</li>
                    <li>Body (3-4 paragraphs)</li>
                    <li>Closing (ex. Sincerely)</li>
                    <li>Your name</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
                    123 Main St
                    Anytown, USA
                    January 1, 2025

                    Hiring Manager
                    ABC Company
                    456 Business Ave

                    Subject: Application for Programming Position

                    Dear Ms. Doe,

                    I am writing to apply... [etc.]
                </textarea>
            </div>
        `
    }
};

document.querySelectorAll('button.letter-guides').forEach(button => {
    button.addEventListener('click', () => {
        const type = button.dataset.type;
        const letterTemplate = letterTemplates[type];

        document.getElementById('letter-display').innerHTML = `
            <h3>${letterTemplate.title}</h3>
            ${letterTemplate.structure}
            ${letterTemplate.example}
            <br>
            <button class="copy-btn">Copy Example</button>
        `;
    });
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const textarea = e.target.closest('div').querySelector('textarea');
        textarea.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    }
});