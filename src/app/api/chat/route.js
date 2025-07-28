export async function POST(req) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Falta OPENAI_API_KEY en .env.local' }),
        { status: 500 }
      );
    }

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content:
              'Eres un experto en la Biblia. Responde con base en pasajes bíblicos, de forma clara, respetuosa y concisa.',
          },
          ...messages,
        ],
      }),
    });

    const data = await openaiRes.json();


   


    if (data.error) {
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: data.choices[0].message }));
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
    });
  }
}
