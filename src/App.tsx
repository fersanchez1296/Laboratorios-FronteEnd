// Importación de módulos y componentes necesarios
import { BrowserRouter, Route, Navigate } from "react-router-dom"; // Componentes de React Router para el enrutamiento
import "./App.css"; // Estilos CSS para el componente App
import { PrivateRoutes, PublicRoutes } from "./models"; // Rutas privadas y públicas de la aplicación
import { AuthGuard, RoleGuard } from "./guard"; // Componentes para proteger las rutas basado en autenticación y roles
import { RoutesWithNotFound } from "./utilities"; // Componente para manejar rutas no encontradas
import { Suspense, lazy } from "react"; // Componentes de React para la carga asíncrona de componentes
import { Provider } from "react-redux"; // Componente de React Redux para proporcionar el estado global de Redux
import store from "./redux/store"; // Store de Redux
import { Roles } from "./models/roles"; // Roles de usuario
import Dashboard from "./pages/Private/Dashboard/Dashboard"; // Componente de panel de control privado

const Login = lazy(() => import("./pages/Login/Login")); // Componente de inicio de sesión
const Private = lazy(() => import("./pages/Private/Private")); // Componente de página privada

function App() {
  return (
    <div className="App">
      <Suspense fallback={<></>}>
        <Provider store={store}>
          <BrowserRouter>

            {/* Componente para manejar rutas no encontradas */}
            <RoutesWithNotFound>
              {/* Redirección a la ruta privada al acceder a la raíz */}
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />

              {/* Ruta para manejar rutas no definidas */}
              <Route path="*" element={<>NOT FOUND</>} />

              {/* Ruta para el componente de inicio de sesión */}
              <Route path={PublicRoutes.LOGIN} element={<Login />} />

              {/* Protección de rutas privadas basado en autenticación */}
              <Route element={<AuthGuard privateValidation={true} />}>
                {/* Ruta para el componente de página privada */}
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>

              {/* Protección de rutas basado en el rol de usuario */}
              <Route element={<RoleGuard rol={Roles.ADMIN}/>}>
                {/* Ruta para el componente de panel de control */}
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>}/>
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;

{/*Aquí se están importando varios elementos de la biblioteca React Router. BrowserRouter es un componente que permite 
manejar la navegación en una aplicación utilizando el enrutamiento basado en el historial del navegador. 
Route es un componente que se utiliza para definir una ruta en la aplicación. Navigate es un componente que se utiliza para 
realizar una navegación programática.Se está importando un archivo CSS llamado "App.css" que contiene estilos específicos 
para el componente App.Se están importando diferentes módulos de la aplicación. PrivateRoutes y PublicRoutes son constantes 
que contienen las rutas privadas y públicas de la aplicación, respectivamente. AuthGuard y RoleGuard son componentes que se 
utilizan para proteger las rutas y restringir el acceso basado en la autenticación y los roles de usuario. RoutesWithNotFound
es un componente que envuelve las rutas para manejar las rutas no encontradas.Se están importando los componentes Suspense y 
lazy de React. Suspense se utiliza para suspender la representación de un componente mientras se carga de manera asíncrona.
lazy se utiliza para cargar componentes de manera asíncrona cuando se necesitan.Se está importando el componente Provider de 
React Redux, que se utiliza para proporcionar el estado global de Redux a la aplicación. También se importa el objeto store, 
que es una instancia del store de Redux que contiene el estado de la aplicación.Se está importando el componente Logout desde 
  el archivo "Logout.js". Este componente probablemente representa la funcionalidad de cierre de sesión en la aplicación.Se está 
  importando la constante Roles desde el archivo "roles.js" en la carpeta "models". Esta constante probablemente define los roles 
  de usuario utilizados en la aplicación. También se importa el componente Dashboard desde el archivo "Dashboard.js" en la 
  carpeta "pages/Private/Dashboard", que representa la página de panel de control en la sección privada de la aplicación.
  Se están declarando dos constantes: Login y Private. Estas constantes utilizan la función lazy para cargar los componentes 
  de manera asíncrona. El componente Login se carga desde el archivo "Login.js" en la carpeta "pages/Login", y el componente 
  Private se carga desde el archivo "Private.js" en la carpeta "pages/Private".. El componente App renderiza la estructura 
  principal de la aplicación.
Dentro de App, se encuentra un div con la clase CSS "App", que es el contenedor principal de la aplicación.

Dentro de <Suspense fallback={<></>}>, se envuelve todo el contenido de la aplicación. Suspense se utiliza para suspender la 
representación del contenido hasta que los componentes cargados de manera asíncrona estén listos.

Dentro de <Provider store={store}>, se envuelve la aplicación con el componente Provider de React Redux, proporcionando el 
estado global de Redux a la aplicación a través del objeto store.

Dentro de <BrowserRouter>, se envuelve la aplicación con el componente BrowserRouter de React Router, lo que habilita el 
enrutamiento en la aplicación.

Después de <Logout />, se encuentra el componente Logout, que probablemente renderiza algún tipo de enlace o botón para cerrar 
sesión en la aplicación.

Dentro de <RoutesWithNotFound>, se definen las rutas de la aplicación. Las rutas se configuran utilizando el componente Route 
de React Router. Cada Route tiene un path que define la ruta correspondiente, y un element que representa el componente que se 
debe renderizar cuando se accede a esa ruta.

La primera ruta tiene path="/", lo que significa que se corresponde con la ruta raíz de la aplicación. El element es 
<Navigate to={PrivateRoutes.PRIVATE} />, lo que significa que cuando se acceda a la ruta raíz, se redirigirá automáticamente a
 la ruta privada definida en PrivateRoutes.PRIVATE.

La segunda ruta tiene path="*", lo que significa que se corresponde con cualquier ruta que no se haya configurado previamente. 
El element es <>NOT FOUND</>, lo que significa que se mostrará el texto "NOT FOUND" cuando se acceda a una ruta no definida.

La tercera ruta tiene path={PublicRoutes.LOGIN}, lo que significa que se corresponde con la ruta de inicio de sesión definida 
en PublicRoutes.LOGIN. El element es <Login />, lo que significa que se renderizará el componente Login cuando se acceda a la 
ruta de inicio de sesión.

La cuarta ruta utiliza el componente AuthGuard como element, lo que significa que todas las rutas dentro de este componente 
estarán protegidas y solo se podrán acceder si se cumple la validación de autenticación privada.

Dentro de este AuthGuard, se encuentra una ruta adicional con path={${PrivateRoutes.PRIVATE}, que se corresponde con cualquier 
ruta que comienza con la ruta privada definida en PrivateRoutes.PRIVATE. El element es <Private />, lo que significa que se 
renderizará el componente Private cuando se acceda a las rutas privadas.
La quinta ruta utiliza el componente RoleGuard como element, lo que significa que todas las rutas dentro de este componente 
estarán protegidas y solo se podrán acceder si el rol de usuario cumple con la restricción especificada.

Dentro de este RoleGuard, hay una ruta adicional con path={PrivateRoutes.DASHBOARD}, que se corresponde con la ruta del panel 
de control en la sección privada de la aplicación. El element es <Dashboard />, lo que significa que se renderizará el 
componente Dashboard cuando se acceda a la ruta del panel de control.
Finalmente, RoutesWithNotFound, BrowserRouter, Provider y Suspense se cierran correctamente, y el componente App se exporta 
como el componente principal de la aplicación.*/}
