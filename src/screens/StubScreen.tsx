type StubProps = {
  title: string;
  eyebrow: string;
  copy: string;
  icon: string;
};

export function StubScreen({ title, eyebrow, copy, icon }: StubProps) {
  return (
    <div className="stub">
      <div className="icon" aria-hidden>
        {icon}
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      <p className="lede" style={{ margin: "0 auto" }}>
        {copy}
      </p>
    </div>
  );
}
