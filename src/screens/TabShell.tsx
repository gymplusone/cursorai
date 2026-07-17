import { Outlet, useLocation } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

export function TabShell() {
  const { pathname } = useLocation();
  return (
    <section className="screen tab-shell" aria-label="App">
      <div className="tab-content" key={pathname}>
        <Outlet />
      </div>
      <BottomNav />
    </section>
  );
}
