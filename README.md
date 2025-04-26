
# Panel Administrativo

**Yeison Adrián Cáceres Torres**

Este proyecto implementa un panel administrativo simple utilizando `react-router-dom` para crear una barra de navegación (Navbar) y estilizado con `tailwindcss`, un framework de estilos.

## Estructura del Proyecto

```bash
├── public
├── src
│   ├── pages
│   │   ├── Clientes.jsx
│   │   ├── Error.jsx
│   │   ├── Inicio.jsx
│   │   ├── Logout.jsx
│   │   ├── Proveedores.jsx
│   │   ├── Usuarios.jsx
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── ...otros archivos de configuración
```

### Descripción del Proyecto

Este panel administrativo fue creado utilizando **Vite + React** con **tailwindcss** para los estilos. El proceso de configuración inicial se realizó ejecutando el siguiente comando:

```bash
npm create vite@latest
```

Durante la instalación, se seleccionó React y posteriormente JavaScript con SWC. Luego, se instaló `tailwindcss` y se comenzaron a construir los componentes del panel administrativo. A continuación se detallan los archivos más importantes:

#### src
- **`Navbar.jsx`**: Este archivo contiene la barra de navegación principal del panel, donde se encuentran los enlaces a las diferentes vistas. Se utiliza `NavLink` para la redirección de rutas y el manejo del estado activo.
- **`Footer.jsx`**: Este archivo contiene el pie de página del panel administrativo, con enlaces adicionales y créditos.
- **`App.jsx`**: En este archivo se configura la gestión de rutas utilizando `<BrowserRouter>`, `<Routes>`, y `<Route>`, para las vistas dentro de `pages`. También se renderizan los componentes `Navbar` y `Footer`.
- **`main.jsx`**: Este es el archivo principal que inicializa la aplicación y renderiza el componente `App.jsx`.

#### Pages
- **`Clientes.jsx`**: Vista dedicada al módulo de Clientes.
- **`Error.jsx`**: Vista que muestra un mensaje de error cuando se accede a una ruta no definida.
- **`Inicio.jsx`**: Vista inicial del panel administrativo.
- **`Logout.jsx`**: Vista que simula el proceso de cierre de sesión.
- **`Proveedores.jsx`**: Vista correspondiente al módulo de Proveedores.
- **`Usuarios.jsx`**: Vista correspondiente al módulo de Usuarios.

El archivo `index.html` se utilizó para incluir el script que inicia la aplicación a través de `main.jsx`, encargado de renderizar los componentes principales. Además, en la carpeta `public` se incluyó un archivo con el logo que aparece en la barra de navegación.

A continuación, se presentan algunas capturas de las vistas del panel de administración:

#### **Vista de Inicio**
![inicio](https://github.com/AdrianCCRS/entornos-panel-administrativo/blob/main/src/assets/view_inicio.png?raw=true)

#### **Vista de Clientes**
![clientes](https://github.com/AdrianCCRS/entornos-panel-administrativo/blob/main/src/assets/view_clientes.png?raw=true)

#### **Vista de Proveedores**
![proveedores](https://github.com/AdrianCCRS/entornos-panel-administrativo/blob/main/src/assets/view_proveedores.png?raw=true)

#### **Vista de Usuarios**
![usuarios](https://github.com/AdrianCCRS/entornos-panel-administrativo/blob/main/src/assets/view_usuarios.png?raw=true)

#### **Vista de Logout**
![logout](https://github.com/AdrianCCRS/entornos-panel-administrativo/blob/main/src/assets/view_logout.png?raw=true)

#### **Vista de Error**
![error](https://github.com/AdrianCCRS/entornos-panel-administrativo/blob/main/src/assets/view_error.png?raw=true)

