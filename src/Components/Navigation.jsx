import '../assets/Navigation.css';
function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          LOGO
        </div>

        <div className="search">
          <input type="search" id="site-search" name="q" placeholder='Quel plat vous ferait plaisir ? '/> 
          <button>Le rechercher !</button>
        </div>

        
      </div>
    </>
  )
}

export default Navigation;