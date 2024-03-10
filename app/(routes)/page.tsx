import PrimaryButton from '@/app/_ui/button/button';
import EmptyState from '@/app/_ui/empty-state';

export default function Home() {
  return (
    <div className="h-full">
      <section className="h-[620px]">
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
      <div>next article</div>
    </div>
  );
}
