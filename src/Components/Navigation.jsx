import '../assets/Navigation.css';
import React from 'react';

function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href='http://localhost:5173/'>Re'StarsWars</a>
        </div>

        <div className="search">
            <div className="wrap">
              <div className="search">
                <select name="" id="">
                  <option value="ml">ml</option>
                    <option value="cl">cl</option>
                </select>
                <input type="text" className="searchTerm" placeholder="Quelle est ta recette préférée ?" />
                <button type="submit" className="searchButton">
                  GO !
                </button>
              </div>
            </div>
        </div>
      <div className="liens">
        <a className='lien' href={`/favoris/`}>0 Favoris</a>
        <div className="sepa"></div>
        <a className='lien' href={`/add/`}>Ajouter ma recette</a>
      </div>
        
      </div>
    </>
  )
}

export default Navigation;