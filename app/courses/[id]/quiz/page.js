import { Button } from "@/app/_components/button";
import Image from "next/image";
import illustration from '@/public/images/quiz-complete-illustration.png'

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
                <h1 className="text-headline-medium">
                    Selamat kamu sudah selesai!

                </h1>
                <Image className= "	w-40" src={illustration} alt="Pict of Finising Quiz"/>
                <p className="text-body-large">
                    Kamu telah menjawab 4/4 soal
                </p>
                <Button variant="primary" href="/" text="Kembali ke Laman Quiz" />
            </section>
        </main>
    );


}