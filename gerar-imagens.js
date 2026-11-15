const sharp = require('sharp');
const fs = require('fs');

const imagens = [
  { nome: 'jett', url: 'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png' },
  { nome: 'omen', url: 'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png' },
  { nome: 'reyna', url: 'https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png' },
  { nome: 'ascent', url: 'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png' }
];

(async () => {
  fs.mkdirSync('assets/img', { recursive: true });
  for (const img of imagens) {
    const res = await fetch(img.url);
    const buffer = Buffer.from(await res.arrayBuffer());
    await sharp(buffer).resize(400).webp({ quality: 80 }).toFile(`assets/img/${img.nome}-sm.webp`);
    await sharp(buffer).resize(800).webp({ quality: 85 }).toFile(`assets/img/${img.nome}-lg.webp`);
    console.log(`Gerado: ${img.nome}-sm.webp e ${img.nome}-lg.webp`);
  }
})();