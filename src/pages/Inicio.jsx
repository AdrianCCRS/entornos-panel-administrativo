function Inicio() {
    return (
      <div className="mx-auto my-10 w-[80%] h-auto text-2xl p-4 rounded-2xl bg-gray-200 flex flex-col items-center">
      <h1 className="font-bold">Inicio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-green-300 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Spotify Premium</h2>
        <p className="text-sm">Acceso a música sin anuncios</p>
        <p className="text-sm">Precio: $9.99/mes</p>
        <p className="text-sm">Usuarios disponibles: 5</p>
        </div>
        <div className="p-4 bg-green-300 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Netflix Standard</h2>
        <p className="text-sm">Streaming en HD para 2 dispositivos</p>
        <p className="text-sm">Precio: $15.49/mes</p>
        <p className="text-sm">Usuarios disponibles: 3</p>
        </div>
        <div className="p-4 bg-green-300 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Amazon Prime Video</h2>
        <p className="text-sm">Acceso a series y películas exclusivas</p>
        <p className="text-sm">Precio: $8.99/mes</p>
        <p className="text-sm">Usuarios disponibles: 4</p>
        </div>
      </div>
      </div>
    );
  }
  
  export default Inicio;