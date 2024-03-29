import PrimaryButton from '@/app/_ui/button/button';
import PrimaryImage from '@/app/_ui/image/image';
import EmptyState from '@/app/_ui/empty-state';
import Card from '@/app/_ui/card/card';

export default function Home() {
  return (
    <>
      <section className="h-[620px] ">
        <EmptyState />
        <div className="w-1/2 h-full flex items-center">
          <div className="max-w-[490px]">
            <h1 className="text-5xl font-[500] tracking-wide">
              Новые поступления в этом сезоне
            </h1>
            <p className="max-w-[340px] text-right text-base tracking-wider font-normal pt-11 pb-14">
              Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
              этом сезоне. Время исследовать.
            </p>
            <div className="flex items-center justify-center">
              <div className="py-4 px-6 bg-primary/20 text-primary cursor-pointer">
                &#8595;
              </div>
              <PrimaryButton
                className="bg-primary rounded-none py-5 px-12 tracking-wide font-normal"
                variant="filled"
              >
                Открыть магазин
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-32 pb-32">
        <h2 className="pb-16 font-[500] text-3xl tracking-wide">
          Новая коллекция
        </h2>
        <div className="flex flex-col items-center gap-40">
          <div className="flex flex-row gap-10">
            <Card src="/3rdItemPic.png" title="Свитшот Sweet Shot" />
            <Card src="/2ndItemPic.png" title="Купальник Glow" />
            <Card src="/ItemPic.png" title="Футболка USA" />
            <Card src="/2ndItemPic.png" title="Купальник Glow" />
          </div>
          <div>
            <PrimaryButton
              className="border border-primary text-primary rounded-none py-5 px-12 tracking-wide font-normal"
              variant="outlined"
            >
              Открыть магазин
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
