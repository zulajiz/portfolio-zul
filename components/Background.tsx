export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0" style={{ background: "var(--background)" }} />
      <div className="absolute inset-0 bg-rings mask-radial opacity-90" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-32 left-1/2 h-[460px] w-[880px] -translate-x-1/2 rounded-full bg-brand-200/25 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-brand-100/40 blur-[130px]" />
      <div className="absolute bottom-0 -left-40 h-[380px] w-[380px] rounded-full bg-sky-100/40 blur-[130px]" />
    </div>
  );
}