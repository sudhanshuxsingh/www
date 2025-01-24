import Image from 'next/image';

export default function Location() {
  return (
    <div className="space-y-2">
      <p className="font-medium">Where</p>
      <div className="relative h-fit w-fit overflow-hidden">
        <Image
          src="/cloud.webp"
          width="390"
          height="347"
          alt=""
          draggable="false"
          className="absolute animate-cloud opacity-75 blur-sm"
        />
        <Image
          src="/plane.webp"
          width="24"
          height="56"
          alt=""
          draggable="false"
          className="absolute -translate-x-96 animate-plane [animation-delay:5s]"
        />
        <Image
          src="/plane-shadow.webp"
          width="24"
          height="24"
          alt=""
          draggable="false"
          className="absolute -translate-x-96 animate-plane-shadow [animation-delay:5s]"
        />
        <Image
          src={'/location.jpg'}
          height={553}
          width={983}
          alt="Map"
          className="h-auto w-full rounded-md"
        />
        <div aria-hidden>
          <div className="absolute left-2/3 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-marker rounded-full bg-blue-500"></div>
          <div className="shadow-marker absolute left-2/3 top-1/2 z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-neutral-50 bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
}
