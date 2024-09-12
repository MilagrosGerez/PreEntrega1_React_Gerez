import CartWidget from "./CartWidget"

function NavBar (){
    return (
   <header>
   <nav>
    <img src="./images/logo_norcita.png" className="rounded float-start" alt="Logo de Jazmín difusores." />
        <div>
            <button>inicio</button>
            <button>Aromas</button>
            <button>Aromas Florales</button>
            <button>Aromas Dulces</button>
        </div>
    </nav>
    <CartWidget/>
   </header>
    
    )
}

export default NavBar;