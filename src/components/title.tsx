export default function Title({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`pl-11 pr-16 py-8 border-b border-text-secondary ${className}`}>
      <h1 className="drop-shadow-title text-8xl text-primary max-md:text-5xl">{title}</h1>
    </div>
  );
}
