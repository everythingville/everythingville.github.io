/*** FREE BOOKS ***/

// Book DB
const library = {
    sciFi: {
        heading: "Sci-Fi",
        books: [
            {
                title: "Frankenstein",
                blurb: "by Mary Wollstonecraft Shelley is a novel written in the early 19th century. The story explores themes of ambition, the quest for knowledge, and the consequences of man's hubris through the experiences of Victor Frankenstein and the monstrous creation of his own making. The opening of the book introduces Robert Walton, an ambitious explorer on a quest to discover new lands and knowledge in the icy regions of the Arctic. In his letters to his sister Margaret, he expresses both enthusiasm and the fear of isolation in his grand venture. As Walton's expedition progresses, he encounters a mysterious, emaciated stranger who has faced great suffering—furthering the intrigue of his narrative. This stranger ultimately reveals his tale of creation, loss, and the profound consequences of seeking knowledge that lies beyond human bounds. The narrative is set up in a manner that suggests a deep examination of the emotions and ethical dilemmas faced by those who dare to defy the natural order.",
                folder: "frankenstein"
            },
            {
                title: "A Journey to the Center of the Earth",
                blurb: "by Jules Verne is a science fiction novel written in the mid-19th century. The story follows the protagonist, Professor Otto Lidenbrock, and his nephew, Axel, as they embark on an extraordinary expedition to explore the depths of the Earth, spurred by an ancient manuscript that hints at the path to the planet's core. The novel combines adventure with scientific exploration, drawing upon the geological knowledge of its time. The opening of the book introduces us to the eccentric Professor Lidenbrock, who is consumed by a recent discovery of a Runic manuscript he believes contains secrets to the Earth's interior. The story begins in Germany, where he summons his nephew, Axel, to help decipher the text, leading to a mix of excitement and dread as the young man grapples with the implications of their potential journey. As the chapters progress, Lidenbrock's fervor and determination become apparent, setting the stage for their thrilling and perilous adventure below ground. The narrative introduces key characters, references to Iceland's geological wonders, and hints at the challenges they will face as they prepare for their ambitious descent.",
                folder: "a-journey-to-the-center-of-the-earth"
            },
            {
                title: "The Time Machine",
                blurb: "by H. G. Wells is a science fiction novel written in the late 19th century. The story introduces a brilliant Time Traveller who presents his revolutionary ideas about time and space to a group of skeptical friends, discussing the concept of a fourth dimension that intertwines with our understanding of time. The opening portion reveals the Time Traveller engaging his guests in a lively conversation about his theories of time travel, demonstrating his intellect and confidence. He showcases a small model of the time machine he has created, which he explains will allow him to journey through time. His companions express disbelief and skepticism regarding his claims, leading to a tense yet intriguing atmosphere. As the narrative progresses, the Time Traveller prepares for an actual demonstration of his invention, setting the stage for his soon-to-be incredible journey into both the past and the future.",
                folder: "the-time-machine"
            }
        ]
    },
    fantasy: {
        heading: "Fantasy",
        books: [
            {
                title: "Peter Pan",
                blurb: "by J.M. Barrie is a classic children's novel first published in the early 20th century. The story revolves around the beloved character Peter Pan and follows his adventures in the fantastical Neverland, along with a young girl named Wendy Darling and her brothers, John and Michael. The themes of childhood, innocence, and the challenges of growing up are prevalent throughout the narrative. At the start of the story, we are introduced to the Darling family and their idyllic life in London. Wendy, the eldest child, grapples with the idea of growing up while her parents, Mr. and Mrs. Darling, navigate the challenges of parenthood. As the narrative unfolds, Peter Pan breaks into their nursery, and the children's imaginations ignite as they prepare for an adventure in Neverland. Wendy, along with her brothers, is enchanted by Peter's promise of flying and the magical world that awaits them. The opening sets the stage for a tale filled with whimsical characters, such as Tinker Bell, and introduces dark undertones through the presence of Captain Hook, foreshadowing the conflicts and trials that will unfold in their journey.",
                folder: "peter-pan"
            },
            {
                title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
                blurb: "by Robert Louis Stevenson is a novella written during the late 19th century that delves into the duality of human nature and the struggle between good and evil. The narrative follows Mr. Utterson, a lawyer, as he investigates the mysterious relationship between his friend, Dr. Jekyll, and the sinister Mr. Hyde, uncovering dark secrets that test the boundaries of morality. At the start of the novella, we meet Mr. Utterson and his distant cousin, Mr. Enfield, who discuss a strange door that Enfield associates with a disturbing story about Hyde trampling a young girl and displaying an unsettling demeanor. Utterson becomes increasingly intrigued by Hyde, especially when he discovers that Hyde stands to inherit Jekyll's wealth upon the doctor's disappearance. The text evokes a sense of foreboding as Utterson grapples with his concerns for Jekyll's welfare while unraveling the enigma surrounding Hyde, whose appearance elicits an inexplicable sense of dread. As the tale unfolds, it sets the stage for a profound exploration of identity, shame, and the darker aspects of human behavior.",
                folder: "the-strange-case-of-dr-jekyll-and-mr-hyde"
            },
            {
                title: "Grimms' Fairy Tales",
                blurb: "by Jacob Grimm and Wilhelm Grimm is a renowned collection of folk tales compiled in the early 19th century. This collection features a myriad of enchanting stories that explore themes of morality, adventure, and the fantastical, capturing the imagination of both children and adults alike. Prominent tales such as \"Hansel and Gretel,\" \"Cinderella,\" and \"The Frog Prince\" weave together vivid narratives populated with princes, princesses, magical creatures, and wise animals, emphasizing timeless lessons embedded in each enchanting narrative. At the start of <i>Grimms' Fairy Tales</i>, readers are introduced to the world of magic and wonder through a preparatory note that acknowledges the translations of the original German tales. The opening stories include beloved classics such as \"The Golden Bird,\" which follows a gardener's youngest son as he embarks on an adventure to capture a golden bird, aided by a cunning fox. Other tales such as \"Hans in Luck\" and \"Jorinda and Jorindel\" offer whimsical insights into luck and transformation, showcasing the variety of themes and characters that readers will encounter throughout the collection. Each story unfolds with its own unique charm, setting the stage for a journey into the remarkable and often moralistic world of fairy tales essential to cultural storytelling.",
                folder: "grimms-fairy-tales"
            }
        ]
    },
    mystery: {
        heading: "Mystery",
        books: [
            {
                title: "The Adventures of Sherlock Holmes",
                blurb: "by Arthur Conan Doyle is a collection of detective stories written during the late 19th century. The book introduces the legendary detective Sherlock Holmes and his loyal companion, Dr. John Watson, as they embark on various intriguing cases, filled with mystery and clever deductions. The opening of the book presents \"A Scandal in Bohemia,\" where Dr. Watson reflects on his relationship with Holmes and hints at the detective's infatuation with Irene Adler, a woman of great significance in his past. In this initial chapter, a royal client, who is later revealed to be the King of Bohemia, seeks Holmes's help to retrieve a compromising photograph involving Adler before his impending marriage. Watson observes Holmes's deductive abilities as Holmes analyzes a mysterious note from the king and receives visitors of significant stature, foreshadowing the adventure ahead. This introduction sets the stage for a thrilling narrative filled with twists and an exploration of Holmes's character, particularly in relation to women and the complexities of human emotions.",
                folder: "the-adventures-of-sherlock-holmes"
            },
            {
                title: "The Works of Edgar Allan Poe (Volume 1)",
                blurb: "by Edgar Allan Poe is a collection of various literary works, likely written in the mid-19th century. This volume presents a comprehensive look at Poe's contributions to the genres of horror, mystery, and poetry, showcasing his unique ability to navigate themes of melancholy and the supernatural. This collection includes not only the celebrated tales such as \"The Murders in the Rue Morgue\" and \"The Tell-Tale Heart,\" but also illuminating prefaces and analyses of his life and works, inviting readers to delve into the mind of one of America's most iconic writers. The beginning of this volume contains a preface, touching upon Poe's life, struggles, and literary achievements, and it sets the tone for the exploration of his works. Notably, it includes reflections on his early life, detailing his adoption by John Allan, his education, and his tumultuous relationships, as well as mentions of his formative experiences and the challenges he faced in his literary career. The opening gives readers insight into the origins of works that blend the macabre with the poetic, suggesting that Poe's life experiences deeply influenced his storytelling. Moreover, it serves as an introduction to the themes of despair, beauty, and complexity that define his body of work, preparing readers for the profound explorations ahead.",
                folder: "the-works-of-edgar-allan-poe"
            },
            {
                title: "The Mysterious Affair at Styles",
                blurb: "by Agatha Christie is a detective novel written in the early 20th century. The story centers around the mysterious death of an elderly matriarch, Mrs. Inglethorp, at Styles Court, her estate in Essex, and the subsequent investigation into the incident. The main character is Captain Arthur Hastings, who narrates the tale and has a close association with the famed Belgian detective Hercule Poirot, who takes on the role of sleuthing to uncover the truth surrounding Mrs. Inglethorp's demise. The beginning of the novel introduces Captain Hastings, who has returned from the front lines of World War I for a period of convalescence. He visits Styles Court at the invitation of an old acquaintance, John Cavendish, only to find himself embroiled in the complex family dynamics and tensions at play within the household. Mrs. Inglethorp's recent marriage to a much younger man, Alfred, triggers friction among the family members, particularly with her stepchildren, John and Lawrence. The narrative foreshadows underlying tensions that have escalated into a quarrel just before the tragedy strikes. Mrs. Inglethorp's sudden and dramatic transformation from a commanding presence to that of a victim sets the stage for an investigation marked by motives of greed, jealousy, and potential foul play. As Hastings recounts the sinister atmosphere enveloping Styles Court, it becomes clear that nothing is as it seems, and Poirot's keen observational skills will be needed to piece together the puzzle of the murder.",
                folder: "the-mysterious-affair-at-styles"
            }
        ]
    },
    humor: {
        heading: "Humor",
        books: [
            {
                title: "Gulliver's Travels",
                blurb: "by Jonathan Swift is a satirical novel written in the early 18th century. The book follows the adventures of Lemuel Gulliver, a ship's surgeon whose travels take him to strange and fantastical lands, including the diminutive inhabitants of Lilliput and the giant inhabitants of Brobdingnag. Through his encounters with these societies, Swift explores themes of human nature, politics, and the absurdities of life, often with sharp humor and insight. At the start of the story, Gulliver introduces himself and recounts his background, detailing his education and formative experiences at sea. He describes how he becomes shipwrecked and washes ashore in Lilliput, a land inhabited by tiny people who quickly capture him. Initially confused and overwhelmed by their shrunken world, Gulliver finds himself bound by their inhabitants, who are as astonished by him as he is by them. Soon, the emperor and his court become intrigued by Gulliver, prompting a series of comedic and politically charged incidents as he navigates the complexities of Lilliputian society while pondering deeper truths about his own world.",
                folder: "gullivers-travels"
            },
            {
                title: "The Adventures of Tom Sawyer",
                blurb: "by Mark Twain is a novel written in the mid-19th century. The book follows the adventurous life of a young boy named Tom Sawyer as he navigates childhood mischief, friendships, and his moral compass in a small American town along the Mississippi River. At the start of the story, we are introduced to Tom Sawyer as he eludes the watchful eye of his Aunt Polly, who is both exasperated and amused by his antics. The opening scenes depict Tom's mischievous nature, including his clever escape from punishment and his interactions with other children, particularly a new boy that ignites Tom's competitive spirit. The reader quickly gets a sense of Tom's personality: he's adventurous, clever, and often mischievous, setting the stage for the humorous and sometimes poignant escapades that follow in the tale.",
                folder: "the-adventures-of-tom-sawyer"
            },
            {
                title: "The Pickwick Papers",
                blurb: "by Charles Dickens is a novel written in the early 19th century. The story revolves around Samuel Pickwick, the eccentric and optimistic founder of the Pickwick Club, and his companions, Mr. Winkle, Mr. Snodgrass, and Mr. Tupman, as they embark on various adventures throughout England, exploring the quirks of society and human nature. At the start of the novel, the reader is introduced to Mr. Pickwick and the proceedings of his club. After an intriguing debate on scientific observations led by Pickwick himself, he sets off on his first journey with his fellow Pickwickians. They encounter a comical cab driver that leads to a chaotic confrontation, setting the tone for the humorous and satirical experiences to come. The opening chapters effectively establish the charm and camaraderie among the characters while hinting at the comedic misadventures that will unfold throughout their travels.",
                folder: "the-pickwick-papers"
            }
        ]
    },
    plays: {
        heading: "Plays",
        books: [
            {
                title: "The Importance of Being Earnest",
                blurb: "by Oscar Wilde is a play written in the late 19th century. This witty farce revolves around the theme of mistaken identities and the absurdities of Victorian society, focusing on the lives of two friends, John Worthing and Algernon Moncrieff, who both assume fictitious personas to escape their societal obligations. The opening of the play establishes Algernon Moncrieff's opulent flat, where he converses with his manservant Lane about the complexity of life and marriage. John Worthing, or \"Ernest\" in town, visits Algernon, expressing his purpose of proposing to Gwendolen Fairfax, Algernon's cousin. Through clever dialogue, the two men discuss their escapades and the concept of \"Bunburying,\" a euphemism for creating a fictional identity to avoid responsibilities. This sets the stage for comedic misunderstandings and romantic entanglements that unfold as they both navigate their relationships with the women in their lives, Gwendolen and Cecily Cardew.",
                folder: "the-importance-of-being-earnest"
            },
            {
                title: "The Phantom of the Opera",
                blurb: "by Gaston Leroux is a fictional novel likely written in the late 19th century. The story revolves around the mysterious figure known as the Opera Ghost, who haunts the Paris Opera House and exerts influence over the opera singers, particularly the talented Christine Daaé. Central to the plot are Christine, a gifted singer sheltered by the ghost's protective presence, and Raoul, the Viscount de Chagny, who ardently loves her and becomes embroiled in the ghost's enigmatic realm. The beginning of <i>The Phantom of the Opera</i> sets up a tantalizing mystery, both through its prologue, which claims the existence of the ghost is factual, and the opening chapters that dive into the bustling environment of the opera house. As the managers are preparing for their retirement celebration, the ghost's ominous presence is felt through frightened ballet girls discussing strange happenings and a tragic death linked to the ghost, Joseph Buquet. These elements foreshadow the turmoil surrounding Christine Daaé, who after a spectacular performance, begins to withdraw from public life due to an inexplicable fear, while Raoul's affection for her fuels the narrative's tension. The stage is thus set for a Gothic tale of love, obsession, and the supernatural.",
                folder: "the-phantom-of-the-opera"
            },
            {
                title: "A Midsummer Night's Dream",
                blurb: "by William Shakespeare is a comedic play written in the late 16th century. The story revolves around the romantic entanglements of four young Athenian lovers: Hermia, Lysander, Helena, and Demetrius, amidst the backdrop of their city's ruling couple, Theseus and Hippolyta, as well as the whims of enchanted fairies. The narrative explores themes of love, identity, and the complexities of relationships, often through a humorous and fantastical lens. At the start of the play, the Duke of Athens, Theseus, discusses his impending marriage to Hippolyta while dealing with the grievances of Egeus, who demands that his daughter Hermia marry Demetrius instead of her true love, Lysander. Hermia and Lysander plot to escape into the woods to elope, while Helena, who is in love with Demetrius, decides to pursue them. This opening sets up the central conflicts of love and desire that will unfold in the enchanted forest, where magical interventions will further complicate the relationships among the characters. Through whimsical dialogue and engaging interactions, the groundwork is laid for a story rich with humor and enchantment.",
                folder: "a-midsummer-nights-dream"
            }
        ]
    },
    society: {
        heading: "Society",
        books: [
            {
                title: "Little Women",
                blurb: "by Louisa May Alcott is a classic novel written in the mid-19th century. The story revolves around the lives and experiences of four sisters—Meg, Jo, Beth, and Amy March—as they navigate the challenges of growing up in a modest household during the American Civil War. The novel explores themes of family, sacrifice, and the pursuit of personal dreams, showcasing the distinct personalities and aspirations of each sister. The opening of the book introduces readers to the March sisters, who are grappling with their financial struggles and longing for a more comfortable life. As they gather around the fire to express their frustrations about being poor, their mother reinforces the idea that they should embrace gratitude and make sacrifices for those suffering during the war, particularly their father, who is away serving as a chaplain. This chapter sets the tone for the sisters' individual journeys, highlighting their different approaches to hardship—Meg longs for material wealth, Jo is a spirited tomboy who craves independence, Beth is the gentle peacemaker, and Amy is the aspiring artist concerned with appearances. Through their interactions and hopes, Alcott paints a vivid picture of their lives, filled with warmth, humor, and the bonds of sisterhood.",
                folder: "little-women"
            },
            {
                title: "The Great Gatsby",
                blurb: "by F. Scott Fitzgerald is a novel written in the early 20th century. The story is mainly narrated by Nick Carraway, who reflects on the life of his enigmatic neighbor, Jay Gatsby, and the extravagant world of wealth and excess he inhabits. The novel explores themes of the American Dream, love, and social class. At the start of the novel, Nick Carraway reflects on advice from his father about withholding judgment of others, which sets the stage for the unfolding narrative. We learn about Nick's background, his move to West Egg, and his connection to wealthy acquaintances like Tom and Daisy Buchanan. Nick's first glimpse of Gatsby is during a moment of solitude when he sees Gatsby reaching out toward a distant green light, symbolizing his unattainable dreams. This opening portion lays the groundwork for the intricate relationships and social dynamics in the world of 1920s America, hinting at the luxurious yet hollow lives that many characters lead.",
                folder: "the-great-gatsby"
            },
            {
                title: "The Picture of Dorian Gray",
                blurb: "by Oscar Wilde is a novel written during the late 19th century. The story explores themes of art, beauty, and morality, centering on the life of a young man named Dorian Gray, who becomes entranced by his own beauty and the hedonistic philosophies of Lord Henry Wotton. As Dorian gains fame and pleasure through his youthful looks, he grapples with the implications of vanity and the cost of immortality. At the start of the novel, we are introduced to Lord Henry Wotton and the artist Basil Hallward, who has painted a stunning portrait of Dorian Gray. Basil is deeply enamored with Dorian's beauty and harbors a secret affection for him. The opening chapters establish the dynamic between Lord Henry's cynical worldview and Basil's idealism, culminating in Dorian's arrival in the studio. Dorian's first encounter with Lord Henry sparks a transformative moment; as they converse, Dorian is exposed to Henry's hedonistic philosophies, which shape his perception of beauty and life. The chapter sets a tone that hints at the foreboding price Dorian may pay for his fascination with youth and aesthetic pleasure.",
                folder: "the-picture-of-dorian-gray"
            }
        ]
    },
    travel: {
        heading: "Travel",
        books: [
            {
                title: "Around the World in Eighty Days",
                blurb: "by Jules Verne is a classic adventure novel written in the late 19th century. The story centers around the meticulous and enigmatic Phileas Fogg, who makes a wager that he can travel around the world in just eighty days, accompanied by his new servant, Passepartout. The narrative explores themes of punctuality, the clash between routine and unpredictability, and the spirit of adventure in the face of challenges. The opening of the novel introduces Phileas Fogg, an exceptionally punctual and methodical gentleman residing in London, who is known for his unyielding daily routine and enigmatic past. He meets Passepartout, a Frenchman with a varied background, who hopes to find stability in his new role as a servant. Fogg's routine is abruptly disrupted when he engages in a wager to circumnavigate the globe in eighty days, spurred on by a conversation at the Reform Club regarding the possibilities of modern transportation. The chapter sets the stage for a journey filled with unexpected challenges, as Fogg is determined to prove that such an ambitious feat is achievable, testing both his resolve and his carefully ordered life.",
                folder: "around-the-world-in-eighty-days"
            },
            {
                title: "Twenty Thousand Leagues Under the Sea",
                blurb: "by Jules Verne is a classic science fiction novel written during the late 19th century. The story revolves around the mysterious appearances of a massive sea creature, leading to public sensation and scientific debate about its existence. The narrative is centered on Professor Pierre Aronnax, his servant Conseil, and Canadian whaler Ned Land as they embark on a journey to confront this enigmatic creature, which turns out to be far more than anyone anticipated. The opening of the novel sets the stage for an extraordinary adventure by detailing the widespread excitement over sightings of a colossal sea creature observed by various ships across the oceans. Professor Aronnax, recently returned from a scientific expedition, finds himself drawn into the heated debate surrounding the creature's existence. The narrative follows his decision to join the U.S. expedition aboard the frigate Abraham Lincoln, alongside his companions Conseil and Ned Land, as they pursue the supposed monster. Tension builds as they ready themselves for confrontation, establishing a sense of suspense and wonder about what lies beneath the ocean's depths.",
                folder: "twenty-thousand-leagues-under-the-sea"
            },
            {
                title: "The Travels of Marco Polo (Volume 1)",
                blurb: "by Marco Polo and da Pisa Rusticiano is a historical account likely written in the late 13th to early 14th century. The work chronicles the remarkable journey of Marco Polo, a Venetian merchant, and explorer, detailing his travels across Asia and his experiences in the court of Kublai Khan. The opening of the book establishes its historical significance and its context as part of a larger work edited and annotated by Henry Yule. It includes dedications, prefaces, and initial remarks about the journeys Polo undertook alongside his family. The narrative hints at Polo's deep appreciation for the diverse cultures and riches he encountered, setting the stage for a tale of adventure, discovery, and detailed observation of the East. The author mixes poetic quotes with personal reflections, engaging the reader's sense of wonder about the vast world beyond Europe that Polo explores.",
                folder: "the-travels-of-marco-polo"
            }
        ]
    },
    children: {
        heading: "Children",
        books: [
            {
                title: "Alice's Adventures in Wonderland",
                blurb: "by Lewis Carroll is a classic children's novel written in the mid-19th century. The story follows a young girl named Alice who, feeling bored and sleepy while sitting by a riverbank, encounters a White Rabbit and follows it down a rabbit hole, plunging into a fantastical world filled with curious creatures and whimsical adventures. The opening of the book introduces Alice as she daydreams about her surroundings before spotting the White Rabbit, who is both flustered and animated. Curious, Alice pursues the Rabbit and finds herself tumbling down a deep rabbit hole, leading to a curious hall filled with doors, all locked. After experiencing a series of bizarre changes in size from eating and drinking mysterious substances, she begins exploring this new world, initially frustrated by her newfound challenges as she navigates her size and the peculiar inhabitants she meets. The narrative sets the tone for Alice's whimsical and often nonsensical adventures that characterize the entire tale.",
                folder: "alices-adventures-in-wonderland"
            },
            {
                title: "Winnie the Pooh",
                blurb: "by A. A. Milne is a children's novel written in the early 20th century. It brings to life the adventures of a beloved bear named Winnie-the-Pooh and his friends in the Hundred Acre Wood, including the charming Christopher Robin, the timid Piglet, and the gloomy Eeyore. The story is filled with whimsical themes of friendship, exploration, and the innocence of childhood. At the start of the story, we are introduced to Winnie-the-Pooh as he comes down the stairs with a hearty bump and begins to think about honey, his favorite treat. The narrative includes playful dialogue with Christopher Robin, who encourages Pooh's thoughts and inquiries. Pooh initially plans to obtain honey from a swarm of bees and seeks Christopher Robin's help, leading to a hilariously imaginative attempt involving a balloon. The opening sets the tone for the enchanting and humorous adventures that follow, inviting readers into Pooh's delightful world filled with friends and charming escapades.",
                folder: "winnie-the-pooh"
            },
            {
                title: "The Wonderful Wizard of Oz",
                blurb: "by L. Frank Baum is a classic children's novel written in the late 19th century. The story centers on a young girl named Dorothy, who lives on the Kansas prairies and is whisked away to the magical Land of Oz by a cyclone. Dorothy embarks on an adventure to find her way back home, encountering unique characters along the way, such as the Scarecrow, the Tin Woodman, and the Cowardly Lion, each seeking something from the elusive wizard, Oz. The opening of the novel introduces Dorothy's life in Kansas, her loving but weary aunt and uncle, and a perilous cyclone that transports her to Oz. There, she discovers that her house has accidentally killed the Wicked Witch of the East, freeing the Munchkin people. In her quest to return home, she learns that she must seek the Great Oz in the Emerald City. As she sets off along the Yellow Brick Road, she meets the Scarecrow, who wishes for brains, and the Tin Woodman, who longs for a heart, highlighting key themes of friendship, courage, and the quest for self-discovery. With a blend of adventure and whimsy, this opening sets the stage for a journey filled with fantastical encounters and valuable life lessons.",
                folder: "the-wonderful-wizard-of-oz"
            }
        ]
    },
    poetry: {
        heading: "Poetry",
        books: [
            {
                title: "Romeo and Juliet",
                blurb: "by William Shakespeare is a tragedy likely written during the late 16th century. The play centers on the intense love affair between two young lovers, Romeo Montague and Juliet Capulet, whose families are embroiled in a bitter feud. Their love, while passionate and profound, is met with adversities that ultimately lead to tragic consequences. At the start of the play, a Prologue delivered by the Chorus sets the stage for the tale of forbidden love, revealing the familial conflict that surrounds Romeo and Juliet. The opening scenes depict a public brawl ignited by the feud between the Montagues and Capulets, showcasing the hostility that envelops their lives. As we are introduced to various characters such as Benvolio, Tybalt, and Mercutio, we learn of Romeo's unrequited love for Rosaline. However, this quickly changes when Romeo encounters Juliet at the Capulet ball, where they share a famous and romantic exchange, unwittingly falling in love with each other despite their families' bitter enmity. This initial encounter foreshadows the obstacles they will face as their love story unfolds amidst chaos and conflict.",
                folder: "romeo-and-juliet"
            },
            {
                title: "Don Juan",
                blurb: "by Lord Byron is a satirical epic poem written in the early 19th century. The poem follows the misadventures of its titular character, Don Juan, a young man who is not portrayed as a seducer, but rather as one who is easily seduced by women. Through various encounters and a humorous lens, Byron explores themes of love, societal norms, and human folly. The opening of \"Don Juan\" sets a lively and witty tone, starting with an ironic dedication to poet Robert Southey, which critiques contemporary poets and celebrates poetic freedom. We are introduced to the protagonist, Don Juan, who is born in Seville to a noble father and a highly educated mother, Donna Inez, who has aspirations of making him a paragon of virtue. However, the narrative quickly hints at the complications of their relationships, particularly as Juan's innocence leads him into the clutches of love and seduction, contrasting sharply with the societal expectations imposed upon him. The conflict escalates when Juan inadvertently becomes involved in a scandal with Donna Julia, leading to a comedic yet profound examination of moral hypocrisy and desire.",
                folder: "don-juan"
            },
            {
                title: "Poems by Emily Dickinson",
                blurb: "by Emily Dickinson is a collection of poetry likely written during the mid-19th century. This compilation showcases the unique voice of Dickinson, who is known for her introspective and innovative approach to themes of life, nature, love, and death. The poems encapsulate profound insights delivered with a distinct style that defies conventional poetic structures, often employing unconventional punctuation and slant rhymes. The opening of this collection begins with a preface that offers context for Dickinson's reclusive nature, emphasizing that her poetry was created for personal expression rather than public consumption. As we delve into the initial poems, we encounter themes of identity and existential reflection. The early verses introduce the idea of subjective experience, as Dickinson grapples with concepts of success and the bittersweet essence of longing. Throughout her work, one can feel the tension between her isolation and acute observation of the world around her, revealing a rich tapestry of emotion and thought that invites readers into her unique perspective.",
                folder: "poems-by-emily-dickinson"
            }
        ]
    },
    biographies: {
        heading: "Biographies",
        books: [
            {
                title: "Autobiography of Benjamin Franklin",
                blurb: "by Benjamin Franklin is a historical account written in the late 18th century. This work delves into Franklin's life, offering insights into his humble beginnings, his rise to prominence, and the philosophies that guided him throughout his achievements. It not only reflects on his personal journey but also serves as an inspiring narrative of self-improvement and perseverance. At the start of the autobiography, Franklin introduces himself to his son, outlining his motivations for writing, which include sharing life lessons and family anecdotes. He recalls his early years in Boston, his family's influences, and his father's aspirations for him. Through these recollections, Franklin discusses his childhood experiences, early education, and the start of his career as a printer. The narrative hints at his keen desire for knowledge and self-betterment, setting the stage for the remarkable life he would go on to lead.",
                folder: "benjamin-franklin"
            },
            {
                title: "The Story of My Life",
                blurb: "by Helen Keller is an autobiographical account written during the late 19th century. This profound narrative details her experiences as a deaf and blind child, chronicling her struggles and triumphs as she transitions from a world of isolation into one filled with knowledge and communication through the loving guidance of her teacher, Anne Sullivan. The work explores themes of resilience, the transformative power of education, and the deep bond between student and teacher. At the start of the autobiography, Keller reflects on her early childhood, which is marked by a vibrant connection to her surroundings despite her disabilities. She recalls joyous moments in her family's home in Alabama, her impetuous nature, and the playful encounters with family and friends unable to fully understand her. However, this joyful existence abruptly changes after a severe illness leaves her completely deaf and blind, plunging her into a silent and dark world. The beginning of the narrative establishes a poignant contrast between her memories of light and joy and the confusion that follows her disability, setting the stage for her later awakening through language and education once Anne Sullivan enters her life. Keller's prose conveys a rich tapestry of emotions and sensory experiences, inviting readers into her unique journey toward understanding and expression.",
                folder: "helen-keller"
            },
            {
                title: "The Letters of Wolfgang Amadeus Mozart (Volume 1)",
                blurb: "by Wolfgang Amadeus Mozart is a collection of personal correspondence written during the late 18th century. This volume compiles the letters of Mozart from 1769 to 1791, reflecting not just his thoughts on music, but also his life experiences, relationships, and the cultural landscape of his time. The letters provide an intimate glimpse into the psyche of one of classical music's most revered figures, showcasing his genius and the struggles he faced as both an artist and a person. At the start of this volume, the reader is introduced to Mozart's early life, particularly through detailed references to his childhood and his family dynamics, primarily featuring his correspondence with his father and sister. The opening portion highlights the joys and challenges of his upbringing, including the impact of his father's ambitions for his music career. We see a young Mozart travel through various cities, delighting in describing his encounters with art and music while expressing a playful spirit in his letters. His observations about people, places, and his own compositions create a lively narrative that captures both his personality and burgeoning talent, setting the stage for a deeper exploration of his letters throughout the rest of the collection.",
                folder: "wolfgang-amadeus-mozart"
            }
        ]
    }
};
document.querySelectorAll('div.book-genres button').forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.dataset.genre;
        displayBook(genre);
    });
});

// Display books from chosen genre
const displayBook = (genre) => {
    const books = library[genre];
    document.getElementById('book-display').innerHTML = `
        <h3>${books.heading}</h3>
        <label>Book:</label>
        <select id="book">
            ${books.books.map(b => `
                <option value="${books.books.indexOf(b)}">${b.title}</option>
            `).join('')}
        </select>
        <div id="book-info"></div>
    `;

    const randIndex = Math.floor(Math.random() * books.books.length);
    document.getElementById('book').selectedIndex = randIndex;
    loadBook(genre, randIndex);
    document.getElementById('book').addEventListener('change', (e) => {
        loadBook(genre, e.target.value);
    });
};

// Display chosen book (automatically loads random)
const loadBook = (genre, index) => {
    const b = library[genre].books[index];
    document.getElementById('book-info').innerHTML = `
        <details>
            <summary><b>About <i>${b.title}</i></b></summary>
            <p><i>${b.title}</i> ${b.blurb}</p>
        </details>
        <iframe class="book" src="assets/books/${genre}/${b.folder}/book.html" title="${b.title}"></iframe>
    `;
}

/*
BOOKS TO CHECK
Mozart
Jekyll
*/