const reviews = [
  {
    message: "개선사항을 얘기하면 즉시 반응하여 결과물을 내는 것이 좋았습니다.",
    project: "View My Startup",
  },
  {
    message:
      "막히는 부분은 없는지 먼저 나서서 작업상황에 대해 살펴주시고, 제가 버거워하는 부분을 도와주셔서 감사했습니다.",
    project: "View My Startup",
  },
  {
    message:
      "본인이 맡았던 부분을 빠르게 진행하는 모습이 좋았고, 수정할 사항이 생겼을 때 수용하고 받아들이는 모습이 좋았습니다.",
    project: "View My Startup",
  },
  {
    message: "프론트엔드 쪽에서 고생을 많이 해주시고 궂은 일을 도맡아서 하신 것 같아 감사했습니다.",
    project: "View My Startup",
  },
  { message: "질문이 친절해서 좋았습니다.", project: "피카픽포토" },
  {
    message:
      "프론트엔드장으로서 역할을 너무 잘해주셨습니다! 든든했고, 맡은 역할을 잘해내주셔서 이번 프로젝트 기분 좋게 해낼 수 있었던 것 같습니다! 너무 감사했습니다!",
    project: "피카픽포토",
  },
  {
    message:
      "맡은 파트상 많은 교류가 없었지만 대체적으로 코딩 능력이 좋은 것 같고 프론트엔드장으로써 잘 정리하고 챙겨주시는 것 같습니다!",
    project: "피카픽포토",
  },
  {
    message:
      "모르는 부분이 생겼을 때 연락을 드리면 친절하게 해결해주시고, 막히던 부분을 직접 테스트 해보고 방법을 알려주셨던 점이 정말 감사했습니다. 프론트장으로서 매일 의견을 합쳐서 발표해주시던 모습도 너무 멋졌어요! 컴포넌트 사이즈 여쭤봤을때도 바로 해결하시는 모습이 너무 멋지다 생각했습니다!",
    project: "피카픽포토",
  },
  { message: "프론트장으로써 책임감을 가지고 하시는 모습이 좋았습니다.", project: "피카픽포토" },
  {
    message: "부트캠프 뿐만아닌, 회사에서도 만나뵙고 싶은 팀원분이셨습니다!",
    project: "피카픽포토",
  },
  {
    message:
      "컴포넌트의 세분화와 재사용성을 고려한 설계, 지속적인 리팩토링 및 개선하려는 노력이 앞으로의 성장에 큰 도움이 될 것 같습니다.",
    project: "핏메이트 - Fitmate",
  },
  {
    message: "항상 상대방이 불편하지 않게 대화를 해주셔서 좋았습니다.",
    project: "핏메이트 - Fitmate",
  },
  {
    message:
      "useGet hook 을 도입하셔서 tanstack-query를 사용하셨는데, queryKey 관리도 편하고, cache 관리하기도 편해서 저도 도입해서 썼었습니다. 디자인 감각도 좋으셔서 전반적인 UI/UX 관리도 해주시고 많이 배웠던거 같습니다.",
    project: "핏메이트 - Fitmate",
  },
  {
    message:
      "프론트장을 맡아서 책임감있게 끝까지 관리와 작업을 해주신 것 같아 좋았고 대답을 제일 잘 해주시고 의견도 많이 내주셔서 감사했습니다.",
    project: "핏메이트 - Fitmate",
  },
  {
    message: "친절하시고, 못하고 실수한 부분도 뭐라하지 않고 잘 알려주셔서 감사했습니다.",
    project: "핏메이트 - Fitmate",
  },
];

export function PeerReview() {
  return (
    <section id="peer-review" className="container flex h-screen flex-col gap-8 py-16">
      <h2 className="w-fit rounded-3xl bg-white px-6 py-2 font-GWT text-3xl text-black shadow-right-down">
        Peer Reviews
      </h2>
      <div className="overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-foreground">
        <div className="mr-2 grid auto-rows-auto grid-cols-3 gap-8 rounded-2xl bg-primary p-4">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} message={review.message} project={review.project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ message, project }: { message: string; project: string }) {
  return (
    <div className="flex flex-col">
      <div className="h-8 rounded-t-2xl bg-primary-foreground" />
      <div className="flex h-full flex-col justify-between rounded-b-2xl bg-white p-4 font-GWS text-black">
        <p className="py-4 text-center text-2xl">"{message}"</p>
        <div className="w-fit rounded-full bg-pink-200 px-4">
          <p className="text-lg">#{project}</p>
        </div>
      </div>
    </div>
  );
}
