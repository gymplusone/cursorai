export type MatchProfile = {
  id: string;
  name: string;
  age: number;
  distance: string;
  location: string;
  tags: string[];
  photo: string;
};

export const MATCHES: MatchProfile[] = [
  {
    id: "1",
    name: "Natasha",
    age: 23,
    distance: "25 km Away",
    location: "New York",
    tags: ["Lives in America", "Native American"],
    photo:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2",
    name: "Maya",
    age: 27,
    distance: "8 km Away",
    location: "Brooklyn",
    tags: ["Strength", "Early mornings"],
    photo:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "3",
    name: "Jordan",
    age: 31,
    distance: "12 km Away",
    location: "Queens",
    tags: ["Hyrox", "Partner work"],
    photo:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  },
];

export type FeedPost = {
  id: string;
  author: string;
  time: string;
  caption: string;
  likes: number;
  comments: number;
  photo: string;
};

export const FEED: FeedPost[] = [
  {
    id: "p1",
    author: "Eleanor Pena",
    time: "45 minutes ago",
    caption:
      "Post-lift recovery bowl. Looking for a +1 for Thursday legs — who's free at 6am?",
    likes: 99,
    comments: 99,
    photo:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p2",
    author: "Devon Lane",
    time: "2 hours ago",
    caption: "Sled pushes hit different with a partner. Bay Club at noon.",
    likes: 64,
    comments: 12,
    photo:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
  },
];

export const EXERCISE_DAYS = ["0-1 Day", "2-3 Days", "4-5 Days", "6-7 Days"];
export const FITNESS_GOALS = [
  "Muscle Gain",
  "Strength",
  "Endurance",
  "General Wellness",
  "Mental Wellness",
  "Flexibility",
];
export const WORKOUT_TIMES = ["Morning", "Afternoon", "Evening", "Night"];
