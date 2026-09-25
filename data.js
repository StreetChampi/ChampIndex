/* ============================================================
   CHAMPI — DONNÉES DE LA CLÉ
   Ce fichier est la partie éditable du projet.
   ============================================================ */

window.CHAMPI_DATA = {
  start: "q_ring",

  nodes: {

    /* ---------------- ENTREE : ANNEAU PUIS VOLVE ---------------- */

    q_ring: {
      question: "Le pied porte-t-il un anneau (une membrane en collerette autour du pied) ?",
      allowUnknown: true,
      options: [
        { label: "Oui", next: "q_volva_after_ring_yes" },
        { label: "Non", next: "q_volva_after_ring_no" },
      ],
    },

    q_volva_after_ring_yes: {
      question: "Vois-tu aussi, à la base du pied, une volve nette (sac ou bourrelet), ou des restes floconneux, écailleux ou verruqueux qui pourraient en être les vestiges ?",
      hint: "Creuse légèrement la terre si besoin. C'est un signe important : plusieurs amanites dangereuses portent aussi un anneau.",
      allowUnknown: true,
      options: [
        { label: "Oui, l'un ou l'autre", next: "q_amanite_volva_type" },
        { label: "Non, rien de tout ça", next: "q_ring_separation" },
      ],
    },
    q_volva_after_ring_no: {
      question: "Vois-tu, à la base du pied, une volve nette (sac membraneux ou gros bourrelet) ?",
      hint: "Creuse légèrement la terre avant de conclure à son absence.",
      allowUnknown: true,
      options: [
        { label: "Oui", next: "q_volva_gills" },
        { label: "Non", next: "q_noring_separation" },
      ],
    },
    q_volva_gills: {
      question: "Les lames sont-elles blanches, ou plutôt roses ?",
      options: [
        { label: "Blanches", next: "q_amanite_volva_type" },
        { label: "Roses", next: "q_volvaire_texture" },
      ],
    },
    q_volvaire_texture: {
      question: "Le chapeau est-il nettement gluant ou visqueux, en milieu rudéral (jardins, décombres, champs, bords de route, jachères) plutôt qu'en forêt ?",
      options: [
        { label: "Oui", next: { result: "volvaire_gluante" } },
        { label: "Non", next: { result: "volvaire" } },
      ],
    },

    q_ring_separation: {
      question: "Le chapeau se sépare-t-il facilement du pied, un peu comme si on le dévissait ?",
      allowUnknown: true,
      options: [
        { label: "Oui, il se détache nettement", next: "q_ring_sep_scales" },
        { label: "Non, pied et chapeau ne font qu'un", next: "q_ring_fused_texture" },
      ],
    },
    q_ring_sep_scales: {
      question: "Le chapeau porte-t-il des écailles nettes ?",
      options: [
        { label: "Oui", next: "q_lepiote_size" },
        { label: "Non, chapeau plutôt lisse", next: "q_agaric_flesh" },
      ],
    },

    q_ring_fused_texture: {
      question: "Le chapeau est-il nettement visqueux ou gluant au toucher ?",
      options: [
        { label: "Oui", next: "q_ring_fused_visc_color" },
        { label: "Non, chapeau sec", next: "q_ring_fused_dry_habitat" },
      ],
    },
    q_ring_fused_visc_color: {
      question: "Les lames sont-elles brun violacé à noirâtres, ou plutôt blanches ?",
      options: [
        { label: "Brun violacé à noirâtres", next: { result: "strophaire" } },
        { label: "Blanches", next: { result: "mucidule" } },
      ],
    },

    q_ring_fused_dry_habitat: {
      question: "Le champignon pousse-t-il sur du bois (souche, tronc, racine) ?",
      options: [
        { label: "Oui, sur du bois", next: "q_ring_fused_dry_wood" },
        { label: "Non, à même le sol", next: "q_ring_fused_dry_soil" },
      ],
    },
    q_ring_fused_dry_wood: {
      question: "Comment décrirais-tu la surface du chapeau ?",
      options: [
        { label: "Écailleux, souvent en touffes", next: { result: "pholiote" } },
        { label: "Finement mèché, couleur miel, grosses touffes à la base d'un arbre", next: { result: "armillaire" } },
        { label: "Fibrilleux, couleurs vives orangées à jaunes", next: { result: "gymnopile" } },
        { label: "Lisse, change nettement de couleur en séchant", next: { result: "kuehneromyces" } },
      ],
    },
    q_ring_fused_dry_soil: {
      question: "Le chapeau est-il petit, granuleux ou comme poudré, l'espèce poussant isolée ?",
      options: [
        { label: "Oui", next: "q_cystoderme_color" },
        { label: "Non", next: "q_ring_fused_dry_soil2" },
      ],
    },
    q_ring_fused_dry_soil2: {
      question: "Le chapeau a-t-il tendance à noircir et à se liquéfier avec l'âge (comme de l'encre) ?",
      options: [
        { label: "Oui", next: { result: "coprin" } },
        { label: "Non", next: "q_ring_fused_dry_soil3" },
      ],
    },
    q_ring_fused_dry_soil3: {
      question: "Le chapeau semble-t-il recouvert d'une fine poudre blanchâtre, espèce de bonne taille ?",
      options: [
        { label: "Oui", next: { result: "pholiote_ridee" } },
        { label: "Non, chapeau lisse et brun", next: { result: "agrocybe" } },
      ],
    },

    /* ---------------- SANS ANNEAU NI VOLVE ---------------- */

    q_noring_separation: {
      question: "Le chapeau se sépare-t-il facilement du pied ?",
      allowUnknown: true,
      options: [
        { label: "Oui, il se détache nettement", next: "q_noring_sep_next" },
        { label: "Non, pied et chapeau ne font qu'un", next: "q_noring_fused_latex" },
      ],
    },
    q_noring_sep_next: {
      question: "Les lames sont-elles blanches, ou plutôt roses ?",
      options: [
        { label: "Blanches", next: { result: "limacelle" } },
        { label: "Roses, souvent sur bois", next: "q_pluteus_color" },
      ],
    },

    /* ============================================================
       SOUS-CLE : PLUTÉES (jusqu'à l'espèce)
       ============================================================ */

    q_pluteus_color: {
      question: "De quelle couleur est le chapeau ?",
      hint: "Genre reconnu par ses lames libres virant au rose, sans anneau ni volve, poussant sur bois mort.",
      options: [
        { label: "Jaune vif, entièrement velouté, petit chapeau (2-5 cm)", next: { result: "pluteus_leoninus" } },
        { label: "Brun brillant et soyeux, fibrilles plus foncées au centre (8-12 cm)", next: "q_pluteus_cervinus_check" },
        { label: "Gris verdâtre (environ 8 cm)", next: { result: "pluteus_salicinus" } },
        { label: "Blanc, centre ocré et crevassé, grande espèce (jusqu'à 20 cm)", next: { result: "pluteus_patricien" } },
        { label: "Entièrement blanc, sur bois de résineux", next: { result: "pluteus_blanc" } },
        { label: "Cendré, à veines saillantes, petit (3-4 cm)", next: { result: "pluteus_cendre" } },
        { label: "Rouge vif devenant orangé", next: { result: "pluteus_rouge" } },
        { label: "Aucune de ces couleurs ne correspond bien", next: { result: "plutee" } },
      ],
    },
    q_pluteus_cervinus_check: {
      question: "L'arête des lames est-elle colorée de brun-noir, chapeau squameux, plutôt en montagne sur conifères ?",
      options: [
        { label: "Oui", next: { result: "pluteus_atromarginatus" } },
        { label: "Non, odeur nette de radis, sur bois de feuillus", next: { result: "pluteus_cervinus" } },
      ],
    },

    q_noring_fused_latex: {
      question: "Un latex (sorte de lait) s'écoule-t-il quand tu casses ou coupes une lame ?",
      hint: "Nécessite de casser un morceau du champignon.",
      allowUnknown: true,
      options: [
        { label: "Oui", next: { result: "lactaire" } },
        { label: "Non", next: "q_noring_habitat" },
      ],
    },

    q_noring_habitat: {
      question: "Le champignon pousse-t-il sur du bois (tronc, souche, branche) ?",
      options: [
        { label: "Oui, sur du bois", next: "q_noring_wood_gills" },
        { label: "Non, à même le sol", next: "q_noring_soil_next" },
      ],
    },

    /* ----- sur bois, sans anneau, sans latex ----- */

    q_noring_wood_gills: {
      question: "Le pied est-il très court, absent, ou le chapeau nettement excentré (en éventail) ?",
      options: [
        { label: "Oui", next: "q_noring_wood_excentric_size" },
        { label: "Non, pied net et central", next: "q_noring_wood_central_gills" },
      ],
    },
    q_noring_wood_excentric_size: {
      question: "L'espèce est-elle charnue et de bonne taille ?",
      options: [
        { label: "Oui", next: { result: "pleurote" } },
        { label: "Non, plutôt petite ou coriace", next: "q_noring_wood_excentric_split" },
      ],
    },
    q_noring_wood_excentric_split: {
      question: "Les lames semblent-elles fendues en deux sur leur longueur ?",
      options: [
        { label: "Oui", next: { result: "schizophylle" } },
        { label: "Non", next: "q_noring_wood_excentric_tiny" },
      ],
    },
    q_noring_wood_excentric_tiny: {
      question: "Très petite espèce, presque sans pied (moins de 3 cm) ?",
      options: [
        { label: "Oui", next: { result: "crepidote" } },
        { label: "Non", next: "q_noring_wood_excentric_edge" },
      ],
    },
    q_noring_wood_excentric_edge: {
      question: "L'arête des lames est-elle visiblement dentelée ou crénelée ?",
      options: [
        { label: "Oui", next: { result: "lentin" } },
        { label: "Non, arête lisse", next: { result: "panellus" } },
      ],
    },

    q_noring_wood_central_gills: {
      question: "Les lames descendent-elles nettement sur le pied (décurrentes) ?",
      options: [
        { label: "Oui", next: "q_noring_wood_central_decurrent_color" },
        { label: "Non, lames échancrées ou libres", next: "q_noring_wood_central_attached" },
      ],
    },
    q_noring_wood_central_decurrent_color: {
      question: "Les couleurs sont-elles vives et orangées, ou plutôt ternes (brun, jaunâtre) ?",
      options: [
        { label: "Vives et orangées", next: { result: "omphalot" } },
        { label: "Ternes", next: { result: "armillaire" } },
      ],
    },
    q_noring_wood_central_attached: {
      question: "Espèce fragile et petite, pied très fin ?",
      options: [
        { label: "Oui", next: { result: "mycene" } },
        { label: "Non", next: "q_noring_wood_central_tuft" },
      ],
    },
    q_noring_wood_central_tuft: {
      question: "Pousse en touffe dense, couleurs jaune-vert à brunes ?",
      options: [
        { label: "Oui", next: { result: "hypholome" } },
        { label: "Non", next: "q_noring_wood_central_other" },
      ],
    },
    q_noring_wood_central_other: {
      question: "Couleurs brun rouille, pied bien net et formé ?",
      options: [
        { label: "Oui", next: { result: "gymnopile" } },
        { label: "Non, petite espèce fragile au chapeau sec", next: { result: "galerine" } },
      ],
    },

    /* ----- à même le sol, sans anneau, sans latex ----- */

    q_noring_soil_next: {
      question: "Le champignon pousse-t-il sur du crottin, du fumier, ou en toute petite taille dans l'herbe ?",
      options: [
        { label: "Oui", next: "q_noring_soil_dung" },
        { label: "Non", next: "q_noring_soil_general" },
      ],
    },
    q_noring_soil_dung: {
      question: "Pousse-t-il directement sur crottin ou fumier ?",
      options: [
        { label: "Oui", next: "q_noring_soil_dung_margin" },
        { label: "Non, plutôt dans l'herbe", next: "q_noring_soil_grass" },
      ],
    },
    q_noring_soil_dung_margin: {
      question: "La marge du chapeau est-elle crénelée et déborde-t-elle nettement des lames ?",
      options: [
        { label: "Oui", next: { result: "panéole" } },
        { label: "Non, marge droite", next: { result: "psilocybe" } },
      ],
    },
    q_noring_soil_grass: {
      question: "Le chapeau est-il visqueux et jaune ?",
      options: [
        { label: "Oui", next: { result: "bolbitie" } },
        { label: "Non, chapeau sec et conique", next: { result: "conocybe" } },
      ],
    },

    q_noring_soil_general: {
      question: "Vois-tu une cortine (voile fin façon toile d'araignée) entre le bord du chapeau et le pied, au moins chez les sujets jeunes ?",
      hint: "La cortine est fragile et peut avoir disparu chez un sujet âgé.",
      allowUnknown: true,
      options: [
        { label: "Oui", next: "q_noring_soil_cortina" },
        { label: "Non", next: "q_noring_soil_nocortina" },
      ],
    },
    q_noring_soil_cortina: {
      question: "Les lames sont-elles de couleur rouille ?",
      options: [
        { label: "Oui", next: { result: "cortinaire" } },
        { label: "Non", next: "q_noring_soil_cortina2" },
      ],
    },
    q_noring_soil_cortina2: {
      question: "Le chapeau est-il sec, fibrilleux à squameux, souvent conique ?",
      options: [
        { label: "Oui", next: { result: "inocybe" } },
        { label: "Non, plutôt visqueux et convexe", next: { result: "hebelome" } },
      ],
    },

    q_noring_soil_nocortina: {
      question: "Le chapeau a-t-il tendance à noircir et à se liquéfier avec l'âge (comme de l'encre) ?",
      options: [
        { label: "Oui", next: { result: "coprin" } },
        { label: "Non", next: "q_noring_soil_decurrent" },
      ],
    },
    q_noring_soil_decurrent: {
      question: "Les lames descendent-elles nettement sur le pied (décurrentes) ?",
      options: [
        { label: "Oui", next: "q_noring_soil_decurrent2" },
        { label: "Non, lames échancrées ou libres", next: "q_noring_soil_nondecurrent" },
      ],
    },
    q_noring_soil_decurrent2: {
      question: "Les lames sont-elles en réalité de simples plis peu profonds et ramifiés ?",
      options: [
        { label: "Oui", next: { result: "chanterelle" } },
        { label: "Non, vraies lames", next: "q_noring_soil_decurrent3" },
      ],
    },
    q_noring_soil_decurrent3: {
      question: "Les lames sont-elles épaisses et bien espacées ?",
      options: [
        { label: "Cireuses, couleurs vives, se détachent facilement du chapeau", next: { result: "hygrophore" } },
        { label: "Brunes, se détachant en bloc comme une membrane, se tachant en brun au toucher", next: { result: "paxille" } },
        { label: "Non, lames plutôt fines", next: "q_noring_soil_decurrent4" },
      ],
    },
    q_noring_soil_decurrent4: {
      question: "Les lames sont-elles fines, souvent fourchues, se détachant facilement du chapeau et de couleur orangée ?",
      options: [
        { label: "Oui", next: { result: "fausse_chanterelle" } },
        { label: "Non, lames serrées et non détachables, couleurs ternes", next: { result: "clitocybe" } },
        { label: "Non, lames roses, chair charnue", next: { result: "clitopile" } },
      ],
    },

    q_noring_soil_nondecurrent: {
      question: "Le pied a-t-il la même consistance charnue que le chapeau (ni fin ni cassant) ?",
      options: [
        { label: "Oui", next: "q_noring_soil_fleshy" },
        { label: "Non, pied grêle, cartilagineux ou coriace", next: "q_noring_soil_thin" },
      ],
    },
    q_noring_soil_fleshy: {
      question: "Les lames sont-elles très échancrées et se détachent-elles facilement en bloc du chapeau ?",
      options: [
        { label: "Oui", next: { result: "lepiste" } },
        { label: "Non", next: "q_noring_soil_fleshy2" },
      ],
    },
    q_noring_soil_fleshy2: {
      question: "Le chapeau est-il épais et bien charnu, lames échancrées ?",
      options: [
        { label: "Oui", next: { result: "tricholome" } },
        { label: "Non, chapeau plus mince, parfois un petit mamelon", next: { result: "melanoleuque" } },
      ],
    },
    q_noring_soil_thin: {
      question: "Les lames sont-elles épaisses et bien espacées, couleurs souvent roses ou lilas ?",
      options: [
        { label: "Oui", next: { result: "laccaire" } },
        { label: "Non", next: "q_noring_soil_thin2" },
      ],
    },
    q_noring_soil_thin2: {
      question: "Le chapeau est-il coriace, capable de se dessécher puis de reprendre forme après la pluie ?",
      options: [
        { label: "Oui", next: { result: "marasme" } },
        { label: "Non", next: "q_noring_soil_thin3" },
      ],
    },
    q_noring_soil_thin3: {
      question: "Le pied résiste-t-il bien à la torsion, chapeau peu charnu ?",
      options: [
        { label: "Oui", next: { result: "collybie" } },
        { label: "Non", next: "q_noring_soil_thin4" },
      ],
    },
    q_noring_soil_thin4: {
      question: "Le chapeau est-il très visqueux, avec un long pied souvent enraciné en profondeur ?",
      options: [
        { label: "Oui", next: { result: "xerule" } },
        { label: "Non", next: "q_noring_soil_thin5" },
      ],
    },
    q_noring_soil_thin5: {
      question: "Les lames sont-elles roses à maturité ?",
      options: [
        { label: "Oui", next: { result: "entolome" } },
        { label: "Non, lames blanchâtres à grisâtres", next: "q_noring_soil_thin6" },
      ],
    },
    q_noring_soil_thin6: {
      question: "Espèce fragile au chapeau mince, souvent en groupe, lames devenant grises à noirâtres ?",
      options: [
        { label: "Oui", next: "q_psathyrelle_cortina" },
        { label: "Non", next: { result: "rhodocybe" } },
      ],
    },

    /* ============================================================
       SOUS-CLE : PSATHYRELLES / LACRYMAIRES (jusqu'à l'espèce)
       ============================================================ */

    q_psathyrelle_cortina: {
      question: "Le pied porte-t-il une cortine nette, en filaments, qui noircit avec la chute des spores ?",
      hint: "Genre très fourni (une centaine d'espèces en France), souvent identifiable seulement au microscope : cette clé ne couvre que les cas les plus reconnaissables sur le terrain.",
      options: [
        { label: "Oui", next: "q_psathyrelle_lacrymaria_size" },
        { label: "Non", next: "q_psathyrelle_habitat" },
      ],
    },
    q_psathyrelle_lacrymaria_size: {
      question: "Le chapeau mesure-t-il plutôt 6 à 10 cm, dans l'herbe des talus, bords de chemins ou lieux découverts ?",
      options: [
        { label: "Oui", next: { result: "lacrymaire_veloutee" } },
        { label: "Non, plus petit (5-8 cm), teinte orangée vive comme le feu, plutôt en forêt", next: { result: "lacrymaire_rouge" } },
      ],
    },
    q_psathyrelle_habitat: {
      question: "Où pousse le champignon ?",
      options: [
        { label: "Sur souche ou tronc, en gros amas où les chapeaux se recouvrent", next: "q_psathyrelle_hygrophane" },
        { label: "En touffe dense mais à même le sol, dans l'herbe ou en sous-bois", next: { result: "psathyrelle_cespiteuse" } },
        { label: "Isolé ou en petit groupe sur souche ou bois enfoui", next: "q_psathyrelle_veil" },
      ],
    },
    q_psathyrelle_hygrophane: {
      question: "Le chapeau change-t-il nettement de couleur en séchant (brun luisant humide, devenant terne et pâle au sec) ?",
      options: [
        { label: "Oui", next: { result: "psathyrelle_hydrophile" } },
        { label: "Non, chapeau plus charnu, brun rougeâtre, marge nue sans voile", next: { result: "psathyrelle_chataine" } },
      ],
    },
    q_psathyrelle_veil: {
      question: "La marge du chapeau porte-t-elle des restes floconneux de voile qui se fissurent facilement, le chapeau passant d'une teinte ocre jeune à blanc crème ?",
      options: [
        { label: "Oui", next: { result: "psathyrelle_de_candolle" } },
        { label: "Non, rien de tel", next: { result: "psathyrelle" } },
      ],
    },

    /* ============================================================
       SOUS-CLE : AMANITES (jusqu'à l'espèce)
       ============================================================ */

    q_amanite_volva_type: {
      question: "La volve (ou ce qu'il en reste) est-elle une membrane bien nette qui glisse librement, parfois en laissant de larges lambeaux sur le chapeau, ou plutôt collée et friable, avec des écailles ou verrues sur le chapeau ?",
      hint: "Genre à très haut risque : certaines espèces sont parmi les plus mortelles d'Europe. Observe chaque détail avec soin avant de répondre.",
      options: [
        { label: "Volve libre et membraneuse", next: "q_amanite_free_ring" },
        { label: "Volve collée/friable, écailles ou verrues sur le chapeau", next: "q_amanite_warty_bulb" },
      ],
    },

    q_amanite_free_ring: {
      question: "Le pied porte-t-il un anneau membraneux bien ample et retombant ?",
      options: [
        { label: "Oui", next: "q_amanite_ring_color" },
        { label: "Non, pas d'anneau, marge du chapeau striée/cannelée", next: "q_amanite_striate" },
      ],
    },
    q_amanite_ring_color: {
      question: "Le chapeau, les lames, le pied et l'anneau sont-ils tous d'un jaune orangé uniforme ?",
      options: [
        { label: "Oui", next: { result: "amanite_caesarea" } },
        { label: "Non, plutôt blancs ou d'une autre teinte", next: "q_amanite_ring_white" },
      ],
    },
    q_amanite_ring_white: {
      question: "Le chapeau est-il finement rayé de fibrilles sombres sur un fond verdâtre ?",
      options: [
        { label: "Oui", next: { result: "amanite_phalloides" } },
        { label: "Non, chapeau blanc sans fibrilles", next: "q_amanite_white_shape" },
      ],
    },
    q_amanite_white_shape: {
      question: "L'espèce est-elle grosse, avec un chapeau ovoïde et un pied pelucheux ?",
      options: [
        { label: "Oui", next: "q_amanite_white_volva_color" },
        { label: "Non, espèce moyenne", next: "q_amanite_white_medium" },
      ],
    },
    q_amanite_white_volva_color: {
      question: "La volve est-elle blanche, ou plutôt teintée de roux ?",
      allowUnknown: true,
      options: [
        { label: "Blanche", next: { result: "amanite_ovoidea" } },
        { label: "Rousse", next: { result: "amanite_proxima" } },
      ],
    },
    q_amanite_white_medium: {
      question: "Le chapeau est-il plat, avec un pied assez peu pelucheux ?",
      options: [
        { label: "Oui", next: { result: "amanite_verna" } },
        { label: "Non, chapeau plutôt conique, pied bien pelucheux", next: { result: "amanite_virosa" } },
      ],
    },

    q_amanite_striate: {
      question: "Le voile général est-il friable, laissant de larges plaques épaisses et grisâtres sur le pied et le chapeau ?",
      options: [
        { label: "Oui", next: { result: "amanite_ceciliae" } },
        { label: "Non, volve engainante bien persistante", next: "q_amanite_vaginata_color" },
      ],
    },
    q_amanite_vaginata_color: {
      question: "De quelle couleur est le chapeau ?",
      options: [
        { label: "Orangé", next: "q_amanite_orange_stem" },
        { label: "Gris", next: { result: "amanite_vaginata" } },
        { label: "Brun", next: { result: "amanite_battarrae" } },
        { label: "Jaunâtre", next: { result: "amanite_lividopallescens" } },
      ],
    },
    q_amanite_orange_stem: {
      question: "Le pied est-il nettement zébré d'orange, ou plutôt blanc uni ?",
      options: [
        { label: "Zébré d'orange", next: { result: "amanite_crocea" } },
        { label: "Blanc uni", next: { result: "amanite_fulva" } },
      ],
    },

    q_amanite_warty_bulb: {
      question: "Le pied présente-t-il un bulbe net à sa base ?",
      hint: "Il est parfois nécessaire de dégager un peu le pied pour bien voir la forme du bulbe.",
      allowUnknown: true,
      options: [
        { label: "Non, pas de bulbe net, volve très fugace", next: { result: "amanite_eliae" } },
        { label: "Oui", next: "q_amanite_bulb_type" },
      ],
    },
    q_amanite_bulb_type: {
      question: "Comment décrirais-tu le bulbe à la base du pied ?",
      allowUnknown: true,
      options: [
        { label: "Marginé (rebord net), avec une odeur de radis", next: "q_amanite_margine" },
        { label: "Marqué de bourrelets ou de petits flocons", next: "q_amanite_bourrelets" },
        { label: "En forme d'oignon simple, sans marge ni bourrelets marqués", next: "q_amanite_oignon" },
      ],
    },
    q_amanite_margine: {
      question: "Le chapeau est-il citrin ou blanc, à bord lisse, avec un anneau bien persistant ?",
      options: [
        { label: "Oui", next: { result: "amanite_citrina" } },
        { label: "Non, chapeau brun pourpré à bord strié, anneau fugace violacé", next: { result: "amanite_porphyrea" } },
      ],
    },
    q_amanite_bourrelets: {
      question: "De quelle couleur est le chapeau ?",
      options: [
        { label: "Rouge vif, couvert de verrues blanches", next: { result: "amanite_muscaria" } },
        { label: "Brun, verrues blanches, 2 à 3 bourrelets nets au-dessus du bulbe", next: { result: "amanite_pantherina" } },
        { label: "Jaune, bord strié, anneau fugace blanc", next: { result: "amanite_junquillea" } },
        { label: "Blanc", next: "q_amanite_white_big" },
      ],
    },
    q_amanite_white_big: {
      question: "Les écailles sont-elles larges et aplaties, avec un anneau plutôt farineux ?",
      options: [
        { label: "Oui", next: { result: "amanite_solitaria" } },
        { label: "Non, petites écailles pointues, anneau fugace", next: { result: "amanite_echinocephala" } },
      ],
    },
    q_amanite_oignon: {
      question: "La chair vire-t-elle au vineux/rougeâtre à la moindre blessure ?",
      hint: "Nécessite d'entamer légèrement la chair.",
      allowUnknown: true,
      options: [
        { label: "Oui", next: { result: "amanite_rubescens" } },
        { label: "Non", next: "q_amanite_oignon2" },
      ],
    },
    q_amanite_oignon2: {
      question: "La chair brunit-elle (brun madère) à la piqûre, avec des écailles jaunes sur le chapeau ?",
      hint: "Nécessite d'entamer légèrement la chair.",
      allowUnknown: true,
      options: [
        { label: "Oui", next: { result: "amanite_franchetii" } },
        { label: "Non, chair qui reste blanche, écailles grises", next: "q_amanite_excelsa" },
      ],
    },
    q_amanite_excelsa: {
      question: "Le chapeau est-il gris bistre, l'allure trapue, avec une odeur de radis ?",
      options: [
        { label: "Oui", next: { result: "amanite_excelsa_spissa" } },
        { label: "Non, chapeau bistré pâle, allure élancée, odeur faible", next: { result: "amanite_excelsa_excelsa" } },
      ],
    },

    /* ============================================================
       SOUS-CLE : LÉPIOTES (jusqu'à l'espèce)
       ============================================================ */

    q_lepiote_size: {
      question: "Quelle allure correspond le mieux à ton champignon ?",
      hint: "Prudence particulière : les petites lépiotes (moins de 5 cm) comptent parmi les champignons les plus dangereux, avec des toxines identiques à celles des amanites mortelles.",
      options: [
        { label: "Très petit, jaune vif, dans un pot de fleurs ou une serre", next: { result: "leucoagaricus_flos_sulfuris" } },
        { label: "Petit à moyen, avec de nombreuses écailles brunes bien visibles", next: "q_lepiote_echinoderma" },
        { label: "Grand ou moyen, avec un large chapeau et un anneau qui peut coulisser sur le pied", next: "q_lepiote_macro" },
        { label: "Moyen, plutôt blanc à gris, avec un aspect cotonneux sur le chapeau et le pied", next: "q_lepiote_leucoagaricus" },
        { label: "Très petit (1 à 5 cm), avec un anneau fragile ou difficile à voir", next: "q_lepiote_petite" },
      ],
    },
    q_lepiote_echinoderma: {
      question: "Le pied est-il comme guêtré, pour une petite espèce d'environ 6 cm ?",
      options: [
        { label: "Oui", next: { result: "echinoderma_echinaceum" } },
        { label: "Non, plutôt moyenne (~12 cm) avec un anneau bien retombant", next: { result: "echinoderma_asperum" } },
      ],
    },
    q_lepiote_macro: {
      question: "La chair rougit-elle nettement à la cassure ?",
      hint: "Nécessite d'entamer légèrement la chair.",
      allowUnknown: true,
      options: [
        { label: "Oui", next: { result: "chlorophyllum" } },
        { label: "Non", next: "q_lepiote_macro_pied" },
      ],
    },
    q_lepiote_macro_pied: {
      question: "Le pied est-il chiné (zébré de bandes), le chapeau mamelonné et mèché, pour une grande espèce de 20 à 30 cm ?",
      options: [
        { label: "Oui", next: { result: "macrolepiota_procera" } },
        { label: "Non, espèce plus grêle (8-15 cm), pied non chiné", next: "q_lepiote_macro_scales" },
      ],
    },
    q_lepiote_macro_scales: {
      question: "Les écailles du chapeau sont-elles brunes et bien délimitées ?",
      options: [
        { label: "Oui", next: { result: "macrolepiota_mastoidea" } },
        { label: "Non, écailles pâles visibles surtout au bord", next: { result: "macrolepiota_excoriata" } },
      ],
    },
    q_lepiote_leucoagaricus: {
      question: "L'espèce est-elle blanche, poussant en pelouse, lames devenant roses en vieillissant ?",
      options: [
        { label: "Oui", next: { result: "leucoagaricus_leucothites" } },
        { label: "Non, plutôt grise, chapeau cotonneux, pied nettement radicant", next: { result: "leucoagaricus_barsii" } },
      ],
    },
    q_lepiote_petite: {
      question: "Le pied est-il couvert de petites guirlandes cotonneuses, plutôt qu'un vrai anneau ?",
      options: [
        { label: "Oui, guirlandes cotonneuses", next: "q_lepiote_petite_guirlande" },
        { label: "Non, anneau net, parfois suspendu au bord du chapeau", next: "q_lepiote_petite_anneau" },
      ],
    },
    q_lepiote_petite_guirlande: {
      question: "Espèce pâle, ocre ou crème, chapeau presque lisse, plutôt dans l'herbe ?",
      options: [
        { label: "Oui", next: { result: "lepiota_laevigata" } },
        { label: "Non, plus colorée, écailles concentriques nettes, plutôt en forêt", next: { result: "lepiota_clypeolaria" } },
      ],
    },
    q_lepiote_petite_anneau: {
      question: "Les écailles sont-elles brun foncé à noirâtres ?",
      options: [
        { label: "Oui", next: { result: "lepiota_felina" } },
        { label: "Non, écailles ocre à roussâtres", next: { result: "lepiota_cristata" } },
      ],
    },

    /* ============================================================
       SOUS-CLE : CYSTODERMES (jusqu'à l'espèce)
       ============================================================ */

    q_cystoderme_color: {
      question: "De quelle couleur et de quelle taille est le chapeau ?",
      hint: "Petit groupe sans intérêt culinaire notable, mais un genre voisin (la pholiote dorée) leur ressemble beaucoup et se révèle être un bon comestible.",
      options: [
        { label: "Ocre-rouille, en cloche puis aplati avec un mamelon, odeur forte de moisi", next: { result: "cystoderme_amianthinum" } },
        { label: "Lilas clair à rosé", next: { result: "cystoderme_carcharias" } },
        { label: "Rouge vermillon vif", next: { result: "cystoderme_cinnabarinum" } },
        { label: "Fauve doré, grosse espèce (15-20 cm), anneau ample et persistant", next: { result: "phaeolepiota_aurea" } },
      ],
    },

    /* ============================================================
       SOUS-CLE : AGARICS (jusqu'à l'espèce)
       ============================================================ */

    q_agaric_flesh: {
      question: "La chair change-t-elle de couleur à la cassure, au frottement ou à l'air ?",
      hint: "Nécessite d'entamer légèrement la chair. Vérifie aussi qu'il n'y a aucune volve à la base du pied et que les lames sont roses puis brun chocolat (jamais durablement blanches) : c'est ce qui distingue un vrai agaric d'une amanite jeune ou d'une lépiote blanche.",
      allowUnknown: true,
      options: [
        { label: "Non, elle ne change pas de couleur", next: { result: "agaric_campestris" } },
        { label: "Elle rougit", next: "q_agaric_red" },
        { label: "Elle jaunit", next: "q_agaric_yellow" },
      ],
    },
    q_agaric_red: {
      question: "La chair est-elle très ferme, avec un anneau qui paraît double (façon poulie), sur une espèce qui pousse souvent en terrain piétiné (chemins, trottoirs) ?",
      options: [
        { label: "Oui", next: { result: "agaric_bitorquis" } },
        { label: "Non, anneau simple", next: "q_agaric_red_ring" },
      ],
    },
    q_agaric_red_ring: {
      question: "L'anneau remonte-t-il sur le pied comme une chaussette, avec une odeur désagréable ?",
      options: [
        { label: "Oui", next: { result: "agaric_bernardii" } },
        { label: "Non, l'anneau retombe plutôt comme une jupe", next: "q_agaric_red_speed" },
      ],
    },
    q_agaric_red_speed: {
      question: "Le rougissement est-il très net et rapide, avec une odeur agréable ?",
      options: [
        { label: "Oui", next: { result: "agaric_silvaticus" } },
        { label: "Non, rougissement faible et lent, précédé d'un léger jaunissement", next: { result: "agaric_impudicus" } },
      ],
    },
    q_agaric_yellow: {
      question: "Le chapeau est-il couvert d'abondantes mèches gris cendré ?",
      options: [
        { label: "Oui", next: { result: "agaric_moelleri" } },
        { label: "Non, chapeau lisse ou à mèches pâles/brunes/fauves", next: "q_agaric_yellow_scales" },
      ],
    },
    q_agaric_yellow_scales: {
      question: "Le chapeau est-il couvert de mèches brun-fauve, pour une grande espèce ?",
      options: [
        { label: "Oui", next: { result: "agaric_augustus" } },
        { label: "Non, chapeau lisse ou à quelques mèches gris pâle", next: "q_agaric_yellow_speed" },
      ],
    },
    q_agaric_yellow_speed: {
      question: "Le jaunissement est-il lent et localisé, avec un anneau double denté et une odeur agréable, souvent anisée ?",
      options: [
        { label: "Oui", next: "q_agaric_yellow_habitat" },
        { label: "Non, jaunissement intense et rapide, anneau simple, odeur souvent désagréable, chapeau d'abord trapézoïdal puis étalé, pied à bulbe irrégulier", next: { result: "agaric_xanthodermus" } },
      ],
    },
    q_agaric_yellow_habitat: {
      question: "Espèce plutôt moyenne et forestière, chapeau lisse et un peu jaunâtre ?",
      options: [
        { label: "Oui", next: { result: "agaric_silvicola" } },
        { label: "Non, souvent plus grosse, poussant plutôt dans les lieux herbeux", next: { result: "agaric_arvensis" } },
      ],
    },
  },

  results: {
    limacelle: { genus: "Limacelle (Limacella)", note: "Proche des amanites mais sans écailles nettes ni volve, souvent visqueuse." },
    armillaire: { genus: "Armillaire (Armillaria)", note: "Pousse en touffes sur bois ou souches, pied souvent mèché, couleur miel à brune." },
    mucidule: { genus: "Mucidule (Mucidula / Oudemansiella mucida)", note: "Chapeau blanc très visqueux, pousse en touffes sur bois, notamment le hêtre." },
    mycene: { genus: "Mycène (Mycena)", note: "Petites espèces fragiles, pied fin, souvent sur bois ou litière." },
    omphalot: { genus: "Omphalot (Omphalotus)", note: "Couleurs orangées vives, pousse en touffes sur bois ; peut être confondu avec la chanterelle mais est toxique." },
    pleurote: { genus: "Pleurote (Pleurotus)", note: "Grande espèce charnue en éventail, pied très court ou nul, sur bois." },
    panellus: { genus: "Panellus", note: "Petite espèce coriace, arête des lames fine et entière, sur bois." },
    lentin: { genus: "Lentin / Lentinelle (Lentinus, Lentinellus)", note: "Espèce coriace à arête des lames crénelée, sur bois." },
    lactaire: { genus: "Lactaire (Lactarius)", note: "Reconnaissable au latex qui perle à la coupe des lames ; sa couleur et son goût orientent l'espèce précise." },
    chanterelle: { genus: "Chanterelle / Craterelle (Cantharellus, Craterellus)", note: "Lames remplacées par de simples plis peu profonds et ramifiés." },
    hygrophore: { genus: "Hygrophore (Hygrophorus)", note: "Lames épaisses et espacées, chapeau souvent visqueux par temps humide." },
    fausse_chanterelle: { genus: "Fausse chanterelle (Hygrophoropsis)", note: "Lames fines, fourchues, orangées ; ressemble à la chanterelle mais lames bien détachables." },
    tricholome: { genus: "Tricholome (Tricholoma)", note: "Chapeau charnu, lames échancrées ; genre très vaste incluant des espèces comestibles et d'autres toxiques." },
    melanoleuque: { genus: "Mélanoleuque (Melanoleuca)", note: "Chapeau mince, souvent avec un petit mamelon central." },
    clitocybe: { genus: "Clitocybe (Clitocybe)", note: "Lames serrées et non détachables ; genre comportant des espèces dangereuses, prudence particulière." },
    laccaire: { genus: "Laccaire (Laccaria)", note: "Lames et lamelles épaisses, très espacées, couleurs souvent rosées ou lilas." },
    marasme: { genus: "Marasme (Marasmius)", note: "Chapeau coriace qui se dessèche sans pourrir et peut reprendre forme après la pluie." },
    collybie: { genus: "Collybie (Collybia / Gymnopus)", note: "Pied résistant à la torsion, chapeau peu charnu." },
    xerule: { genus: "Xérule (Xerula)", note: "Chapeau très visqueux, long pied souvent enraciné." },
    volvaire: { genus: "Volvaire (Volvariella)", note: "Volve nette à la base, lames roses, pas d'anneau." },
    plutee: { genus: "Plutée (Pluteus)", note: "Pas de volve, pousse le plus souvent sur bois mort, lames roses." },

    /* ---------- espèce de Volvaire ---------- */
    volvaire_gluante: {
      genus: "Volvaire gluante",
      latin: "Volvopluteus gloiocephalus (D.C.) Justo = Volvariella gloiocephala",
      chapeau: "5 à 10 cm, d'abord en cloche puis étalé et mamelonné, surface gluante et lisse, marge se striant à la fin ; couleur variable, le plus souvent gris fumé, parfois blanc ou brun jaunâtre.",
      pied: "Élancé, nu et lisse, 12 à 16 cm ou plus, blanc ou grisâtre ; volve persistante en gaine déchirée en lobes, souvent en partie enterrée.",
      lames: "Libres, serrées, larges ; blanches à la sortie de la volve, puis rose clair, enfin brunâtres.",
      chair: "Mince, blanche, molle, odeur et saveur faibles de radis.",
      habitat: "Milieu rudéral : jardins, lieux fumés, décombres, jachères, champs, bords de route ; fréquente en été et surtout aux premiers froids d'automne.",
      confusions: "Peut se confondre avec les amanites vaginées (également comestibles) et surtout avec l'amanite phalloïde (mortelle) : contrairement à ces dernières, la volvaire gluante pousse en milieu herbeux ou fumé et jamais en forêt, a un chapeau nettement gluant et des lames qui deviennent roses. Les amanites poussent en forêt, ont un chapeau non visqueux et des lames qui restent blanches.",
      risk: "edible",
    },

    /* ---------- espèces de Plutées ---------- */
    pluteus_leoninus: { genus: "Plutée couleur de lion (Pluteus leoninus)", note: "Occasionnelle sur souches ou bois mort humide de feuillus, en été et automne. Chapeau petit (2-5 cm), d'un jaune vif entièrement velouté. Pied grêle et élancé (5-7 cm), blanc, teinté de jaune à la base. Lames crème puis rosées, à arête généralement jaune. Chair mince, blanchâtre.", risk: "inedible" },
    pluteus_cervinus: { genus: "Plutée couleur de cerf (Pluteus cervinus)", note: "Espèce commune dès le début de l'été et en automne, sur bois pourrissant et vieilles souches de feuillus. Chapeau de 8 à 12 cm, vite plan, brun brillant et soyeux, à fines fibrilles rayonnantes plus foncées au centre. Pied cylindrique strié (7-10 cm), souvent inséré latéralement sur des troncs couchés puis se redressant, habillé de petites mèches brunes vers la base. Lames libres, blanches puis nettement rose sale. Chair blanche, à odeur nette de radis.", risk: "inedible" },
    pluteus_atromarginatus: { genus: "Plutée à arêtes noires (Pluteus atromarginatus)", note: "Proche du plutée couleur de cerf mais bien plus foncé, venant surtout sur conifères en montagne. Chapeau squameux ; arête des lames colorée de brun-noir.", risk: "unknown" },
    pluteus_patricien: { genus: "Plutée patricien (Pluteus petasatus)", note: "Une des plus grandes espèces du genre, atteignant parfois 20 cm. Chapeau blanc, à centre ocré et crevassé, légèrement odorant. Croît sur la sciure ou les souches mortes.", risk: "unknown" },
    pluteus_salicinus: { genus: "Plutée du saule (Pluteus salicinus)", note: "Taille moyenne, chapeau gris verdâtre large d'environ 8 cm, pied blanc. Vient sur souches de feuillus, en particulier de saules.", risk: "unknown" },
    pluteus_cendre: { genus: "Plutée cendré (Pluteus thomsonii)", note: "Petite espèce à chapeau de teinte cendrée, large de 3 à 4 cm, marqué de veines saillantes en réseau. Sur souches.", risk: "unknown" },
    pluteus_blanc: { genus: "Plutée blanc (Pluteus pellitus)", note: "De même taille que le plutée cendré mais entièrement blanc. Croît sur débris de bois de résineux.", risk: "unknown" },
    pluteus_rouge: { genus: "Plutée rouge (Pluteus aurantiorugosus)", note: "Espèce rare au chapeau rouge vif devenant orangé, le pied se teintant aussi d'orangé à la base. Sur souches de feuillus.", risk: "unknown" },
    clitopile: { genus: "Clitopile (Clitopilus)", note: "Espèce charnue terrestre, lames décurrentes, teinte rosée." },
    schizophylle: { genus: "Schizophylle (Schizophyllum)", note: "Petite espèce coriace sur bois, lames fendues sur leur longueur." },
    lepiste: { genus: "Lépiste (Lepista)", note: "Chapeau et pied charnus, lames très échancrées et facilement détachables." },
    entolome: { genus: "Entolome (Entoloma)", note: "Pied grêle et cartilagineux, lames rosissant à maturité ; genre à hauts risques, certaines espèces sont mortelles." },
    rhodocybe: { genus: "Rhodocybe (Rhodocybe)", note: "Proche des clitocybes mais à teinte rosée." },
    coprin: { genus: "Coprin (Coprinus et genres voisins)", note: "Chapeau qui a tendance à noircir et à se liquéfier avec l'âge." },
    strophaire: { genus: "Strophaire (Stropharia)", note: "Chapeau nettement visqueux, anneau souvent présent, lames brun violacé à noirâtres." },
    hypholome: { genus: "Hypholome (Hypholoma)", note: "Pousse en touffes denses sur bois, couleurs vives." },
    psathyrelle: { genus: "Psathyrelle (Psathyrella)", note: "Espèce fragile poussant à terre sur débris végétaux, lames grisâtres à noircissantes." },

    /* ---------- espèces de Psathyrelles / Lacrymaires ---------- */
    lacrymaire_veloutee: { genus: "Lacrymaire veloutée (Lacrymaria lacrymabunda)", note: "Cortine nette en filaments sur le pied, noircissant avec la chute des spores. Chapeau de 6 à 10 cm, densément couvert de fibrilles blanches à l'état jeune, se dénudant en brun ocré avec l'âge. Lames se maturant de façon irrégulière par plages, brun violacé lisérées de blanc, exsudant parfois de petites gouttelettes par temps humide. Fréquente dans l'herbe des talus, bords de chemins ou lieux découverts.", risk: "inedible" },
    lacrymaire_rouge: { genus: "Lacrymaire rouge (Lacrymaria pyrotricha)", note: "Comme la précédente (cortine nette et noircissante sur le pied, lames se maturant par plages irrégulières) mais plus petite, chapeau de 5 à 8 cm d'une teinte orangée vive rappelant le feu, pied haut d'environ 8 cm. Plus rare, en milieu forestier.", risk: "unknown" },
    psathyrelle_de_candolle: { genus: "Psathyrelle de De Candolle (Psathyrella candolleana)", note: "Très fréquente sur souches pourries ou bois enfoui, en touffes ou petits groupes, presque toute l'année. Chapeau jusqu'à 6 cm, légèrement ocre jeune puis blanc crème, marge portant des restes floconneux de voile qui se fissurent facilement. Lames serrées, gris rosé puis brun rougeâtre. Chair mince et fragile.", risk: "inedible" },
    psathyrelle_chataine: { genus: "Psathyrelle châtain (Psathyrella spadicea)", note: "Forme aussi de grosses touffes sur souches et troncs, mais chapeau plus charnu (5 à 10 cm), brun rougeâtre pâlissant par le sec, à marge nue, enroulée au début, sans aucun voile. Plus rare que la précédente.", risk: "unknown" },
    psathyrelle_hydrophile: { genus: "Psathyrelle hydrophile (Psathyrella piluliformis)", note: "Forme sur les souches des touffes parfois énormes où les chapeaux se recouvrent, presque toute l'année, très commune. Chapeau de 2 à 6 cm, hygrophane et très variable : brun luisant par temps humide, devenant brun terne et pâle en séchant ; voile blanc très fugace, sauf à la marge où persistent quelques restes en franges. Pied blanc, creux et cassant. Lames échancrées, serrées, blanches puis roses, enfin brun chocolat ; chair mince et fragile, odeur et saveur nulles.", risk: "inedible" },
    psathyrelle_cespiteuse: { genus: "Psathyrelle cespiteuse (Psathyrella multipedata)", note: "Ressemble un peu à la précédente mais forme des touffes très denses à même le sol plutôt que sur souche, dans les lieux herbeux et les sous-bois, et n'a presque pas de voile.", risk: "unknown" },
    "panéole": { genus: "Panéole (Panaeolus)", note: "Pousse sur fumier ou crottin, marge du chapeau crénelée et débordante." },
    psilocybe: { genus: "Psilocybe (Psilocybe)", note: "Marge du chapeau droite ; genre réglementé, à identifier avec beaucoup de prudence." },
    galerine: { genus: "Galérine (Galerina)", note: "Petite espèce discrète à hauts risques : certaines contiennent les mêmes toxines que les amanites mortelles." },
    bolbitie: { genus: "Bolbitie (Bolbitius)", note: "Chapeau visqueux et jaune, espèce fragile et éphémère." },
    conocybe: { genus: "Conocybe (Conocybe)", note: "Chapeau conique non visqueux ; genre à hauts risques toxiques." },
    pholiote: { genus: "Pholiote (Pholiota)", note: "Chapeau écailleux, pousse en touffes sur bois." },
    gymnopile: { genus: "Gymnopile (Gymnopilus)", note: "Chapeau fibrilleux souvent coloré, pousse sur bois." },
    kuehneromyces: { genus: "Kuehneromyces", note: "Chapeau lisse très hygrophane (il change nettement de couleur en séchant), pousse en touffes sur bois." },
    pholiote_ridee: { genus: "Pholiote ridée", note: "Chapeau semblant poudré de blanc, pousse à même le sol." },
    agrocybe: { genus: "Agrocybe (Agrocybe)", note: "Chapeau lisse et brun, terrestre ou parfois sur bois enterré." },
    cortinaire: { genus: "Cortinaire (Cortinarius)", note: "Genre immense reconnu par sa cortine et ses lames couleur rouille ; certaines espèces sont mortelles à retardement. Prudence maximale." },
    inocybe: { genus: "Inocybe (Inocybe)", note: "Chapeau sec fibrilleux à squameux, souvent conique ; genre à hauts risques toxiques." },
    hebelome: { genus: "Hébélome (Hebeloma)", note: "Chapeau plus ou moins visqueux et convexe, souvent une odeur de radis." },
    crepidote: { genus: "Crépidote (Crepidotus)", note: "Très petite espèce sans pied ou presque, pousse à même le bois." },
    paxille: { genus: "Paxille (Paxillus)", note: "Lames nettement décurrentes, se détachant en bloc ; la paxille enroulée est connue pour une toxicité retardée après consommations répétées." },

    /* ---------- espèces d'Amanites ---------- */
    amanite_ceciliae: { genus: "Amanite dorée (Amanita ceciliae)", note: "Volve friable laissant d'épaisses plaques grisâtres sur le pied et le chapeau, marge cannelée, pas d'anneau.", risk: "caution" },
    amanite_fulva: { genus: "Amanite vaginée fauve (Amanita fulva)", note: "Volve engainante persistante, chapeau orangé, pied blanc non zébré, pas d'anneau.", risk: "caution" },
    amanite_crocea: { genus: "Amanite safran (Amanita crocea)", note: "Comme la précédente mais pied nettement zébré d'orange.", risk: "caution" },
    amanite_vaginata: { genus: "Amanite vaginée grise (Amanita vaginata)", note: "Volve engainante persistante, chapeau gris, pas d'anneau.", risk: "caution" },
    amanite_battarrae: { genus: "Amanite brun-jaune (Amanita battarrae)", note: "Chapeau brun, pied zébré de brun, volve engainante, pas d'anneau.", risk: "caution" },
    amanite_lividopallescens: { genus: "Amanite pâle (Amanita lividopallescens)", note: "Chapeau jaunâtre, pied zébré de jaune, volve engainante, pas d'anneau.", risk: "caution" },
    amanite_caesarea: { genus: "Oronge (Amanita caesarea)", note: "Chapeau, lames, pied et anneau uniformément jaune orangé, volve blanche bien visible. Confusion possible au stade œuf avec la tue-mouches ou la panthère : coupe toujours le champignon en deux dans le sens de la hauteur avant de conclure.", risk: "edible" },
    amanite_phalloides: { genus: "Amanite phalloïde (Amanita phalloides)", note: "Chapeau finement rayé de fibrilles sombres sur fond verdâtre, anneau ample et retombant, volve membraneuse à la base. Responsable de la grande majorité des intoxications mortelles en Europe.", risk: "deadly" },
    amanite_ovoidea: { genus: "Amanite ovoïde (Amanita ovoidea)", note: "Grosse espèce blanche, chapeau ovoïde, pied pelucheux, volve blanche épaisse.", risk: "caution" },
    amanite_proxima: { genus: "Amanite à volve rousse (Amanita proxima)", note: "Comme la précédente mais volve teintée de roux.", risk: "caution" },
    amanite_verna: { genus: "Amanite printanière (Amanita verna)", note: "Tout en blanc, chapeau plat, pied peu pelucheux, anneau ample, volve membraneuse.", risk: "deadly" },
    amanite_virosa: { genus: "Amanite vireuse (Amanita virosa)", note: "Tout en blanc, chapeau plutôt conique, pied pelucheux, anneau ample, volve membraneuse.", risk: "deadly" },
    amanite_eliae: { genus: "Amanite d'Élias (Amanita eliae)", note: "Pied sans bulbe net, volve très fugace qui disparaît rapidement.", risk: "unknown" },
    amanite_citrina: { genus: "Amanite citrine (Amanita citrina)", note: "Chapeau citrin ou blanc à bord lisse, bulbe marginé, odeur de radis, anneau persistant.", risk: "caution" },
    amanite_porphyrea: { genus: "Amanite porphyre (Amanita porphyrea)", note: "Chapeau brun pourpré à bord strié, bulbe marginé, odeur de radis, anneau fugace violacé.", risk: "unknown" },

    amanite_muscaria: {
      genus: "Amanite tue-mouches",
      latin: "Amanita muscaria (L.) Lamarck — Fausse oronge",
      chapeau: "10 à 20 cm, étalé, d'un beau rouge vif, tout orné de verrues blanches qu'il peut perdre par temps humide (il devient alors plus orangé) ; marge se striant avec l'âge.",
      pied: "Jusqu'à 25 cm, blanc, devenant creux et cassant, pelucheux, avec un large anneau blanc retombant ; base terminée en bulbe arrondi, cerclé de guirlandes floconneuses incomplètes et friables : ce sont les restes de la volve.",
      lames: "Serrées, libres, assez larges, pouvant se teinter de jaune en vieillissant.",
      chair: "Blanche, orangée sous le revêtement du chapeau, saveur douce, sans odeur particulière.",
      habitat: "Sous feuillus comme sous résineux, sur sol acide et humide, en particulier au pied des bouleaux ; parfois aussi en pelouses arborées. Bien plus fréquente au nord, plus rare dans le Midi.",
      confusions: "Peut se confondre, dans ses formes délavées par la pluie, avec l'oronge (Amanita caesarea) : celle-ci se reconnaît à ses lames et son pied jaune d'or et à sa volve membraneuse en forme de sac, alors que la volve de la tue-mouches est friable et se réduit à des flocons.",
      risk: "toxic",
    },

    amanite_pantherina: { genus: "Amanite panthère (Amanita pantherina)", note: "Chapeau brun à verrues blanches, 2 à 3 bourrelets nets au-dessus du bulbe. Toxique, pouvant être grave.", risk: "toxic" },
    amanite_junquillea: { genus: "Amanite jonquille (Amanita junquillea)", note: "Chapeau jaune à bord strié, bulbe à bourrelets, anneau fugace blanc.", risk: "caution" },
    amanite_solitaria: { genus: "Amanite solitaire (Amanita solitaria)", note: "Grosse espèce blanche, larges écailles aplaties, anneau plutôt farineux.", risk: "unknown" },
    amanite_echinocephala: { genus: "Amanite épineuse (Amanita echinocephala)", note: "Grosse espèce blanche, petites écailles pointues, anneau fugace.", risk: "unknown" },
    amanite_rubescens: { genus: "Golmotte (Amanita rubescens)", note: "Bulbe simple en oignon, chair qui devient vineuse/rougeâtre à la moindre blessure. Toxique crue, ne se consomme que bien cuite.", risk: "caution" },
    amanite_franchetii: { genus: "Amanite à voile jaune (Amanita franchetii)", note: "Bulbe en oignon, chair qui brunit (brun madère) à la piqûre, écailles jaunes sur le chapeau.", risk: "caution" },
    amanite_excelsa_spissa: { genus: "Amanite épaisse (Amanita excelsa var. spissa)", note: "Bulbe en oignon, chair qui reste blanche, chapeau gris bistre, allure trapue, odeur de radis.", risk: "caution" },
    amanite_excelsa_excelsa: { genus: "Amanite élevée (Amanita excelsa var. excelsa)", note: "Comme la précédente mais chapeau bistré pâle, allure élancée, odeur faible.", risk: "caution" },

    /* ---------- espèces de Lépiotes ---------- */
    leucoagaricus_flos_sulfuris: { genus: "Lépiote jaune (Leucoagaricus flos-sulfuris)", note: "Toute petite espèce jaune vif, typique des pots de fleurs et des serres.", risk: "unknown" },
    echinoderma_asperum: { genus: "Lépiote hérissée (Echinoderma asperum)", note: "Espèce moyenne (~12 cm), écailles pyramidales brun foncé qui se détachent facilement, anneau bien retombant.", risk: "toxic" },
    echinoderma_echinaceum: { genus: "Lépiote épineuse (Echinoderma echinaceum)", note: "Petite espèce (~6 cm), pied comme guêtré, écailles pyramidales brun foncé.", risk: "toxic" },
    macrolepiota_procera: { genus: "Coulemelle (Macrolepiota procera)", note: "Grande espèce (20-30 cm), pied chiné, chapeau mamelonné couvert de mèches. Bien reconnaître impérativement les critères ci-dessus avant toute cueillette, en raison des confusions possibles avec de petites lépiotes toxiques.", risk: "edible" },
    macrolepiota_mastoidea: { genus: "Lépiote mamelonnée (Macrolepiota mastoidea)", note: "Espèce plus grêle (8-15 cm), pied non chiné, écailles brunes bien délimitées sur le chapeau.", risk: "edible" },
    macrolepiota_excoriata: { genus: "Lépiote excoriée (Macrolepiota excoriata)", note: "Comme la précédente mais écailles pâles, visibles surtout au bord d'un chapeau presque lisse.", risk: "edible" },
    chlorophyllum: { genus: "Lépiote déguenillée (Chlorophyllum rhacodes / C. brunneum)", note: "Grande espèce à mèches, pied non chiné, chair rougissant nettement à la cassure. Les deux espèces se ressemblant beaucoup et C. brunneum étant une cause fréquente de troubles digestifs, la plus grande prudence est recommandée.", risk: "caution" },
    leucoagaricus_leucothites: { genus: "Lépiote pudique (Leucoagaricus leucothites)", note: "Espèce blanche des pelouses, lames blanches devenant roses en vieillissant, rappelant un agaric des champs. Cause fréquente de confusions, prudence recommandée.", risk: "caution" },
    leucoagaricus_barsii: { genus: "Lépiote à racine (Leucoagaricus barsii)", note: "Espèce grise, chapeau méchuleux-cotonneux, pied nettement radicant.", risk: "unknown" },
    lepiota_laevigata: { genus: "Lépiote lisse (Lepiota laevigata)", note: "Toute petite espèce (1-5 cm), pied couvert de guirlandes cotonneuses, chapeau pâle ocre/crème presque lisse, souvent dans l'herbe. Comme toutes les petites lépiotes, à laisser sur place.", risk: "toxic" },
    lepiota_clypeolaria: { genus: "Lépiote en bouclier (Lepiota clypeolaria)", note: "Comme la précédente mais plus colorée, écailles concentriques bien nettes, plutôt en forêt. Comme toutes les petites lépiotes, à laisser sur place.", risk: "toxic" },
    lepiota_felina: { genus: "Lépiote féline (Lepiota felina)", note: "Toute petite espèce à anneau net parfois suspendu au bord du chapeau, écailles brun foncé à noirâtres. Contient les mêmes toxines que les amanites mortelles.", risk: "deadly" },
    lepiota_cristata: { genus: "Lépiote à crête (Lepiota cristata)", note: "Comme la précédente mais écailles ocre à roussâtres. Petite lépiote à hauts risques.", risk: "deadly" },

    /* ---------- espèces de Cystodermes (et voisin) ---------- */
    cystoderme_amianthinum: { genus: "Cystoderme amiantacé (Cystoderma amianthinum)", note: "Pousse en troupes l'été et l'automne dans la mousse, en bois ou en lande humide et acide. Chapeau ocre-rouille de 3-6 cm, en cloche puis aplati avec un mamelon, surface granuleuse devenant floconneuse vers la marge, lames crème puis jaunâtre pâle, chair mince à forte odeur de moisi.", risk: "unknown" },
    cystoderme_carcharias: { genus: "Cystoderme requin (Cystoderma carcharias)", note: "Chapeau de 3-5 cm, lilas clair à rosé, pied granulé comme le chapeau, avec un feston de peluches séparables rappelant des dents de requin. Assez rare.", risk: "unknown" },
    cystoderme_cinnabarinum: { genus: "Cystoderme cinabre (Cystoderma cinnabarinum)", note: "Espèce rare des bois humides et résineux, assez charnue (jusqu'à 8 cm), d'un rouge vermillon vif, chapeau et pied restant granuleux, anneau fugace.", risk: "unknown" },
    phaeolepiota_aurea: { genus: "Pholiote dorée (Phaeolepiota aurea)", note: "Espèce montagnarde rare mais bon comestible, atteignant 15 à 20 cm, tout fauve doré ; ressemble à un gros cystoderme mais porte un anneau ample et persistant, lames ocre puis rouillées. Ne pas confondre avec les cystodermes eux-mêmes, sans intérêt culinaire.", risk: "edible" },

    /* ---------- espèces d'Agarics ---------- */
    agaric_campestris: { genus: "Agaric champêtre (Agaricus campestris)", note: "Chair ne rougissant ni ne jaunissant, pied aminci à la base, anneau ténu vite disparu, pousse dans l'herbe. Le classique \u00ab rosé des prés \u00bb.", risk: "edible" },
    agaric_bitorquis: { genus: "Agaric des trottoirs (Agaricus bitorquis)", note: "Chair très ferme rougissant à la coupe, anneau qui paraît double (façon poulie), pousse souvent en terrain piétiné.", risk: "edible" },
    agaric_bernardii: { genus: "Agaric des prés salés (Agaricus bernardii)", note: "Chair rougissante, anneau remontant sur le pied comme une chaussette, odeur désagréable.", risk: "edible" },
    agaric_silvaticus: { genus: "Agaric sylvatique (Agaricus silvaticus)", note: "Chair rougissant très nettement et rapidement, odeur agréable, anneau simple retombant.", risk: "edible" },
    agaric_impudicus: { genus: "Agaric impudique (Agaricus impudicus)", note: "Rougissement faible et lent, précédé d'un léger jaunissement, anneau simple retombant. Moins connu, prudence recommandée.", risk: "caution" },
    agaric_moelleri: { genus: "Agaric pintade (Agaricus moelleri)", note: "Chapeau couvert d'abondantes mèches gris cendré, jaunit à la cassure. Toxique, provoque des troubles digestifs.", risk: "toxic" },
    agaric_augustus: { genus: "Agaric auguste (Agaricus augustus)", note: "Grande espèce au chapeau couvert de mèches brun-fauve, jaunissement lent et localisé, odeur agréable souvent anisée.", risk: "edible" },
    agaric_silvicola: { genus: "Agaric sylvicole (Agaricus silvicola)", note: "Espèce moyenne et forestière, chapeau lisse un peu jaunâtre, jaunissement lent et localisé, anneau double denté, odeur anisée.", risk: "edible" },
    agaric_arvensis: { genus: "Agaric des jachères (Agaricus arvensis)", note: "Comme le précédent mais souvent plus gros, poussant plutôt dans les lieux herbeux.", risk: "edible" },
    agaric_xanthodermus: { genus: "Agaric jaunissant (Agaricus xanthodermus)", note: "Jaunissement intense et rapide à la base du pied et à la cassure, odeur souvent désagréable (phénol/encre), chapeau d'abord trapézoïdal puis étalé, pied à bulbe irrégulier. Cause fréquente de troubles digestifs.", risk: "toxic" },
  },
};
