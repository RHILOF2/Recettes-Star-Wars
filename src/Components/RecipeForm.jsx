import React, { useState } from 'react';
import '../assets/AjoutRecette.css';
import axios from 'axios';

function RecipeForm() {
    const [formData, setFormData] = useState({
        titre: '',
        description: '',
        photo: '',
        personnes: '',
        niveau: '',
        tempsPreparation: '',
        ingredients: [['', '']],
        etapes: [''], 
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleIngredientChange = (index, property, value) => {
        const updatedIngredients = [...formData.ingredients];
        updatedIngredients[index][property === 'quantite' ? 0 : 1] = value;
        setFormData({ ...formData, ingredients: updatedIngredients });
      };

      const handleAddIngredient = () => {
        setFormData({
          ...formData,
          ingredients: [...formData.ingredients, ['', '']],
        });
      };
      
    
      const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...formData.ingredients];
        updatedIngredients.splice(index, 1);
        setFormData({ ...formData, ingredients: updatedIngredients });
      };
    
      const handleAddStep = () => {
        setFormData({ ...formData, etapes: [...formData.etapes, ''] });
      };

      const handleStepChange = (index, value) => {
        const updatedEtapes = [...formData.etapes];
        updatedEtapes[index] = value;
        setFormData({ ...formData, etapes: updatedEtapes });
      }

      const handleSubmit = async (e) => {

        e.preventDefault()
      
        const recipeData = {
          titre: formData.titre,
          description: formData.description,
          photo: formData.photo,
          personnes: Number(formData.personnes),
          niveau: formData.niveau,
          tempsPreparation: Number(formData.tempsPreparation),
          ingredients: formData.ingredients,
          etapes: formData.etapes,
        };
      
        try {
          const response = await axios.post('http://localhost:9000/api/recipes', recipeData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.status === 200) {
            console.log('Recette ajoutée avec succès !');
            return(
                <>
                    Recette Ajoutée !
                </>
            )
          } else {
            console.error('Erreur lors de l\'ajout de la recette');
          }
        } catch (error) {
          console.error('Erreur lors de la requête POST :', error.message);
        }
      };
      console.log(formData.ingredients);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <section className='gauche'>
                <label htmlFor="titre">Titre de la recette</label><br/>
                <input
                type="text"
                id="titre"
                name="titre"
                value={formData.titre}
                onChange={handleChange}
                required
                />
                <label htmlFor="niveau">Niveau</label><br/>
                <input
                type="text"
                id="niveau"
                name="niveau"
                value={formData.niveau}
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

                <label htmlFor="personnes">Nombre de personnes</label><br/>
                <input
                type="number"
                id="personnes"
                name="personnes"
                value={formData.personnes}
                onChange={handleChange}
                required
                />

                <label htmlFor="tempsPreparation">Temps de préparation (minutes)</label><br/>
                <input
                type="number"
                id="tempsPreparation"
                name="tempsPreparation"
                value={formData.tempsPreparation}
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
                    Ajouter ingrédient
                    </button>
                </div>

                <label>Étapes</label><br />
                {formData.etapes.map((etape, index) => (
                   <input
                   type="text"
                   name="etape" // Utilisez "etape" comme nom de propriété
                   key={index}
                   value={etape}
                   onChange={(e) => handleStepChange(index, e.target.value)}
                   required
                 ></input>
                ))}
                <button type="button" onClick={handleAddStep}>
                    Ajouter étape
                </button>
            </section>
        <button type="submit">Ajouter la recette</button>
      </form>
    </div>
  )
}

export default RecipeForm;