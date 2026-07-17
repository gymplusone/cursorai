import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Experience = "plus-one" | "personal-trainer" | null;

export type OnboardingState = {
  email: string;
  password: string;
  name: string;
  experience: Experience;
  age: string;
  gender: string;
  exerciseDays: string;
  goals: string[];
  workoutTime: string;
  superPlusOne: boolean;
  spotlightActive: boolean;
};

type OnboardingContextValue = {
  data: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  toggleGoal: (goal: string) => void;
  reset: () => void;
};

const initial: OnboardingState = {
  email: "",
  password: "",
  name: "",
  experience: null,
  age: "",
  gender: "",
  exerciseDays: "",
  goals: [],
  workoutTime: "",
  superPlusOne: false,
  spotlightActive: false,
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingState>(initial);

  const value = useMemo<OnboardingContextValue>(
    () => ({
      data,
      update: (patch) => setData((prev) => ({ ...prev, ...patch })),
      toggleGoal: (goal) =>
        setData((prev) => ({
          ...prev,
          goals: prev.goals.includes(goal)
            ? prev.goals.filter((g) => g !== goal)
            : [...prev.goals, goal],
        })),
      reset: () => setData(initial),
    }),
    [data],
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return ctx;
}
