function Usuarios() {
  return (
    <div className="mx-auto my-10 w-[80%] h-auto text-2xl p-4 rounded-2xl bg-gray-200 flex flex-col items-center">
      <h1 className="font-bold">Usuarios</h1>
      <p>Esta es la página de usuarios.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Juan Pérez</h2>
          <p>Correo: juan.perez@example.com</p>
          <p>Rol: Administrador</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">María López</h2>
          <p>Correo: maria.lopez@example.com</p>
          <p>Rol: Editor</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Carlos García</h2>
          <p>Correo: carlos.garcia@example.com</p>
          <p>Rol: Usuario</p>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;