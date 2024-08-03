'use client'

import { ComboBox, ComboBoxItem, ComboBoxSection } from 'ui'

export default function ComboBoxSectionDemo() {
  return (
    <ComboBox placeholder="Select a author" label="Authors" items={authors}>
      {(author) => (
        <ComboBoxSection title={author.name} items={author.books}>
          {(book) => <ComboBoxItem textValue={book.name}>{book.name}</ComboBoxItem>}
        </ComboBoxSection>
      )}
    </ComboBox>
  )
}

const authors = [
  {
    id: 1,
    name: 'J.K. Rowling',
    books: [
      {
        id: 101,
        name: "Harry Potter and the Sorcerer's Stone"
      },
      {
        id: 102,
        name: 'Harry Potter and the Chamber of Secrets'
      },
      {
        id: 103,
        name: 'Harry Potter and the Prisoner of Azkaban'
      },
      {
        id: 104,
        name: 'Harry Potter and the Goblet of Fire'
      }
    ]
  },
  {
    id: 2,
    name: 'J.R.R. Tolkien',
    books: [
      {
        id: 201,
        name: 'The Hobbit'
      },
      {
        id: 202,
        name: 'The Fellowship of the Ring'
      },
      {
        id: 203,
        name: 'The Two Towers'
      },
      {
        id: 204,
        name: 'The Return of the King'
      }
    ]
  },
  {
    id: 3,
    name: 'George R.R. Martin',
    books: [
      {
        id: 301,
        name: 'A Game of Thrones'
      },
      {
        id: 302,
        name: 'A Clash of Kings'
      },
      {
        id: 303,
        name: 'A Storm of Swords'
      },
      {
        id: 304,
        name: 'A Feast for Crows'
      },
      {
        id: 305,
        name: 'A Dance with Dragons'
      }
    ]
  },
  {
    id: 4,
    name: 'Isaac Asimov',
    books: [
      {
        id: 401,
        name: 'Foundation'
      },
      {
        id: 402,
        name: 'Foundation and Empire'
      },
      {
        id: 403,
        name: 'Second Foundation'
      }
    ]
  },
  {
    id: 5,
    name: 'Agatha Christie',
    books: [
      {
        id: 501,
        name: 'Murder on the Orient Express'
      },
      {
        id: 502,
        name: 'And Then There Were None'
      },
      {
        id: 503,
        name: 'The Murder of Roger Ackroyd'
      },
      {
        id: 504,
        name: 'The A.B.C. Murders'
      },
      {
        id: 505,
        name: 'Death on the Nile'
      },
      {
        id: 506,
        name: 'The Mysterious Affair at Styles'
      }
    ]
  },
  {
    id: 6,
    name: 'Stephen King',
    books: [
      {
        id: 601,
        name: 'The Shining'
      },
      {
        id: 602,
        name: 'It'
      },
      {
        id: 603,
        name: 'The Dark Tower: The Gunslinger'
      },
      {
        id: 604,
        name: 'Carrie'
      }
    ]
  },
  {
    id: 7,
    name: 'Jane Austen',
    books: [
      {
        id: 701,
        name: 'Pride and Prejudice'
      },
      {
        id: 702,
        name: 'Sense and Sensibility'
      },
      {
        id: 703,
        name: 'Emma'
      },
      {
        id: 704,
        name: 'Mansfield Park'
      }
    ]
  },
  {
    id: 8,
    name: 'Mark Twain',
    books: [
      {
        id: 801,
        name: 'The Adventures of Tom Sawyer'
      },
      {
        id: 802,
        name: 'Adventures of Huckleberry Finn'
      },
      {
        id: 803,
        name: 'The Prince and the Pauper'
      }
    ]
  },
  {
    id: 9,
    name: 'Charles Dickens',
    books: [
      {
        id: 901,
        name: 'A Tale of Two Cities'
      },
      {
        id: 902,
        name: 'Great Expectations'
      },
      {
        id: 903,
        name: 'Oliver Twist'
      },
      {
        id: 904,
        name: 'David Copperfield'
      }
    ]
  },
  {
    id: 10,
    name: 'Ernest Hemingway',
    books: [
      {
        id: 1001,
        name: 'The Old Man and the Sea'
      },
      {
        id: 1002,
        name: 'A Farewell to Arms'
      },
      {
        id: 1003,
        name: 'For Whom the Bell Tolls'
      }
    ]
  }
]
