import { Outlet } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

export function TabShell() {
  return (
    <section className="screen tab-shell" aria-label="App">
      <div className="tab-content">
        <Outlet />
      </div>
      <BottomNav />
    </section>
  );
}
