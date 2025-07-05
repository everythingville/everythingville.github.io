/*** LETTER GUIDES ***/

const letterTemplates = {
    academic: {
        title: "Academic Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's full name and title</li>
                    <li>Recipient's address</li>
                    <li><b>Subject line</b></li>
                    <li>Greeting (ex. "Dear <code>Title</code> <code>LastName</code>")</li>
                    <li>Body (2-3 concise paragraphs)</li>
                    <li>Closing (ex. "Respectfully")</li>
                    <li>Your full name</li>
                    <li>Your credentials (if applicable)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
Engineering Department
Somewhere University
123 Main St
Anytown, USA
January 1, 2025

Professor John Doe
Department of Computer Science
Another College
456 Business Ave
Othercity, USA

Subject: Inquiry About Research Opportunities

Dear Professor Doe,

I am a third-year engineering student at Somewhere University... [specific academic inquiry, 2-3 concise paragraphs]

Respectfully,
Jane Smith
Somewhere University Class of 2026
                </textarea>
            </div>
        `
    },
    business: {
        title: "Business Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Company letterhead (if applicable)</li>
                    <li>Date</li>
                    <li>Recipient's full name and title</li>
                    <li>Company address</li>
                    <li><b>Re: <code>Reference</code></b> (optional)</li>
                    <li>Greeting (ex. "Dear <code>Title</code> <code>LastName</code>")</li>
                    <li>Body (3 paragraphs)</li>
                    <ul>
                        <li>Purpose</li>
                        <li>Details</li>
                        <li>Action item</li>
                    </ul>
                    <li>Closing (ex. "Best regards")</li>
                    <li>Your full name and title</li>
                    <li>Enclosures (if applicable)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
ABC Company
123 Main St
Othercity, USA
January 1, 2025

Dr. Jane Doe
Director of Engineering
XYC Incorporated
456 Business Ave
Anytown, USA

Re: Proposal for Collaboration

I am writing to propose a partnership... [specifics, metrics, and call to action]

Best regards,
John Smith
Senior Project Manager
ABC Company

Enclosures: Project timeline, budget sheet
                </textarea>
            </div>
        `
    },
    casual: {
        title: "Casual Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your address (optional)</li>
                    <li>Date</li>
                    <li>Greeting (ex. "Hi <code>FirstName</code>!")</li>
                    <li>Body (freeform, conversational)</li>
                    <li>Closing (ex. "Take care")</li>
                    <li>Your name or nickname</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
123 Business Ave
Anytown, USA
January 1, 2025

Hi Johnny!

How's your school year going? I've been... [personal, updates, questions, humor]

Can't wait to see you in July!
Take care,
Jane
                </textarea>
            </div>
        `
    },
    thanks: {
        title: "Thank You Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li></li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>

                </textarea>
            </div>
        `
    },
    complaint: {
        title: "Complaint Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li></li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>

                </textarea>
            </div>
        `
    },
    invite: {
        title: "Invitation",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li></li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>

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
            <button class="copy-btn">Copy Template</button>
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