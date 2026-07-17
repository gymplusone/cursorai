import { useState } from "react";
import { useParams } from "react-router-dom";
import { BackSquare } from "../components/ui";
import { SendIcon } from "../components/icons";
import { CHAT_THREADS, MATCHES } from "../data/demo";

type Msg = { id: number; from: "me" | "them"; text: string };

const SEED: Msg[] = [
  { id: 1, from: "them", text: "Hey! Are we still on for legs day tomorrow? 💪" },
  { id: 2, from: "me", text: "Absolutely. 6am at the gym?" },
  { id: 3, from: "them", text: "Perfect. I'll bring the playlist 🎧" },
];

export function ChatThreadScreen() {
  const { id } = useParams();
  const person =
    CHAT_THREADS.find((t) => t.id === id) ??
    MATCHES.find((m) => m.id === id);
  const name = person?.name ?? "Chat";
  const photo = person?.photo ?? "";

  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [draft, setDraft] = useState("");

  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: Date.now(), from: "me", text }]);
    setDraft("");
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, from: "them", text: "Sounds good! See you there 🙌" },
      ]);
    }, 700);
  }

  return (
    <div className="thread-screen">
      <header className="thread-header">
        <BackSquare to="/app/chat" />
        <div className="thread-avatar sm" style={{ backgroundImage: `url(${photo})` }} />
        <div>
          <strong>{name}</strong>
          <span>Online</span>
        </div>
      </header>

      <div className="thread-body-msgs">
        {messages.map((m) => (
          <div key={m.id} className={`bubble ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>

      <form
        className="thread-compose"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Send a Message....."
        />
        <button type="submit" aria-label="Send">
          <SendIcon />
        </button>
      </form>
    </div>
  );
}
