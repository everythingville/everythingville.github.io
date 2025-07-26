/*** FLASHCARDS ***/

// Embed code for flashcards
const flashcards = {
    math: {
        beginner: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=83e12b47-03d1-4796-9633-34787488633a&gameMode=flashcards" title="Long Division" loading="lazy"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=a0331e4e-698c-46df-bad0-b49eeb22285b&gameMode=flashcards" title="Multiplying 2 & 3 Digit Numbers" loading="lazy"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=283622b0-21dd-4586-9e5c-cb7f10e2db3e&gameMode=flashcards" title="Fractions (+, -, x, ÷)" loading="lazy"></iframe>
        `,
        intermediate: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=ebf25557-d7c6-443c-a75a-8cb3cae95c0d&gameMode=flashcards" title="Area of Polygons & Composite Figures"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=6fe00fbb-a7d7-4ef0-973a-58637f12d011&gameMode=flashcards" title="Surface Area & Volume"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=cc3ea93b-f518-4223-b691-5742d00ece2d&gameMode=flashcards" title="Evaluate Algebraic Expressions"></iframe>
        `,
        advanced: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=18d608c2-2246-4236-9ea1-7b3ba2421c12&gameMode=flashcards" title="Rational and Irrational Numbers"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=4584c347-22be-47fa-b400-8adb7926a174&gameMode=flashcards" title="Polynomial Equations and Factoring"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=d778909a-310a-4dc8-a254-c3e0281b2b05&gameMode=flashcards" title="Volume and Surface Area"></iframe>
        `
    },
    ela: {
        beginner: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=390d55ea-13b2-43d6-b4da-2a29aca76705&gameMode=flashcards" title="Parts of Speech"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=0660b28b-6327-4f65-9984-652a283fd9ae&gameMode=flashcards" title="Grammar"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=8fef3878-ac98-407e-87e6-0b4d64a6ea0c&gameMode=flashcards" title="Theme Vocabulary"></iframe>
        `,
        intermediate: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=ae6bab6a-e41b-4e50-a53a-7ec0004c4dea&gameMode=flashcards" title="Poetry Terms"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=011b22ca-44b2-46bc-9e55-d986dbff3e91&gameMode=flashcards" title="Irregular Verbs"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=35476f67-4b04-4e84-a7bc-5372260962d9&gameMode=flashcards" title="Idioms"></iframe>
        `,
        advanced: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=4db9e19d-6726-4e2e-88fc-8b0e59f131b1&gameMode=flashcards" title="SAT Words"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=5fa8ae9b-6467-4a3e-a48f-44724255b49c&gameMode=flashcards" title="Common Affixes"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=c52e5065-bfb3-4b3b-801f-3b8c2d81c9db&gameMode=flashcards" title="Figurative Language"></iframe>
        `
    },
    sci: {
        beginner: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=100a1837-f000-45e3-bd4b-f983186125ff&gameMode=flashcards" title="The Solar System"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=6ea45b89-fe7c-4dae-941c-13c57deed8a4&gameMode=flashcards" title="Plant Parts"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=aff935d7-12bc-47c1-8604-9e32f0188115&gameMode=flashcards" title="The Water Cycle"></iframe>
        `,
        intermediate: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=860e5ff4-626a-4346-b517-0a593b7ed1bd&gameMode=flashcards" title="Genetics"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=4264cae5-a565-4bc1-a938-9d6fa7b8afe6&gameMode=flashcards" title="Continental Drift and Sea-Floor Spreading"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=9f95fec2-1745-45d0-9769-92bb0d36b3b9&gameMode=flashcards" title="Physical and Chemical Properties"></iframe>
        `,
        advanced: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=ac9a2b64-6e6e-4ec0-ab08-0536bff01808&gameMode=flashcards" title="Nitrogen Cycle"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=9c220e0c-697a-4c2b-81a9-deadfc59b689&gameMode=flashcards" title="Electromagnetic Radiation"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=f229f37a-5e4f-4884-9074-9277a26542ea&gameMode=flashcards" title="Botany"></iframe>
        `
    },
    ss: {
        beginner: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=5aef690a-3526-4c07-a19d-ec07af97437a&gameMode=flashcards" title="World War I"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=58de2ca1-685d-439e-8e6c-12d6841f0f93&gameMode=flashcards" title="Government"></iframe>
            
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=069475e3-6e63-4a5d-a563-ef912164cd64&gameMode=flashcards" title="Citizenship Rights and Responsibilities"></iframe>
        `,
        intermediate: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=74e77403-76cf-402c-bc02-8adc0567e3b7&gameMode=flashcards" title="Flags of the World"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=f4b405a6-92ec-4959-8aaf-656043187307&gameMode=flashcards" title="Chinese History"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=aa45019f-83fd-4c3c-8b59-7374d47168a5&gameMode=flashcards" title="Ancient Greece"></iframe>
        `,
        advanced: `
            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=624658b7-968f-4231-af81-471770101767&gameMode=flashcards" title="Early Hominins"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=d51a94e5-5542-405e-97b8-c8c0f8e2da6f&gameMode=flashcards" title="Germany Under Nazi Control"></iframe>

            <iframe class="flashcards" src="https://kahoot.it/solo/?quizId=8148b2eb-4979-45ec-94b6-0cd67a46ef39&gameMode=flashcards" title="The Great Depression & The New Deal"></iframe>
        `
    }
}
// Display flashcards
document.querySelectorAll('button.flashcards').forEach(button => {
    button.addEventListener('click', () => {
        const subject = button.dataset.subject;
        document.getElementById('flashcards-display').innerHTML = `
            <label>Difficulty Level:</label>
            <select id="flashcard-difficulty">
                <option value="" selected disabled>Select a difficulty level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>

            <div id="flashcards"></div>
        `;
        document.getElementById('flashcard-difficulty').addEventListener('change', (e) => {
            loadFlashcards(subject, e.target.value);
        });
    });
});

const loadFlashcards = (subject, difficulty) => {
    document.getElementById('flashcards').innerHTML = flashcards[subject][difficulty];
}