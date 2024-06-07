"use client";

import { Button, ButtonIconOnly } from "@/app/_components/button";
import { Navbar } from "@/app/_sections/navbar";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function TopicPage() {
  return (
    <main className="flex bg-white text-black">
      <Navbar />
      <section className="flex-1 grid grid-cols-1 gap-16 py-20 max-w-[960px] m-auto">
        <Title />
        <div className="grid grid-cols-2 gap-16">
          <Resources />
          <Quiz />
        </div>
      </section>
    </main>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-display-large">Graf Berbobot</h3>
      <span className="text-display-small text-light-secondary">
        Struktur Data
      </span>
    </div>
  );
}

function Resources() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-title-large">Resources</span>
      <div className="flex flex-col gap-2">
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="bg-light-surface border border-light-outline-variant rounded-lg flex items-center p-4 pr-2 gap-4"
          >
            <div className="flex-none">
              <DescriptionOutlinedIcon />
            </div>
            <div className="flex-1 flex flex-col">
              <span className="text-title-medium">
                MIT DSA Weighted Graphs.pdf
              </span>
              <span className="text-body-medium text-light-on-surface">
                pdf - 5 MB
              </span>
            </div>
            <ButtonIconOnly
              icon={<MoreVertIcon className="text-black" />}
              variant="text"
              href="#"
            />
          </div>
        ))}
      </div>
      <Button text="Tambah" variant="primary" href="#" />
    </div>
  );
}

function Quiz() {
  const isNoQuiz = false;
  return (
    <div className="flex flex-col gap-4">
      <span className="text-title-large">Quiz</span>
      {!isNoQuiz ? (
        <div className="bg-light-surface border border-light-outline-variant rounded-lg flex items-end p-4 gap-4 flex-col">
          <div className="flex w-full">
            <div className="flex flex-col w-full">
              <span className="text-title-medium">Riwayat Sebelumnya</span>
              <span className="text-body-medium text-light-on-surface">
                19/08/2024
              </span>
              <span className="text-body-medium text-light-on-surface">
                4 Pertanyaan
              </span>
            </div>
            <div className="flex flex-col w-full">
              <span className="text-title-medium">Kuis Mendatang</span>
              <span className="text-body-medium text-light-on-surface">
                19/08/2024
              </span>
              <span className="text-body-medium text-light-on-surface">
                4 Pertanyaan
              </span>
            </div>
          </div>
          <Button text="Tambah" variant="primary" href="#" />
        </div>
      ) : (
        <Button text="Tambah" variant="primary" href="#" />
      )}
    </div>
  );
}
