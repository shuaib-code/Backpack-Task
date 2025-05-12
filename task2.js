// Object Manipulation: task2.js (extract book titles)

const books = [
  { title: "Tafsir al-Tabari", author: "Jarir al-Tabari", year: 883 },
  { title: "Sahih al-Bukhari", author: "Muhammad al-Bukhari", year: 846 },
  { title: "Riyad as-Salihin", author: "Imam al-Nawawi", year: 1277 },
  { title: "The Muqaddimah", author: "Ibn Khaldun", year: 1377 },
  { title: "Al-Muwatta", author: "Imam Malik ibn Anas", year: 795 },
];

// This function returns book titles from an array of objects
const getBookNames = (arr) => arr.map((book) => book.title);

const result = getBookNames(books);
console.log(result);
