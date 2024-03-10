import PrimaryImage from '@/app/_ui/image/image';
import PrimaryButton from '@/app/_ui/button/button';
import EmptyState from '@/app/_ui/empty-state';

export default function Home() {
  return (
    <>
    <EmptyState />
    <div className="h-screen">
      <h1>Новые поступления в этом сезоне</h1>

      <PrimaryButton
        className="bg-primary rounded-none text-white font-normal text-base"
        variant="filled"
        size="lg"
        >
        Открыть магазин
      </PrimaryButton>
    </div>
    </>
  );
}
