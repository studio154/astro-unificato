import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Inizializzazione di Resend con la tua chiave del .env / Vercel
const resendApiKey = import.meta.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Lettura dei dati inviati dal modulo
    const body = await request.json();
    
    const name = body.name?.toString().trim();
    const email = body.email?.toString().trim();
    const message = body.message?.toString().trim();
    const turnstileToken = body.turnstileToken?.toString();

    // Validazione dei campi obbligatori
    if (!name || !email || !message || !turnstileToken) {
      const mancanti = [];
      if (!name) mancanti.push('Nome');
      if (!email) mancanti.push('Email');
      if (!message) mancanti.push('Messaggio');
      if (!turnstileToken) mancanti.push('Token Anti-spam');
      
      return new Response(JSON.stringify({ 
        error: `Campi mancanti: ${mancanti.join(', ')}` 
      }), { status: 400 });
    }

    if (!resend) {
      return new Response(JSON.stringify({ error: 'Configurazione RESEND_API_KEY mancante.' }), { status: 500 });
    }

    // 2. Verifica di Cloudflare Turnstile (Ottimizzata per Localhost e Produzione)
    const isLocalToken = turnstileToken === "1x0000000000000000000000000000000AA";
    let turnstileSuccess = false;

    if (isLocalToken) {
      // In locale accettiamo il token di test senza chiamare Cloudflare
      turnstileSuccess = true;
    } else {
      // Online verifichiamo il token reale usando la tua chiave segreta
      const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: import.meta.env.CLOUDFLARE_TURNSTILE_SECRET,
          response: turnstileToken,
        }),
      });

      const turnstileOutcome = await turnstileResponse.json();
      turnstileSuccess = turnstileOutcome.success;
    }

    if (!turnstileSuccess) {
      return new Response(JSON.stringify({ error: 'Verifica anti-spam fallita.' }), { status: 400 });
    }

    // 3. Configurazione Mittente e Destinatario (Configurazione definitiva Dominio Verde)
    // Prende i valori reali (info@eliocarchidi.com) dal tuo .env o da Vercel
    const emailFrom = import.meta.env.CONTACT_EMAIL_FROM || 'info@eliocarchidi.com'; 
    const emailTo = import.meta.env.CONTACT_EMAIL_TO || 'info@eliocarchidi.com'; 

    // 4. Invio dell'email tramite Resend
    const emailResponse = await resend.emails.send({
      from: emailFrom, 
      to: emailTo, 
      subject: `Nuovo messaggio da ${name}`,
      replyTo: email, // Ti permette di fare "Rispondi" direttamente alla mail del cliente
      html: `
        <h3>Nuovo messaggio dal modulo di contatto</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (emailResponse.error) {
      console.error("Dettaglio Errore Resend:", emailResponse.error);
      return new Response(JSON.stringify({ 
        error: `Errore Resend: ${emailResponse.error.message}` 
      }), { status: 500 });
    }

    // Tutto è andato a buon fine!
    return new Response(JSON.stringify({ success: true, message: 'Messaggio inviato con successo!' }), { status: 200 });

  } catch (error: any) {
    console.error("Errore generato sul server:", error);
    return new Response(JSON.stringify({ error: `Errore interno del server: ${error.message}` }), { status: 500 });
  }
};