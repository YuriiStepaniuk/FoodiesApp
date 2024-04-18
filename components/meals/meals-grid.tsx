import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

interface IMealsGridProps {
  meals: any;
}

const MealsGrid: React.FC<IMealsGridProps> = ({ meals }) => {
  return (
    <ul>
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
