import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "12",
    title: "product 1",
    description: "lskfjdf kjkf dsjfk jsdkf",
    price: 300,
  },
  {
    id: "17",
    title: "product 3",
    description: "lskfjdf kjkf dsjfk jsdkf",
    price: 300,
  },
  {
    id: "11",
    title: "product 2",
    description: "lskfjdf kjkf dsjfk jsdkf",
    price: 300,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
