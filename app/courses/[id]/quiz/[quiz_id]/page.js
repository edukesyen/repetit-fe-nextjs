import { Button, ButtonIconOnly } from "@/app/_components/button";
import Image from "next/image";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import quizImage from "@/public/images/quiz-ongoingpage.png";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Quiz() {
  return (
    <main className="flex flex-col h-screen">
      <nav className=" flex justify-between items-center h-12 border-b border-slate-200">
        <Button
          variant="text"
          href="/"
          text="Kembali"
          icon={<ArrowBackIcon />}
        />
        <h5 className="text-title-small">Kuis - Weighted Graph</h5>
        <span>.</span>
      </nav>
      <section className="flex-1 flex flex-col items-center justify-center gap-8">
        <div class="w-[640px] flex flex-col gap-4">
          <div className="flex justify-between">
            <h4 className="text-title-large">01. What is linked list?</h4>
            <ButtonIconOnly
              variant="outlined"
              href="#"
              icon={<BookmarkBorderOutlinedIcon />}
            />
          </div>
          <div className="grid place-items-center">
            <Image
              className="w-96"
              src={quizImage}
              alt="Pict of Image's Quiz "
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label
              className="text-body-small text-light-on-surface-variant"
              for="Answer"
            >
              Answer:
            </label>
            <div className="flex gap-4 ">
              <div className="flex-1">
                <textarea
                  className="border border-light-outline rounded-3xl p-3 w-full h-full"
                  id="Answer"
                  name="Answer"
                  rows="4"
                />
              </div>
              <div className="flex-none flex flex-col gap-4">
                <ButtonIconOnly
                  variant="outlined"
                  href="#"
                  icon={<EmojiObjectsOutlinedIcon />}
                />
                <ButtonIconOnly
                  variant="tonal"
                  href="#"
                  icon={<MicNoneOutlinedIcon />}
                />
                <ButtonIconOnly
                  variant="filled"
                  href="#"
                  icon={<SendOutlinedIcon />}
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-body-large"></p>
      </section>
    </main>
  );
}
