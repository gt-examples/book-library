export interface Book {
  id: number;
  slug: string;
  title: string;
  author: string;
  year: number;
  description: string;
  synopsis: string;
  authorBio: string;
  genre: string;
  pages: number;
  rating: number;
  reviews: number;
  readingTime: string;
  relatedSlugs: string[];
}

type GT = (content: string) => string;

export function getBooks(gt: GT): Book[] {
  return [
    {
      id: 1,
      slug: "one-hundred-years-of-solitude",
      title: gt("One Hundred Years of Solitude"),
      author: "Gabriel Garcia Marquez",
      year: 1967,
      description: gt(
        "The multi-generational story of the Buendia family in the mythical town of Macondo, blending reality and fantasy in a sweeping tale of love, war, and destiny."
      ),
      synopsis: gt(
        "The novel follows seven generations of the Buendia family in the fictional Colombian town of Macondo. Founded by Jose Arcadio Buendia and his wife Ursula Iguaran, the town grows from a primitive village into a bustling settlement, only to decline into ruin. Through the recurring names and cyclical fates of the Buendia descendants, Garcia Marquez weaves a tapestry of passion, obsession, and solitude. Civil wars rage, banana plantations rise and fall, and supernatural events unfold alongside the mundane. The novel explores how history repeats itself, how memory and forgetting shape identity, and how the pursuit of knowledge and love can lead to both wonder and destruction. In the end, the last Buendia deciphers a set of ancient prophecies that foretell the family's entire history, reading them as a hurricane erases Macondo from the face of the earth."
      ),
      authorBio: gt(
        "Gabriel Garcia Marquez (1927-2014) was a Colombian novelist, short-story writer, and journalist. He was awarded the Nobel Prize in Literature in 1982. Widely considered one of the most significant authors of the 20th century, he popularized the literary style known as magical realism. Born in Aracataca, Colombia, he spent much of his career in Mexico and Europe, drawing on his childhood memories and Latin American history to create his fictional worlds."
      ),
      genre: gt("Magical Realism"),
      pages: 417,
      rating: 5,
      reviews: 2340,
      readingTime: gt("14 hours"),
      relatedSlugs: ["invisible-cities", "beloved"],
    },
    {
      id: 2,
      slug: "norwegian-wood",
      title: gt("Norwegian Wood"),
      author: "Haruki Murakami",
      year: 1987,
      description: gt(
        "A nostalgic story of loss, sexuality, and growing up, set against the backdrop of student unrest in 1960s Tokyo."
      ),
      synopsis: gt(
        "Toru Watanabe, now thirty-seven, hears the Beatles song 'Norwegian Wood' on an airplane and is transported back to his college years in 1960s Tokyo. He recalls his deep bond with Naoko, the girlfriend of his childhood best friend Kizuki, who took his own life at seventeen. After Kizuki's death, Toru and Naoko drift together, connected by shared grief. But Naoko's mental health deteriorates and she retreats to a sanatorium in the mountains. Meanwhile, Toru meets Midori, a vivacious and irreverent young woman who represents vitality and the possibility of moving forward. Torn between his loyalty to Naoko and his growing feelings for Midori, Toru must navigate the boundary between honoring the dead and embracing the living. The novel is a meditation on the nature of loss, the persistence of memory, and the painful process of becoming an adult."
      ),
      authorBio: gt(
        "Haruki Murakami (born 1949) is a Japanese writer. His novels, essays, and short stories have been bestsellers in Japan and internationally, with his work translated into fifty languages. His style blends elements of Western and Japanese culture, often featuring surreal and dreamlike narratives. Before becoming a full-time writer, he owned a jazz bar in Tokyo, and music remains a recurring motif in his work."
      ),
      genre: gt("Literary Fiction"),
      pages: 296,
      rating: 4,
      reviews: 1876,
      readingTime: gt("10 hours"),
      relatedSlugs: ["the-wind-up-bird-chronicle", "the-stranger"],
    },
    {
      id: 3,
      slug: "the-stranger",
      title: gt("The Stranger"),
      author: "Albert Camus",
      year: 1942,
      description: gt(
        "The story of an emotionally detached man who commits a senseless murder and faces trial, exploring themes of absurdism and the meaning of existence."
      ),
      synopsis: gt(
        "Meursault, a French Algerian, receives a telegram informing him that his mother has died. He attends the funeral but shows little emotion, and the next day begins a casual affair with Marie. When his neighbor Raymond involves him in a dispute with a group of Arabs, Meursault ends up shooting and killing one of them on a sun-drenched beach, seemingly without motive. During his trial, the prosecution focuses less on the crime itself and more on Meursault's apparent lack of feeling at his mother's funeral, his refusal to cry, and his inability to express conventional grief. Condemned to death, Meursault ultimately finds peace in accepting the indifference of the universe. The novel is a foundational text of absurdist philosophy, questioning society's demand for emotional conformity and the search for meaning in a world that offers none."
      ),
      authorBio: gt(
        "Albert Camus (1913-1960) was a French-Algerian philosopher, author, and journalist. He was awarded the Nobel Prize in Literature in 1957. A leading figure of absurdism, Camus explored the conflict between the human desire for meaning and the silent indifference of the universe. Born in French Algeria to a poor family, he rose to prominence in Parisian intellectual circles alongside figures like Jean-Paul Sartre, though the two later became rivals."
      ),
      genre: gt("Philosophical Fiction"),
      pages: 123,
      rating: 4,
      reviews: 3102,
      readingTime: gt("4 hours"),
      relatedSlugs: ["norwegian-wood", "things-fall-apart"],
    },
    {
      id: 4,
      slug: "beloved",
      title: gt("Beloved"),
      author: "Toni Morrison",
      year: 1987,
      description: gt(
        "A formerly enslaved woman is haunted by the ghost of her deceased daughter, confronting the trauma of slavery and the power of memory."
      ),
      synopsis: gt(
        "Set in 1873, the novel follows Sethe, a formerly enslaved woman living in Cincinnati, Ohio, with her daughter Denver. Their house at 124 Bluestone Road is haunted by the ghost of Sethe's firstborn daughter, who died as a baby. When Paul D, a fellow former slave from the plantation called Sweet Home, arrives, he drives the ghost out. But soon a mysterious young woman calling herself Beloved appears, and Sethe becomes convinced she is her dead daughter returned in the flesh. As Beloved's presence grows more consuming, the novel unfolds the horrific memories of Sweet Home: the brutality of the slave masters, Sethe's desperate escape while pregnant, and the unspeakable act she committed to spare her children from slavery. The story examines how the trauma of slavery persists across generations and how the act of remembering can be both necessary and devastating."
      ),
      authorBio: gt(
        "Toni Morrison (1931-2019) was an American novelist, essayist, and professor. She was awarded the Nobel Prize in Literature in 1993, the first African-American woman to receive the honor. Her novels explore African-American identity, history, and the legacy of slavery with poetic language and unflinching honesty. She served as an editor at Random House, where she championed the work of Black authors, before her own writing career brought her international acclaim."
      ),
      genre: gt("Historical Fiction"),
      pages: 324,
      rating: 5,
      reviews: 1654,
      readingTime: gt("11 hours"),
      relatedSlugs: ["things-fall-apart", "one-hundred-years-of-solitude"],
    },
    {
      id: 5,
      slug: "the-wind-up-bird-chronicle",
      title: gt("The Wind-Up Bird Chronicle"),
      author: "Haruki Murakami",
      year: 1994,
      description: gt(
        "An unemployed man searches for his missing cat and wife, descending into a surreal underworld that connects to forgotten wartime atrocities."
      ),
      synopsis: gt(
        "Toru Okada is an unemployed young man living a quiet life in suburban Tokyo when his cat disappears. His wife Kumiko becomes increasingly distant, and then she too vanishes. As Toru searches for them both, he is drawn into a labyrinth of strange encounters: a psychic pair of sisters, a teenage neighbor who watches the alley from her garden wall, a sinister politician who may hold the key to Kumiko's disappearance, and a World War II veteran whose harrowing account of the Manchurian campaign reveals connections to the present. Toru descends into a dry well to meditate and enters an otherworldly hotel corridor where reality bends. The novel interweaves personal loss with historical trauma, exploring how violence and power corrupt across generations, and how ordinary people can find extraordinary courage in the darkest of circumstances."
      ),
      authorBio: gt(
        "Haruki Murakami (born 1949) is a Japanese writer. His novels, essays, and short stories have been bestsellers in Japan and internationally, with his work translated into fifty languages. His style blends elements of Western and Japanese culture, often featuring surreal and dreamlike narratives. Before becoming a full-time writer, he owned a jazz bar in Tokyo, and music remains a recurring motif in his work."
      ),
      genre: gt("Surrealist Fiction"),
      pages: 607,
      rating: 4,
      reviews: 982,
      readingTime: gt("20 hours"),
      relatedSlugs: ["norwegian-wood", "invisible-cities"],
    },
    {
      id: 6,
      slug: "things-fall-apart",
      title: gt("Things Fall Apart"),
      author: "Chinua Achebe",
      year: 1958,
      description: gt(
        "The tragedy of a proud Igbo warrior whose world is shattered by the arrival of European colonizers and missionaries in late 19th century Nigeria."
      ),
      synopsis: gt(
        "Okonkwo is a respected warrior and leader in the Igbo village of Umuofia in what is now southeastern Nigeria. Determined to overcome the legacy of his lazy, indebted father, Okonkwo builds his reputation through hard work, wrestling prowess, and a fierce temperament. He takes multiple wives, accumulates wealth, and becomes one of the most powerful men in the clan. But his rigid pride leads to a series of misfortunes: he accidentally kills a clansman and is exiled for seven years. During his absence, British missionaries and colonial administrators arrive, converting villagers to Christianity and undermining traditional governance. When Okonkwo returns, he finds a fractured community and attempts to rally resistance, but the old ways cannot withstand the new order. The novel is a landmark of African literature, offering a complex portrait of pre-colonial Igbo society and the devastating cultural collision brought by colonialism."
      ),
      authorBio: gt(
        "Chinua Achebe (1930-2013) was a Nigerian novelist, poet, and critic. Often called the father of modern African literature, he wrote in English to reach the widest possible audience and to reclaim the narrative of Africa from colonial writers. His debut novel Things Fall Apart has sold over twenty million copies and been translated into more than fifty languages. He spent his later years teaching at universities in Nigeria and the United States."
      ),
      genre: gt("Postcolonial Fiction"),
      pages: 209,
      rating: 5,
      reviews: 2891,
      readingTime: gt("7 hours"),
      relatedSlugs: ["beloved", "the-stranger"],
    },
    {
      id: 7,
      slug: "invisible-cities",
      title: gt("Invisible Cities"),
      author: "Italo Calvino",
      year: 1972,
      description: gt(
        "Marco Polo describes to Kublai Khan the fantastical cities he has visited, each one an exploration of memory, desire, and the nature of urban life."
      ),
      synopsis: gt(
        "The novel is structured as a conversation between the Venetian explorer Marco Polo and the aging Mongol emperor Kublai Khan. Polo describes fifty-five cities he has visited, each one impossible and dreamlike. There are cities built on stilts over the void, cities where the dead live beneath the living, cities made entirely of pipes, and cities that exist only in the act of being described. The cities are organized into thematic categories: cities and memory, cities and desire, cities and signs, thin cities, trading cities, cities and eyes, cities and names, cities and the dead, cities and the sky, and hidden cities. As the conversations progress, it becomes clear that all the cities may be reflections of a single city, perhaps Venice itself. The book is a meditation on language, imagination, and the impossibility of truly knowing a place, structured with mathematical precision and poetic grace."
      ),
      authorBio: gt(
        "Italo Calvino (1923-1985) was an Italian journalist and writer of short stories and novels. One of the most important Italian fiction writers of the 20th century, he was known for his imaginative and structurally inventive narratives. Born in Cuba and raised in Italy, he was a member of the Italian Resistance during World War II. His later works increasingly explored the boundaries between literature, science, and philosophy."
      ),
      genre: gt("Postmodern Fiction"),
      pages: 165,
      rating: 4,
      reviews: 1523,
      readingTime: gt("5 hours"),
      relatedSlugs: [
        "one-hundred-years-of-solitude",
        "the-wind-up-bird-chronicle",
      ],
    },
  ];
}

export function getBookBySlug(
  books: Book[],
  slug: string
): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getRelatedBooks(books: Book[], book: Book): Book[] {
  return book.relatedSlugs
    .map((s) => books.find((b) => b.slug === s))
    .filter((b): b is Book => b !== undefined);
}

export function getGenres(books: Book[]): string[] {
  return [...new Set(books.map((b) => b.genre))].sort();
}
