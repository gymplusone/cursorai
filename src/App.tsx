import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { OnboardingProvider } from "./context/OnboardingContext";
import { SplashScreen } from "./screens/SplashScreen";
import { AuthGatewayScreen } from "./screens/AuthGatewayScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { SelectExperienceScreen } from "./screens/SelectExperienceScreen";
import { AgeGenderScreen } from "./screens/AgeGenderScreen";
import { ExerciseDaysScreen } from "./screens/ExerciseDaysScreen";
import { FitnessGoalsScreen } from "./screens/FitnessGoalsScreen";
import { WorkoutTimeScreen } from "./screens/WorkoutTimeScreen";
import { TabShell } from "./screens/TabShell";
import { HomeMatchScreen } from "./screens/HomeMatchScreen";
import { SocialFeedScreen } from "./screens/SocialFeedScreen";
import { StubScreen } from "./screens/StubScreen";

export default function App() {
  return (
    <OnboardingProvider>
      <BrowserRouter>
        <div className="app-shell">
          <div className="phone">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/auth" element={<AuthGatewayScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/signup" element={<SignUpScreen />} />
              <Route
                path="/onboarding/experience"
                element={<SelectExperienceScreen />}
              />
              <Route
                path="/onboarding/age-gender"
                element={<AgeGenderScreen />}
              />
              <Route path="/onboarding/days" element={<ExerciseDaysScreen />} />
              <Route
                path="/onboarding/goals"
                element={<FitnessGoalsScreen />}
              />
              <Route path="/onboarding/time" element={<WorkoutTimeScreen />} />
              <Route path="/app" element={<TabShell />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<HomeMatchScreen />} />
                <Route path="feed" element={<SocialFeedScreen />} />
                <Route
                  path="calendar"
                  element={
                    <StubScreen
                      icon="Cal"
                      eyebrow="Calendar"
                      title="Sessions coming soon"
                      copy="Book shared workouts once you match with a +1."
                    />
                  }
                />
                <Route
                  path="invites"
                  element={
                    <StubScreen
                      icon="Inv"
                      eyebrow="Invites"
                      title="No invites yet"
                      copy="When someone wants to train with you, it lands here."
                    />
                  }
                />
                <Route
                  path="chat"
                  element={
                    <StubScreen
                      icon="Chat"
                      eyebrow="Chat"
                      title="Messages live here"
                      copy="Coordinate gym times after you both tap +1."
                    />
                  }
                />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </OnboardingProvider>
  );
}
