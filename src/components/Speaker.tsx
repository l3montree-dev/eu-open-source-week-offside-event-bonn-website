import Image from 'next/image'
import React from 'react'

interface VerticalSpaceProps {
  height?: string
}

const VerticalSpace: React.FC<VerticalSpaceProps> = ({ height = '1.5cm' }) => {
  return <div style={{ height }} />
}

export default function Speaker() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-8 text-zinc-100">
          The Speakers
        </h2>
        <VerticalSpace />

        {/* Grid for 4 items */}
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-auto lg:max-w-none lg:grid-cols-4">
          {/* First Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Dummy"
                src="/dummy_person_white.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              To be announced
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">Pending.</p>
          </div>

          {/* Second Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Dummy"
                src="/dummy_person_white.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              To be announced
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">Pending.</p>
          </div>

          {/* Third Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Dummy"
                src="/dummy_person_white.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              To be announced
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">Pending.</p>
          </div>

          {/* Fourth Block */}
          <div className="text-center">
            <div className="relative h-0 w-full pb-[100%]">
              <Image
                alt="Dummy"
                src="/dummy_person_white.png"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <VerticalSpace />
            <h3 className="text-lg font-semibold text-zinc-100">
              To be announced
            </h3>
            <p className="mt-2 text-base leading-8 text-zinc-300">Pending.</p>
          </div>
        </div>
      </div>
      <VerticalSpace />
    </div>
  )
}