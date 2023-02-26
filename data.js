const courses = [
  {
    id: 1,
    title: 'Web Development',
    image: 'https://source.unsplash.com/800x600/?web,development',
    description: 'Learn web development from scratch and build beautiful websites',
    duration: "8 weeks",
    level: "Intermediate",
    category: 'Web Development',
    instructor: 'John Doe',
    date: 'May 1, 2023',
    credit: '3 credits',
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 2,
    title: 'Mobile App Development',
    image: 'https://source.unsplash.com/800x600/?mobile,app,development',
    description: 'Build mobile applications for iOS and Android using React Native',
    duration: "2 weeks",
    category: 'Mobile App Development',
    level: "Beginner",
    instructor: 'Jane Doe',
    date: 'June 1, 2023',
    credit: '4 credits',
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 3,
    title: 'Data Science',
    image: 'https://source.unsplash.com/800x600/?data,science',
    description: 'Learn data science from scratch and analyze real-world data sets',
    duration: "8 weeks",
    category: 'Data Science',
    level: "Intermediate",
    instructor: 'Bob Smith',
    date: 'July 1, 2023',
    credit: '3 credits',
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 4,
    title: 'Digital Marketing',
    image: 'https://source.unsplash.com/800x600/?digital,marketing',
    description: 'Learn digital marketing and grow your business online',
    duration: "12 weeks",
    level: "Beginner",
    category: 'Digital Marketing',
    instructor: 'Alice Johnson',
    date: 'August 1, 2023',
    credit: '2 credits',
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 5,
    title: "Introduction to Computer Science",
    category: "Computer Science",
    instructor: "John Smith",
    date: "2023-03-15",
    credit: 3,
    duration: "12 weeks",
    level: "Beginner",
    description:
      "This course provides an introduction to computer science, including programming, algorithms, and data structures.",
    image: "https://picsum.photos/id/1/200/300",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 6,
    title: "Introduction to Psychology",
    category: "Social Sciences",
    instructor: "Jane Doe",
    date: "2023-04-01",
    credit: 3,
    duration: "10 weeks",
    level: "Beginner",
    description:
      "This course provides an introduction to the field of psychology, including topics such as perception, learning, and memory.",
    image: "https://picsum.photos/id/2/200/300",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 7,
    title: "Intermediate Spanish",
    category: "Languages",
    instructor: "Maria Rodriguez",
    date: "2023-05-15",
    credit: 3,
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "This course builds on basic Spanish language skills and covers topics such as grammar, vocabulary, and conversational skills.",
    image: "https://picsum.photos/id/3/200/300",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 8,
    title: "Data Structures and Algorithms",
    category: "Computer Science",
    instructor: "Bob Johnson",
    date: "2023-06-01",
    credit: 4,
    duration: "12 weeks",
    level: "Intermediate",
    description:
      "This course covers advanced data structures and algorithms, including topics such as graphs, trees, and dynamic programming.",
    image: "https://picsum.photos/id/4/200/300",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
  {
    id: 9,
    title: "Data Structures",
    category: "Computer Science",
    instructor: "Bob Doe",
    date: "2023-06-01",
    credit: 4,
    duration: "12 weeks",
    level: "Intermediate",
    description:
      "This course covers advanced data structures and algorithms, including topics such as graphs, trees, and dynamic programming.",
    image: "https://picsum.photos/id/4/200/300",
    link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
  },
];

export default courses;

export const provider = [
  {
    id: 1,
    name: "Coursera",
    logo: "https://picsum.photos/id/4/200/300",
    url: "https://www.coursera.org/",
    description: "Coursera is an online learning platform founded in 2012 by Stanford professors Andrew Ng and Daphne Koller that offers courses, specializations, and degrees.",
    courses: [
      {
        id: 1,
        title: "Data Structures and Algorithms",
        category: "Computer Science",
        instructor: "Bob Johnson",
        date: "2023-06-01",
        credit: 4,
        duration: "12 weeks",
        level: "Intermediate",
        description:
          "This course covers advanced data structures and algorithms, including topics such as graphs, trees, and dynamic programming.",
        image: "https://picsum.photos/id/4/200/300",
        link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
      },
      {
        id: 2,
        title: "Machine Learning",
        category: "Computer Science",
        instructor: "Bob Johnson",
        date: "2023-06-01",
        credit: 4,
        duration: "12 weeks",
        level: "Intermediate",
        description:
          "This course covers advanced data structures and algorithms, including topics such as graphs, trees, and dynamic programming.",
        image: "https://picsum.photos/id/4/200/300",
        link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
      }
    ]
  },
]

