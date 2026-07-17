export type WorkoutPlanCard = {
  id: string;
  title: string;
  subtitle: string;
  photo: string;
};

export type MatchProfile = {
  id: string;
  name: string;
  age: number;
  distance: string;
  location: string;
  tags: string[];
  photo: string;
  bio: string;
  interests: string[];
  experience: string;
  ethnicity: string;
  activityPerWeek: string;
  gallery: { photo: string; caption: string }[];
  plans: WorkoutPlanCard[];
};

const GALLERY_A = [
  {
    photo:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80",
    caption:
      "I've been skydiving, I can juggle, and I've climbed Mt. Everest.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    caption:
      "Starts with a good cup of coffee, a walk in the park, and ends with a movie marathon.",
  },
];

const PLANS_A: WorkoutPlanCard[] = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    subtitle: "Plans focused on burning calories and reducing body fat.",
    photo:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    subtitle: "Designed to increase muscle mass.",
    photo:
      "https://images.unsplash.com/photo-1583454110551-21d2be4baad5?auto=format&fit=crop&w=900&q=80",
  },
];

export const MATCHES: MatchProfile[] = [
  {
    id: "1",
    name: "Natasha",
    age: 23,
    distance: "25 km Away",
    location: "New York",
    tags: ["Parkour", "Boxing", "Yoga & Mindfulness"],
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    bio: "Adventurous spirit with a love for the outdoors and spontaneous road trips!",
    interests: [
      "Parkour",
      "Animals",
      "Boxing",
      "Cycling",
      "Swimming",
      "Food",
      "Yoga & Mindfulness",
      "Action",
    ],
    experience: "Beginner · 0-1 Years",
    ethnicity: "American",
    activityPerWeek: "1 - 2 Days",
    gallery: GALLERY_A,
    plans: PLANS_A,
  },
  {
    id: "2",
    name: "Hannah",
    age: 26,
    distance: "12 km Away",
    location: "New York",
    tags: ["Running", "Pilates", "Swimming"],
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    bio: "Adventurous spirit with a love for the outdoors and spontaneous road trips!",
    interests: [
      "Parkour",
      "Animals",
      "Boxing",
      "Cycling",
      "Swimming",
      "Food",
      "Yoga & Mindfulness",
      "Action",
    ],
    experience: "Beginner · 0-1 Years",
    ethnicity: "American",
    activityPerWeek: "1 - 2 Days",
    gallery: GALLERY_A,
    plans: PLANS_A,
  },
  {
    id: "3",
    name: "Maya",
    age: 27,
    distance: "8 km Away",
    location: "Brooklyn",
    tags: ["Strength", "Cycling", "Food"],
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    bio: "Early mornings, strong coffee, and heavy compound lifts. Looking for a spotter.",
    interests: [
      "Weightlifting",
      "Boxing",
      "Cycling",
      "Food",
      "Swimming",
      "Animals",
    ],
    experience: "Intermediate · 2-3 Years",
    ethnicity: "American",
    activityPerWeek: "4 - 5 Days",
    gallery: GALLERY_A,
    plans: PLANS_A,
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
  verified?: boolean;
  online?: boolean;
};

export const FEED: FeedPost[] = [
  {
    id: "p1",
    author: "Eleanor Pena",
    time: "45 minutes ago",
    caption:
      "Enter the email associated with your account and we'll send an email with code to reset...",
    likes: 99,
    comments: 99,
    verified: true,
    online: true,
    photo:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p2",
    author: "Selena Apache",
    time: "45 minutes ago",
    caption: "Post-lift recovery bowl. Who's free for legs at 6am tomorrow?",
    likes: 64,
    comments: 12,
    verified: true,
    photo:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
  },
];

export type InviteCard = {
  id: string;
  name: string;
  age: number;
  distance: string;
  photo: string;
};

export const INVITES: InviteCard[] = [
  {
    id: "i1",
    name: "Sarah",
    age: 26,
    distance: "25 km Away",
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "i2",
    name: "Sarah",
    age: 30,
    distance: "25 km Away",
    photo:
      "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "i3",
    name: "Sarah",
    age: 22,
    distance: "25 km Away",
    photo:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "i4",
    name: "Sarah",
    age: 28,
    distance: "25 km Away",
    photo:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "i5",
    name: "Sarah",
    age: 22,
    distance: "25 km Away",
    photo:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "i6",
    name: "Sarah",
    age: 28,
    distance: "25 km Away",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80",
  },
];

export type ChatThread = {
  id: string;
  name: string;
  message: string;
  time: string;
  photo: string;
  unread: number;
  online?: boolean;
};

export const CHAT_THREADS: ChatThread[] = [
  {
    id: "c1",
    name: "Selena Apache",
    message: "See you at the gym at 6am! Don't be late 💪",
    time: "2 min",
    unread: 2,
    online: true,
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "c2",
    name: "Eleanor Pena",
    message: "That recovery bowl looked amazing 🥗",
    time: "1 h",
    unread: 0,
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "c3",
    name: "Natasha",
    message: "Legs day tomorrow? I'll bring the playlist.",
    time: "3 h",
    unread: 1,
    online: true,
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
];

export type PricingTier = {
  id: string;
  label: string;
  price: string;
  popular?: boolean;
};

export const SPOTLIGHT_TIERS: PricingTier[] = [
  { id: "s30", label: "30 Min", price: "£1.99" },
  { id: "s60", label: "1 Hour", price: "£3.00", popular: true },
  { id: "s24", label: "24 Hours", price: "£6.00" },
];

export const SUPER_TIERS: PricingTier[] = [
  { id: "w1", label: "1 Week", price: "£9.00" },
  { id: "m1", label: "1 Month", price: "£19.00", popular: true },
  { id: "y1", label: "1 Year", price: "£27.00" },
];

export const SUPER_BENEFITS = [
  "Unlimited likes & matches",
  "1 hour daily spotlight visibility",
  "View invitations (see invitees' biography)",
  "View full threads from other users",
  "Premium profile with increased visibility",
];

export type PlanDetail = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  author: string;
  authorEmail: string;
  authorAvatar: string;
  photo: string;
};

export const PLAN_DETAIL: PlanDetail = {
  id: "muscle-building",
  title: "Muscle Building Plan",
  subtitle: "Designed to increase muscle mass.",
  price: "£39.99",
  description:
    "A progressive 8-week hypertrophy programme built around compound lifts and structured accessory work. Each week increases training volume while balancing recovery, so you steadily add strength and muscle mass. Includes a weekly split, warm-up routines, and nutrition guidance to support lean gains.",
  author: "Selena Apache",
  authorEmail: "salenaapache@gmail.com",
  authorAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  photo:
    "https://images.unsplash.com/photo-1583454110551-21d2be4baad5?auto=format&fit=crop&w=900&q=80",
};

export const USER_AVATAR =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80";

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
