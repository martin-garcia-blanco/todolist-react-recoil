import "./item.css";

const Item = ({ value, id }) => {
  return (
    <div className="item">
      <p>{value}</p>
      <button>Remove</button>
    </div>
  );
};

export default Item;
