export const Pruebas = () => {
  const createNewWindow = () => {
    window.api.createWindow({
      title: 'Dashboard',
      route: 'dashboard',  // Aquí puedes poner la ruta que quieres cargar
      partWidth: 1,
      partHeight: 1
    })
  }
  return (
    <div>
      <h1>Pruebasss</h1>
      <button onClick={createNewWindow}>Abrir nueva ventana</button>
    </div>
  )
}
