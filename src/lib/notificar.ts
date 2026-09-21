const API = "https://api.resend.com/emails";

export async function notificarEquipo(asunto: string, datos: unknown) {
  const clave = process.env.RESEND_API_KEY;
  const destino = process.env.EMAIL_EQUIPO;
  const remitente = process.env.EMAIL_REMITENTE;

  if (!clave || !destino || !remitente) {
    console.info(`[${asunto}]`, datos);
    return;
  }

  const respuesta = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${clave}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: remitente,
      to: destino,
      subject: asunto,
      text: JSON.stringify(datos, null, 2),
    }),
  });

  if (!respuesta.ok) {
    console.error(`No se pudo notificar: ${respuesta.status}`);
  }
}
