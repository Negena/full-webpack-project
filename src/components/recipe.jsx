import {useState} from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIgot: 1,
  refinedMoonstone: 4
}

const  elven = {
  ...elvenShieldRecipe,
  leather: 1,
  refined: 4
}
console.log(elvenShieldRecipe)
console.log(elven)


const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  return (
    <div>
    <h3>current recipe</h3>
     <button onClick={() => setRecipe(elvenShieldRecipe)}>
     elven Shield Recipe</button>
     <button onClick={() => setRecipe(elven)}>
     elven</button>

     <ul>
      {Object.keys(recipe).map((material) => (
        <li key = {material}>
        {material}: {recipe[material]}
        </li>
      ))}
     </ul>
    </div>
  )
}

export default Recipe;
