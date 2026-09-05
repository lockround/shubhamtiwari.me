type SectionHeadingProps = {
  label: string;
  title: string;
};

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-7">
      <p className="mb-3 flex items-center gap-2 font-mono text-xs text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
        {label}
      </p>
      <h1 className="text-balance font-display text-[26px] font-semibold leading-[1.15] tracking-tight text-foreground">
        {title}
      </h1>
    </div>
  );
}