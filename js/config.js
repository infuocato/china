/**
 * ============================================================
 *  CONFIG — modifica solo questo file per personalizzare il sito
 * ============================================================
 *  - Nome brand, tagline, colore d'accento
 *  - Link social
 *  - Email di contatto (pagine legali)
 *  - Categorie, tag, taglie, colori disponibili nei filtri
 *  - Elenco prodotti (demo, sostituibili)
 * ============================================================
 */

window.SITE_CONFIG = {
  // ---- BRAND ----
  brandName: "DRAGON-GATE",
  tagline: "Where quality meets savings",
  domain: "", // usato per SEO / sitemap — aggiorna prima del deploy

  // ---- COLORE D'ACCENTO ----
  // Un solo colore d'accento discreto. Cambia solo questo valore hex.
  accentColor: "#db0000d3",

  // ---- CONTATTI ----
  ownerEmail: "info@tuobrand.com", // usato nelle pagine legali

  // ---- SOCIAL ----
  social: {
    instagram: "",
    tiktok: "",
    youtube: "",
  },

  // ---- CATEGORIE (estendibile: basta aggiungere una voce qui) ----
  categories: [
    "T-Shirt",
    "Felpe",
    "Pantaloni",
    "Jeans",
    "Giacche",
    "Scarpe",
    "Tuta",
    "Accessori",
    "Intimo",
    "Altro",
  ],

  // ---- TAG DISPONIBILI ----
  tags: [
    "VERIFIED QC",
    "DONNA",
    "UOMO",
    "UNISEX",
    "PREMIUM",
  ],

  // ---- TAGLIE E COLORI PER I FILTRI ----
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Nero", "Bianco", "Grigio", "Blu", "Rosso", "Verde", "Beige", "Altro"],

  // ---- PRODOTTI DEMO ----
  // Sostituisci liberamente: aggiungi, rimuovi o modifica voci.
  // "immagini": usa URL o percorsi locali in /assets/products/
  products: [
    {
      slug: "Racing Jacket",
      nome: "Racing Jacket",
      prezzo: 50,
      categoria: "Giacche",
      tag: ["VERIFIED QC", "UNISEX"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Altro"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/07/190802/fc31c7a4-7cc4-452b-93e7-d9d867c74993.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/07/190802/b7f0a9ff-682f-46f5-a857-8285d492ac36.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20", 
        "https://media.usfans.com/upload/ori/2026/10/07/190802/a8c05856-a878-4b41-900b-0a02930e033b.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/112902/20fd0b6f-ae35-4192-92ea-18ab3eef67be.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/112902/b7acc8d0-c932-4d15-9275-496ba82a0f37.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/112902/391df74a-b2cb-42a7-af38-2e666b57cf09.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/115258/2a7371ec-e905-4454-bf89-64d1e1ea53b8.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/115258/7629956e-8508-46c1-9419-ecc6a346af24.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/115258/1473a175-6af7-4664-9436-2ab5215cf8bf.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Giacca leggera per primavera/autunno | Fit Standard",
      stato: "disponibili altri stili",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Felpa NikeXStussy",
      nome: "Felpa Nike X Stussy",
      prezzo: 40,
      categoria: "Felpe",
      tag: ["VERIFIED QC", "UNISEX"],
      taglie: ["S", "M", "L", "XL"],
      colori: ["Nero", "Grigio"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/171829/23dc079f-3878-4001-a39d-68d5c37367f5.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20", 
        "https://media.usfans.com/upload/ori/2026/10/09/171829/06231588-569c-4e4b-a988-03d7a9dfd419.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20", 
        "https://media.usfans.com/upload/ori/2026/10/09/171829/40ea0c26-4288-477a-a709-ddc899043ede.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20", 
        "https://media.usfans.com/upload/ori/2026/10/09/171829/e06b16b2-0d61-4234-9d10-4c2bdb8bb983.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Fit Standard | Materiale: 100% Cotone ",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Maglietta The North Face",
      nome: "Maglietta The North Face",
      prezzo: 25,
      categoria: "T-Shirt",
      tag: ["UNISEX"],
      taglie: ["S", "M", "L", "XL"],
      colori: ["Altro"],
      immagini: [
        "https://media.usfans.com/2026/09/20/203420/f131b2ec-7bc6-402f-b253-2ce53632fc06.jpg",
        "https://media.usfans.com/2026/09/20/203420/06a634a6-ee74-41f8-a58b-8022c973eea9.jpg", 
        "https://media.usfans.com/2026/09/20/203420/c1ac90fe-0e63-4a9c-8f82-0c2f282c7f80.jpg",
        "https://media.usfans.com/2026/09/20/203420/1cd328ea-b2ca-452e-92b9-3e8cb6015b5d.jpg", 
      
      ],
      descrizione:
        "Fit Standard | Materiale: 100% Cotone ",
      stato: "disponibili altri stili",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Jeans Corteiz",
      nome: "Jeans Corteiz",
      prezzo: 55,
      categoria: "Jeans",
      tag: ["UNISEX", "PREMIUM"],
      taglie: ["S", "M", "L", "XL"],
      colori: ["Nero", "Grigio", "Altro"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/162805/46532385-934c-48c9-b817-c4ba616563a9.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/162805/1e2a0e2c-d6e5-434a-8656-347674057844.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20", 
        "https://media.usfans.com/upload/ori/2026/10/09/162805/1c66a1ba-34f5-4436-b305-3f3ee92767b7.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Fit Standard | Materiale: Jeans",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Mutande Suprime",
      nome: "Mutande Suprime",
      prezzo: 20,
      categoria: "Intimo",
      tag: ["UOMO"],
      taglie: ["S", "M", "L", "XL"],
      colori: ["Nero", "Grigio", "Altro"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/183516/cdf74e23-2d06-412b-827e-ef61bb9f6b02.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/183516/6203d254-3514-4cee-9566-029cb97f53df.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20", 
        "https://media.usfans.com/upload/ori/2026/10/09/183516/45e17965-94b0-4829-a349-14c494dc6598.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Pacco da 3 pezzi | Materiale: 100% cotone ",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Calzini Nike",
      nome: "Calzini Nike",
      prezzo: 12,
      categoria: "Altro",
      tag: ["UNISEX"],
      taglie: ["S", "M", "L"],
      colori: ["Nero", "Grigio", "Bianco"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/10/142807/b16b4d23-8270-4d19-988d-60c0153f99e8.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Pacco da 5 pezzi | Materiale: 100% cotone | le taglie stanno per corti, medi, lunghi ",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Tuta Tech Nike",
      nome: "Tuta Tech Nike",
      prezzo: 70,
      categoria: "Tuta",
      tag: ["UNISEX", "PREMIUM"],
      taglie: ["S", "M", "L",   "XL"],
      colori: ["Nero", "Bianco"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/140310/cc6d1971-b638-409d-9369-ec2e19c9e1e2.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/140310/d8023697-c08d-4bea-9414-a9355f2c0aa6.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/140310/608f6811-32e9-417e-a96c-7e66b97e0eac.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Tuta Completa ",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
     {
      slug: "Tuta Mertra",
      nome: "Tuta Mertra",
      prezzo: 60,
      categoria: "Tuta",
      tag: ["UNISEX", "PREMIUM"],
      taglie: ["S", "M", "L",   "XL"],
      colori: ["Nero", "Bianco"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/10/140437/ae2e4e21-ccb0-446b-80d1-83704f0626bb.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/10/140437/6cbad82a-00c0-4837-ac30-b5973a756e62.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/10/140437/e7ff96f7-0965-4c28-a085-c351304d868b.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Tuta Completa ",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Giubbotto Arcteryx",
      nome: "Giubbotto Arcteryx",
      prezzo: 50,
      categoria: "Giacche",
      tag: ["UNISEX"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Nero", "Bianco"],
      immagini: [
        "https://media.usfans.com/2026/09/18/210917/778eb9e8-f12a-45de-9634-1068de7b47f5.jpg",
        "https://media.usfans.com/2026/09/18/210917/117dcfee-0627-429e-b983-dd2e8b7ea8ca.jpg", 
        "https://media.usfans.com/2026/09/18/210917/e13c472e-d9c3-4887-93f5-84bf4e543cf2.jpg", 
        "https://media.usfans.com/2026/09/18/210917/88518ced-072d-4bee-bbae-b1a763d4d9f5.jpg", 
      ],
      descrizione:
        "Antivento goratex | Fit Standard | Materiale: Idrofobico",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
     {
      slug: "Maglione Polo Ralph Lauren",
      nome: "Maglione Polo Ralph Lauren",
      prezzo: 40,
      categoria: "Felpe",
      tag: ["UNISEX", "PREMIUM"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Grigio"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/10/182437/4c48bd64-3538-4ef5-81d6-63844e40a79a.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/10/182437/4f83c93f-a1d1-4725-86e3-0f0dd18a9978.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/10/182437/4b42e5d9-36fb-4bc8-ad91-d616fd06a82a.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/10/182437/3c870dbb-07cf-4997-a606-2df41ab454e8.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Felpa con ricamo | Fit Standard | Materiale: 100% cotone",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "T-Shirt Burberry",
      nome: "T-Shirt Burberry",
      prezzo: 40,
      categoria: "T-Shirt",
      tag: ["UOMO", "PREMIUM", "VERIFIED QC"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Bianco", "Nero"],
      immagini: [
        "https://media.usfans.com/2026/09/19/192225/83b4d3e4-b496-4a67-aa78-2c779d53ace6.jpg",
        "https://media.usfans.com/2026/09/19/192225/bf50b3b0-bfac-41f8-8258-89805bb66eab.jpg",
        "https://media.usfans.com/2026/09/19/192225/4277fd4b-e864-4918-b646-723e454bd095.jpg",
        "https://media.usfans.com/2026/09/19/192225/fef59322-f82e-4535-b13d-56e440ebf6e8.jpg",
      ],
      descrizione:
        "Maglietta con ricamo | Fit Standard | Materiale: 100% cotone",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Felpa LV",
      nome: "Felpa LV",
      prezzo: 40,
      categoria: "Felpe",
      tag: ["UOMO", "PREMIUM", "VERIFIED QC"],
      taglie: ["M", "L", "XL"],
      colori: ["Altro"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/171829/37129551-9374-4bcf-baa9-b87475999bf1.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/171829/be8e81e8-1093-4f70-ba13-d41e57a5bc63.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/171829/2391bc3e-04d2-4897-bee6-2e8d1632c3b5.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/171829/ac280a2e-d336-4a1f-b7c2-bdfed8feb0fa.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Fit Standard | Materiale: 100% cotone",
      stato: "disponibili altri stili",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Felpa Fiori",
      nome: "Felpa Fiori",
      prezzo: 30,
      categoria: "Felpe",
      tag: ["UOMO", "PREMIUM"],
      taglie: ["S", "M", "L", "XL"],
      colori: ["Nero, Bianco, Grigio, Verde, Rosso, Blu, Altro"],
      immagini: [
        "https://media.usfans.com/2026/09/15/191710/22cf23ec-a57a-43a1-a307-7e825064aa86.jpg",
        "https://media.usfans.com/2026/09/15/191710/d3bd6bcc-e867-439f-9181-8cc050038ddf.jpg",
        "https://media.usfans.com/2026/09/15/191710/6d4b0045-1df9-4a43-9963-a7e7a4c8b4b0.jpg",
        "https://media.usfans.com/2026/09/15/191710/a554a927-8f19-4579-aad9-35e35d2ed0e9.jpg",
      ],
      descrizione:
        "Felpa con fiori | Fit standard | Materiale: 100% cotone",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Pantalone Amiri",
      nome: "Pantalone Amiri",
      prezzo: 40,
      categoria: "Pantaloni",
      tag: ["UOMO", "PREMIUM"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Nero", "Bianco"],
      immagini: [
        "https://media.usfans.com/2026/09/16/113844/d304c404-e8a5-4837-982c-41cea835d97a.jpg",
        "https://media.usfans.com/2026/09/16/113844/52bf3f80-8fa3-413b-ad70-1f1870df310f.jpg",
        "https://media.usfans.com/2026/09/16/113844/924d8a82-1faa-4fa2-afe7-ad5dafa83c11.jpg",
        "https://media.usfans.com/2026/09/16/113844/e227427e-6900-4d46-a596-02d26f26e92a.jpg",
      ],
      descrizione:
        "Amiri | Fit Standard | Materiale: 100% cotone",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
     {
      slug: "Pantalone Amiri2",
      nome: "Pantalone Amiri Slim",
      prezzo: 55,
      categoria: "Jeans",
      tag: ["UOMO", "PREMIUM"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Nero", "Bianco"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/10/181317/f070232a-11af-4bc4-b247-b9754c45067e.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/10/181317/b644cfe0-a108-45e7-a00e-43ab2fe583bf.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/10/181317/5ce9d2a3-7f17-4d6c-aa96-6115e1db67d7.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Amiri | Fit Slim ",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
     {
      slug: "Bapestar",
      nome: "Bapestar AF1",
      prezzo: 45,
      categoria: "Scarpe",
      tag: ["UNISEX"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Altro"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/194304/6cd817a7-0b0d-4ac0-9414-f312dec64b38.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/194304/44452917-d12d-4576-bf94-c0da6c5677d5.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/194304/cd4e7d7d-9fd2-4f20-a729-4ad6d9d1bb4a.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/194304/af9853ed-032a-4214-abc2-730e0d902ece.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/194304/c51b7dc4-caaf-4ba1-a9c1-60e647c4a64b.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Air force 1 X bape | Fit Standard | Taglia: 36-48",
      stato: "disponibili altri stili",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Nike AF1 X Supreme",
      nome: "Nike AF1 X Supreme",
      prezzo: 50,
      categoria: "Scarpe",
      tag: ["UNISEX", "VERIFIED QC"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Bianco", "Nero"],
      immagini: [
        "https://media.usfans.com/2026/09/20/172300/b09d39b7-2c23-4ea5-b5f6-c3cade6263c4.jpg",
        "https://media.usfans.com/2026/09/20/172300/1eebb2c8-676d-4d8e-be32-41880955ed72.jpg",
        "https://media.usfans.com/2026/09/20/172300/5c7773dc-acb4-4a21-82f5-2c27a738696e.jpg",
      ],
      descrizione:
        "Af1 | Fit Standard | Taglia: 36-47",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
     {
      slug: "Nike Air Force 1",
      nome: "Nike Air Force 1",
      prezzo: 35,
      categoria: "Scarpe",
      tag: ["UNISEX", "VERIFIED QC"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Bianco", "Nero"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/08/172530/7f2f554d-2583-4ee5-beb4-e52ebf63a558.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/08/172530/034d1341-c26e-44ad-822f-7b003e67864d.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/08/172530/a9d8a639-b6c7-4a02-86d4-2cf79e624da8.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/08/172530/7f2f554d-2583-4ee5-beb4-e52ebf63a558.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Af1 | Fit Standard | Taglia: 36-47",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
     {
      slug: "Raf Simon",
      nome: "Raf Simon",
      prezzo: 60,
      categoria: "Scarpe",
      tag: ["UOMO",],
      taglie: ["M", "L", "XL", "XXL"],
      colori: ["Bianco", "Nero", "Grigio", "Verde"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/195013/cbcf347c-53d9-4c21-9b56-281909c84003.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/195013/bd5d1726-b505-419a-ac14-7629869d9f27.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/195013/10d1e9f9-ad0d-40f6-9da1-61442072cfcc.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/195013/7e2efdf9-0c8a-4211-bbaa-66ad5ebacff1.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Adidas Raf Simon | Fit Standard | Taglia: 36-47",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Loboutin Uomo",
      nome: "Loboutin Uomo",
      prezzo: 55,
      categoria: "Scarpe",
      tag: ["UOMO", "VERIFIED QC"],
      taglie: ["S", "M", "L", "XL"],
      colori: ["Nero"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/09/101931/4f623620-03c1-463c-9be1-9673e8b72bc0.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/101931/c350bc52-9d5e-41da-9ad3-cd9cea7d1a50.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/101931/8bdc18da-3b6d-4ffe-bd04-91353ee0d73f.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/09/101931/4129b044-5c93-4b41-8e48-53a1b7ea193e.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Fit Standard",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
    {
      slug: "Nike Air Max 95",
      nome: "Nike Air Max 95",
      prezzo: 55,
      categoria: "Scarpe",
      tag: ["UNISEX", "VERIFIED QC"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Bianco", "Nero"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/12/095419/a6b1b7a1-e143-4ced-9a80-3fd46ff08b54.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/12/095419/1dfff7a3-6df7-41bd-a839-5f8757d5d2e8.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/12/095419/3df5ca2d-071c-42b3-b306-6a667ebf97a7.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/12/095419/1dfff7a3-6df7-41bd-a839-5f8757d5d2e8.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Air max 95 | Fit Standard | Taglia: 36-47",
      stato: "disponibile",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
     {
      slug: "Dior b22",
      nome: "Dior b22",
      prezzo: 50,
      categoria: "Scarpe",
      tag: ["UNISEX", "VERIFIED QC"],
      taglie: ["S", "M", "L", "XL", "XXL"],
      colori: ["Altro"],
      immagini: [
        "https://media.usfans.com/upload/ori/2026/10/11/201848/ee6011d0-a7af-4da2-83c0-cae09c0244ff.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/201848/45c1e35a-e64d-44b4-a99f-28c01e484187.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/201848/c890f39f-77d6-4808-a2b0-e857bfda6d68.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
        "https://media.usfans.com/upload/ori/2026/10/11/201848/37931a6a-f1cd-44c2-8745-670f4c2a3de4.jpg?x-oss-process=image/auto-orient,1/watermark,image_d2F0ZXJtYXJrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzIw,g_ne,x_1,y_20",
      ],
      descrizione:
        "Dior b22 | Fit Standard | Taglia: 36-47",
      stato: "disponibili altri stili",
      piattaforma: "",
      linkPiattaforma: "",
      dataInserimento: "2026-09-01",
    },
  ],
};
