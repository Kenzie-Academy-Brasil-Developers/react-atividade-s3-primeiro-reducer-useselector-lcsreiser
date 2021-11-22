//importando useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit.fruit}>
          <p> {fruit.fruit} </p>
          <img src={fruit.img} alt="Frutas" />
        </div>
      ))}
    </div>
  );
};

export default FruitsPage;
