import Image from "next/image";

export function Hero() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 mt-8 bg-[url('/images/mobile-background.svg')] bg-contain bg-center bg-no-repeat md:hidden" />
      <div className="pointer-events-none absolute inset-0 z-0 mt-8 bg-[url('/images/background.svg')] bg-contain bg-center bg-no-repeat max-md:hidden" />
      <section className="container relative flex h-screen flex-col items-center justify-center gap-8 pb-52 pt-28 font-GWT max-lg:pb-40 max-md:gap-16 max-md:pb-12">
        <h1 className="text-primary text-[80px] max-lg:text-5xl">PortFolio</h1>
        <div className="flex gap-16 max-md:flex-col max-md:items-center">
          <Image
            className="max-lg:h-[150px] max-lg:w-[200px]"
            src="/images/folder+cursor.svg"
            width={300}
            height={250}
            alt="folder"
          />
          <div className="flex flex-col gap-6 py-4 max-lg:gap-2 max-lg:py-2 max-md:p-0">
            <p className="text-2xl max-lg:text-lg max-lg:leading-tight">
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
      </section>
    </>
  );
}
