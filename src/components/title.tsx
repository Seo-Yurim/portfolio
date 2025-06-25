export default function Title({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative border-b border-text-secondary px-4 pb-3 ${className}`}
    >
      <h2 className="absolute left-2 top-3 border-b px-4 text-8xl text-text-background max-md:text-5xl">
        {title}
      </h2>
      <h1 className="relative text-8xl text-primary max-md:text-5xl">
        {title}
      </h1>
    </div>
  );
}
