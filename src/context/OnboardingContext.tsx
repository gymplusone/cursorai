import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Experience = "find-partner" | "coach" | null;

export type OnboardingState = {
  email: string;
  password: string;
  name: string;
  experience: Experience;
  age: string;
  gender: string;
  trainingYears: string;
  trainingDays: string[];
  trainingTime: string;
};

type OnboardingContextValue = {
  data: OnboardingState;
  update: (patch: Partial<OnboardingState>) => void;
  toggleDay: (day: string) => void;
  reset: () => void;
};

const initial: OnboardingState = {
  email: "",
  password: "",
  name: "",
  experience: null,
  age: "",
  gender: "",
  trainingYears: "",
  trainingDays: [],
  trainingTime: "",
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingState>(initial);

  const value = useMemo<OnboardingContextValue>(
    () => ({
      data,
      update: (patch) => setData((prev) => ({ ...prev, ...patch })),
      toggleDay: (day) =>
        setData((prev) => ({
          ...prev,
          trainingDays: prev.trainingDays.includes(day)
            ? prev.trainingDays.filter((d) => d !== day)
            : [...prev.trainingDays, day],
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
