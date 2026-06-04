import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resendApiKey = "re_4RUGxXub_JFHpbF6SjwFbJjjmz13Zg5Ee";
const resend = new Resend(resendApiKey) ;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const name = body.name?.toString().trim();
    const email = body.email?.toString().trim();
    const message = body.message?.toString().trim();
    if (!name || !email || !message) {
      const mancanti = [];
      if (!name) mancanti.push("Nome");
      if (!email) mancanti.push("Email");
      if (!message) mancanti.push("Messaggio");
      return new Response(JSON.stringify({
        error: `Campi mancanti: ${mancanti.join(", ")}`
      }), { status: 400 });
    }
    if (!resend) {
      return new Response(JSON.stringify({ error: "Configurazione RESEND_API_KEY mancante." }), { status: 500 });
    }
    const emailFrom = "info@eliocarchidi.com";
    const emailTo = "info@eliocarchidi.com";
    const emailResponse = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `Nuovo messaggio da ${name}`,
      replyTo: email,
      // Ti permette di fare "Rispondi" direttamente alla mail del cliente
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Nuovo messaggio dal modulo di contatto</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 20px;"><strong>Messaggio:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `
    });
    if (emailResponse.error) {
      console.error("Dettaglio Errore Resend (Notifica interna):", emailResponse.error);
      return new Response(JSON.stringify({
        error: `Errore Resend: ${emailResponse.error.message}`
      }), { status: 500 });
    }
    try {
      await resend.emails.send({
        from: `Elio Carchidi <${emailFrom}>`,
        to: email,
        // Spedita alla mail inserita nel form
        subject: "Ricevuto: la tua richiesta di informazioni",
        html: `
          <div style="font-family: 'Newsreader', serif, Georgia, sans-serif; max-width: 550px; margin: 40px auto; padding: 20px; color: #1a1a1a; line-height: 1.8; tracking: 0.02em;">
            <h2 style="font-weight: 300; font-size: 24px; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 30px;">
              Grazie per il tuo messaggio
            </h2>
            <p style="font-size: 16px;">Gentile ${name},</p>
            <p style="font-size: 16px;">
              Ho ricevuto correttamente la tua richiesta. Sarà mia cura leggere i dettagli e risponderti personalmente nel più breve tempo possibile, solitamente entro 24 ore.
            </p>
            <p style="font-size: 16px; margin-top: 30px;">
              A presto,
            </p>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0; color: #64748b;">
                Studio Elio Carchidi
              </p>
              <p style="font-size: 12px; margin: 5px 0 0 0; color: #94a3b8;">
                Fine-Art Portraiture & Consultancy
              </p>
            </div>
          </div>
        `
      });
    } catch (clientEmailError) {
      console.error("Errore invio email di cortesia al cliente:", clientEmailError);
    }
    return new Response(JSON.stringify({ success: true, message: "Messaggio inviato con successo!" }), { status: 200 });
  } catch (error) {
    console.error("Errore generato sul server:", error);
    return new Response(JSON.stringify({ error: `Errore interno del server: ${error.message}` }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
