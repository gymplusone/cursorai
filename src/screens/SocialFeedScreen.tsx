import { useNavigate } from "react-router-dom";
import { FEED, USER_AVATAR } from "../data/demo";
import { useOnboarding } from "../context/OnboardingContext";
import {
  BellIcon,
  GearIcon,
  VerifiedBadge,
  HeartIcon,
  ChatIcon,
  ShareIcon,
} from "../components/icons";

export function SocialFeedScreen() {
  const navigate = useNavigate();
  const { data } = useOnboarding();
  const firstName = data.name?.split(" ")[0] || "Jennie";

  return (
    <div className="feed-screen">
      <div className="feed-brand">
        <div className="brand-mark">Gym+1</div>
        <div className="brand-tag">Match your workout vibe</div>
      </div>

      <header className="feed-top">
        <div className="hello">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${USER_AVATAR})` }}
          />
          <div className="hello-text">
            <div>
              <strong>Hello {firstName}</strong>
              <span>
                Good Morning <span aria-hidden>🌤️</span>
              </span>
            </div>
            <div className="chip-row">
              <button
                type="button"
                className="chip-btn"
                onClick={() => navigate("/app/spotlight")}
              >
                Spotlight
              </button>
              <button
                type="button"
                className="chip-btn"
                onClick={() => navigate("/app/super-plus-one")}
              >
                Super +1
              </button>
            </div>
          </div>
        </div>
        <div className="actions">
          <button
            type="button"
            className="icon-sq"
            aria-label="Notifications"
            onClick={() => navigate("/app/notifications")}
          >
            <BellIcon />
            <span className="badge">20</span>
          </button>
          <button
            type="button"
            className="icon-sq"
            aria-label="Settings"
            onClick={() => navigate("/app/settings")}
          >
            <GearIcon />
          </button>
        </div>
      </header>

      <button
        type="button"
        className="compose"
        onClick={() => navigate("/app/plus-one")}
      >
        <div className="avatar sm" style={{ backgroundImage: `url(${USER_AVATAR})` }} />
        <span>What's on your mind</span>
      </button>

      <div className="feed">
        <FeedCard post={FEED[0]} />

        <article className="promo-card">
          <div
            className="promo-photo"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1583454110551-21d2be4baad5?auto=format&fit=crop&w=900&q=80)",
            }}
          />
          <div className="promo-body">
            <strong>Muscle Building Plan - £39.99</strong>
            <span>Designed to increase muscle mass.</span>
            <button
              type="button"
              className="btn btn-blue btn-block"
              onClick={() => navigate("/app/plan/muscle-building")}
            >
              View
            </button>
          </div>
        </article>

        {FEED.slice(1).map((post) => (
          <FeedCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function FeedCard({ post }: { post: (typeof FEED)[number] }) {
  return (
    <article className="feed-post">
      <div className="post-head">
        <div className="post-author">
          <div className={`avatar sm${post.online ? " online" : ""}`} />
          <div>
            <strong>
              {post.author}
              {post.verified && <VerifiedBadge size={15} />}
            </strong>
            <span>{post.time}</span>
          </div>
        </div>
        <button type="button" className="post-more" aria-label="More">
          •••
        </button>
      </div>
      <div
        className="post-media"
        style={{ backgroundImage: `url(${post.photo})` }}
        role="img"
        aria-label={`Post by ${post.author}`}
      />
      <div className="post-actions">
        <span className="post-stat">
          <HeartIcon size={20} /> {post.likes}
        </span>
        <span className="post-stat">
          <ChatIcon size={20} /> {post.comments}
        </span>
        <span className="post-share">
          <ShareIcon size={20} />
        </span>
      </div>
      <p className="post-caption">
        {post.caption} <strong>See more</strong>
      </p>
    </article>
  );
}
