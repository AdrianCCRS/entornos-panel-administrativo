function Clientes() {
  return (
    <div className="mx-auto my-10 w-[80%] h-auto text-2xl p-4 rounded-2xl bg-gray-200 flex flex-col items-center">
      <h1 className="font-bold">Clientes</h1>
      <p>Esta es la página de clientes.</p>
      <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-blue-600">
        Agregar Cliente
      </button>
      <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-blue-600">
        Editar Cliente
      </button>
    </div>
  );
}

export default Clientes;