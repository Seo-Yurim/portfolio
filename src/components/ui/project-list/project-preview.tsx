import Image from "next/image";

export default function ProjectPreview() {
  return (
    <div className="flex w-[500px] flex-shrink-0 flex-col gap-3 rounded-2xl bg-white p-8">
      <Image src="/images/미모티콘.png" width={200} height={200} alt="project-img" />
      <p className="w-fit rounded-full bg-[#18a8f1] px-4 py-1 font-GWT text-background">
        프로젝트 이름
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">사용한 스킬</div>
        <p className="text-text-secondary">프로젝트 기간</p>
      </div>
    </div>
  );
}
