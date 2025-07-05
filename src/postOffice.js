/*** LETTER GUIDES ***/

const letterTemplates = {
    formal: {
        title: "Formal Letter (Job Application)",
        structure: `
            <div>
                <h3>Structure</h3>
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
                <h3>Example</h3>
                <textarea readonly>
                    123 Main St
                    Anytown, USA
                    January 1, 2025

                    Hiring Manager
                    ABC Company
                    456 Business Ave

                    Subject: Application for Programming Position

                    Dear Ms. Doe,

                    I am writing to apply... [continues explaining for 3-4 paragraphs]
                </textarea>
            </div>
        `
    }
};

document.querySelectorAll('button.letter-guides').forEach(button => {
    button.addEventListener('click', () => {
        console.log("click");
        const type = button.dataset.type;
        const letterTemplate = letterTemplates[type];

        document.getElementById('letter-display').innerHTML = `
            <h3>${template.title}</h3>
            ${template.structure}
            ${template.example}
            <button class="copy-btn">Copy Example</button>
        `;
    });
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const textarea = e.target.closest('div').querySelector('textarea');
        textarea.select();
        document.execCommand('copy');
        alert('Copied to clipboard');
    }
});