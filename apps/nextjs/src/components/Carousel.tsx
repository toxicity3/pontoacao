import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export function Carousel() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-start sm:items-center lg:items-start max-w-2xl mx-auto lg:mx-0 px-8 sm:pl-24 pr-10 pb-80">
      <AspectRatio ratio={16 / 9}>
        <img src="https://i.pinimg.com/736x/e7/13/df/e713df7d7697ff9f49df8ed67447c1e9.jpg" />
      </AspectRatio>
    </div>
  );
}
