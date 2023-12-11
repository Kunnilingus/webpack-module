import { FC } from "react";
import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

const Shop: FC = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div>
        <Link to={shopRoutes.second}>Go to Second</Link>
      </div>
    </div>
  );
};

export default Shop;
