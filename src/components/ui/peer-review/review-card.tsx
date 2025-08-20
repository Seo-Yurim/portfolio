export default function ReviewCard({ message, project }: { message: string; project: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-4 font-GWS text-black">
        <p className="py-4 text-center text-lg max-md:py-1 max-md:text-sm">"{message}"</p>
        <div className="w-fit rounded-full bg-pink-200 px-4 max-md:px-2">
          <p className="font-medium max-md:text-xs">#{project}</p>
        </div>
      </div>
    </div>
  );
}
