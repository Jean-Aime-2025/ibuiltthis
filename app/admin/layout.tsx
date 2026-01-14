import { Loader2Icon } from 'lucide-react';
import { Suspense } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex-1 h-full w-full flex items-center justify-center">
            <Loader2Icon />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
