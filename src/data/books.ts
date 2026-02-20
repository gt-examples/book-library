export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
  genre: string;
  pages: number;
  rating: number;
  reviews: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
    description:
      "The multi-generational story of the Buendia family in the mythical town of Macondo, blending reality and fantasy in a sweeping tale of love, war, and destiny.",
    genre: "Magical Realism",
    pages: 417,
    rating: 5,
    reviews: 2340,
  },
  {
    id: 2,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    year: 1987,
    description:
      "A nostalgic story of loss, sexuality, and growing up, set against the backdrop of student unrest in 1960s Tokyo.",
    genre: "Literary Fiction",
    pages: 296,
    rating: 4,
    reviews: 1876,
  },
  {
    id: 3,
    title: "The Stranger",
    author: "Albert Camus",
    year: 1942,
    description:
      "The story of an emotionally detached man who commits a senseless murder and faces trial, exploring themes of absurdism and the meaning of existence.",
    genre: "Philosophical Fiction",
    pages: 123,
    rating: 4,
    reviews: 3102,
  },
  {
    id: 4,
    title: "Beloved",
    author: "Toni Morrison",
    year: 1987,
    description:
      "A formerly enslaved woman is haunted by the ghost of her deceased daughter, confronting the trauma of slavery and the power of memory.",
    genre: "Historical Fiction",
    pages: 324,
    rating: 5,
    reviews: 1654,
  },
  {
    id: 5,
    title: "The Wind-Up Bird Chronicle",
    author: "Haruki Murakami",
    year: 1994,
    description:
      "An unemployed man searches for his missing cat and wife, descending into a surreal underworld that connects to forgotten wartime atrocities.",
    genre: "Surrealist Fiction",
    pages: 607,
    rating: 4,
    reviews: 982,
  },
  {
    id: 6,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    description:
      "The tragedy of a proud Igbo warrior whose world is shattered by the arrival of European colonizers and missionaries in late 19th century Nigeria.",
    genre: "Postcolonial Fiction",
    pages: 209,
    rating: 5,
    reviews: 2891,
  },
];
