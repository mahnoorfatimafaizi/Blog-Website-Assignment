import CardList from "@/components/CardList";
import CategoryList from "@/components/category/CategoryList";

import FeaturedPost from '@/components/FeaturedPost';
import Menu from "@/components/Menu";

export default function Home( ) {
  return (
    <div className="container">
      <FeaturedPost />
      <CategoryList />
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
    
  );
}
