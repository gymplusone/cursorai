import { FEED } from "../data/demo";
import { useOnboarding } from "../context/OnboardingContext";

export function SocialFeedScreen() {
  const { data } = useOnboarding();
  const firstName = data.name?.split(" ")[0] || "Jennie";

  return (
    <div>
      <header className="app-header">
        <div className="hello">
          <div
            className="avatar"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80)",
              backgroundSize: "cover",
            }}
          />
          <div>
            <strong>Hello {firstName}</strong>
            <span>Good Morning</span>
          </div>
        </div>
        <div className="brand-center">
          <div className="brand-mark">Gym+1</div>
          <div className="brand-tag">Match your workout vibe</div>
        </div>
        <div className="actions">
          <button type="button" className="icon-sq" aria-label="Settings">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.1 7.1 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.59.24-1.13.55-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.14.24.43.34.68.22l2.39-.96c.5.39 1.04.7 1.63.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.59-.24 1.13-.55 1.63-.94l2.39.96c.25.1.54 0 .68-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="chip-row">
        <span className="btn btn-pill btn-blue">Spotlight</span>
        <span className="btn btn-pill btn-blue">Super +1</span>
      </div>

      <div className="compose">
        <div
          className="avatar"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80)",
            backgroundSize: "cover",
          }}
        />
        <input readOnly placeholder="What's on your mind" />
      </div>

      <div className="feed">
        <article
          className="promo"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1583454110551-21d2be4baad5?auto=format&fit=crop&w=900&q=80)",
          }}
        >
          <strong>Muscle Building Plan - £39.99</strong>
          <span>Designed to increase muscle mass.</span>
          <button type="button" className="btn btn-blue" style={{ maxWidth: 120 }}>
            View
          </button>
        </article>

        {FEED.map((post) => (
          <article key={post.id} className="feed-post">
            <div className="author">
              <div className="avatar online" />
              <div style={{ flex: 1 }}>
                <strong>{post.author}</strong>
                <span>{post.time}</span>
              </div>
            </div>
            <div
              className="feed-media"
              style={{ backgroundImage: `url(${post.photo})` }}
              role="img"
              aria-label={`Post by ${post.author}`}
            />
            <div className="feed-stats">
              <span>Like {post.likes}</span>
              <span>Comment {post.comments}</span>
            </div>
            <p className="feed-caption">{post.caption}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
