import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Modal from "@/components/modal";

const btnStyle =
  "flex-1 w-full rounded-2xl px-8 py-2 font-bold text-lg max-md:text-sm transition-colors duration-300";

export default function ShowModal({
  setIsOpen,
  onShow,
}: {
  onShow: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const handleShow = () => {
    setIsOpen(false);
    onShow();
  };

  return (
    <Modal onClose={() => setIsOpen(false)}>
      <div className="flex flex-col items-center gap-8">
        <Image src="/images/folder.svg" width={190} height={143} alt="folder" />
        <p className="text-center text-2xl font-bold text-background max-md:text-lg">
          서유림님의 <span className="font-extrabold text-primary">포트폴리오</span>를
          <br className="md:hidden" /> 열람하시겠습니까?
        </p>
        <div className="flex w-full items-center gap-4 max-md:flex-col">
          <button
            onClick={() => setIsOpen(false)}
            className={`${btnStyle} bg-white text-primary hover:bg-text-secondary/60 hover:text-white`}
          >
            아니요
          </button>
          <button
            onClick={handleShow}
            className={`${btnStyle} bg-primary text-white hover:bg-primary/60`}
          >
            예
          </button>
        </div>
      </div>
    </Modal>
  );
}
