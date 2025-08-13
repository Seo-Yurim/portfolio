export default function Title({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`w-fit border-b border-text-secondary py-8 pl-11 pr-16 ${className}`}>
      <h1 className="font-GWT text-8xl text-blue-100 drop-shadow-title dark:drop-shadow-darkTitle max-md:text-5xl">
        {title}
      </h1>
    </div>
  );
}
