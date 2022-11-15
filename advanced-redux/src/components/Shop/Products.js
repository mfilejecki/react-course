import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote.",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote.",
  },
];

const mappedProducts = DUMMY_PRODUCTS.map((item) => {
  return (
    <ProductItem
      title={item.title}
      id={item.id}
      price={item.price}
      description={item.description}
      key={item.id}
    />
  );
});

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{mappedProducts}</ul>
    </section>
  );
};

export default Products;
