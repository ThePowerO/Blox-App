"use client";

import {
  Heart,
  Loader,
  LoaderIcon,
  Send,
  SendHorizonal,
  Star,
  Trash2,
} from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { Combo, Comment, Replies } from "@/lib/types";

export function AddLikeParagraph({ combo }: { combo: Combo }) {
  const { pending } = useFormStatus();
  return (
    <p title={`${combo.likes.length} likes`} className="text-[14px]">
      {pending ? combo.likes.length + 1 : combo.likes.length}
    </p>
  );
}

export function RemoveLikeParagraph({ combo }: { combo: Combo }) {
  const { pending } = useFormStatus();
  return (
    <p title={`${combo.likes.length} likes`} className="text-[14px]">
      {pending ? combo.likes.length - 1 : combo.likes.length}
    </p>
  );
}

export default function AddLikeButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px]">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            fill="#E21C49"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button type="submit" className="mb-[6px]">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            fillRule="inherit"
            onMouseOver={(e) => (e.currentTarget.style.fill = "#E21C49")}
            onMouseOut={(e) => (e.currentTarget.style.fill = "")}
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}

export function RemoveLikeButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px] ">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button type="submit" className="mb-[6px]">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            fill="#E21C49"
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}

export function AddFavoriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px]">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            fill="#e0ec3d"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button type="submit">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            onMouseOver={(e) => (e.currentTarget.style.fill = "#e0ec3d")}
            onMouseOut={(e) => (e.currentTarget.style.fill = "")}
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}

export function RemoveFavoriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px]">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button type="submit">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            fill="#e0ec3d"
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}
export function DeleteComboBtn() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          typeof="button"
          className="w-full flex gap-1"
          variant="destructive"
        >
          <Loader className="animate-spin" width={18} height={18} />
        </Button>
      ) : (
        <Button className="w-full flex gap-1" variant="destructive">
          <Trash2 width={18} height={18} />
        </Button>
      )}
    </>
  );
}

export function AddCommentLike(comment: Comment) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          type="button"
          className="px-[11px]  cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length + 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      ) : (
        <button
          type="submit"
          className="px-[11px]  cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length + 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      )}
    </>
  );
}

export function RemoveCommentLike(comment: Comment) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          type="button"
          className="px-[11px] cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length - 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      ) : (
        <button
          type="submit"
          className="px-[11px] cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length - 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      )}
    </>
  );
}

export function SaveEditCommentBtn() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="cursor-not-allowed">
          <Button
            disabled={pending}
            type="button"
            variant="outline"
            className="rounded-lg dark:text-black w-[50px] h-[30px] bg-slate-300"
          >
            <Loader width={18} height={18} className="animate-spin" />
          </Button>
        </div>
      ) : (
        <Button
          type="submit"
          variant="outline"
          className="rounded-lg w-[50px] hover:dark:text-black dark:text-black
          hover:bg-cyan-500 h-[30px] bg-cyan-300 shadow-md shadow-cyan-500/50"
        >
          <span>Save</span>
        </Button>
      )}
    </>
  );
}

export function DeleteCommentBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      variant="destructive"
      className="flex w-full items-center gap-1"
    >
      {pending ? (
        <>
          <LoaderIcon className="animate-spin" width={18} height={18} />
          <span>Deleting Comment...</span>
        </>
      ) : (
        <>
          <Trash2 width={18} height={18} />
          <span>Delete Comment</span>
        </>
      )}
    </Button>
  );
}

export function AddCommentLkeBtn(comments: Comment | Replies) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button type="button">
          <span
            className="bg-slate-600 border cursor-pointer border-lime-400
          text-white py-1 px-4 h-fit rounded-full text-center"
          >
            +{comments.likes.length + 1}
          </span>
        </button>
      ) : (
        <button type="submit">
          <span
            className="bg-slate-600 border cursor-pointer hover:border-lime-400
          text-white py-1 px-4 h-fit rounded-full text-center"
          >
            +{comments.likes.length}
          </span>
        </button>
      )}
    </>
  );
}

export function RemoveCommentLikeBtn(comments: Comment | Replies) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button type="button">
          <span
            className="bg-slate-600 border cursor-pointer hover:border-lime-400
          text-white py-1 px-4 h-fit rounded-full text-center"
          >
            +{comments.likes.length - 1}
          </span>
        </button>
      ) : (
        <button type="submit">
          <span
            className="bg-slate-600 border cursor-pointer border-lime-400
          text-white py-1 px-4 h-fit rounded-full text-center"
          >
            +{comments.likes.length}
          </span>
        </button>
      )}
    </>
  );
}

export function SendCommentReply() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="cursor-not-allowed">
          <Button
            disabled={pending}
            type="button"
            variant="outline"
            className="rounded-lg dark:text-black w-[50px] h-[30px] bg-slate-300"
          >
            <Loader width={18} height={18} className="animate-spin" />
          </Button>
        </div>
      ) : (
        <Button
          type="submit"
          variant="outline"
          className="rounded-lg w-[50px] hover:dark:text-black dark:text-black
          hover:bg-cyan-500 h-[30px] bg-cyan-300 shadow-md shadow-cyan-500/50"
        >
          <SendHorizonal width={18} height={18} />
        </Button>
      )}
    </>
  );
}

export function CreateCommentBtn() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          disabled
          className="flex justify-center w-[60px] disabled:cursor-not-allowed text-black px-2 py-1 rounded-2xl dark:bg-stone-800 bg-stone-300"
          type="button"
        >
          <SendHorizonal className="size-6" />
        </button>
      ) : (
        <button
          className="flex shadow-md shadow-cyan-500/50 text-black justify-center w-[60px] px-2 py-1 cursor-pointer rounded-2xl bg-cyan-400 hover:bg-cyan-500"
          type="submit"
        >
          <SendHorizonal className="size-6" />
        </button>
      )}
    </>
  );
}
