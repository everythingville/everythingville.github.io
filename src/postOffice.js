/*** LETTER GUIDES ***/

// Guide content
const letterTemplates = {
    academic: {
        title: "Academic Letter",
        structure: `
            <div>
                <p class="center"><b>Use case:</b> Correspondence with professors, researchers, or academic institutions</p>
                <h4>Structure</h4>
                <ol>
                    <li>Your name</li>
                    <li>Your institution</li>
                    <li>Address of your institution</li>
                    <li>Your email address (optional)</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's department or position (optional)</li>
                    <li>Recipient's institution</li>
                    <li>Address of recipient's institution</li>
                    <li>Clear subject line</li>
                    <li>Formal greeting</li>
                    <li>Body:</li>
                    <ul>
                        <li>State your reason for writing</li>
                        <li>Provide context or background</li>
                        <li>Specify what you are asking for</li>
                    </ul>
                    <li>Professional closing</li>
                    <li>Your name</li>
                    <li>Your credentials (optional)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
Jane Smith
ABC University
123 Main St
janesmith@email.com
January 15, 2025

Dr. John Doe
Department of Biology
XYZ College
456 Business Ave

Subject: Inquiry About Graduate Research Opportunities

Dear Dr. Doe,

I am writing to express my interest in joining your lab as a graduate student. Your recent publication on marine ecosystems inspired me to apply.

As a biology student at ABC University, I have developed skills in DNA sequencing that align with your lab's focus.

I would appreciate the opportunity to discuss potential openings. May I schedule a call to learn more about your current projects?

Respectfully,
Jane Smith
ABC University Class of 2027</textarea>
            </div>
        `
    },
    business: {
        title: "Business Letter",
        structure: `
            <div>
                <p class="center"><b>Use case:</b> Proposals, partnerships, or formal business communication</p>
                <h4>Structure</h4>
                <ol>
                    <li>Your company (optional)</li>
                    <li>Personal or company address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's department or position (optional)</li>
                    <li>Recipient's company</li>
                    <li>Address of recipient's company</li>
                    <li>Reference (Re:) or subject line</li>
                    <li>Formal greeting</li>
                    <li>Body:</li>
                    <ul>
                        <li>State the letter's goal</li>
                        <li>Provide data or context</li>
                        <li>Specify next steps</li>
                    </ul>
                    <li>Professional closing</li>
                    <li>Your name and title</li>
                    <li>Your department or position (optional)</li>
                    <li>Your company (optional)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
ABC Company
123 Main St
January 15, 2025

Ms. Jane Doe
Director of Operations
XYZ Incorporated
456 Business Ave

Subject: Proposal for Marketing Collaboration

Dear Ms. Doe

Our team at ABC Company would like to propose a partnership to expand your brand's reach through targeted social media campaigns.

Based on our analysis, your current engagement rates could improve by 30% with our strategy.

We'd welcome the chance to discuss this further. Are you available for a metting next week?

Best regards,
John Smith
Public Relations Manager
ABC Company</textarea>
            </div>
        `
    },
    casual: {
        title: "Casual Letter",
        structure: `
            <div>
                <p class="center"><b>Use case:</b> Friends, family, or informal thank you notes</p>
                <h4>Structure</h4>
                <ol>
                    <li>Your address (optional)</li>
                    <li>Date</li>
                    <li>Personal greeting</li>
                    <li>Body: Freeform but organized thoughts</li>
                    <li>Warm closing</li>
                    <li>Your name</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
123 Main St
January 15, 2025

Hi Johnny!

I've been meaning to write to you about our camping trip last month. It was unforgettable!

Remember when we got caught in that rainstorm and had to build a shelter?

Let's plan another adventure soon! How about hiking next weekend?

Take care,
Janey</textarea>
            </div>
        `
    },
    thanks: {
        title: "Thank You Letter",
        structure: `
            <div>
                <p class="center"><b>Use case:</b> Post-interview or professional gratitude</p>
                <h4>Structure</h4>
                <ol>
                    <li>Your name and title</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's department or position (optional)</li>
                    <li>Recipient's company</li>
                    <li>Formal greeting</li>
                    <li>Body:</li>
                    <ul>
                        <li>Specific thanks</li>
                        <li>Personal detail</li>
                        <li>Future intentions</li>
                    </ul>
                    <li>Professional closing</li>
                    <li>Your name</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
John Doe
January 15, 2025

Dr. Jane Smith
Senior Hiring Manager
XYZ Incorporated

Dear Dr. Smith,

Thank you for interviewing me for the Software Architect role on January 14. Your insights about team collaboration resonated with me.

I particularly enjoyed our conversation about your upcoming AI projects. My experience in ML could add value.

I'm excited about the possibility of joining your team. Please let me know if you need additional materials.

With gratitude,
John Doe</textarea>
            </div>
        `
    },
    complaint: {
        title: "Complaint Letter",
        structure: `
            <div>
                <p class="center"><b>Use case:</b> Product and service issues</p>
                <h4>Structure</h4>
                <ol>
                    <li>Your name</li>
                    <li>Your address</li>
                    <li>Date</li>
                    <li>Recipient's position (optional)</li>
                    <li>Recipient's company</li>
                    <li>Address of recipient's company</li>
                    <li>Subject line about incident</li>
                    <li>Formal greeting</li>
                    <li>Body:</li>
                    <ul>
                        <li>Incident details (date, location, product)</li>
                        <li>Impact</li>
                        <li>Resolution request</li>
                    </ul>
                    <li>Firm closing</li>
                    <li>Your name</li>
                    <li>Your phone number (optional)</li>
                    <li>Your email address (optional)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
Jane Doe
123 Main St
January 15, 2025

Customer Service Manager
XYZ Incorporated
456 Business Ave

Complaint: Defective Blender

Dear Customer Service Team,

On January 10, 2025, I purchased a blender from your Main Street location. The blender malfunctioned during first use, shattering the glass pitcher.

This has caused a delay in my catering business operations.

I request a full refund and compensation for damages.

Sincerely,
Jane Doe
(123) 456-789
janedoe@email.com</textarea>
            </div>
        `
    },
    invite: {
        title: "Invitation",
        structure: `
            <div>
                <p class="center"><b>Use case:</b> Events, conferences, or ceremonies</p>
                <h4>Structure</h4>
                <ol>
                    <li>Your name or organization</li>
                    <li>Personal or organization address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's position (optional)</li>
                    <li>Recipient's organization (optional)</li>
                    <li>Subject line with event name</li>
                    <li>Formal greeting</li>
                    <li>Body:</li>
                    <ul>
                        <li>Event purpose</li>
                        <li>Date, time, and venue</li>
                        <li>RSVP instructions</li>
                    </ul>
                    <li>Warm closing</li>
                    <li>Your name and title</li>
                    <li>Your position (optional)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <h4>Example</h4>
                <textarea readonly>
Global Innovations
123 Main St
January 15, 2025

John Doe
CEO
ABC Company

Invitation: 2025 Innovation Awards

Dear Dr. Doe,

We are honored to invite you to the 2025 Innovation Awards, honoring the most distinguished CEOs accross the nation. Your work in data privacy aligns with this year's theme.

The event will include keynote speeches and networking opportunities. It will take place on January 31 at 5 pm at 456 Business Ave.

Kindly RSVP by January 20 at https://example.com//innovation-awards/rsvp.

Best regards,
Jane Smith
Event Coordinator</textarea>
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