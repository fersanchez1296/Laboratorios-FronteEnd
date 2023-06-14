

function Content() {
  return (
    <div className="content flow-text">
      <p className="description">
        Lab-R es un sistema desarrollado en el CUValles para generar
        reservaciones en los laboratorios y facilitar el acceso a docentes y
        alumnos para realizar las prácticas pertinentes a sus campos de estudio.
      </p>
      
      <article className="login-form z-depth-3 row">
        <form action="#">
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input id="code" type="text" className="validate" name="code" />
            <label htmlFor="code">Código</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">password</i>
            <input
              id="password"
              type="password"
              className="validate"
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="">
            <a className="" href="#/Main">
              <button className="waves-effect waves-light btn" type="submit">
                Ingresar<i className="material-icons right">cloud</i>
              </button>
            </a>
          </div>
        </form>
      </article>
    </div>
  );
}
export default Content;
