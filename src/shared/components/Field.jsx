const CONTROL =
  "w-full rounded-sm border border-line bg-white px-3.5 text-[15px] leading-normal text-ink placeholder:text-slate-light transition-colors focus:border-ink focus:outline-none";
const BOX = "h-11 py-0";

export function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-slate">{hint}</span>}
    </label>
  );
}

export function Input(props) {
  return <input className={`${CONTROL} ${BOX}`} {...props} />;
}

export function Select({ children, ...props }) {
  return (
    <select className={`${CONTROL} ${BOX} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235c6763%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px_16px] bg-[position:right_0.75rem_center] bg-no-repeat pr-10`} {...props}>
      {children}
    </select>
  );
}

export function Textarea(props) {
  return <textarea className={`${CONTROL} min-h-28 resize-y py-2.5`} {...props} />;
}

const TILE_ACCENT = {
  copper: "has-checked:border-copper-600 has-checked:bg-copper-50",
  verdigris: "has-checked:border-verdigris-600 has-checked:bg-verdigris-50",
};

export function ChoiceTile({ name, value, title, body, checked, onChange, accent = "copper" }) {
  return (
    <label
      className={`flex cursor-pointer gap-3 rounded-sm border border-line bg-white p-3.5 transition-colors hover:border-slate-light ${TILE_ACCENT[accent]}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 shrink-0 accent-ink"
      />
      <span>
        <span className="block text-[15px] font-medium text-ink">{title}</span>
        {body && <span className="mt-0.5 block text-sm leading-snug text-slate">{body}</span>}
      </span>
    </label>
  );
}
