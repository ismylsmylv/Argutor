"use client";
import React, { useEffect, useState } from "react";
type Props = {};

function ChatTexts({}: Props) {
  const [height, setheight] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      setheight(Number(window.innerHeight) - 172);
    }
  }, [height]);
  return (
    <div
      className="texts p-5 h-full overflow-y-scroll"
      style={{ height: height }}
    >
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="sent w-fit max-w-xl border-sky-500 border-2 p-3 rounded-lg mt-3 mb-1">
          Lorem
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
      <div className="message">
        <div className="recieved w-fit max-w-xl bg-sky-500  p-3 rounded-lg mt-3 mb-1 text-white	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          consequatur blanditiis esse delectus minima molestiae architecto
          maiores neque nam reiciendis eligendi aliquid quae laboriosam natus
          modi doloremque aut numquam. Quod ea aliquam fugit eum nostrum itaque
          suscipit a id autem, recusandae fuga quasi commodi incidunt enim quos.
          Cam, exercitationem nam?
        </div>
        <p className="mb-2 text-slate-500	 text-xs	">12:43</p>
      </div>
    </div>
  );
}

export default ChatTexts;
