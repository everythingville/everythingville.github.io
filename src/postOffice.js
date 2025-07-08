/*** LETTER GUIDES ***/

// Guide content
const letterTemplates = {
    academic: {
        title: "Academic Letter",
        structure: `
            <div>
                <p class="center"><b>Use case:</b> Correspondence with professors, researchers, or academic institutions</p>
                <b>Structure:</b>
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
                        <li>Reason for writing</li>
                        <li>Context or background</li>
                        <li>What you are asking for</li>
                    </ul>
                    <li>Professional closing</li>
                    <li>Your name</li>
                    <li>Your credentials (optional)</li>
                </ol>
            </div>
        `,
        example: `
            <div class="letter-example">
                <br>
                <b>Example:</b>
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
                <b>Structure:</b>
                <ol>
                    <li>Your company (optional)</li>
                    <li>Personal or company address</li>
                    <li>Date</li>
                    <li>Recipient's name and title</li>
                    <li>Recipient's department or position (optional)</li>
                    <li>Recipient's company</li>
                    <li>Address of recipient's company</li>
                    <li>Clear subject line</li>
                    <li>Formal greeting</li>
                    <li>Body:</li>
                    <ul>
                        <li>Goal of letter</li>
                        <li>Data or context</li>
                        <li>Next steps</li>
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
                <br>
                <b>Example:</b>
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
                <b>Structure:</b>
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
                <br>
                <b>Example:</b>
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
                <b>Structure:</b>
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
                <br>
                <b>Example:</b>
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
                <b>Structure:</b>
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
                <br>
                <b>Example:</b>
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
                <b>Structure:</b>
                <ol>
                    <li>Your organization (optional)</li>
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
                <br>
                <b>Example:</b>
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
const buildForm = () => {
    document.getElementById('letter-display').innerHTML = `
        <h2>Letter Builder</h2>
        <form id="letter-form">
            <label>Letter Type:</label>
            <select id="letter-type">
                <option value="none">None selected</option>
                <option value="academic">Academic</option>
                <option value="business">Business</option>
                <option value="casual">Casual</option>
                <option value="thanks">Thank You</option>
                <option value="complaint">Complaint</option>
                <option value="invite">Invitation</option>
            </select>

            <div id="letter-fields"></div>

            <button type="button" id="generate-btn" class="btns">Generate Letter</button>
        </form>

        <div id="generated-letter" class="hidden btns">
            <h3>Your Letter</h3>
            <textarea id="final-letter" spellcheck="true" placeholder="Type your letter or select a template from above"></textarea>
            <button id="print-btn">Print</button>
            <button id="new-letter-btn">New Letter</button>
        </div>
    `;
    document.getElementById('letter-type').addEventListener('change', (e) => {
        loadFields(e.target.value);
    });
    document.getElementById('generate-btn').addEventListener('click', generateLetter);
};

// Form fields for each letter type
const loadFields = (type) => {
    const fields = {
        none: `<p>Select a letter type to continue</p>`,
        academic: `
            <label>Your Name:</label>
                <input type="text" id="sender-name" spellcheck="true" required>
            <label>Your Institution:</label>
                <input type="text" id="sender-org" spellcheck="true" required>
            <label>Address of Your Institution:</label>
                <input type="text" id="sender-address" spellcheck="true" required>
            <label>Your Email Address (Optional):</label>
                <input type="text" id="sender-email" spellcheck="true">
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" spellcheck="true" required>
            <label>Recipient's Department or Position (Optional):</label>
                <input type="text" id="recipient-position" spellcheck="true">
            <label>Recipient's Institution:</label>
                <input type="text" id="recipient-org" spellcheck="true" required>
            <label>Address of Recipient's Institution:</label>
                <input type="text" id="recipient-address" spellcheck="true" required>
            <label>Subject:</label>
                <input type="text" id="subject" value="Subject: " spellcheck="true" required>
            <label>Greeting:</label>
                <input type="text" id="greeting" value="Dear ," spellcheck="true" required>
            <label>Body Paragraph 1:</label>
                <input type="text" id="body1" placeholder="Reason for writing" spellcheck="true" required>
            <label>Body Paragraph 2 (Optional):</label>
                <input type="text" id="body2" placeholder="Context/background" spellcheck="true">
            <label>Body Paragraph 3 (Optional):</label>
                <input type="text" id="body3" placeholder="What you're asking for" spellcheck="true">
            <label>Closing:</label>
                <input type="text" id="closing" value="Respectfully," spellcheck="true" required>
            <label>Your Credentials (Optional):</label>
                <input type="text" id="sender-credentials" spellcheck="true">
        `,
        business: `
            <label>Your Company (Optional):</label>
                <input type="text" id="sender-org" spellcheck="true">
            <label>Personal or Company Address:</label>
                <input type="text" id="sender-address" spellcheck="true" required>
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" spellcheck="true" required>
            <label>Recipient's Department or Position (Optional):</label>
                <input type="text" id="recipient-position" spellcheck="true">
            <label>Recipient's Company:</label>
                <input type="text" id="recipient-org" spellcheck="true" required>
            <label>Address of Recipient's Company:</label>
                <input type="text" id="recipient-address" spellcheck="true" required>
            <label>Subject:</label>
                <input type="text" id="subject" value="Subject: " spellcheck="true" required>
            <label>Greeting:</label>
                <input type="text" id="greeting" value="Dear ," spellcheck="true" required>
            <label>Body Paragraph 1:</label>
                <input type="text" id="body1" placeholder="Goal of letter" spellcheck="true" required>
            <label>Body Paragraph 2 (Optional):</label>
                <input type="text" id="body2" placeholder="Data/context" spellcheck="true">
            <label>Body Paragraph 3 (Optional):</label>
                <input type="text" id="body3" placeholder="Next steps" spellcheck="true">
            <label>Closing:</label>
                <input type="text" id="closing" value="Best regards," spellcheck="true" required>
            <label>Your Name and Title:</label>
                <input type="text" id="sender-name" spellcheck="true" required>
            <label>Your Department or Position (Optional):</label>
                <input type="text" id="sender-position" spellcheck="true">
        `,
        casual: `
            <label>Your Address (Optional):</label>
                <input type="text" id="sender-address" spellcheck="true">
            <label>Greeting:</label>
                <input type="text" id="greeting" value="Hi !" spellcheck="true" required>
            <label>Body:</label>
                <input type="text" id="body1" placeholder="Freeform" spellcheck="true" required>
            <label>Closing:</label>
                <input type="text" id="closing" value="Take care," spellcheck="true" required>
            <label>Your Name:</label>
                <input type="text" id="sender-name" spellcheck="true" required>
        `,
        thanks: `
            <label>Your Name and Title:</label>
                <input type="text" id="sender-name" spellcheck="true" required>
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" spellcheck="true" required>
            <label>Recipient's Department or Position (Optional):</label>
                <input type="text" id="recipient-position" spellcheck="true">
            <label>Recipient's Company:</label>
                <input type="text" id="recipient-org" spellcheck="true" required>
            <label>Greeting:</label>
                <input type="text" id="greeting" value="Dear ," spellcheck="true" required>
            <label>Body Paragraph 1:</label>
                <input type="text" id="body1" placeholder="Specific thanks" spellcheck="true" required>
            <label>Body Paragraph 2 (Optional):</label>
                <input type="text" id="body2" placeholder="Personal detail" spellcheck="true">
            <label>Body Paragraph 3 (Optional):</label>
                <input type="text" id="body3" placeholder="Future intentions" spellcheck="true">
            <label>Closing:</label>
                <input type="text" id="closing" value="With gratitude," spellcheck="true" required>
        `,
        complaint: `
            <label>Your Name:</label>
                <input type="text" id="sender-name" spellcheck="true" required>
            <label>Your Address:</label>
                <input type="text" id="sender-address" spellcheck="true" required>
            <label>Recipient's Position (Optional):</label>
                <input type="text" id="recipient-position" spellcheck="true">
            <label>Recipient's Company:</label>
                <input type="text" id="recipient-org" spellcheck="true" required>
            <label>Address of Recipient's Company:</label>
                <input type="text" id="recipient-address" spellcheck="true" required>
            <label>Subject:</label>
                <input type="text" id="subject" value="Complaint: " spellcheck="true" required>
            <label>Greeting:</label>
                <input type="text" id="greeting" value="Dear ," spellcheck="true" required>
            <label>Body Paragraph 1:</label>
                <input type="text" id="body1" placeholder="Date, location, product" spellcheck="true" required>
            <label>Body Paragraph 2 (Optional):</label>
                <input type="text" id="body2" placeholder="Impact" spellcheck="true">
            <label>Body Paragraph 3 (Optional):</label>
                <input type="text" id="body3" placeholder="Resolution request" spellcheck="true">
            <label>Closing:</label>
                <input type="text" id="closing" value="Sincerely," spellcheck="true">
            <label>Your Phone Number (Optional):</label>
                <input type="text" id="sender-phone" spellcheck="true">
            <label>Your Email Address (Optional):</label>
                <input type="text" id="sender-email" spellcheck="true">
        `,
        invite: `
            <label>Your Organization (Optional):</label>
                <input type="text" id="sender-org" spellcheck="true">
            <label>Personal or Organization Address:</label>
                <input type="text" id="sender-address" spellcheck="true" required>
            <label>Recipient's Name and Title:</label>
                <input type="text" id="recipient-name" spellcheck="true" required>
            <label>Recipient's Position (Optional):</label>
                <input type="text" id="recipient-position" spellcheck="true">
            <label>Recipient's Organization (Optional):</label>
                <input type="text" id="recipient-org" spellcheck="true">
            <label>Subject:</label>
                <input type="text" id="subject" value="Invitation: " spellcheck="true" required>
            <label>Greeting:</label>
                <input type="text" id="greeting" value="Dear ," spellcheck="true" required>
            <label>Body Paragraph 1:</label>
                <input type="text" id="body1" placeholder="Event purpose" spellcheck="true" required>
            <label>Body Paragraph 2 (Optional):</label>
                <input type="text" id="body2" placeholder="Date, time, venue" spellcheck="true">
            <label>Body Paragraph 3 (Optional):</label>
                <input type="text" id="body3" placeholder="RSVP instructions" spellcheck="true">
            <label>Closing:</label>
                <input type="text" id="closing" value="Best regards," spellcheck="true" required>
            <label>Your Name and Title:</label>
                <input type="text" id="sender-name" spellcheck="true" required>
            <label>Your Position (Optional):</label>
                <input type="text" id="sender-position" spellcheck="true">
        `
    };
    document.getElementById('letter-fields').innerHTML = fields[type];
};

// Letter generator
const generateLetter = () => {
    const type = document.getElementById('letter-type').value;
    const formData = {
        senderName: document.getElementById('sender-name')?.value || '',
        senderOrg: document.getElementById('sender-org')?.value || '',
        senderAddress: document.getElementById('sender-address')?.value || '',
        senderEmail: document.getElementById('sender-email')?.value || '',
        senderCredentials: document.getElementById('sender-credentials')?.value || '',
        senderPosition: document.getElementById('sender-position')?.value || '',
        senderPhone: document.getElementById('sender-phone')?.value || '',
        senderEmail: document.getElementById('sender-email')?.value || '',
        recipientName: document.getElementById('recipient-name')?.value || '',
        recipientPosition: document.getElementById('recipient-position')?.value || '',
        recipientOrg: document.getElementById('recipient-org')?.value || '',
        recipientAddress: document.getElementById('recipient-address')?.value || '',
        subject: document.getElementById('subject')?.value || '',
        greeting: document.getElementById('greeting')?.value || '',
        body1: document.getElementById('body1')?.value || '',
        body2: document.getElementById('body2')?.value || '',
        body3: document.getElementById('body3')?.value || '',
        closing: document.getElementById('closing')?.value || ''
    };
    let letter = '';

    // Format letter based on type
    switch(type) {
        case 'academic':
            letter = `
${formData.senderName}
${formData.senderOrg}
${formData.senderAddress}${formData.senderEmail ? '\n' + formData.senderEmail : ''}

${new Date().toLocaleDateString()}

${formData.recipientName}${formData.recipientPosition ? '\n' + formData.recipientPosition : ''}
${formData.recipientOrg}
${formData.recipientAddress}

${formData.subject}

${formData.greeting}

${formData.body1}${formData.body2 ? '\n\n' + formData.body2 : ''}${formData.body3 ? '\n\n' + formData.body3 : ''}

${formData.closing}
${formData.senderName}${formData.senderCredentials ? '\n' + formData.senderCredentials : ''}
            `;
            break;
        case 'business':
            letter = `
${formData.senderOrg ? formData.senderOrg + '\n' : ''}${formData.senderAddress}
${new Date().toLocaleDateString()}

${formData.recipientName}${formData.recipientPosition ? '\n' + formData.recipientPosition : ''}
${formData.recipientOrg}
${formData.recipientAddress}

${formData.subject}

${formData.greeting}

${formData.body1}${formData.body2 ? '\n\n' + formData.body2 : ''}${formData.body3 ? '\n\n' + formData.body3 : ''}

${formData.closing}
${formData.senderName}${formData.senderPosition ? '\n' + formData.senderPosition : ''}${formData.senderOrg ? '\n' + formData.senderOrg : ''}
            `;
            break;
        case 'casual':
            letter = `
${formData.senderAddress ? formData.senderAddress + '\n' : ''}${new Date().toLocaleDateString()}

${formData.greeting}

${formData.body1}

${formData.closing}
${formData.senderName}
            `;
            break;
        case 'thanks':
            letter = `
${formData.senderName}
${new Date().toLocaleDateString()}

${formData.recipientName}${formData.recipientPosition ? '\n' + formData.recipientPosition : ''}
${formData.recipientOrg}

${formData.greeting}

${formData.body1}${formData.body2 ? '\n\n' + formData.body2 : ''}${formData.body3 ? '\n\n' + formData.body3 : ''}

${formData.closing}
${formData.senderName}
            `;
            break;
        case 'complaint':
            letter = `
${formData.senderName}
${formData.senderAddress}
${new Date().toLocaleDateString()}

${formData.recipientPosition ? formData.recipientPosition + '\n' : ''}${formData.recipientOrg}
${formData.recipientAddress}

${formData.subject}

${formData.greeting}

${formData.body1}${formData.body2 ? '\n\n' + formData.body2 : ''}${formData.body3 ? '\n\n' + formData.body3 : ''}

${formData.closing}
${formData.senderName}${formData.senderPhone ? '\n' + formData.senderPhone : ''}${formData.senderEmail ? '\n' + formData.senderEmail : ''}
            `;
            break;
        case 'invite':
            letter = `
${formData.senderOrg ? formData.senderOrg + '\n' : ''}${formData.senderAddress}
${new Date().toLocaleDateString()}

${formData.recipientName}${formData.recipientPosition ? '\n' + formData.recipientPosition : ''}${formData.recipientOrg ? '\n' + formData.recipientOrg : ''}

${formData.subject}

${formData.greeting}

${formData.body1}${formData.body2 ? '\n' + formData.body2 : ''}${formData.body3 ? '\n' + formData.body3 : ''}

${formData.closing}
${formData.senderName}${formData.senderPosition ? '\n' + formData.senderPosition : ''}
            `;
            break;
    }

    document.getElementById('final-letter').value = letter;
    document.getElementById('generated-letter').classList.remove('hidden');

    document.getElementById('print-btn').addEventListener('click', printLetter);
    document.getElementById('new-letter-btn').addEventListener('click', buildForm);
};

document.querySelector('[data-type="builder"]').addEventListener('click', buildForm);

// Letter printer
const printLetter = () => {
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Print Letter | Everythingville</title>
                <style>
                    @font-face {
                        font-family: 'Poppins';
                        src: url('assets/fonts/Poppins-Regular.ttf');
                        font-weight: normal;
                        font-style: normal;
                    }

                    @font-face {
                        font-family: 'Poppins';
                        src: url('assets/fonts/Poppins-Bold.ttf');
                        font-weight: bold;
                        font-style: normal;
                    }

                    @font-face {
                        font-family: 'Poppins';
                        src: url('assets/fonts/Poppins-Italic.ttf');
                        font-weight: normal;
                        font-style: italic;
                    }

                    @font-face {
                        font-family: 'Poppins';
                        src: url('assets/fonts/Poppins-BoldItalic.ttf');
                        font-weight: bold;
                        font-style: italic;
                    }
                    body {
                        line-height: 1.75;
                        white-space: pre-wrap;
                        padding: 20px;
                    }
                    button {
                        display: block;
                        margin: 10px auto;
                        font-size: 14px;
                        padding: 5px 20px;
                        border-radius: 40px;
                        background-color: #75d8ff;
                        border: 1px solid #75d8ff;
                        color: black;
                        transition: all 0.3s;
                    }
                    button:hover {
                        color: #ffffff;
                        box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
                        cursor: pointer;
                        transition: all 0.3s;
                    }
                    body, button {
                        font-family: 'Poppins', BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    }
                    @media print {
                        .no-print {
                            display: none;
                        }
                        #final-letter {
                            white-space: pre-line !important;
                        }
                    }
                </style>
            </head>

            <body>
                <div>${document.getElementById('final-letter').value.replace(/\n/g, '<br>')}</div>
                <button class="no-print" onclick="window.close()">Close</button>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus()
}
// ${document.getElementById('final-letter').innerHTML.replace(/\n/g, '<br>')}