import header_logo from '../../../assets/header_logo.png'

function Header() {
  return(
  <div className="header">
    <figure>
        <img src={header_logo} alt="Logo de la universidad de Guadalajara" />
    </figure>
    <h1>Lab-R CUValles</h1>
  </div>
  ) 
}
export default Header;
