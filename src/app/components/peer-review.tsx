import { REVIEWS } from "@/constants/reviews";
import ReviewCard from "@/components/ui/peer-review/review-card";

export function PeerReview() {
  return (
    <section id="peer-review" className="container flex h-full flex-col gap-8 py-16 max-md:px-4">
      <h2 className="w-fit rounded-3xl bg-white px-6 py-2 font-GWT text-3xl text-black shadow-right-down">
        Peer Reviews
      </h2>
      <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-foreground">
        <div className="mr-2 grid auto-rows-auto grid-cols-3 gap-8 rounded-2xl bg-primary p-4 max-lg:gap-4 max-md:grid-cols-2">
          {REVIEWS.map((review, idx) => (
            <ReviewCard key={idx} message={review.message} project={review.project} />
          ))}
        </div>
      </div>
    </section>
  );
}
