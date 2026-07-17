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
import { SocialFeedScreen } from "./screens/SocialFeedScreen";
import { PlusOneScreen } from "./screens/PlusOneScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { InvitesScreen } from "./screens/InvitesScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { SpotlightScreen } from "./screens/SpotlightScreen";
import { SuperPlusOneScreen } from "./screens/SuperPlusOneScreen";
import { PlanDetailScreen } from "./screens/PlanDetailScreen";
import { MatchSuccessScreen } from "./screens/MatchSuccessScreen";
import { ChatThreadScreen } from "./screens/ChatThreadScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

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
                <Route path="home" element={<SocialFeedScreen />} />
                <Route path="plus-one" element={<PlusOneScreen />} />
                <Route path="match" element={<HomeScreen />} />
                <Route path="match-success" element={<MatchSuccessScreen />} />
                <Route path="calendar" element={<CalendarScreen />} />
                <Route path="invites" element={<InvitesScreen />} />
                <Route path="chat" element={<ChatScreen />} />
                <Route path="chat/:id" element={<ChatThreadScreen />} />
                <Route path="notifications" element={<NotificationsScreen />} />
                <Route path="settings" element={<SettingsScreen />} />
                <Route path="spotlight" element={<SpotlightScreen />} />
                <Route
                  path="super-plus-one"
                  element={<SuperPlusOneScreen />}
                />
                <Route path="plan/:id" element={<PlanDetailScreen />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </OnboardingProvider>
  );
}
