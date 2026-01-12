import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    image: "/screenshots/dashboard.webp",
  },   
  {
    image: "/screenshots/vcio.webp",
  },
  {
    image: "/screenshots/metrics.webp",
  },
  {
    image: "/screenshots/indicators.webp",
  }
];

export const Screenshots = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
      <section className={cn("overflow-hidden py-0 pb-12 lg:pb-24", className)}>
        <div className="container">
          <div className="">{/* relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20 */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnMouseEnter: true,
                  stopOnInteraction: false
                }),
              ]}              
              className="w-full"
            >
                            <div className="relative top-0 w-full h-full align-middle">
                <CarouselPrevious className="bg-muted/80 hover:bg-muted/50  z-50 absolute top-1/2  left-6 size-8 lg:size-12 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted/80 hover:bg-muted/50  z-50 absolute top-1/2 right-6 size-8 lg:size-12 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />

              <CarouselContent className="">
                {items.map((screenshot, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full" 
                  >{/* xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%] */}
                    {/*<Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">*/}
                        <div className="relative w-full"> {/* h-[288px] lg:h-[328px] */}
                          <img
                            src={screenshot.image}
                            className="w-full rounded-sm object-cover object-left-top shadow-lg max-lg:rounded-tr-none"                            
                          />{/* className="size-full object-cover object-top"*/ }
                        </div>
                      {/*</CardContent>
                    </Card>*/}
                  </CarouselItem>
                ))}
              </CarouselContent>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
  );
};
