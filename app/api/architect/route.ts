// app/api/architect/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Inicializáljuk az OpenAI-t (automatikusan a .env.local-ból veszi a kulcsot)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'ures-kulcs', 
});

export async function POST(req: Request) {
  try {
    const { vision } = await req.json();

    // Ha nincs igazi API kulcs, azonnal egy demó választ adunk vissza (hogy ne szálljon el a tesztelésnél)
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ 
        recommendation: "[Rendszerüzenet: OpenAI API kulcs nem található. Demó mód aktív.]\n\nElemzés kész...\n\nJavasolt architektúra: Headless React (Next.js) + Vercel Edge hálózat. Az adatbázis szétválasztásával a betöltési idő < 400ms lesz, a konverziós ráta pedig várhatóan 30%-kal nő. Skálázhatóság: Végtelen." 
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Vagy gpt-3.5-turbo a gyorsabb/olcsóbb teszteléshez
      messages: [
        {
          role: "system",
          content: "Egy elit tech ügynökség (FreeLab) AI rendszerépítője vagy. A felhasználó leírja egy mondatban az üzleti célját/vízióját. Adj neki egy kőkemény, professzionális, hacker/terminál stílusú technológiai javaslatot magyar nyelven. Legyen nagyon rövid (max 3-4 mondat). Használj ilyen kulcsszavakat: Next.js, Headless architektúra, Vercel Edge, AI API, ezredmásodperces válaszidő. Mindig így kezdd: 'Elemzés kész...'"
        },
        {
          role: "user",
          content: vision
        }
      ],
    });

    return NextResponse.json({ recommendation: completion.choices[0].message?.content });
  } catch (error) {
    console.error("API Hiba:", error);
    return NextResponse.json({ error: 'Kritikus hiba a kvantum-szerveren.' }, { status: 500 });
  }
}