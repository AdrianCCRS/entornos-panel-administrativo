function Proveedores() {
  return (
    <div className="mx-auto my-10 w-[80%] h-auto text-2xl p-4 rounded-2xl bg-gray-200 flex flex-col items-center">
      <h1 className="font-bold">Proveedores</h1>
      <p>Esta es la sección de proveedores.</p>
      <table className="mt-4 border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Nombre</th>
            <th className="border border-gray-400 px-4 py-2">Contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">1</td>
            <td className="border border-gray-400 px-4 py-2">Proveedor A</td>
            <td className="border border-gray-400 px-4 py-2">contacto@proveedora.com</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2</td>
            <td className="border border-gray-400 px-4 py-2">Proveedor B</td>
            <td className="border border-gray-400 px-4 py-2">contacto@proveedorb.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Proveedores;