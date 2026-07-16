export type MatchProfile = {
  id: string;
  name: string;
  age: number;
  gym: string;
  focus: string;
  photo: string;
};

export const MATCHES: MatchProfile[] = [
  {
    id: "1",
    name: "Maya",
    age: 27,
    gym: "Equinox SoMa",
    focus: "Strength · Early mornings",
    photo:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2",
    name: "Jordan",
    age: 31,
    gym: "Bay Club",
    focus: "Hyrox · Partner work",
    photo:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "3",
    name: "Aisha",
    age: 24,
    gym: "Fitness SF",
    focus: "Olympic lifting",
    photo:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "4",
    name: "Leo",
    age: 29,
    gym: "Anytime Mission",
    focus: "Calisthenics · Mobility",
    photo:
      "https://images.unsplash.com/photo-1583454110551-21d2be4baad5?auto=format&fit=crop&w=900&q=80",
  },
];

export type FeedPost = {
  id: string;
  author: string;
  handle: string;
  time: string;
  caption: string;
  likes: number;
  photo: string;
};

export const FEED: FeedPost[] = [
  {
    id: "p1",
    author: "Maya R.",
    handle: "@maya.lifts",
    time: "2h",
    caption: "Found my +1 for Thursday legs. Who's free at 6am?",
    likes: 48,
    photo:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p2",
    author: "Jordan K.",
    handle: "@jk.hyrox",
    time: "5h",
    caption: "Sled pushes hit different with a partner. Booked Bay Club.",
    likes: 112,
    photo:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p3",
    author: "Aisha N.",
    handle: "@aisha.barbell",
    time: "1d",
    caption: "PR day. Looking for a spotter who actually counts.",
    likes: 86,
    photo:
      "https://images.unsplash.com/photo-1599058945522-28d584b6f14f?auto=format&fit=crop&w=900&q=80",
  },
];

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const YEARS = ["< 1 yr", "1–2 yrs", "3–5 yrs", "5+ yrs"];
export const TIMES = ["Morning", "Midday", "Evening", "Late night"];
