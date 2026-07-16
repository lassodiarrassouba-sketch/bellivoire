const regions = {
  nord: {
    number: "01",
    place: "KORHOGO • BOUNDIALI • SAVANES",
    title: "Savanes, rythmes<br>et savoir-faire",
    description: "Au Nord, les paysages de savane accompagnent une culture de la transmission, du tissage, de la musique et des architectures qui racontent les peuples sénoufo et malinké.",
    tags: ["Toiles de Korhogo", "Balafon", "Architecture en terre"],
    peoples: "Sénoufo, Malinké, Tagbana",
    landscapes: "Savanes, plaines, forêts claires",
    heritage: "Toiles, balafon, mosquées en terre",
    flavours: "Riz, maïs, tô, viandes grillées",
    cities: [
      ["Korhogo", "Arts sénoufo, tissage et toiles peintes"],
      ["Odienné", "Culture malinké et paysages du Denguélé"],
      ["Ferkessédougou", "Ville-carrefour des savanes du Nord"],
      ["Boundiali", "Terres sénoufo, artisanat et agriculture"]
    ]
  },
  centre: {
    number: "02",
    place: "BOUAKÉ • YAMOUSSOUKRO • VALLÉE DU BANDAMA",
    title: "Traditions Akan<br>et terres centrales",
    description: "Au Centre, villes et villages se rencontrent autour de savoir-faire, de danses et de symboles qui occupent une place essentielle dans les cultures baoulé et voisines.",
    tags: ["Danse Goli", "Orfèvrerie", "Sculpture"],
    peoples: "Baoulé, Gouro, Tagbana",
    landscapes: "Plateaux, savanes, vallées",
    heritage: "Zaouli, Goli, tissage et sculpture",
    flavours: "Foutou, igname, sauces graine",
    cities: [
      ["Yamoussoukro", "Capitale politique, monuments et mémoire nationale"],
      ["Bouaké", "Grand carrefour commercial et culturel"],
      ["Dimbokro", "Ville du N’Zi et héritages baoulé"],
      ["Katiola", "Poterie, artisanat et traditions tagbana"]
    ]
  },
  est: {
    number: "03",
    place: "ABENGOUROU • BONDOUKOU • INDÉNIÉ",
    title: "Royaumes, échanges<br>et héritages",
    description: "À l’Est, l’héritage des peuples agni, abron et koulango dialogue avec les anciennes routes d’échanges, les cérémonies et un riche artisanat.",
    tags: ["Héritage Akan", "Cérémonies", "Tissage"],
    peoples: "Agni, Abron, Koulango",
    landscapes: "Forêts, plantations, savanes",
    heritage: "Royaumes, fêtes de l’igname, artisanat",
    flavours: "Igname, plantain, sauces locales",
    cities: [
      ["Abengourou", "Ville royale de l’Indénié et traditions agni"],
      ["Bondoukou", "Quartiers anciens et diversité culturelle"],
      ["Aboisso", "Patrimoine du Sud-Comoé et culture sanwi"],
      ["Agnibilékrou", "Fêtes de l’igname et terroirs du Djuablin"]
    ]
  },
  ouest: {
    number: "04",
    place: "MAN • GUIGLO • TONKPI",
    title: "Montagnes, forêts<br>et masques",
    description: "À l’Ouest, reliefs spectaculaires et forêts denses entourent des traditions où les masques, les danses et la sculpture occupent une place majeure.",
    tags: ["Masques Dan", "Mont Nimba", "Danses Wê"],
    peoples: "Dan, Wê, Toura",
    landscapes: "Montagnes, cascades, forêts",
    heritage: "Masques, ponts de lianes, artisanat",
    flavours: "Riz, sauces de feuilles, foutou",
    cities: [
      ["Man", "Montagnes, cascades et cultures des masques"],
      ["Daloa", "Carrefour commercial et terres du cacao"],
      ["Gagnoa", "Grand foyer de la culture bété"],
      ["Guiglo", "Ville forestière et traditions wê"]
    ]
  },
  sud: {
    number: "05",
    place: "ABIDJAN • GRAND-BASSAM • LITTORAL",
    title: "Lagunes, littoral<br>et métissages",
    description: "Au Sud, lagunes et océan dessinent un espace ouvert où patrimoine architectural, traditions lagunaires et créativité contemporaine se côtoient.",
    tags: ["Traditions lagunaires", "Grand-Bassam", "Arts urbains"],
    peoples: "Atchan, Abouré, N’zima",
    landscapes: "Lagunes, littoral, mangroves",
    heritage: "Grand-Bassam, fêtes, création urbaine",
    flavours: "Attiéké, poisson braisé, alloco",
    cities: [
      ["Abidjan", "Métropole lagunaire et capitale culturelle"],
      ["Grand-Bassam", "Ville historique, culture n’zima et océan"],
      ["San-Pédro", "Grand port, plages et paysages du Sud-Ouest"],
      ["Sassandra", "Ville côtière, patrimoine et embouchure du fleuve"]
    ]
  }
};

const cityProfiles = {
  abidjan: {
    name: "Abidjan", code: "ABJ", zone: "Sud • District des Lagunes", tagline: "Lagune, créativité et mouvement", color: "#247d83",
    intro: "Abidjan est une métropole de contrastes où les tours du Plateau, les quartiers résidentiels, les marchés populaires et la forêt du Banco se répondent autour de la lagune Ébrié.",
    story: "Son identité se découvre quartier par quartier. Le Plateau concentre les grands repères architecturaux, Treichville cultive une forte tradition de spectacles et de marchés, Cocody rassemble musées et lieux culturels, tandis que Yopougon incarne une vie populaire et musicale particulièrement dynamique.",
    facts: [["Statut", "Capitale économique"], ["Paysage", "Lagune et forêt urbaine"], ["Identité", "Atchan et cultures urbaines"], ["Ambiance", "Créative et cosmopolite"]],
    places: ["Musée des Civilisations de Côte d’Ivoire", "Parc national du Banco", "Plateau et cathédrale Saint-Paul", "Palais de la Culture et marchés de Treichville"],
    culture: ["Scènes du zouglou, du coupé-décalé et des musiques actuelles", "Nouchi, humour, mode et création numérique", "Traditions atchan autour de la lagune", "Galeries, festivals et spectacles à l’année"],
    flavours: ["Garba et attiéké-poisson", "Alloco, grillades et plats de maquis", "Poissons et crustacés de la lagune", "Balade entre marchés, maquis et restaurants contemporains"],
    nearby: ["Bingerville et son jardin botanique", "Grand-Bassam et son patrimoine historique", "Jacqueville et les paysages lagunaires"],
    tip: "Pour comprendre Abidjan, prévoyez plusieurs étapes plutôt qu’une seule visite : chaque quartier possède son rythme, son architecture et sa façon de vivre."
  },
  yamoussoukro: {
    name: "Yamoussoukro", code: "YAK", zone: "Centre • District autonome", tagline: "Monuments et grands horizons", color: "#b98343",
    intro: "Capitale politique de la Côte d’Ivoire, Yamoussoukro se distingue par ses grandes perspectives, ses édifices monumentaux et une atmosphère plus paisible que celle d’Abidjan.",
    story: "La ville porte fortement la mémoire du président Félix Houphouët-Boigny et s’inscrit dans un territoire baoulé. Entre monuments, lacs, jardins et villages proches, elle permet d’aborder à la fois l’histoire nationale et les savoir-faire du Centre.",
    facts: [["Statut", "Capitale politique"], ["Paysage", "Plateaux, lacs et avenues"], ["Identité", "Territoire baoulé"], ["Ambiance", "Monumentale et calme"]],
    places: ["Basilique Notre-Dame de la Paix", "Fondation Félix Houphouët-Boigny", "Lacs et jardins du centre-ville", "Grandes avenues et architecture institutionnelle"],
    culture: ["Mémoire de la construction de l’État ivoirien", "Traditions et artisanat baoulé", "Sculpture, tissage et orfèvrerie dans les environs", "Rencontres culturelles et cérémonies communautaires"],
    flavours: ["Foutou d’igname ou de banane", "Sauces graine, claire et arachide", "Poissons et viandes en sauce", "Découverte des produits vivriers du Centre"],
    nearby: ["Toumodi et ses terroirs", "Bomizambo et les savoir-faire du tissage", "Tiébissou et les paysages du Bélier"],
    tip: "Commencez tôt pour profiter de la lumière sur les monuments, puis consacrez l’après-midi aux villages et savoir-faire des environs."
  },
  bouake: {
    name: "Bouaké", code: "BKE", zone: "Centre • Région du Gbêkê", tagline: "Le grand carrefour du pays", color: "#bb6443",
    intro: "Située au centre du territoire, Bouaké est une ville de circulation, de commerce et de brassage. Elle relie naturellement le Nord, le Sud, l’Est et l’Ouest.",
    story: "Son dynamisme se lit dans ses marchés, ses gares, ses quartiers animés et son rôle de centre universitaire. La culture baoulé y dialogue avec des communautés venues de nombreuses régions, créant une identité urbaine ouverte et conviviale.",
    facts: [["Région", "Gbêkê"], ["Rôle", "Carrefour national"], ["Identité", "Baoulé et métissée"], ["Ambiance", "Commerçante et populaire"]],
    places: ["Marchés et rues commerçantes du centre", "Place de la Paix", "Cathédrale Sainte-Thérèse", "Ateliers d’artisans et espaces culturels"],
    culture: ["Danses et expressions du pays baoulé", "Grande diversité linguistique et communautaire", "Musique populaire et vie étudiante", "Commerce des pagnes, bijoux et productions artisanales"],
    flavours: ["Foutou et sauces du Centre", "Igname, riz et grillades", "Cuisine de rue autour des marchés", "Festival et initiatives autour de la cuisine ivoirienne"],
    nearby: ["Sakassou et l’histoire du royaume baoulé", "Katiola et ses traditions de poterie", "Yamoussoukro au sud de la ville"],
    tip: "Le marché et les quartiers commerçants sont les meilleurs points de départ pour ressentir le rôle de carrefour de Bouaké."
  },
  korhogo: {
    name: "Korhogo", code: "KGO", zone: "Nord • Région du Poro", tagline: "Arts sénoufo et paysages de savane", color: "#c79446",
    intro: "Korhogo est la grande porte culturelle du Nord ivoirien. La ville et ses villages proches sont réputés pour le tissage, les toiles peintes, la sculpture et la poterie.",
    story: "Le patrimoine sénoufo s’exprime dans les gestes des artisans, la musique, les formes sculptées et les traditions communautaires. Les excursions autour de la ville permettent d’aller à la rencontre d’ateliers spécialisés tout en découvrant la savane.",
    facts: [["Région", "Poro"], ["Paysage", "Savane et reliefs rocheux"], ["Identité", "Sénoufo"], ["Savoir-faire", "Tissage, toile et sculpture"]],
    places: ["Musée Péléforo Gbon Coulibaly", "Village de tisserands de Waraniéné", "Mont Korhogo", "Ateliers de toiles, poterie et sculpture des villages voisins"],
    culture: ["Toiles de Korhogo aux motifs narratifs", "Tissage en bandes et fabrication de pagnes", "Balafon, danses et patrimoine musical", "Sculptures et objets liés aux traditions sénoufo"],
    flavours: ["Riz, maïs et mil", "Tô accompagné de sauces locales", "Viandes grillées et produits de la savane", "Visite des marchés de produits et d’artisanat"],
    nearby: ["Waraniéné pour le tissage", "Fakaha et les toiles peintes", "Niofoin, Ferkessédougou et Kong"],
    tip: "Privilégiez une visite accompagnée des villages d’artisans : elle permet de comprendre les étapes de fabrication et de respecter les usages locaux."
  },
  "san-pedro": {
    name: "San-Pédro", code: "SPY", zone: "Sud-Ouest • Bas-Sassandra", tagline: "Port, forêt et océan", color: "#287a91",
    intro: "San-Pédro est une grande ville portuaire ouverte sur l’Atlantique. Son paysage associe collines, plages, activités maritimes et routes menant vers les forêts du Sud-Ouest.",
    story: "La ville joue un rôle économique majeur tout en servant de point de départ vers Grand-Béréby, les plages de Monogaga et les espaces naturels du Bas-Sassandra. Les cultures krou et la vie du port façonnent son caractère.",
    facts: [["Région", "San-Pédro"], ["Paysage", "Baie, collines et océan"], ["Identité", "Cultures krou"], ["Rôle", "Grande ville portuaire"]],
    places: ["Front de mer et plages urbaines", "Points de vue sur la baie et le port", "Marchés de poissons et produits locaux", "Quartiers construits entre collines et littoral"],
    culture: ["Traditions des peuples krou du Sud-Ouest", "Vie maritime et mémoire des villages côtiers", "Danses et musiques régionales", "Rencontres entre populations venues de tout le pays"],
    flavours: ["Poissons et fruits de mer", "Attiéké accompagné de poisson braisé", "Riz et sauces du Sud-Ouest", "Excursions balnéaires et repas en bord de mer"],
    nearby: ["Grand-Béréby et sa baie", "Plages de Monogaga", "Parc national de Taï et route de Sassandra"],
    tip: "San-Pédro se découvre aussi depuis ses environs : gardez au moins une journée pour le littoral de Grand-Béréby ou de Monogaga."
  },
  man: {
    name: "Man", code: "MAN", zone: "Ouest • Région du Tonkpi", tagline: "Montagnes, cascades et masques", color: "#4f7659",
    intro: "Entourée de reliefs, Man offre l’un des paysages urbains les plus spectaculaires du pays. La Dent de Man, le mont Tonkoui et les cascades forment son horizon naturel.",
    story: "La ville est un point d’entrée vers les cultures dan, toura et wê. Les masques, les danses, le travail du bois et les ponts de lianes appartiennent à un patrimoine vivant qui demande une découverte respectueuse et contextualisée.",
    facts: [["Région", "Tonkpi"], ["Paysage", "Montagnes et forêt"], ["Identité", "Dan, Toura et Wê"], ["Expérience", "Nature et culture"]],
    places: ["Dent de Man", "Mont Tonkoui", "Cascades proches de la ville", "Ponts de lianes dans les villages environnants"],
    culture: ["Masques et performances dansées", "Sculpture sur bois et artisanat", "Récits et traditions des communautés dan et wê", "Fêtes locales liées aux cycles communautaires"],
    flavours: ["Riz et sauces de feuilles", "Foutou et produits forestiers", "Café et cacao des montagnes", "Randonnée, découverte des cascades et marchés"],
    nearby: ["Biankouma et les villages du Tonkpi", "Danané et la route des frontières", "Réserve naturelle du mont Nimba"],
    tip: "Pour les cascades, les ponts de lianes et les villages, faites-vous accompagner par un guide local et demandez toujours avant de photographier une cérémonie."
  },
  daloa: {
    name: "Daloa", code: "DLA", zone: "Centre-Ouest • Haut-Sassandra", tagline: "Carrefour des terres du cacao", color: "#597d4a",
    intro: "Daloa, souvent appelée la cité des antilopes, est un grand centre commercial du Centre-Ouest et un passage essentiel dans la boucle du cacao et du café.",
    story: "La ville rassemble des influences bété, gouro et de nombreuses communautés installées autour des activités agricoles et commerciales. Son intérêt réside dans cette vie de carrefour et dans l’accès aux terroirs forestiers environnants.",
    facts: [["Région", "Haut-Sassandra"], ["Paysage", "Forêt et plantations"], ["Identité", "Bété, Gouro et métissée"], ["Rôle", "Commerce agricole"]],
    places: ["Grands marchés et rues commerçantes", "Ateliers et boutiques d’artisanat", "Places et quartiers animés du centre", "Paysages de plantations autour de la ville"],
    culture: ["Danses et traditions bété et gouro", "Brassage de langues et de communautés", "Vie des marchés et culture du commerce", "Transmission orale et musiques du Centre-Ouest"],
    flavours: ["Foutou, riz et sauces de feuilles", "Produits vivriers des zones forestières", "Café, cacao et fruits tropicaux", "Immersion dans les marchés et villages agricoles"],
    nearby: ["Issia et les paysages forestiers", "Vavoua et le pays gouro", "Zoukougbeu et les terroirs du Haut-Sassandra"],
    tip: "À Daloa, l’expérience la plus révélatrice passe par les marchés et par une sortie vers les plantations ou villages du Haut-Sassandra."
  },
  gagnoa: {
    name: "Gagnoa", code: "GAG", zone: "Centre-Ouest • Région du Gôh", tagline: "Mémoire bété et terres fertiles", color: "#80563c",
    intro: "Gagnoa est l’un des grands foyers de la culture bété. La ville est entourée de terres agricoles où cacao, café, manioc, banane et cultures vivrières structurent la vie quotidienne.",
    story: "Son identité s’exprime dans la langue, les chants, les danses et la place accordée aux récits. L’environnement rural proche permet de relier la découverte culturelle au travail de la terre et aux produits du terroir.",
    facts: [["Région", "Gôh"], ["Paysage", "Forêt et agriculture"], ["Identité", "Culture bété"], ["Ambiance", "Terrienne et conviviale"]],
    places: ["Marchés et centre-ville", "Cathédrale Sainte-Anne", "Ateliers et espaces de rencontres culturelles", "Routes agricoles et villages des environs"],
    culture: ["Chants, danses et traditions bété", "Importance de l’oralité et des récits", "Artisanat et pratiques communautaires", "Célébrations et rencontres familiales"],
    flavours: ["Foutou et sauces locales", "Manioc, plantain et produits vivriers", "Café, cacao et fruits", "Découverte des marchés et de la cuisine familiale"],
    nearby: ["Ouragahio et les villages du Gôh", "Oumé et les territoires voisins", "Lakota et la route vers le littoral"],
    tip: "La richesse de Gagnoa se comprend mieux au contact des habitants et des villages proches qu’à travers une visite uniquement monumentale."
  },
  "grand-bassam": {
    name: "Grand-Bassam", code: "GBS", zone: "Sud-Est • Région du Sud-Comoé", tagline: "Histoire, architecture et océan", color: "#d07742",
    intro: "Grand-Bassam associe une ville historique inscrite au patrimoine mondial, le village N’zima, la lagune et l’océan. C’est un lieu majeur pour comprendre l’histoire urbaine du pays.",
    story: "Le Quartier France conserve des bâtiments administratifs, commerciaux et résidentiels hérités de l’époque coloniale. À proximité, le village N’zima rappelle que Grand-Bassam est aussi une ville de traditions vivantes, notamment autour de l’Abissa.",
    facts: [["Région", "Sud-Comoé"], ["Statut", "Patrimoine mondial UNESCO"], ["Identité", "N’zima et plurielle"], ["Paysage", "Lagune et océan"]],
    places: ["Quartier France et anciennes maisons", "Musée national du Costume", "Village N’zima", "Plage, pont et berges lagunaires"],
    culture: ["Abissa et traditions n’zima", "Histoire de la première capitale coloniale", "Costumes, textiles et patrimoine architectural", "Ateliers d’artistes et vie culturelle contemporaine"],
    flavours: ["Poissons et fruits de mer", "Attiéké et poisson braisé", "Cuisine n’zima et produits de la lagune", "Marche patrimoniale suivie d’un repas en bord de mer"],
    nearby: ["Moossou et les traditions abouré", "Bonoua et le Popo Carnaval", "Assinie et les paysages de lagune"],
    tip: "Parcourez le Quartier France à pied avec un guide patrimonial, puis rejoignez le village N’zima afin de comprendre les différentes mémoires de la ville."
  },
  bondoukou: {
    name: "Bondoukou", code: "BDK", zone: "Nord-Est • Région du Gontougo", tagline: "Ville ancienne et carrefour de cultures", color: "#a75d3d",
    intro: "Bondoukou est une ancienne ville de commerce et d’échanges, connue pour ses nombreux édifices religieux et pour la diversité des communautés qui ont façonné son histoire.",
    story: "Les traditions abron, koulango et mandingues s’y rencontrent. Les quartiers anciens, les mosquées et les autorités coutumières témoignent d’une ville située depuis longtemps au croisement de routes reliant les mondes forestiers et sahéliens.",
    facts: [["Région", "Gontougo"], ["Paysage", "Transition forêt-savane"], ["Identité", "Abron, Koulango et Mandingue"], ["Héritage", "Commerce et architecture"]],
    places: ["Quartiers anciens de Bondoukou", "Mosquées et architecture en terre", "Marchés et lieux de pouvoir coutumier", "Résidences et traces des anciennes routes commerciales"],
    culture: ["Traditions de cour abron", "Tissage et artisanat régional", "Pluralité religieuse et communautaire", "Fêtes, musiques et récits du Zanzan"],
    flavours: ["Igname et sauces de l’Est", "Céréales et produits de savane", "Viandes, grillades et cuisine de marché", "Parcours historique dans les anciens quartiers"],
    nearby: ["Mosquée historique de Sorobango", "Soko et ses singes associés aux traditions locales", "Bouna et les paysages du Zanzan"],
    tip: "Un guide connaissant l’histoire des quartiers et des communautés est particulièrement utile pour lire le patrimoine discret de Bondoukou."
  },
  abengourou: {
    name: "Abengourou", code: "ABG", zone: "Est • Indénié-Djuablin", tagline: "Ville royale de l’Indénié", color: "#8e6543",
    intro: "Abengourou est un centre majeur de la culture agni et de l’histoire du royaume de l’Indénié. La ville est entourée de plantations de cacao et de café.",
    story: "L’autorité royale, les fêtes de l’igname, les récits de cour et les savoir-faire akan forment une part importante de son identité. Le développement agricole a également fait de la ville un pôle commercial de l’Est ivoirien.",
    facts: [["Région", "Indénié-Djuablin"], ["Paysage", "Forêt et plantations"], ["Identité", "Agni"], ["Héritage", "Royauté et fête de l’igname"]],
    places: ["Palais royal de l’Indénié", "Marchés et centre-ville", "Espaces de mémoire et de culture agni", "Plantations et villages environnants"],
    culture: ["Fête de l’igname et calendrier traditionnel", "Institutions et récits de la royauté agni", "Orfèvrerie, parures et symboles akan", "Danses, langues et traditions de l’Est"],
    flavours: ["Igname, plantain et foutou", "Sauces graine et plats de terroir", "Café, cacao et fruits", "Rencontre avec les producteurs et marchés locaux"],
    nearby: ["Agnibilékrou et le Djuablin", "Niablé, proche de la frontière ghanéenne", "Bettié et les paysages forestiers"],
    tip: "Renseignez-vous localement sur les conditions de visite des lieux royaux et sur le calendrier des fêtes traditionnelles."
  },
  odienne: {
    name: "Odienné", code: "ODN", zone: "Nord-Ouest • Région du Kabadougou", tagline: "Culture mandingue et grands espaces", color: "#aa7c3c",
    intro: "Odienné est la principale ville du Denguélé, au Nord-Ouest du pays. Elle ouvre sur de vastes paysages de savane et sur un patrimoine profondément marqué par la culture malinké.",
    story: "Les routes anciennes, la musique mandingue, l’artisanat et les traditions orales donnent à la région une identité particulière. La ville constitue aussi un point de départ vers Samatiguila et les territoires frontaliers du Nord-Ouest.",
    facts: [["Région", "Kabadougou"], ["Paysage", "Savane et reliefs"], ["Identité", "Malinké"], ["Héritage", "Routes et culture mandingue"]],
    places: ["Mosquée et quartiers historiques", "Marché central et ateliers d’artisans", "Paysages de savane autour de la ville", "Espaces de musique et de rencontres communautaires"],
    culture: ["Musiques et traditions orales mandingues", "Tissage, travail du cuir et artisanat", "Récits liés aux anciennes routes du Nord-Ouest", "Fêtes communautaires et hospitalité locale"],
    flavours: ["Riz, fonio et céréales locales", "Sauces et grillades du Nord-Ouest", "Produits de l’élevage et de la savane", "Marchés, artisanat et excursions culturelles"],
    nearby: ["Samatiguila et sa mosquée historique", "Minignan et les paysages du Folon", "Gbéléban et les routes frontalières"],
    tip: "Les distances sont importantes dans le Denguélé : préparez vos excursions à l’avance et privilégiez un accompagnement local."
  }
};

const panel = document.querySelector("#region-panel");
const art = document.querySelector("#region-art");
const place = document.querySelector("#region-place");
const title = document.querySelector("#region-title");
const description = document.querySelector("#region-description");
const tags = document.querySelector("#region-tags");
const number = document.querySelector("#region-number");
const peoples = document.querySelector("#region-peoples");
const landscapes = document.querySelector("#region-landscapes");
const heritage = document.querySelector("#region-heritage");
const flavours = document.querySelector("#region-flavours");
const regionCities = document.querySelector("#region-cities");
const tabs = [...document.querySelectorAll(".region-tab")];

function selectRegion(regionKey) {
  const region = regions[regionKey];
  if (!region) return;

  panel.animate(
    [{ opacity: 1, transform: "translateY(0)" }, { opacity: .35, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 360, easing: "ease-out" }
  );

  place.textContent = region.place;
  title.innerHTML = region.title;
  description.textContent = region.description;
  number.textContent = region.number;
  peoples.textContent = region.peoples;
  landscapes.textContent = region.landscapes;
  heritage.textContent = region.heritage;
  flavours.textContent = region.flavours;
  regionCities.replaceChildren(...region.cities.map(([cityName, cityDescription]) => {
    const item = document.createElement("li");
    const name = document.createElement("strong");
    const summary = document.createElement("span");
    name.textContent = cityName;
    summary.textContent = cityDescription;
    item.append(name, summary);
    return item;
  }));
  tags.replaceChildren(...region.tags.map((tag) => {
    const chip = document.createElement("li");
    chip.textContent = tag;
    return chip;
  }));

  art.className = `region-art region-art--${regionKey}`;
  tabs.forEach((tab) => {
    const isSelected = tab.dataset.region === regionKey;
    tab.classList.toggle("active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectRegion(tab.dataset.region));
  tab.addEventListener("keydown", (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    next.focus();
    selectRegion(next.dataset.region);
  });
});

const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const sections = [...document.querySelectorAll("header[id], main section[id]")];
const mainNavLinks = [...document.querySelectorAll(".nav-link")];
const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    mainNavLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });
sections.forEach((section) => activeSectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const filterButtons = [...document.querySelectorAll(".filter-button")];
const knowledgeCards = [...document.querySelectorAll(".knowledge-card")];
const cultureSearch = document.querySelector("#culture-search");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";

function normalizeText(value) {
  return value.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filterKnowledge() {
  const query = normalizeText(cultureSearch.value.trim());
  let visibleCount = 0;

  knowledgeCards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchableText = normalizeText(`${card.dataset.search} ${card.textContent}`);
    const matchesQuery = !query || searchableText.includes(query);
    const isVisible = matchesCategory && matchesQuery;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    filterKnowledge();
  });
});
cultureSearch.addEventListener("input", filterKnowledge);

const cityFilterButtons = [...document.querySelectorAll(".city-filter")];
const cityCards = [...document.querySelectorAll(".city-card")];
const citySearch = document.querySelector("#city-search");
const cityResult = document.querySelector("#city-result");
const cityEmpty = document.querySelector("#city-empty");
let activeCityFilter = "all";

function filterCities() {
  const query = normalizeText(citySearch.value.trim());
  let visibleCount = 0;

  cityCards.forEach((card) => {
    const matchesZone = activeCityFilter === "all" || card.dataset.cityZone === activeCityFilter;
    const searchableText = normalizeText(`${card.dataset.citySearch} ${card.textContent}`);
    const matchesQuery = !query || searchableText.includes(query);
    const isVisible = matchesZone && matchesQuery;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  cityResult.textContent = `${visibleCount} ville${visibleCount > 1 ? "s" : ""} présentée${visibleCount > 1 ? "s" : ""}`;
  cityEmpty.hidden = visibleCount > 0;
}

cityFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCityFilter = button.dataset.cityFilter;
    cityFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    filterCities();
  });
});
citySearch.addEventListener("input", filterCities);

const cityDialog = document.querySelector("#city-dialog");
const cityDialogClose = document.querySelector("#city-dialog-close");
const cityDialogHero = document.querySelector("#city-dialog-hero");
const cityDialogZone = document.querySelector("#city-dialog-zone");
const cityDialogTitle = document.querySelector("#city-dialog-title");
const cityDialogTagline = document.querySelector("#city-dialog-tagline");
const cityDialogCode = document.querySelector("#city-dialog-code");
const cityDialogIntro = document.querySelector("#city-dialog-intro");
const cityDialogStory = document.querySelector("#city-dialog-story");
const cityDialogFacts = document.querySelector("#city-dialog-facts");
const cityDialogPlaces = document.querySelector("#city-dialog-places");
const cityDialogCulture = document.querySelector("#city-dialog-culture");
const cityDialogFlavours = document.querySelector("#city-dialog-flavours");
const cityDialogNearby = document.querySelector("#city-dialog-nearby");
const cityDialogTip = document.querySelector("#city-dialog-tip");
let cityDialogTrigger = null;

function createListItems(values) {
  return values.map((value) => {
    const item = document.createElement("li");
    item.textContent = value;
    return item;
  });
}

function openCityProfile(cityKey, trigger) {
  const profile = cityProfiles[cityKey];
  if (!profile) return;

  cityDialogTrigger = trigger;
  cityDialogHero.style.setProperty("--dialog-bg", profile.color);
  cityDialogZone.textContent = profile.zone;
  cityDialogTitle.textContent = profile.name;
  cityDialogTagline.textContent = profile.tagline;
  cityDialogCode.textContent = profile.code;
  cityDialogIntro.textContent = profile.intro;
  cityDialogStory.textContent = profile.story;
  cityDialogTip.textContent = profile.tip;

  cityDialogFacts.replaceChildren(...profile.facts.map(([label, value]) => {
    const group = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    term.textContent = label;
    detail.textContent = value;
    group.append(term, detail);
    return group;
  }));
  cityDialogPlaces.replaceChildren(...createListItems(profile.places));
  cityDialogCulture.replaceChildren(...createListItems(profile.culture));
  cityDialogFlavours.replaceChildren(...createListItems(profile.flavours));
  cityDialogNearby.replaceChildren(...createListItems(profile.nearby));

  cityDialog.showModal();
  cityDialog.scrollTop = 0;
}

cityCards.forEach((card) => {
  const cityKey = card.dataset.cityKey;
  const profile = cityProfiles[cityKey];
  if (!profile) return;
  const button = document.createElement("button");
  button.className = "city-card__open";
  button.type = "button";
  button.innerHTML = `Découvrir ${profile.name} <span aria-hidden="true">→</span>`;
  button.addEventListener("click", () => openCityProfile(cityKey, button));
  card.querySelector(".city-card__content").append(button);
});

cityDialogClose.addEventListener("click", () => cityDialog.close());
cityDialog.addEventListener("click", (event) => {
  if (event.target === cityDialog) cityDialog.close();
});
cityDialog.addEventListener("close", () => {
  cityDialogTrigger?.focus();
});

const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Merci ! Votre inscription sera activée lors de la connexion au service d’envoi.";
  newsletterForm.reset();
});
