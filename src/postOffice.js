/*** LETTER GUIDES ***/

// Guide content
const letterTemplates = {
    academic: {
        title: "Academic Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's address</li>
                    <li><b>Subject line</b></li>
                    <li>Greeting (ex. "Dear <code>Title</code> <code>LastName</code>")</li>
                    <li>Body (2-3 concise paragraphs)</li>
                    <li>Closing (ex. "Respectfully")</li>
                    <li>Your name</li>
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
January 15, 2025

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
Somewhere University Class of 2026</textarea>
            </div>
        `
    },
    business: {
        title: "Business Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your name or company</li>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's address</li>
                    <li><b>Re: <code>Reference</code></b> (optional)</li>
                    <li>Greeting (ex. "Dear <code>Title</code> <code>LastName</code>")</li>
                    <li>Body (3 paragraphs)</li>
                    <ul>
                        <li>Purpose</li>
                        <li>Details</li>
                        <li>Action item</li>
                    </ul>
                    <li>Closing (ex. "Best regards")</li>
                    <li>Your name and title</li>
                    <li>Enclosures (if any)</li>
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
January 15, 2025

Dr. Jane Doe
Director of Engineering
XYC Incorporated
456 Business Ave
Anytown, USA

Re: Proposal for Collaboration

Dear Dr. Doe,

I am writing to propose a partnership... [specifics, metrics, and call to action]

Best regards,
John Smith
Senior Project Manager
ABC Company

Enclosures: Project timeline, budget sheet</textarea>
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
January 15, 2025

Hi Johnny!

How's your school year going? I've been... [personal, updates, questions, humor]

Can't wait to see you in July!

Take care,
Jane</textarea>
            </div>
        `
    },
    thanks: {
        title: "Thank You Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your name or company</li>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's address</li>
                    <li><b>Re: <code>Reference</code></b></li>
                    <li>Greeting (ex. "Dear <code>Title</code> <code>LastName</code>")</li>
                    <li>Body (1-2 paragraphs, depending on occasion)</li>
                    <li>Closing (ex. "With appreciation")</li>
                    <li>Your name and title (if appropriate)</li>
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
January 15, 2025

Ms. Janet Smith
Senior Hiring Manager
XYC Incorporated
456 Business Ave
Anytown, USA

Re: Interview on 01/14/2025

Dear Ms. Smith,

I sincerely appreciate the opportunity to interview... [specific discussion point, personalized comment]

With appreciation,
John Doe
Senior Project Manager
ABC Company</textarea>
            </div>
        `
    },
    complaint: {
        title: "Complaint Letter",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's address</li>
                    <li><b>Subject line</b></li>
                    <li>Greeting (ex. "Dear <code>DepartmentName</code>")</li>
                    <li>Body (3 paragraphs)</li>
                    <ul>
                        <li>Incident details (ex. date, location)</li>
                        <li>Impact and consequences</li>
                        <li>Resolution request</li>
                    </ul>
                    <li>Closing (ex. "Sincerely")</li>
                    <li>Your contact information</li>
                    <li>Attachments (receipts or photos, if applicable)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
123 Consumer Lane
Anytown, USA
January 15, 2025

Customer Service Manager
Local Mart Corporation
456 Consumer Lane
Anytown, USA

Subject: Defective Product (Order #12345)

Dear Local Mart Customer Service,

On January 10, 2025, I purchased a product... [detailed description of defect and impact]

I look forward to your prompt resolution.

Sincerely,
John Smith
(123) 456-789
johnsmith@email.com

Attachments: Receipt copy, product photo</textarea>
            </div>
        `
    },
    invite: {
        title: "Invitation",
        structure: `
            <div>
                <h4>Structure</h4>
                <ol>
                    <li>Your name or company</li>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's address</li>
                    <li><b>Subject line</b></li>
                    <li>Greeting (ex. "Dear <code>Title</code> <code>LastName</code>")</li>
                    <li>Body (3 paragraphs)</li>
                    <ul>
                        <li>Event purpose</li>
                        <li>Key details (ex. date, time, venue)</li>
                        <li>RSVP instructions</li>
                    </ul>
                    <li>Closing (ex. "Best regards")</li>
                    <li>Your name and title</li>
                    <li>Enclosure: Event brochure (if any)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
XYC Incorporated
456 Business Ave
Anytown, USA
January 15, 2025

Dr. John Doe
Director of Research
ABC Company
123 Main St
Othercity, USA

Subject: Annual Tech Summit 2025

Dear Dr. Doe,

We are pleased to invite you to our 10th annual Tech summit... [event highlight, logistics, RSVP details]

We hope you can join us for this exciting opportunity.

Best regards,
Janet Smith
Event Coordinator
ABC Company

Enclosure: Summit brochure</textarea>
            </div>
        `
    }
};

// Display guides
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

// Copy template
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const textarea = e.target.closest('div').querySelector('textarea');
        textarea.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    }
});

/*** LETTER BUILDER ***/

// Builder structure
const buildLetter = () => {
    document.getElementById('letter-display').innerHTML = `
        <h3>Letter Builder</h3>
        <form id="letter-form">
            <label>Letter Type:</label>
            <select id="letter-type">
                <option value="formal">Academic</option>
                <option value="business">Business</option>
                <option value="casual">Casual</option>
                <option value="thanks">Thank You</option>
                <option value="complaint">Complaint</option>
                <option value="invite">Invitation</option>
            </select>

            <div id="letter-fields"></div>

            <label>Your Letter:</label>
            <textarea id="letter-draft" rows="10"></textarea>

            <button type="button" id="generate-btn">Generate Letter</button>
            <button type="button" id="reset-btn">Reset</button>
        </form>

        <div id="generated-letter" class="hidden">
            <h4>Your Finished Letter</h4>
            <div id="final-letter"></div>
            <button id="print-btn">Print</button>
            <button id="new-letter-btn">New Letter</button>
        </div>
    `;
    document.getElementById('letter-type').addEventListener('change', (e) => {
        loadFields(e.target.value);
    });
    document.getElementById('generate-btn').addEventListener('click', generateLetter);
    document.getElementById('reset-btn').addEventListener('click', () => {
        document.getElementById('letter-form').reset();
    });
};

// Form fields for each letter type
const loadFields = (type) => {
    const fields = {
        academic: `
            <label>Your Name:</label>
                <input type="text" id="sender-name" required>
            <label>Your Institution:</label>
                <input type="text" id="sender-org">
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" required>
            <label>Recipient's Institution:</label>
                <input type="text" id="recipient-org">
            <label>Subject:</label>
                <input type="text" id="subject" required>
        `,
        business: `
            <label>Your Name and Title:</label>
                <input type="text" id="sender-name" required>
            <label>Your Company Name:</label>
                <input type="text" id="sender-org">
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" required>
            <label>Recipient's Company Name:</label>
                <input type="text" id="recipient-org">
            <label>Reference (Re):</label>
                <input type="text" id="subject">
        `,
        casual: `
            <label>Your Name:</label>
                <input type="text" id="sender-name" required>
            <label>Recipient's Name:</label>
                <input type="text" id="recipient-name" required>
        `,
        thanks: `
            <label>Your Name and Title:</label>
                <input type="text" id="sender-name" required>
            <label>Your Company Name:</label>
                <input type="text" id="sender-org">
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" required>
            <label><Recipient's Company Name:</label>
                <input type="text" id="recipient-org">
            <label>Reference (Re:)</label>
                <input type="text" id="subject">
        `,
        complaint: `
            <label>Your Name:</label>
                <input type="text" id="sender-name" required>
            <label>Your Address:</label>
                <input type="text" id="sender-org">
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" required>
            <label><Recipient's Company Name:</label>
                <input type="text" id="recipient-org">
            <label>Reference (Re:)</label>
                <input type="text" id="subject">
        `,
        invite: `
            <label>Your Name:</label>
                <input type="text" id="sender-name" required>
            <label>Your Address:</label>
                <input type="text" id="sender-org">
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" required>
            <label><Recipient's Company Name:</label>
                <input type="text" id="recipient-org">
            <label>Reference (Re:)</label>
                <input type="text" id="subject">
        `
    }
}