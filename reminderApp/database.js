let database = [
  {
    id: 1,
    name: "Sean Murray",
    email: "admin123@gmail.com",
    password: "admin123!",
    role: "admin",
  },
  {
    id: 2,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    role: "user",
    reminder: [
      {
        id: 1,
        title: "Grocery shopping",
        description: "Buy milk and bread from safeway",
        completed: true,
        keyword: "shopping",
        banner: "https://source.unsplash.com/random",
      },
      {
        id: 2,
        title: "Watch movie",
        description: "Buy tickets in advance",
        completed: false,
        keyword: "movie",
        banner: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    id: 3,
    name: "Cindy Heim",
    email: "cindy123@gmail.com",
    password: "cindy123!",
    role: "user",
    reminder: [
      {
        id: 1,
        title: "Grocery shopping",
        description: "Buy milk and bread from safeway",
        completed: true,
        keyword: "bread",
        banner: "https://source.unsplash.com/random",
      },
    ],
  },
  {
    id: 4,
    name: "Alex Cooper",
    email: "alex123@gmail.com",
    password: "alex123!",
    role: "user",
    reminder: [
      {
        id: 1,
        title: "Workout in the gym",
        description: "30 Min Upperbody Dumbbell workout",
        completed: false,
        keyword: "gym",
        banner: "https://source.unsplash.com/random",
      },
    ],
  },
];

module.exports = database;
