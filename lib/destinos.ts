export interface Destino {
  id: string;
  nome: string;
  pais: string;
  imagem: string;
  descricaoCurta: string;
  descricao: string;
  latitude: number;
  longitude: number;
  precoMedio: string;
  melhorEpoca: string;
}

export const destinos: Destino[] = [
  {
    id: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    pais: "Brasil",
    imagem: "/images/rio-de-janeiro.webp",
    descricaoCurta:
      "Praias icônicas, o Cristo Redentor e um pôr do sol inesquecível no Pão de Açúcar.",
    descricao:
      "O Rio de Janeiro é uma das cidades mais bonitas do mundo, conhecida por suas praias de Copacabana e Ipanema, pelo Cristo Redentor no topo do Corcovado e pelo bondinho do Pão de Açúcar. Além das paisagens naturais, a cidade oferece uma cultura vibrante, com samba, gastronomia diversificada e um dos carnavais mais famosos do planeta. É o destino perfeito para quem busca sol, natureza e muita energia.",
    latitude: -22.9068,
    longitude: -43.1729,
    precoMedio: "R$ 350 / diária",
    melhorEpoca: "Setembro a Março",
  },
  {
    id: "paris",
    nome: "Paris",
    pais: "França",
    imagem: "/images/paris.webp",
    descricaoCurta:
      "A Cidade Luz encanta com a Torre Eiffel, museus históricos e cafés charmosos.",
    descricao:
      "Paris é sinônimo de romantismo, arte e história. Repleta de monumentos icônicos como a Torre Eiffel, o Museu do Louvre e a Catedral de Notre-Dame, a capital francesa também é famosa por seus cafés de esquina, padarias artesanais e passeios à beira do Rio Sena. Uma viagem a Paris combina cultura refinada com a atmosfera acolhedora de suas ruas de paralelepípedo.",
    latitude: 48.8566,
    longitude: 2.3522,
    precoMedio: "€ 140 / diária",
    melhorEpoca: "Abril a Junho e Setembro a Outubro",
  },
  {
    id: "nova-york",
    nome: "Nova York",
    pais: "Estados Unidos",
    imagem: "/images/nova-york.webp",
    descricaoCurta:
      "A cidade que nunca dorme, com arranha-céus, Broadway e o icônico Central Park.",
    descricao:
      "Nova York é um dos centros culturais e financeiros mais importantes do mundo. Com atrações como a Times Square, a Estátua da Liberdade, o Central Park e os espetáculos da Broadway, a cidade oferece experiências para todos os gostos. Sua diversidade gastronômica e cultural faz de cada bairro uma nova aventura para os visitantes.",
    latitude: 40.7128,
    longitude: -74.006,
    precoMedio: "US$ 220 / diária",
    melhorEpoca: "Abril a Junho e Setembro a Novembro",
  },
  {
    id: "machu-picchu",
    nome: "Machu Picchu",
    pais: "Peru",
    imagem: "/images/machu-picchu.webp",
    descricaoCurta:
      "Cidadela inca cercada por montanhas, uma das Sete Maravilhas do Mundo Moderno.",
    descricao:
      "Localizada nos Andes peruanos, Machu Picchu é uma antiga cidadela inca envolta em mistério e beleza natural. Cercada por montanhas verdejantes e nuvens baixas, é considerada uma das Sete Maravilhas do Mundo Moderno. A trilha até o local é uma experiência marcante para amantes de trekking, história e paisagens de tirar o fôlego.",
    latitude: -13.1631,
    longitude: -72.545,
    precoMedio: "US$ 90 / diária",
    melhorEpoca: "Maio a Setembro",
  },
  {
    id: "quioto",
    nome: "Quioto",
    pais: "Japão",
    imagem: "/images/quioto.webp",
    descricaoCurta:
      "Templos milenares, jardins zen e as tradicionais cerejeiras em flor.",
    descricao:
      "Quioto foi a capital do Japão por mais de mil anos e preserva até hoje templos, santuários e jardins tradicionais. É famosa pelas cerejeiras em flor na primavera, pelos gueixas do bairro de Gion e pela arquitetura tradicional japonesa. Uma viagem a Quioto é uma imersão profunda na cultura e na história do Japão.",
    latitude: 35.0116,
    longitude: 135.7681,
    precoMedio: "¥ 12.000 / diária",
    melhorEpoca: "Março a Maio e Outubro a Novembro",
  },
  {
    id: "santorini",
    nome: "Santorini",
    pais: "Grécia",
    imagem: "/images/santorini.webp",
    descricaoCurta:
      "Casas brancas, cúpulas azuis e um dos pores do sol mais famosos do mundo.",
    descricao:
      "Santorini é uma ilha grega no Mar Egeu, conhecida por suas casas brancas com cúpulas azuis construídas sobre penhascos vulcânicos. A vila de Oia é o ponto perfeito para admirar o pôr do sol, enquanto as praias de areia vulcânica e os vinhedos locais completam a experiência de uma das ilhas mais fotografadas do mundo.",
    latitude: 36.3932,
    longitude: 25.4615,
    precoMedio: "€ 160 / diária",
    melhorEpoca: "Maio a Outubro",
  },
];

export function getDestinoById(id: string): Destino | undefined {
  return destinos.find((destino) => destino.id === id);
}
