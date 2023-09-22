import React, { useState } from 'react';
import '../assets/AjoutRecette.css'

function AjoutRecette() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: '',
    servings: '',
    preparationTime: '',
    ingredients: [{ ingredient: '', quantite: '', mesure: 'litre' }], // Tableau initial avec un champ vide
    steps: [''], // Tableau initial avec un champ vide
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredientChange = (index, property, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][property] = value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleAddIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { ingredient: '', quantite: '', mesure: 'litre' }],
    });
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleAddStep = () => {
    setFormData({ ...formData, steps: [...formData.steps, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici la validation des données du formulaire selon les règles que vous avez mentionnées.
    // En cas de validation réussie, envoyez les données au serveur.
  };

  return (
    <div className='container'>
      <h1>Ajouter une nouvelle recette</h1>
      <form onSubmit={handleSubmit}>
        <section className='gauche'>
        <label htmlFor="title">Titre de la recette</label><br/>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        

        <label htmlFor="description">Description de la recette</label><br/>
        <input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="photo">URL de la photo (facultatif)</label><br/>
        <input
          type="url"
          id="photo"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
        />

        <label htmlFor="servings">Nombre de personnes</label><br/>
        <input
          type="number"
          id="servings"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          required
        />

        <label htmlFor="preparationTime">Temps de préparation (minutes)</label><br/>
        <input
          type="number"
          id="preparationTime"
          name="preparationTime"
          value={formData.preparationTime}
          onChange={handleChange}
          required
        />
        </section>
        <section className='droite'>
          <label>Ingrédients</label>
          <div className="test">
            <ul id="liste-ingredients">
              {formData.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <input
                    type="text"
                    name="ingredient"
                    placeholder="Ingrédient"
                    value={ingredient.ingredient}
                    onChange={(e) => handleIngredientChange(index, 'ingredient', e.target.value)}
                  />
                  <input
                    type="text"
                    name="quantite"
                    placeholder="Quantité"
                    value={ingredient.quantite}
                    onChange={(e) => handleIngredientChange(index, 'quantite', e.target.value)}
                  />
                  <select
                    name="mesure"
                    value={ingredient.mesure}
                    onChange={(e) => handleIngredientChange(index, 'mesure', e.target.value)}
                  >
                    <option value="ml">ml</option>
                    <option value="cl">cl</option>
                    <option value="l">l</option>
                    <option value="cl">mg</option>
                    <option value="cl">g</option>
                    <option value="cl">kg</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" onClick={handleAddIngredient}>
              Ajout d'ingrédient
            </button>
          </div>

          <label>Étapes</label><br />
          {formData.steps.map((step, index) => (
            <input
              key={index}
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
              required
            ></input>
          ))}
          <button type="button" onClick={handleAddStep}>
            Ajout d'une étape
          </button>
        </section>

        <button type="submit">Ajouter la recette</button>
      </form>
    </div>
  );
}

export default AjoutRecette;
