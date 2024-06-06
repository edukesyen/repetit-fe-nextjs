import { Button } from "@/app/_components/button";
import Image from "next/image";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import quizImage from '@/public/images/quiz-ongoingpage.png'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';

export default function Quiz(){

    return (
        <main className="flex flex-col h-screen">
            <nav className=" flex justify-between items-center h-12 border-b border-slate-200">
                <Button variant="text" href="/" text="Kembali" />
                <h5 className="text-title-small">
                    Kuis - Weighted Graph
                </h5>
                <span> </span>
            </nav>
            <section className="flex-1 flex flex-col items-center justify-center gap-8">
            <div class="w-[640px] flex flex-col gap-4">
                <div className="flex justify-between">
                <h4 className="text-title-large">
                    01. What is linked list?
                </h4>
                <BookmarkBorderOutlinedIcon className="mr-2" />
                </div>
                <div className="grid place-items-center">
                 <Image className= "w-96" src={quizImage} alt="Pict of Image's Quiz "/>
                </div>
                

                    <div className="flex-1 flex flex-col">
                        <label className="text-body-small text-light-on-surface-variant" for="Answer">Answer:</label>
                        <div className="flex gap-4 ">
                            <div className="flex-1">
                            <textarea className="border border-light-outline rounded-3xl p-2 w-full" id="Answer" name="Answer" rows = "4"/>
                            </div>
                            <div className="flex-none flex flex-col gap-4">
                                <EmojiObjectsOutlinedIcon className="mr-2" />
                                <MicNoneOutlinedIcon className="mr-2" />
                                <SendOutlinedIcon className="mr-2" />
                            </div>
                        </div>
                    </div>

                </div>
                <p className="text-body-large">
                </p>
            </section>
        </main>
    );


}