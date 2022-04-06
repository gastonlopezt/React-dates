

const Pacientes = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Juan</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">20 de Abril 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          beatae? Obcaecati inventore amet ut maxime! Doloremque,
          necessitatibus. Sed ea laboriosam quidem, suscipit molestiae id ab
          repellat quis odio, labore a.
        </span>
      </p>
    </div>
  );
}

export default Pacientes
