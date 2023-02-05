import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export function Carousel() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-start sm:items-center lg:items-start max-w-2xl mx-auto lg:mx-0 px-8 sm:pl-24 pr-10">
      <AspectRatio ratio={16 / 9}>
        <Image
          alt="image"
          src="https://harbingerlearning.com/wp-content/uploads/2022/11/7.jpg"
        />
      </AspectRatio>
    </div>
  );
}
