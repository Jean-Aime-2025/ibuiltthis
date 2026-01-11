import SectionHeader from '../common/section-header';
import { CalendarIcon, RocketIcon } from 'lucide-react';
import ProductCard from '../products/product-card';
import EmptyState from '../common/empty-state';

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

const RecentlyLaunchedProducts = () => {
  const recentlyLaunchedProducts: Product[] = [];
  return (
    <section className="py-20">
      <div className="wrapper space-y-8">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
};

export default RecentlyLaunchedProducts;
