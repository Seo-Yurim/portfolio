import Image from "next/image";

export function Hero() {
  return (
    <section className="container h-screen bg-primary py-12">
      <div className="mx-auto flex h-[700px] max-w-[1080px] flex-col items-center justify-center gap-8 rounded-2xl border-[42px] border-black bg-background px-24 py-16 font-GWT shadow-2xl max-md:border-[24px] max-md:border-y-[56px] max-md:px-12 max-md:py-24">
        <h1 className="text-[80px] text-primary max-lg:text-5xl">PortFolio</h1>
        <div className="flex gap-16 max-md:flex-col max-md:items-center">
          <Image
            className="max-lg:h-[150px] max-lg:w-[200px]"
            src="/images/folder+cursor.svg"
            width={300}
            height={250}
            alt="folder"
          />
          <div className="flex flex-col gap-6 py-4 max-md:p-0">
            <p className="text-2xl">
              사용자 경험을 우선시하며, <br />
              효율적이고 깔끔한 코드를 지향하는
            </p>
            <p className="text-4xl max-lg:text-2xl">
              프론트엔드 개발자 <br />
              <span className="text-5xl max-lg:text-4xl">서유림</span>
              입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
