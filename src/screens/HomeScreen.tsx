import { useNavigate, useSearchParams } from "react-router-dom";
import { MATCHES } from "../data/demo";
import { AppHeader, SubChips } from "../components/AppHeader";
import { PinIcon, XIcon, BoltIcon, CheckIcon } from "../components/icons";

export function HomeScreen() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");
  const profile = MATCHES.find((m) => m.id === id) ?? MATCHES[0];

  return (
    <div className="home-screen">
      <AppHeader variant="brand" />
      <SubChips />

      <div className="profile-hero">
        <div
          className="profile-photo"
          style={{ backgroundImage: `url(${profile.photo})` }}
        >
          <span className="hero-plus">+1</span>
        </div>
        <div className="hero-actions">
          <button
            type="button"
            className="hero-btn nope"
            aria-label="Skip"
            onClick={() => navigate("/app/plus-one")}
          >
            <XIcon size={20} />
          </button>
          <button
            type="button"
            className="hero-btn boost"
            aria-label="Boost"
            onClick={() => navigate("/app/spotlight")}
          >
            <BoltIcon size={22} />
          </button>
          <button
            type="button"
            className="hero-btn like"
            aria-label="Match"
            onClick={() => navigate(`/app/match-success?id=${profile.id}`)}
          >
            <CheckIcon size={22} />
          </button>
        </div>
      </div>

      <div className="profile-name">
        <p className="loc">
          <PinIcon /> {profile.location}
        </p>
        <h2>
          {profile.name}, {profile.age}
        </h2>
        <p className="away">{profile.distance}</p>
      </div>

      <section className="profile-block">
        <h3>Bio</h3>
        <p className="muted">{profile.bio}</p>
      </section>

      <section className="profile-block">
        <h3>Interests</h3>
        <div className="interest-row">
          {profile.interests.map((it) => (
            <span key={it} className="interest-chip">
              {it}
            </span>
          ))}
        </div>
      </section>

      <section className="profile-block">
        <h3>Experience</h3>
        <p className="muted">{profile.experience}</p>
      </section>

      <section className="profile-block">
        <h3>Ethnicity</h3>
        <p className="muted">{profile.ethnicity}</p>
      </section>

      <section className="profile-block">
        <h3>Fitness Activity per week</h3>
        <p className="muted">{profile.activityPerWeek}</p>
      </section>

      {profile.gallery.map((g, i) => (
        <div key={i} className="gallery-item">
          <div
            className="gallery-photo"
            style={{ backgroundImage: `url(${g.photo})` }}
          />
          <p className="muted">{g.caption}</p>
        </div>
      ))}

      <section className="profile-block">
        <h3>Workout Plans</h3>
        <div className="plan-list">
          {profile.plans.map((p) => (
            <button
              key={p.id}
              type="button"
              className="plan-card"
              onClick={() => navigate(`/app/plan/${p.id}`)}
            >
              <div
                className="plan-photo"
                style={{ backgroundImage: `url(${p.photo})` }}
              />
              <div className="plan-text">
                <strong>{p.title}</strong>
                <span>{p.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="hero-actions floating">
        <button
          type="button"
          className="hero-btn nope"
          aria-label="Skip"
          onClick={() => navigate("/app/plus-one")}
        >
          <XIcon size={20} />
        </button>
        <button
          type="button"
          className="hero-btn boost"
          aria-label="Boost"
          onClick={() => navigate("/app/spotlight")}
        >
          <BoltIcon size={22} />
        </button>
        <button
          type="button"
          className="hero-btn like"
          aria-label="Match"
          onClick={() => navigate(`/app/match-success?id=${profile.id}`)}
        >
          <CheckIcon size={22} />
        </button>
      </div>
    </div>
  );
}
