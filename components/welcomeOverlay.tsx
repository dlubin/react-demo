'use client';

import { useState } from "react";



export default function WelcomeOverlay() {

    const [viewed, setViewed] = useState(false);

    return (
        <section className={`${viewed ? 'hidden' : ''} fixed w-screen h-screen bg-opacity-50 bg-black top-0 left-0 flex justify-center items-center z-50`}>
            <div className="rounded bg-slate-900 p-8 absolute text-slate-400 w-1/3 flex flex-col flex-nowrap items-center gap-y-4">
                <div>This site is a React demo created by David Lubin to showcase React fundamentals. It was built using React and Next.js and uses Tailwind and React Bootstrap for styling. No information of any kind is collected. This is not a real store!</div>
                <button onClick={() => setViewed(true)} className="rounded bg-slate-400 text-slate-900 p-2 w-fit">I understand</button>
            </div>       
        </section>
    )

}