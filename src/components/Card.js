import React from 'react'

const Card = ({avatar, first_name, last_name, employment}) => {
  return (
    <div class="flex items-center justify-center bg-slate-100">
      <div class="group h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-sm transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={avatar} alt="avatar" />
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <h1 class="text-3xl font-bold">{`${first_name} ${last_name}`}</h1>
              <p class="text-lg">{`${employment.title}`}</p>
              <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card