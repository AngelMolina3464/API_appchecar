const url = "https://appchecar.com/wsappchecar/";

//Id de Empresa
const IdEmpresa = "Itrafico";

//Contraseña de Administrador
const AdminPass = "RHmodal27";

//Desde que fecha formato: año/mes/dia , ejemplo: 2023/01/14
const FechaInicio = "2023/01/05";

//Hasta que fecha formato: año/mes/dia , ejemplo: 2023/01/14
const FechaFinal = " 2023/01/05";

const parametros = {
  IdEmpresa: IdEmpresa,
  AdminPass: AdminPass,
  FechaInicio: FechaInicio,
  FechaFinal: FechaFinal,
};

const fetchData = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parametros),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json();
    data.forEach((element) => {
      element.nombre == "Alejandro Pérez Álvarez"
        ? console.log("Nombre del Empleado", element.nombre , "Fecha de entrada", element.fecha)
        : console.log("elemento vacio");
    });
    // console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchData();
