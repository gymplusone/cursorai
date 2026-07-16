import { FEED } from "../data/demo";

export function SocialFeedScreen() {
  return (
    <div>
      <header className="match-header">
        <div>
          <p className="eyebrow">Community</p>
          <h2 className="h2">+1 Feed</h2>
        </div>
      </header>
      <div className="feed">
        {FEED.map((post) => (
          <article key={post.id} className="feed-post">
            <div className="author">
              <div className="avatar" aria-hidden>
                {post.author
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <strong>{post.author}</strong>
                <span>
                  {post.handle} · {post.time}
                </span>
              </div>
            </div>
            <div
              className="feed-media"
              style={{ backgroundImage: `url(${post.photo})` }}
              role="img"
              aria-label={`Post by ${post.author}`}
            />
            <p className="caption">{post.caption}</p>
            <p className="stats">{post.likes} likes</p>
          </article>
        ))}
      </div>
    </div>
  );
}
