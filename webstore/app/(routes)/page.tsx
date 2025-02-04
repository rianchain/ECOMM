import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("40d2d775-80e0-4980-99ae-4d449df1c53a");

  return (
    <div>
      <Container>
        <div className="spacec-y-10 pb-10">
          <Banner data={banner} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Produk Unggulan" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
