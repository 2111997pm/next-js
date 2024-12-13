import ProductTable from "@/components/ProductTable";
import CartItem from "../../components/CartItem";
import DiscountSection from "@/components/DiscountSection";
const Cart = () => {
  return (
    <div className="mt-10 pt-4">
      <ProductTable />
      <DiscountSection />
    </div>
  );
};

export default Cart;
