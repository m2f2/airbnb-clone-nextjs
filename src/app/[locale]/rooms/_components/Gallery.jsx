import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLocale } from "next-intl"
function Gallery({ photos }) {
  const locale = useLocale()
  return (
    <>
      {/* desktop */}
      <div className="md:flex h-96 rounded-2xl hidden gap-2  shadow-md" id="photos">
        <div className="w-1/2 h-full">
          <Image src={photos[0]} width={1000} height={1000} alt="" className="object-cover w-full h-full border-1 rounded-s-2xl hover:brightness-90" />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-2">
          <Image src={photos[1]} width={1000} height={1000} alt="" className="object-cover w-full h-full border-1 hover:brightness-90" />
          <Image src={photos[2]} width={1000} height={1000} alt="" className="object-cover w-full h-full border-1 hover:brightness-90" />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-2">
          <Image src={photos[3]} width={1000} height={1000} alt="" className={`object-cover w-full h-full border-1 ${locale=='en'?'rounded-tr-2xl':'rounded-tl-2xl'} hover:brightness-90`} />
          <Image src={photos[4]} width={1000} height={1000} alt="" className={`object-cover w-full h-full border-1 ${locale=='en'?'rounded-br-2xl':'rounded-bl-2xl'} hover:brightness-90`} />
        </div>
      </div>

      {/* mobile */}
      <Carousel className="md:hidden w-full">
        <CarouselContent>
          {/* {Array.from({length:5}).map((photo, index) => ( */}
          {photos.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex  items-center justify-center p-1">
                    <Image src={photo} width={1000} height={10} alt="" className="object-cover w-full h-full rounded-xl" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </>

  )
}
export default Gallery