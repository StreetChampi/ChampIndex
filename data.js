/* Champi — données générées par le back-office */
window.CHAMPI_DATA = {
  "start": "q_ring",
  "nodes": {
    "q_ring": {
      "question": "Le pied porte-t-il un anneau (une membrane en collerette autour du pied) ?",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui",
          "next": "q_volva_after_ring_yes"
        },
        {
          "label": "Non",
          "next": "q_volva_after_ring_no"
        }
      ]
    },
    "q_volva_after_ring_yes": {
      "question": "Vois-tu aussi, à la base du pied, une volve nette (sac ou bourrelet), ou des restes floconneux, écailleux ou verruqueux qui pourraient en être les vestiges ?",
      "hint": "Creuse légèrement la terre si besoin. C'est un signe important : plusieurs amanites dangereuses portent aussi un anneau.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui, l'un ou l'autre",
          "next": "q_amanite_volva_type"
        },
        {
          "label": "Non, rien de tout ça",
          "next": "q_ring_separation"
        }
      ]
    },
    "q_volva_after_ring_no": {
      "question": "Vois-tu, à la base du pied, une volve nette (sac membraneux ou gros bourrelet) ?",
      "hint": "Creuse légèrement la terre avant de conclure à son absence.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui",
          "next": "q_volva_gills"
        },
        {
          "label": "Non",
          "next": "q_noring_separation"
        }
      ]
    },
    "q_volva_gills": {
      "question": "Les lames sont-elles blanches, ou plutôt roses ?",
      "options": [
        {
          "label": "Blanches",
          "next": "q_amanite_volva_type"
        },
        {
          "label": "Roses",
          "next": "q_volvaire_texture"
        }
      ]
    },
    "q_volvaire_texture": {
      "question": "Le chapeau est-il nettement gluant ou visqueux, en milieu rudéral (jardins, décombres, champs, bords de route, jachères) plutôt qu'en forêt ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "volvaire_gluante"
          }
        },
        {
          "label": "Non",
          "next": {
            "result": "volvaire"
          }
        }
      ]
    },
    "q_ring_separation": {
      "question": "Le chapeau se sépare-t-il facilement du pied, un peu comme si on le dévissait ?",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui, il se détache nettement",
          "next": "q_ring_sep_scales"
        },
        {
          "label": "Non, pied et chapeau ne font qu'un",
          "next": "q_ring_fused_texture"
        }
      ]
    },
    "q_ring_sep_scales": {
      "question": "Le chapeau porte-t-il des écailles nettes ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_lepiote_size"
        },
        {
          "label": "Non, chapeau plutôt lisse",
          "next": "q_agaric_flesh"
        }
      ]
    },
    "q_ring_fused_texture": {
      "question": "Le chapeau est-il nettement visqueux ou gluant au toucher ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_ring_fused_visc_color"
        },
        {
          "label": "Non, chapeau sec",
          "next": "q_ring_fused_dry_habitat"
        }
      ]
    },
    "q_ring_fused_visc_color": {
      "question": "Les lames sont-elles brun violacé à noirâtres, ou plutôt blanches ?",
      "options": [
        {
          "label": "Brun violacé à noirâtres",
          "next": {
            "group": "groupe_muolg0ol_9j1j"
          }
        },
        {
          "label": "Blanches",
          "next": {
            "result": "mucidule"
          }
        }
      ]
    },
    "q_ring_fused_dry_habitat": {
      "question": "Le champignon pousse-t-il sur du bois (souche, tronc, racine) ?",
      "options": [
        {
          "label": "Oui, sur du bois",
          "next": "q_ring_fused_dry_wood"
        },
        {
          "label": "Non, à même le sol",
          "next": "q_ring_fused_dry_soil"
        }
      ]
    },
    "q_ring_fused_dry_wood": {
      "question": "Comment décrirais-tu la surface du chapeau ?",
      "options": [
        {
          "label": "Écailleux, souvent en touffes",
          "next": {
            "result": "pholiote"
          }
        },
        {
          "label": "Finement mèché, couleur miel, grosses touffes à la base d'un arbre",
          "next": {
            "result": "armillaire"
          }
        },
        {
          "label": "Fibrilleux, couleurs vives orangées à jaunes",
          "next": {
            "result": "gymnopile"
          }
        },
        {
          "label": "Lisse, change nettement de couleur en séchant",
          "next": {
            "result": "kuehneromyces"
          }
        }
      ]
    },
    "q_ring_fused_dry_soil": {
      "question": "Le chapeau est-il petit, granuleux ou comme poudré, l'espèce poussant isolée ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_cystoderme_color"
        },
        {
          "label": "Non",
          "next": "q_ring_fused_dry_soil2"
        }
      ]
    },
    "q_ring_fused_dry_soil2": {
      "question": "Le chapeau a-t-il tendance à noircir et à se liquéfier avec l'âge (comme de l'encre) ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "coprin"
          }
        },
        {
          "label": "Non",
          "next": "q_ring_fused_dry_soil3"
        }
      ]
    },
    "q_ring_fused_dry_soil3": {
      "question": "Le chapeau semble-t-il recouvert d'une fine poudre blanchâtre, espèce de bonne taille ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "pholiote_ridee"
          }
        },
        {
          "label": "Non, chapeau lisse et brun",
          "next": {
            "result": "agrocybe"
          }
        }
      ]
    },
    "q_noring_separation": {
      "question": "Le chapeau se sépare-t-il facilement du pied ?",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui, il se détache nettement",
          "next": "q_noring_sep_next"
        },
        {
          "label": "Non, pied et chapeau ne font qu'un",
          "next": "q_noring_fused_latex"
        }
      ]
    },
    "q_noring_sep_next": {
      "question": "Les lames sont-elles blanches, ou plutôt roses ?",
      "options": [
        {
          "label": "Blanches",
          "next": {
            "result": "limacelle"
          }
        },
        {
          "label": "Roses, souvent sur bois",
          "next": "q_pluteus_color"
        }
      ]
    },
    "q_pluteus_color": {
      "question": "De quelle couleur est le chapeau ?",
      "hint": "Genre reconnu par ses lames libres virant au rose, sans anneau ni volve, poussant sur bois mort.",
      "options": [
        {
          "label": "Jaune vif, entièrement velouté, petit chapeau (2-5 cm)",
          "next": {
            "result": "pluteus_leoninus"
          }
        },
        {
          "label": "Brun brillant et soyeux, fibrilles plus foncées au centre (8-12 cm)",
          "next": "q_pluteus_cervinus_check"
        },
        {
          "label": "Gris verdâtre (environ 8 cm)",
          "next": {
            "result": "pluteus_salicinus"
          }
        },
        {
          "label": "Blanc, centre ocré et crevassé, grande espèce (jusqu'à 20 cm)",
          "next": {
            "result": "pluteus_patricien"
          }
        },
        {
          "label": "Entièrement blanc, sur bois de résineux",
          "next": {
            "result": "pluteus_blanc"
          }
        },
        {
          "label": "Cendré, à veines saillantes, petit (3-4 cm)",
          "next": {
            "result": "pluteus_cendre"
          }
        },
        {
          "label": "Rouge vif devenant orangé",
          "next": {
            "result": "pluteus_rouge"
          }
        },
        {
          "label": "Aucune de ces couleurs ne correspond bien",
          "next": {
            "result": "plutee"
          }
        }
      ]
    },
    "q_pluteus_cervinus_check": {
      "question": "L'arête des lames est-elle colorée de brun-noir, chapeau squameux, plutôt en montagne sur conifères ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "pluteus_atromarginatus"
          }
        },
        {
          "label": "Non, odeur nette de radis, sur bois de feuillus",
          "next": {
            "result": "pluteus_cervinus"
          }
        }
      ]
    },
    "q_noring_fused_latex": {
      "question": "Un latex (sorte de lait) s'écoule-t-il quand tu casses ou coupes une lame ?",
      "hint": "Nécessite de casser un morceau du champignon.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui",
          "next": "q_lactaire_lait_color"
        },
        {
          "label": "Non",
          "next": "q_noring_russule_check"
        }
      ]
    },
    "q_noring_habitat": {
      "question": "Le champignon pousse-t-il sur du bois (tronc, souche, branche) ?",
      "options": [
        {
          "label": "Oui, sur du bois",
          "next": "q_noring_wood_gills"
        },
        {
          "label": "Non, à même le sol",
          "next": "q_noring_soil_next"
        }
      ]
    },
    "q_noring_wood_gills": {
      "question": "Le pied est-il très court, absent, ou le chapeau nettement excentré (en éventail) ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_noring_wood_excentric_size"
        },
        {
          "label": "Non, pied net et central",
          "next": "q_noring_wood_central_gills"
        }
      ]
    },
    "q_noring_wood_excentric_size": {
      "question": "L'espèce est-elle charnue et de bonne taille ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "pleurote"
          }
        },
        {
          "label": "Non, plutôt petite ou coriace",
          "next": "q_noring_wood_excentric_split"
        }
      ]
    },
    "q_noring_wood_excentric_split": {
      "question": "Les lames semblent-elles fendues en deux sur leur longueur ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "schizophylle"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_wood_excentric_tiny"
        }
      ]
    },
    "q_noring_wood_excentric_tiny": {
      "question": "Très petite espèce, presque sans pied (moins de 3 cm) ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "crepidote"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_wood_excentric_edge"
        }
      ]
    },
    "q_noring_wood_excentric_edge": {
      "question": "L'arête des lames est-elle visiblement dentelée ou crénelée ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "lentin"
          }
        },
        {
          "label": "Non, arête lisse",
          "next": {
            "result": "panellus"
          }
        }
      ]
    },
    "q_noring_wood_central_gills": {
      "question": "Les lames descendent-elles nettement sur le pied (décurrentes) ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_noring_wood_central_decurrent_color"
        },
        {
          "label": "Non, lames échancrées ou libres",
          "next": "q_noring_wood_central_attached"
        }
      ]
    },
    "q_noring_wood_central_decurrent_color": {
      "question": "Les couleurs sont-elles vives et orangées, ou plutôt ternes (brun, jaunâtre) ?",
      "options": [
        {
          "label": "Vives et orangées",
          "next": {
            "result": "omphalot"
          }
        },
        {
          "label": "Ternes",
          "next": {
            "result": "armillaire"
          }
        }
      ]
    },
    "q_noring_wood_central_attached": {
      "question": "Espèce fragile et petite, pied très fin ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "mycene"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_wood_central_tuft"
        }
      ]
    },
    "q_noring_wood_central_tuft": {
      "question": "Pousse en touffe dense, couleurs jaune-vert à brunes ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "hypholome"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_wood_central_other"
        }
      ]
    },
    "q_noring_wood_central_other": {
      "question": "Couleurs brun rouille, pied bien net et formé ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "gymnopile"
          }
        },
        {
          "label": "Non, petite espèce fragile au chapeau sec",
          "next": {
            "result": "galerine"
          }
        }
      ]
    },
    "q_noring_soil_next": {
      "question": "Le champignon pousse-t-il sur du crottin, du fumier, ou en toute petite taille dans l'herbe ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_noring_soil_dung"
        },
        {
          "label": "Non",
          "next": "q_noring_soil_general"
        }
      ]
    },
    "q_noring_soil_dung": {
      "question": "Pousse-t-il directement sur crottin ou fumier ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_noring_soil_dung_margin"
        },
        {
          "label": "Non, plutôt dans l'herbe",
          "next": "q_noring_soil_grass"
        }
      ]
    },
    "q_noring_soil_dung_margin": {
      "question": "La marge du chapeau est-elle crénelée et déborde-t-elle nettement des lames ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "panéole"
          }
        },
        {
          "label": "Non, marge droite",
          "next": {
            "result": "psilocybe"
          }
        }
      ]
    },
    "q_noring_soil_grass": {
      "question": "Le chapeau est-il visqueux et jaune ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "bolbitie"
          }
        },
        {
          "label": "Non, chapeau sec et conique",
          "next": {
            "result": "conocybe"
          }
        }
      ]
    },
    "q_noring_soil_general": {
      "question": "Vois-tu une cortine (voile fin façon toile d'araignée) entre le bord du chapeau et le pied, au moins chez les sujets jeunes ?",
      "hint": "La cortine est fragile et peut avoir disparu chez un sujet âgé.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui",
          "next": "q_noring_soil_cortina"
        },
        {
          "label": "Non",
          "next": "q_noring_soil_nocortina"
        }
      ]
    },
    "q_noring_soil_cortina": {
      "question": "Les lames sont-elles de couleur rouille ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "cortinaire"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_soil_cortina2"
        }
      ]
    },
    "q_noring_soil_cortina2": {
      "question": "Le chapeau est-il sec, fibrilleux à squameux, souvent conique ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "inocybe"
          }
        },
        {
          "label": "Non, plutôt visqueux et convexe",
          "next": {
            "result": "hebelome"
          }
        }
      ]
    },
    "q_noring_soil_nocortina": {
      "question": "Le chapeau a-t-il tendance à noircir et à se liquéfier avec l'âge (comme de l'encre) ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "coprin"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_soil_decurrent"
        }
      ]
    },
    "q_noring_soil_decurrent": {
      "question": "Les lames descendent-elles nettement sur le pied (décurrentes) ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_noring_soil_decurrent2"
        },
        {
          "label": "Non, lames échancrées ou libres",
          "next": "q_noring_soil_nondecurrent"
        }
      ]
    },
    "q_noring_soil_decurrent2": {
      "question": "Les lames sont-elles en réalité de simples plis peu profonds et ramifiés ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "chanterelle"
          }
        },
        {
          "label": "Non, vraies lames",
          "next": "q_noring_soil_decurrent3"
        }
      ]
    },
    "q_noring_soil_decurrent3": {
      "question": "Les lames sont-elles épaisses et bien espacées ?",
      "options": [
        {
          "label": "Cireuses, couleurs vives, se détachent facilement du chapeau",
          "next": {
            "result": "hygrophore"
          }
        },
        {
          "label": "Brunes, se détachant en bloc comme une membrane, se tachant en brun au toucher",
          "next": {
            "result": "paxille"
          }
        },
        {
          "label": "Non, lames plutôt fines",
          "next": "q_noring_soil_decurrent4"
        }
      ]
    },
    "q_noring_soil_decurrent4": {
      "question": "Les lames sont-elles fines, souvent fourchues, se détachant facilement du chapeau et de couleur orangée ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "fausse_chanterelle"
          }
        },
        {
          "label": "Non, lames serrées et non détachables, couleurs ternes",
          "next": {
            "result": "clitocybe"
          }
        },
        {
          "label": "Non, lames roses, chair charnue",
          "next": {
            "result": "clitopile"
          }
        }
      ]
    },
    "q_noring_soil_nondecurrent": {
      "question": "Le pied a-t-il la même consistance charnue que le chapeau (ni fin ni cassant) ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_noring_soil_fleshy"
        },
        {
          "label": "Non, pied grêle, cartilagineux ou coriace",
          "next": "q_noring_soil_thin"
        }
      ]
    },
    "q_noring_soil_fleshy": {
      "question": "Les lames sont-elles très échancrées et se détachent-elles facilement en bloc du chapeau ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "lepiste"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_soil_fleshy2"
        }
      ]
    },
    "q_noring_soil_fleshy2": {
      "question": "Le chapeau est-il épais et bien charnu, lames échancrées ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "tricholome"
          }
        },
        {
          "label": "Non, chapeau plus mince, parfois un petit mamelon",
          "next": {
            "result": "melanoleuque"
          }
        }
      ]
    },
    "q_noring_soil_thin": {
      "question": "Les lames sont-elles épaisses et bien espacées, couleurs souvent roses ou lilas ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "laccaire"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_soil_thin2"
        }
      ]
    },
    "q_noring_soil_thin2": {
      "question": "Le chapeau est-il coriace, capable de se dessécher puis de reprendre forme après la pluie ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "marasme"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_soil_thin3"
        }
      ]
    },
    "q_noring_soil_thin3": {
      "question": "Le pied résiste-t-il bien à la torsion, chapeau peu charnu ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "collybie"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_soil_thin4"
        }
      ]
    },
    "q_noring_soil_thin4": {
      "question": "Le chapeau est-il très visqueux, avec un long pied souvent enraciné en profondeur ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "xerule"
          }
        },
        {
          "label": "Non",
          "next": "q_noring_soil_thin5"
        }
      ]
    },
    "q_noring_soil_thin5": {
      "question": "Les lames sont-elles roses à maturité ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "entolome"
          }
        },
        {
          "label": "Non, lames blanchâtres à grisâtres",
          "next": "q_noring_soil_thin6"
        }
      ]
    },
    "q_noring_soil_thin6": {
      "question": "Espèce fragile au chapeau mince, souvent en groupe, lames devenant grises à noirâtres ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_psathyrelle_cortina"
        },
        {
          "label": "Non",
          "next": {
            "group": "groupe_muon67ik_1psl"
          }
        }
      ]
    },
    "q_psathyrelle_cortina": {
      "question": "Le pied porte-t-il une cortine nette, en filaments, qui noircit avec la chute des spores ?",
      "hint": "Genre très fourni (une centaine d'espèces en France), souvent identifiable seulement au microscope : cette clé ne couvre que les cas les plus reconnaissables sur le terrain.",
      "options": [
        {
          "label": "Oui",
          "next": "q_psathyrelle_lacrymaria_size"
        },
        {
          "label": "Non",
          "next": "q_psathyrelle_habitat"
        }
      ]
    },
    "q_psathyrelle_lacrymaria_size": {
      "question": "Le chapeau mesure-t-il plutôt 6 à 10 cm, dans l'herbe des talus, bords de chemins ou lieux découverts ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "lacrymaire_veloutee"
          }
        },
        {
          "label": "Non, plus petit (5-8 cm), teinte orangée vive comme le feu, plutôt en forêt",
          "next": {
            "result": "lacrymaire_rouge"
          }
        }
      ]
    },
    "q_psathyrelle_habitat": {
      "question": "Où pousse le champignon ?",
      "options": [
        {
          "label": "Sur souche ou tronc, en gros amas où les chapeaux se recouvrent",
          "next": "q_psathyrelle_hygrophane"
        },
        {
          "label": "En touffe dense mais à même le sol, dans l'herbe ou en sous-bois",
          "next": {
            "result": "psathyrelle_cespiteuse"
          }
        },
        {
          "label": "Isolé ou en petit groupe sur souche ou bois enfoui",
          "next": "q_psathyrelle_veil"
        }
      ]
    },
    "q_psathyrelle_hygrophane": {
      "question": "Le chapeau change-t-il nettement de couleur en séchant (brun luisant humide, devenant terne et pâle au sec) ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "psathyrelle_hydrophile"
          }
        },
        {
          "label": "Non, chapeau plus charnu, brun rougeâtre, marge nue sans voile",
          "next": {
            "result": "psathyrelle_chataine"
          }
        }
      ]
    },
    "q_psathyrelle_veil": {
      "question": "La marge du chapeau porte-t-elle des restes floconneux de voile qui se fissurent facilement, le chapeau passant d'une teinte ocre jeune à blanc crème ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "psathyrelle_de_candolle"
          }
        },
        {
          "label": "Non, rien de tel",
          "next": {
            "result": "psathyrelle"
          }
        }
      ]
    },
    "q_amanite_volva_type": {
      "question": "La volve (ou ce qu'il en reste) est-elle une membrane bien nette qui glisse librement, parfois en laissant de larges lambeaux sur le chapeau, ou plutôt collée et friable, avec des écailles ou verrues sur le chapeau ?",
      "hint": "Genre à très haut risque : certaines espèces sont parmi les plus mortelles d'Europe. Observe chaque détail avec soin avant de répondre.",
      "options": [
        {
          "label": "Volve libre et membraneuse",
          "next": "q_amanite_free_ring"
        },
        {
          "label": "Volve collée/friable, écailles ou verrues sur le chapeau",
          "next": "q_amanite_warty_bulb"
        }
      ]
    },
    "q_amanite_free_ring": {
      "question": "Le pied porte-t-il un anneau membraneux bien ample et retombant ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_amanite_ring_color"
        },
        {
          "label": "Non, pas d'anneau, marge du chapeau striée/cannelée",
          "next": "q_amanite_striate"
        }
      ]
    },
    "q_amanite_ring_color": {
      "question": "Le chapeau, les lames, le pied et l'anneau sont-ils tous d'un jaune orangé uniforme ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_caesarea"
          }
        },
        {
          "label": "Non, plutôt blancs ou d'une autre teinte",
          "next": "q_amanite_ring_white"
        }
      ]
    },
    "q_amanite_ring_white": {
      "question": "Le chapeau est-il finement rayé de fibrilles sombres sur un fond verdâtre ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_phalloides"
          }
        },
        {
          "label": "Non, chapeau blanc sans fibrilles",
          "next": "q_amanite_white_shape"
        }
      ]
    },
    "q_amanite_white_shape": {
      "question": "L'espèce est-elle grosse, avec un chapeau ovoïde et un pied pelucheux ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_amanite_white_volva_color"
        },
        {
          "label": "Non, espèce moyenne",
          "next": "q_amanite_white_medium"
        }
      ]
    },
    "q_amanite_white_volva_color": {
      "question": "La volve est-elle blanche, ou plutôt teintée de roux ?",
      "allowUnknown": true,
      "options": [
        {
          "label": "Blanche",
          "next": {
            "result": "amanite_ovoidea"
          }
        },
        {
          "label": "Rousse",
          "next": {
            "result": "amanite_proxima"
          }
        }
      ]
    },
    "q_amanite_white_medium": {
      "question": "Le chapeau est-il plat, avec un pied assez peu pelucheux ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_verna"
          }
        },
        {
          "label": "Non, chapeau plutôt conique, pied bien pelucheux",
          "next": {
            "result": "amanite_virosa"
          }
        }
      ]
    },
    "q_amanite_striate": {
      "question": "Le voile général est-il friable, laissant de larges plaques épaisses et grisâtres sur le pied et le chapeau ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_ceciliae"
          }
        },
        {
          "label": "Non, volve engainante bien persistante",
          "next": "q_amanite_vaginata_color"
        }
      ]
    },
    "q_amanite_vaginata_color": {
      "question": "De quelle couleur est le chapeau ?",
      "options": [
        {
          "label": "Orangé",
          "next": "q_amanite_orange_stem"
        },
        {
          "label": "Gris",
          "next": {
            "result": "amanite_vaginata"
          }
        },
        {
          "label": "Brun",
          "next": {
            "result": "amanite_battarrae"
          }
        },
        {
          "label": "Jaunâtre",
          "next": {
            "result": "amanite_lividopallescens"
          }
        }
      ]
    },
    "q_amanite_orange_stem": {
      "question": "Le pied est-il nettement zébré d'orange, ou plutôt blanc uni ?",
      "options": [
        {
          "label": "Zébré d'orange",
          "next": {
            "result": "amanite_crocea"
          }
        },
        {
          "label": "Blanc uni",
          "next": {
            "result": "amanite_fulva"
          }
        }
      ]
    },
    "q_amanite_warty_bulb": {
      "question": "Le pied présente-t-il un bulbe net à sa base ?",
      "hint": "Il est parfois nécessaire de dégager un peu le pied pour bien voir la forme du bulbe.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Non, pas de bulbe net, volve très fugace",
          "next": {
            "result": "amanite_eliae"
          }
        },
        {
          "label": "Oui",
          "next": "q_amanite_bulb_type"
        }
      ]
    },
    "q_amanite_bulb_type": {
      "question": "Comment décrirais-tu le bulbe à la base du pied ?",
      "allowUnknown": true,
      "options": [
        {
          "label": "Marginé (rebord net), avec une odeur de radis",
          "next": "q_amanite_margine"
        },
        {
          "label": "Marqué de bourrelets ou de petits flocons",
          "next": "q_amanite_bourrelets"
        },
        {
          "label": "En forme d'oignon simple, sans marge ni bourrelets marqués",
          "next": "q_amanite_oignon"
        }
      ]
    },
    "q_amanite_margine": {
      "question": "Le chapeau est-il citrin ou blanc, à bord lisse, avec un anneau bien persistant ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_citrina"
          }
        },
        {
          "label": "Non, chapeau brun pourpré à bord strié, anneau fugace violacé",
          "next": {
            "result": "amanite_porphyrea"
          }
        }
      ]
    },
    "q_amanite_bourrelets": {
      "question": "De quelle couleur est le chapeau ?",
      "options": [
        {
          "label": "Rouge vif, couvert de verrues blanches",
          "next": {
            "result": "amanite_muscaria"
          }
        },
        {
          "label": "Brun, verrues blanches, 2 à 3 bourrelets nets au-dessus du bulbe",
          "next": {
            "result": "amanite_pantherina"
          }
        },
        {
          "label": "Jaune, bord strié, anneau fugace blanc",
          "next": {
            "result": "amanite_junquillea"
          }
        },
        {
          "label": "Blanc",
          "next": "q_amanite_white_big"
        }
      ]
    },
    "q_amanite_white_big": {
      "question": "Les écailles sont-elles larges et aplaties, avec un anneau plutôt farineux ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_solitaria"
          }
        },
        {
          "label": "Non, petites écailles pointues, anneau fugace",
          "next": {
            "result": "amanite_echinocephala"
          }
        }
      ]
    },
    "q_amanite_oignon": {
      "question": "La chair vire-t-elle au vineux/rougeâtre à la moindre blessure ?",
      "hint": "Nécessite d'entamer légèrement la chair.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_rubescens"
          }
        },
        {
          "label": "Non",
          "next": "q_amanite_oignon2"
        }
      ]
    },
    "q_amanite_oignon2": {
      "question": "La chair brunit-elle (brun madère) à la piqûre, avec des écailles jaunes sur le chapeau ?",
      "hint": "Nécessite d'entamer légèrement la chair.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_franchetii"
          }
        },
        {
          "label": "Non, chair qui reste blanche, écailles grises",
          "next": "q_amanite_excelsa"
        }
      ]
    },
    "q_amanite_excelsa": {
      "question": "Le chapeau est-il gris bistre, l'allure trapue, avec une odeur de radis ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "amanite_excelsa_spissa"
          }
        },
        {
          "label": "Non, chapeau bistré pâle, allure élancée, odeur faible",
          "next": {
            "result": "amanite_excelsa_excelsa"
          }
        }
      ]
    },
    "q_lepiote_size": {
      "question": "Quelle allure correspond le mieux à ton champignon ?",
      "hint": "Prudence particulière : les petites lépiotes (moins de 5 cm) comptent parmi les champignons les plus dangereux, avec des toxines identiques à celles des amanites mortelles.",
      "options": [
        {
          "label": "Très petit, jaune vif, dans un pot de fleurs ou une serre",
          "next": {
            "result": "leucoagaricus_flos_sulfuris"
          }
        },
        {
          "label": "Petit à moyen, avec de nombreuses écailles brunes bien visibles",
          "next": "q_lepiote_echinoderma"
        },
        {
          "label": "Grand ou moyen, avec un large chapeau et un anneau qui peut coulisser sur le pied",
          "next": "q_lepiote_macro"
        },
        {
          "label": "Moyen, plutôt blanc à gris, avec un aspect cotonneux sur le chapeau et le pied",
          "next": "q_lepiote_leucoagaricus"
        },
        {
          "label": "Très petit (1 à 5 cm), avec un anneau fragile ou difficile à voir",
          "next": "q_lepiote_petite"
        }
      ]
    },
    "q_lepiote_echinoderma": {
      "question": "Le pied est-il comme guêtré, pour une petite espèce d'environ 6 cm ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "echinoderma_echinaceum"
          }
        },
        {
          "label": "Non, plutôt moyenne (~12 cm) avec un anneau bien retombant",
          "next": {
            "result": "echinoderma_asperum"
          }
        }
      ]
    },
    "q_lepiote_macro": {
      "question": "La chair rougit-elle nettement à la cassure ?",
      "hint": "Nécessite d'entamer légèrement la chair.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "chlorophyllum"
          }
        },
        {
          "label": "Non",
          "next": "q_lepiote_macro_pied"
        }
      ]
    },
    "q_lepiote_macro_pied": {
      "question": "Le pied est-il chiné (zébré de bandes), le chapeau mamelonné et mèché, pour une grande espèce de 20 à 30 cm ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "macrolepiota_procera"
          }
        },
        {
          "label": "Non, espèce plus grêle (8-15 cm), pied non chiné",
          "next": "q_lepiote_macro_scales"
        }
      ]
    },
    "q_lepiote_macro_scales": {
      "question": "Les écailles du chapeau sont-elles brunes et bien délimitées ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "macrolepiota_mastoidea"
          }
        },
        {
          "label": "Non, écailles pâles visibles surtout au bord",
          "next": {
            "result": "macrolepiota_excoriata"
          }
        }
      ]
    },
    "q_lepiote_leucoagaricus": {
      "question": "L'espèce est-elle blanche, poussant en pelouse, lames devenant roses en vieillissant ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "leucoagaricus_leucothites"
          }
        },
        {
          "label": "Non, plutôt grise, chapeau cotonneux, pied nettement radicant",
          "next": {
            "result": "leucoagaricus_barsii"
          }
        }
      ]
    },
    "q_lepiote_petite": {
      "question": "Le pied est-il couvert de petites guirlandes cotonneuses, plutôt qu'un vrai anneau ?",
      "options": [
        {
          "label": "Oui, guirlandes cotonneuses",
          "next": "q_lepiote_petite_guirlande"
        },
        {
          "label": "Non, anneau net, parfois suspendu au bord du chapeau",
          "next": "q_lepiote_petite_anneau"
        }
      ]
    },
    "q_lepiote_petite_guirlande": {
      "question": "Espèce pâle, ocre ou crème, chapeau presque lisse, plutôt dans l'herbe ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "lepiota_laevigata"
          }
        },
        {
          "label": "Non, plus colorée, écailles concentriques nettes, plutôt en forêt",
          "next": {
            "result": "lepiota_clypeolaria"
          }
        }
      ]
    },
    "q_lepiote_petite_anneau": {
      "question": "Les écailles sont-elles brun foncé à noirâtres ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "lepiota_felina"
          }
        },
        {
          "label": "Non, écailles ocre à roussâtres",
          "next": {
            "result": "lepiota_cristata"
          }
        }
      ]
    },
    "q_cystoderme_color": {
      "question": "De quelle couleur et de quelle taille est le chapeau ?",
      "hint": "Petit groupe sans intérêt culinaire notable, mais un genre voisin (la pholiote dorée) leur ressemble beaucoup et se révèle être un bon comestible.",
      "options": [
        {
          "label": "Ocre-rouille, en cloche puis aplati avec un mamelon, odeur forte de moisi",
          "next": {
            "result": "cystoderme_amianthinum"
          }
        },
        {
          "label": "Lilas clair à rosé",
          "next": {
            "result": "cystoderme_carcharias"
          }
        },
        {
          "label": "Rouge vermillon vif",
          "next": {
            "result": "cystoderme_cinnabarinum"
          }
        },
        {
          "label": "Fauve doré, grosse espèce (15-20 cm), anneau ample et persistant",
          "next": {
            "result": "phaeolepiota_aurea"
          }
        }
      ]
    },
    "q_agaric_flesh": {
      "question": "La chair change-t-elle de couleur à la cassure, au frottement ou à l'air ?",
      "hint": "Nécessite d'entamer légèrement la chair. Vérifie aussi qu'il n'y a aucune volve à la base du pied et que les lames sont roses puis brun chocolat (jamais durablement blanches) : c'est ce qui distingue un vrai agaric d'une amanite jeune ou d'une lépiote blanche.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Non, elle ne change pas de couleur",
          "next": {
            "result": "agaric_campestris"
          }
        },
        {
          "label": "Elle rougit",
          "next": "q_agaric_red"
        },
        {
          "label": "Elle jaunit",
          "next": "q_agaric_yellow"
        }
      ]
    },
    "q_agaric_red": {
      "question": "La chair est-elle très ferme, avec un anneau qui paraît double (façon poulie), sur une espèce qui pousse souvent en terrain piétiné (chemins, trottoirs) ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "agaric_bitorquis"
          }
        },
        {
          "label": "Non, anneau simple",
          "next": "q_agaric_red_ring"
        }
      ]
    },
    "q_agaric_red_ring": {
      "question": "L'anneau remonte-t-il sur le pied comme une chaussette, avec une odeur désagréable ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "agaric_bernardii"
          }
        },
        {
          "label": "Non, l'anneau retombe plutôt comme une jupe",
          "next": "q_agaric_red_speed"
        }
      ]
    },
    "q_agaric_red_speed": {
      "question": "Le rougissement est-il très net et rapide, avec une odeur agréable ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "agaric_silvaticus"
          }
        },
        {
          "label": "Non, rougissement faible et lent, précédé d'un léger jaunissement",
          "next": {
            "result": "agaric_impudicus"
          }
        }
      ]
    },
    "q_agaric_yellow": {
      "question": "Le chapeau est-il couvert d'abondantes mèches gris cendré ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "agaric_moelleri"
          }
        },
        {
          "label": "Non, chapeau lisse ou à mèches pâles/brunes/fauves",
          "next": "q_agaric_yellow_scales"
        }
      ]
    },
    "q_agaric_yellow_scales": {
      "question": "Le chapeau est-il couvert de mèches brun-fauve, pour une grande espèce ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "agaric_augustus"
          }
        },
        {
          "label": "Non, chapeau lisse ou à quelques mèches gris pâle",
          "next": "q_agaric_yellow_speed"
        }
      ]
    },
    "q_agaric_yellow_speed": {
      "question": "Le jaunissement est-il lent et localisé, avec un anneau double denté et une odeur agréable, souvent anisée ?",
      "options": [
        {
          "label": "Oui",
          "next": "q_agaric_yellow_habitat"
        },
        {
          "label": "Non, jaunissement intense et rapide, anneau simple, odeur souvent désagréable, chapeau d'abord trapézoïdal puis étalé, pied à bulbe irrégulier",
          "next": {
            "result": "agaric_xanthodermus"
          }
        }
      ]
    },
    "q_agaric_yellow_habitat": {
      "question": "Espèce plutôt moyenne et forestière, chapeau lisse et un peu jaunâtre ?",
      "options": [
        {
          "label": "Oui",
          "next": {
            "result": "agaric_silvicola"
          }
        },
        {
          "label": "Non, souvent plus grosse, poussant plutôt dans les lieux herbeux",
          "next": {
            "result": "agaric_arvensis"
          }
        }
      ]
    },
    "q_muolg0ol_eubf": {
      "question": "Quelle est la couleur du chapeau et la taille du pied ?",
      "hint": "",
      "allowUnknown": true,
      "options": [
        {
          "label": "Vert-de-gris à bleu-vert",
          "next": {
            "result": "espece_muolx1o6_psm2"
          }
        },
        {
          "label": "Jaune clair à ocre",
          "next": "q_muom82fz_sbqr"
        },
        {
          "label": "Blanc bleuté avec un petit pied (2-3 cm)",
          "next": {
            "result": "espece_muomq728_kve1"
          }
        }
      ]
    },
    "q_muom82fz_sbqr": {
      "question": "Où pousse le champignon ?",
      "hint": "",
      "allowUnknown": true,
      "options": [
        {
          "label": "Sur une crotte, du fumier, ou un pré récemment épendu",
          "next": {
            "result": "espece_muombtgy_qywh"
          }
        },
        {
          "label": "Dans de l'herbe",
          "next": {
            "result": "espece_muomh9ld_8zj2"
          }
        },
        {
          "label": "Dans les bois, sur des souches ou du bois enterré",
          "next": {
            "result": "espece_muomwb2y_re6b"
          }
        }
      ]
    },
    "q_lactaire_lait_color": {
      "question": "Quelle est la couleur du lait juste après la cassure ? Attends ensuite quelques minutes pour voir s'il change.",
      "hint": "Observe une lame cassée, puis le lait sur la lame ou sur la chair. La couleur peut évoluer en séchant.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Orange vif ou rouge dès le départ",
          "next": "q_lactaire_orange"
        },
        {
          "label": "Blanc, puis il reste blanc",
          "next": "q_lactaire_white_stable"
        },
        {
          "label": "Blanc, puis il change de couleur",
          "next": "q_lactaire_white_change"
        },
        {
          "label": "Autre couleur ou observation incertaine",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_orange": {
      "question": "Sous quel arbre pousse le lactaire orangé ?",
      "allowUnknown": true,
      "options": [
        {
          "label": "Sous un pin",
          "next": "q_lactaire_pine_orange"
        },
        {
          "label": "Sous un sapin",
          "next": {
            "result": "lactaire_saumon"
          }
        },
        {
          "label": "Sous un épicéa ; chapeau orangé qui verdit vite",
          "next": {
            "result": "lactaire_detestable"
          }
        },
        {
          "label": "Sous mélèze ou autre conifère / arbre inconnu",
          "next": "q_lactaire_orange_other"
        }
      ]
    },
    "q_lactaire_jaune": {
      "question": "Quel caractère correspond le mieux ?",
      "options": [
        {
          "label": "Chapeau jaune fauve zoné ; le lait blanc jaunit très rapidement et nettement",
          "next": {
            "result": "lactaire_lait_jaune"
          }
        },
        {
          "label": "Grosse espèce à marge laineuse, pied à nombreuses fossettes ; chair jaunissant citron",
          "next": {
            "result": "lactaire_scrobicule"
          }
        },
        {
          "label": "Petit chapeau crème-orangé ridé autour d'un mamelon, milieu tourbeux sous bouleaux",
          "next": {
            "result": "lactaire_chiffonne"
          }
        },
        {
          "label": "Chapeau brun-rouge foncé, sous pinèdes ou pessières ; lait blanc jaunissant lentement",
          "next": {
            "result": "lactaire_hepatique"
          }
        },
        {
          "label": "Autre aspect / doute",
          "next": "q_lactaire_habitat"
        }
      ],
      "allowUnknown": true
    },
    "q_lactaire_violet": {
      "question": "Le chapeau est-il jaune clair, ou beige-grisâtre ?",
      "options": [
        {
          "label": "Jaune clair ; les parties blessées deviennent violettes",
          "next": {
            "result": "lactaire_jaunatre"
          }
        },
        {
          "label": "Beige, gris ou roussâtre pâle, en milieu humide",
          "next": {
            "result": "lactaire_humide"
          }
        },
        {
          "label": "Autre aspect ou doute",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_latex_pale": {
      "question": "Quel profil correspond le mieux à votre observation ?",
      "options": [
        {
          "label": "Chapeau très visqueux gris-brun/olivâtre, sous hêtre ; lait gris-vert en séchant",
          "next": {
            "result": "lactaire_muqueux"
          }
        },
        {
          "label": "Grand chapeau brun olivâtre presque noir, très visqueux ; le document le signale toxique",
          "next": {
            "result": "lactaire_plombe"
          }
        },
        {
          "label": "Lait très abondant qui brunit lentement ; chapeau orangé roux velouté, odeur forte d'artichaut",
          "next": {
            "result": "vachotte"
          }
        },
        {
          "label": "Chapeau blanc, très large et velouté, lait blanc abondant très âcre",
          "next": {
            "result": "lactaire_veloute"
          }
        },
        {
          "label": "Chapeau crème zoné d'orange rosâtre, feuillus calcaires, lait blanc très poivré",
          "next": {
            "result": "lactaire_zone"
          }
        },
        {
          "label": "Chapeau rose orangé zoné et couvert de toison sous bouleaux",
          "next": {
            "result": "lactaire_toison"
          }
        },
        {
          "label": "Chapeau très pâle, feutré, peu ou pas zoné, sous bouleaux",
          "next": {
            "result": "lactaire_pubescent"
          }
        },
        {
          "label": "Chapeau orange vif brillant, sous mélèze ; lait blanc âcre",
          "next": {
            "result": "lactaire_melezes"
          }
        },
        {
          "label": "Chapeau orange vif non zoné, sous épicéa en montagne ; lait blanc",
          "next": {
            "result": "lactaire_fauve_orange"
          }
        },
        {
          "label": "Chapeau sec gris/brun, chair rosissant lentement, sous feuillus humides",
          "next": {
            "result": "lactaire_fuligineux"
          }
        },
        {
          "label": "Autre profil / doute",
          "next": "q_lactaire_habitat"
        }
      ],
      "allowUnknown": true
    },
    "q_lactaire_habitat": {
      "question": "Quel indice de terrain correspond le mieux ?",
      "options": [
        {
          "label": "Sous noisetier ; chapeau jaunâtre-gris/olive, lait blanc abondant et brûlant",
          "next": {
            "result": "lactaire_lait_brule"
          }
        },
        {
          "label": "Chapeau crème zoné d'orange rosâtre, feuillus calcaires",
          "next": {
            "result": "lactaire_zone"
          }
        },
        {
          "label": "Chapeau orangé, sous conifères",
          "next": "q_lactaire_orange"
        },
        {
          "label": "Je ne reconnais pas de profil assez net",
          "next": {
            "result": "lactaire"
          }
        }
      ]
    },
    "q_lactaire_pine_orange": {
      "question": "Le lait est-il rouge sang, ou plutôt orange carotte ?",
      "options": [
        {
          "label": "Rouge sang",
          "next": {
            "result": "lactaire_sanguin"
          }
        },
        {
          "label": "Orange carotte",
          "next": "q_lactaire_pine_orange2"
        },
        {
          "label": "Difficile à distinguer",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_pine_orange2": {
      "question": "Le lait reste-t-il orange, ou devient-il brun vineux en quelques minutes ?",
      "options": [
        {
          "label": "Il reste orange ou change très lentement ; chapeau assez vif",
          "next": {
            "result": "lactaire_delicieux"
          }
        },
        {
          "label": "Il devient brun vineux ; chapeau plus terne, brunâtre",
          "next": {
            "result": "lactaire_quieticolor"
          }
        },
        {
          "label": "Je ne peux pas trancher",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_orange_other": {
      "question": "Quel profil correspond le mieux ?",
      "options": [
        {
          "label": "Sous mélèze, en montagne ; chapeau orange brillant",
          "next": {
            "result": "lactaire_melezes"
          }
        },
        {
          "label": "Sous d'autres conifères ; chapeau orange vif",
          "next": {
            "result": "lactaire_fauve_orange"
          }
        },
        {
          "label": "Je ne sais pas",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_white_stable": {
      "question": "Quelle description du chapeau correspond le mieux ?",
      "options": [
        {
          "label": "Blanc et très velouté, grande espèce",
          "next": {
            "result": "lactaire_veloute"
          }
        },
        {
          "label": "Blanc crème, lisse et un peu visqueux, sous hêtres",
          "next": {
            "result": "lactaire_pale"
          }
        },
        {
          "label": "Uniquement sous peupliers/saules ; chapeau rosissant et lames rosées",
          "next": {
            "result": "lactaire_controverse"
          }
        },
        {
          "label": "Rose-orangé, zoné et laineux au bord, sous bouleaux",
          "next": {
            "result": "lactaire_toison"
          }
        },
        {
          "label": "Très pâle, laineux, peu ou pas zoné, sous bouleaux",
          "next": {
            "result": "lactaire_pubescent"
          }
        },
        {
          "label": "Orange, fauve, brun-roux ou d'une autre couleur",
          "next": "q_lactaire_white_stable_colored"
        },
        {
          "label": "Aucun profil ne correspond",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_white_stable_colored": {
      "question": "Quel caractère complémentaire remarques-tu ?",
      "options": [
        {
          "label": "Odeur forte de noix de coco ; sous bouleaux",
          "next": {
            "result": "lactaire_coco"
          }
        },
        {
          "label": "Odeur de chicorée ; petit chapeau brun rougeâtre",
          "next": {
            "result": "lactaire_chicoree"
          }
        },
        {
          "label": "Odeur de punaise ; surtout sous chênes",
          "next": {
            "result": "lactaire_tranquille"
          }
        },
        {
          "label": "Chapeau brun-roux mat, comme du caoutchouc ; plutôt sous hêtres",
          "next": {
            "result": "lactaire_doucetre"
          }
        },
        {
          "label": "Chapeau brun très sombre, ridé et rugueux",
          "next": {
            "result": "lactaire_ride"
          }
        },
        {
          "label": "Sous conifères, chapeau brun-roux à brun sombre",
          "next": "q_lactaire_conifer_brown"
        },
        {
          "label": "Autre aspect ou doute",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_conifer_brown": {
      "question": "Le lactaire pousse-t-il sous mélèze, pin ou épicéa ?",
      "options": [
        {
          "label": "Sous mélèze, chapeau orangé",
          "next": {
            "result": "lactaire_melezes"
          }
        },
        {
          "label": "Sous pin, chapeau brun rouge foncé",
          "next": {
            "result": "lactaire_hepatique"
          }
        },
        {
          "label": "Sous épicéa, chapeau orange vif",
          "next": {
            "result": "lactaire_fauve_orange"
          }
        },
        {
          "label": "Je ne sais pas",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_white_change": {
      "question": "Comment le lait blanc évolue-t-il après quelques minutes ?",
      "options": [
        {
          "label": "Il jaunit rapidement (environ 10 secondes)",
          "next": "q_lactaire_yellow_fast"
        },
        {
          "label": "Il jaunit lentement ou à peine",
          "next": {
            "result": "lactaire_chiffonne"
          }
        },
        {
          "label": "Il devient rose",
          "next": {
            "result": "lactaire_fuligineux"
          }
        },
        {
          "label": "Il devient violet",
          "next": "q_lactaire_violet"
        },
        {
          "label": "Il devient brun sombre, gris-vert ou vert olive",
          "next": "q_lactaire_dark_change"
        },
        {
          "label": "Je ne peux pas observer l'évolution",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_yellow_fast": {
      "question": "Quel est l'habitat et l'aspect du chapeau ?",
      "options": [
        {
          "label": "Sous chênes ; chapeau chamois rosé à saumoné",
          "next": {
            "result": "lactaire_lait_jaune"
          }
        },
        {
          "label": "Sous épicéas ; grosse espèce à marge laineuse et pied à fossettes",
          "next": {
            "result": "lactaire_scrobicule"
          }
        },
        {
          "label": "Je ne retrouve pas ces caractères",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_lactaire_dark_change": {
      "question": "Quel aspect correspond le mieux ?",
      "options": [
        {
          "label": "Chapeau brun olivâtre très sombre, presque noir et visqueux",
          "next": {
            "result": "lactaire_plombe"
          }
        },
        {
          "label": "Chapeau brun orangé à roux, lait abondant, odeur d'artichaut",
          "next": {
            "result": "vachotte"
          }
        },
        {
          "label": "Chapeau très visqueux gris-brun/olivâtre, sous hêtres",
          "next": {
            "result": "lactaire_muqueux"
          }
        },
        {
          "label": "Chapeau sec gris/brun, chair rosissant à la coupe",
          "next": {
            "result": "lactaire_fuligineux"
          }
        },
        {
          "label": "Autre aspect ou doute",
          "next": "q_lactaire_habitat"
        }
      ]
    },
    "q_noring_russule_check": {
      "question": "La chair est-elle grenue et cassante comme un bâton de craie, sans aucun lait à la cassure ?",
      "hint": "Les russules ont une chair très cassante. Si tu n'es pas sûr, poursuis la clé générale.",
      "allowUnknown": true,
      "options": [
        {
          "label": "Oui, chair grenue et cassante",
          "next": "q_russule_group"
        },
        {
          "label": "Non ou incertain",
          "next": "q_noring_habitat"
        }
      ]
    },
    "q_russule_group": {
      "question": "Quel est le caractère le plus évident ?",
      "options": [
        {
          "label": "Chair rougissant puis noircissant, ou noircissant directement",
          "next": "q_russule_blackening"
        },
        {
          "label": "Chapeau blanchâtre à ochracé pâle, nettement creusé au centre",
          "next": {
            "result": "russule_sans_lait"
          }
        },
        {
          "label": "Chair douce ; pied parfois rose, violacé ou jaune",
          "next": "q_russule_soft_colored_stem"
        },
        {
          "label": "Chair douce ; pied blanc, chapeau vert ou verdâtre",
          "next": "q_russule_green"
        },
        {
          "label": "Chair douce ; pied blanc, chapeau non vert",
          "next": "q_russule_soft_white_stem"
        },
        {
          "label": "Chair piquante/âcre",
          "next": "q_russule_pungent"
        }
      ]
    },
    "q_russule_blackening": {
      "question": "La chair rougit-elle avant de noircir ?",
      "options": [
        {
          "label": "Oui, elle rougit puis noircit",
          "next": "q_russule_red_then_black"
        },
        {
          "label": "Non, elle noircit directement",
          "next": {
            "result": "russule_blanche_et_noire"
          }
        },
        {
          "label": "Je ne sais pas",
          "next": {
            "result": "russule_noircissante"
          }
        }
      ]
    },
    "q_russule_red_then_black": {
      "question": "Les lames sont-elles très espacées ou serrées ?",
      "options": [
        {
          "label": "Très espacées",
          "next": {
            "result": "russule_noircissante"
          }
        },
        {
          "label": "Serrées",
          "next": {
            "result": "russule_a_lames_denses"
          }
        }
      ]
    },
    "q_russule_soft_colored_stem": {
      "question": "Quelle couleur du pied ou des lames est la plus caractéristique ?",
      "options": [
        {
          "label": "Pied jaune citron, chapeau orangé vif, arête des lames jaune vif",
          "next": {
            "result": "russule_doree"
          }
        },
        {
          "label": "Pied rose/violacé et chair très ferme, chapeau rose-rouge",
          "next": {
            "result": "russule_jolie"
          }
        },
        {
          "label": "Odeur de crustacé cuit et chair brunissante",
          "next": {
            "result": "russule_feuille_morte"
          }
        },
        {
          "label": "Pied rose en haut sous les lames, lames ochracées/jaunes",
          "next": {
            "result": "russule_olivacee"
          }
        },
        {
          "label": "Pied rose en bas, lames jaune ocré",
          "next": {
            "result": "russule_alutacee"
          }
        },
        {
          "label": "Autre profil",
          "next": "q_russule_soft_white_stem"
        }
      ]
    },
    "q_russule_green": {
      "question": "Les lames sont-elles souples et lardacées, ou cassantes ?",
      "options": [
        {
          "label": "Souples, lardacées",
          "next": {
            "result": "russule_charbonniere"
          }
        },
        {
          "label": "Cassantes ; chapeau mat, craquelé et pruineux",
          "next": {
            "result": "russule_verdoyante"
          }
        },
        {
          "label": "Cassantes ; lames fourchues-anastomosées près du pied",
          "next": {
            "result": "russule_a_lames_fourchues"
          }
        },
        {
          "label": "Cassantes ; chapeau vert, chair un peu piquante dans les lames",
          "next": {
            "result": "russule_vert_de_gris"
          }
        }
      ]
    },
    "q_russule_soft_white_stem": {
      "question": "Quel groupe de caractères correspond le mieux ?",
      "options": [
        {
          "label": "Lames lardacées",
          "next": {
            "result": "russule_charbonniere"
          }
        },
        {
          "label": "Sous conifères ; grosse espèce ferme, saveur de noisette",
          "next": {
            "result": "russule_des_epiceas"
          }
        },
        {
          "label": "Chapeau mamelonné, lisse et satiné, sous conifères",
          "next": {
            "result": "russule_bleue"
          }
        },
        {
          "label": "Chapeau mat/pruineux, odeur d'iode à la base du pied",
          "next": {
            "result": "russule_de_turco"
          }
        },
        {
          "label": "Lames jaunes à ocre",
          "next": "q_russule_yellow_gills"
        },
        {
          "label": "Lames blanches/crème ; chapeau brun-rose",
          "next": {
            "result": "russule_comestible"
          }
        },
        {
          "label": "Lames blanches/crème ; chapeau gris-vert à gris-bleu",
          "next": {
            "result": "russule_bleu_vert"
          }
        },
        {
          "label": "Chair jaunissante, odeur de miel en vieillissant",
          "next": {
            "result": "russule_a_odeur_de_miel"
          }
        },
        {
          "label": "Autre profil",
          "next": "q_russule_pungent"
        }
      ]
    },
    "q_russule_yellow_gills": {
      "question": "Quelle teinte dominent les lames et le chapeau ?",
      "options": [
        {
          "label": "Lames jaune vif, chapeau orangé vif",
          "next": {
            "result": "russule_doree"
          }
        },
        {
          "label": "Lames jaune ocre vif, chapeau variable",
          "next": {
            "result": "russule_cameleon"
          }
        },
        {
          "label": "Lames jaunes, chapeau rouge-pourpre ou violacé",
          "next": {
            "result": "russule_sardoine"
          }
        }
      ]
    },
    "q_russule_pungent": {
      "question": "Quelle couleur domine le chapeau ?",
      "options": [
        {
          "label": "Gris, gris-bleu ou verdâtre",
          "next": "q_russule_grey_pungent"
        },
        {
          "label": "Ocre, brun-jaune ou jaune verdâtre",
          "next": "q_russule_ochre_pungent"
        },
        {
          "label": "Rouge à rose",
          "next": "q_russule_red_pungent"
        },
        {
          "label": "Pourpre, violacé à noirâtre",
          "next": "q_russule_purple_pungent"
        },
        {
          "label": "Blanchâtre à ochracé pâle, nettement déprimé",
          "next": {
            "result": "russule_sans_lait"
          }
        }
      ]
    },
    "q_russule_grey_pungent": {
      "question": "Le chapeau est-il gris-bleu sombre/pruineux ou vert ?",
      "options": [
        {
          "label": "Gris-vert à gris-bleu sombre, pruineux",
          "next": {
            "result": "russule_bleu_vert"
          }
        },
        {
          "label": "Verdâtre",
          "next": {
            "result": "russule_vert_de_gris"
          }
        }
      ]
    },
    "q_russule_ochre_pungent": {
      "question": "Le chapeau est-il plutôt jaune non visqueux, ou ocre-brun visqueux et fortement cannelé ?",
      "options": [
        {
          "label": "Jaune, non visqueux, bord lisse",
          "next": {
            "result": "russule_ocre_et_blanche"
          }
        },
        {
          "label": "Ocre-brun, visqueux, bord cannelé et odeur désagréable",
          "next": {
            "result": "russule_fetide"
          }
        }
      ]
    },
    "q_russule_red_pungent": {
      "question": "Quelle caractéristique accompagne le chapeau rouge à rose ?",
      "options": [
        {
          "label": "Lames parfaitement blanches, odeur sucrée-vanillée typique",
          "next": {
            "result": "russule_emetique_des_chenes"
          }
        },
        {
          "label": "Lames crème, sous chênes, chair jaunissante",
          "next": {
            "result": "russule_couleur_de_peche"
          }
        },
        {
          "label": "Sous bouleaux, chapeau vite décoloré",
          "next": {
            "result": "russule_palissante"
          }
        },
        {
          "label": "Lames jaunes, chapeau rouge et orangé taché de rouille",
          "next": {
            "result": "russule_maculee"
          }
        }
      ]
    },
    "q_russule_purple_pungent": {
      "question": "Les lames sont-elles blanches ou jaunes ?",
      "options": [
        {
          "label": "Jaunes",
          "next": {
            "result": "russule_sardoine"
          }
        },
        {
          "label": "Blanches ; arête finement denticulée",
          "next": {
            "result": "russule_fragile"
          }
        },
        {
          "label": "Blanches ; sous pins, surtout",
          "next": {
            "result": "russule_des_pinedes"
          }
        },
        {
          "label": "Blanches ; sous feuillus, surtout chênes",
          "next": {
            "result": "russule_pourpre_et_noire"
          }
        }
      ]
    }
  },
  "results": {
    "limacelle": {
      "genus": "Limacelle (Limacella)",
      "note": "Proche des amanites mais sans écailles nettes ni volve, souvent visqueuse.",
      "family": "Amanitaceae",
      "genusTax": "Limacella",
      "edibility": "",
      "confusions": []
    },
    "armillaire": {
      "genus": "Armillaire (Armillaria)",
      "note": "Pousse en touffes sur bois ou souches, pied souvent mèché, couleur miel à brune.",
      "family": "Physalacriaceae",
      "genusTax": "Armillaria",
      "edibility": "",
      "confusions": []
    },
    "mucidule": {
      "genus": "Mucidule (Mucidula / Oudemansiella mucida)",
      "note": "Chapeau blanc très visqueux, pousse en touffes sur bois, notamment le hêtre.",
      "family": "Physalacriaceae",
      "genusTax": "Mucidula",
      "edibility": "",
      "confusions": []
    },
    "mycene": {
      "genus": "Mycène (Mycena)",
      "note": "Petites espèces fragiles, pied fin, souvent sur bois ou litière.",
      "family": "Mycenaceae",
      "genusTax": "Mycena",
      "edibility": "",
      "confusions": []
    },
    "omphalot": {
      "genus": "Omphalot (Omphalotus)",
      "note": "Couleurs orangées vives, pousse en touffes sur bois ; peut être confondu avec la chanterelle mais est toxique.",
      "family": "Omphalotaceae",
      "genusTax": "Omphalotus",
      "edibility": "",
      "confusions": []
    },
    "pleurote": {
      "genus": "Pleurote (Pleurotus)",
      "note": "Grande espèce charnue en éventail, pied très court ou nul, sur bois.",
      "family": "Pleurotaceae",
      "genusTax": "Pleurotus",
      "edibility": "",
      "confusions": []
    },
    "panellus": {
      "genus": "Panellus",
      "note": "Petite espèce coriace, arête des lames fine et entière, sur bois.",
      "family": "Panellaceae",
      "genusTax": "Panellus",
      "edibility": "",
      "confusions": []
    },
    "lentin": {
      "genus": "Lentin / Lentinelle (Lentinus, Lentinellus)",
      "note": "Espèce coriace à arête des lames crénelée, sur bois.",
      "family": "Polyporaceae",
      "genusTax": "Lentinus",
      "edibility": "",
      "confusions": []
    },
    "lactaire": {
      "genus": "Lactaire (Lactarius)",
      "note": "Reconnaissable au latex qui perle à la coupe des lames ; sa couleur et son goût orientent l'espèce précise.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "edibility": "",
      "confusions": []
    },
    "chanterelle": {
      "genus": "Chanterelle / Craterelle (Cantharellus, Craterellus)",
      "note": "Lames remplacées par de simples plis peu profonds et ramifiés.",
      "family": "Cantharellaceae",
      "genusTax": "Cantharellus",
      "edibility": "",
      "confusions": []
    },
    "hygrophore": {
      "genus": "Hygrophore (Hygrophorus)",
      "note": "Lames épaisses et espacées, chapeau souvent visqueux par temps humide.",
      "family": "Hygrophoraceae",
      "genusTax": "Hygrophorus",
      "edibility": "",
      "confusions": []
    },
    "fausse_chanterelle": {
      "genus": "Fausse chanterelle (Hygrophoropsis)",
      "note": "Lames fines, fourchues, orangées ; ressemble à la chanterelle mais lames bien détachables.",
      "family": "Hygrophoropsidaceae",
      "genusTax": "Hygrophoropsis",
      "edibility": "",
      "confusions": []
    },
    "tricholome": {
      "genus": "Tricholome (Tricholoma)",
      "note": "Chapeau charnu, lames échancrées ; genre très vaste incluant des espèces comestibles et d'autres toxiques.",
      "family": "Tricholomataceae",
      "genusTax": "Tricholoma",
      "edibility": "",
      "confusions": []
    },
    "melanoleuque": {
      "genus": "Mélanoleuque (Melanoleuca)",
      "note": "Chapeau mince, souvent avec un petit mamelon central.",
      "family": "Tricholomataceae",
      "genusTax": "Melanoleuca",
      "edibility": "",
      "confusions": []
    },
    "clitocybe": {
      "genus": "Clitocybe (Clitocybe)",
      "note": "Lames serrées et non détachables ; genre comportant des espèces dangereuses, prudence particulière.",
      "family": "Tricholomataceae",
      "genusTax": "Clitocybe",
      "edibility": "",
      "confusions": []
    },
    "laccaire": {
      "genus": "Laccaire (Laccaria)",
      "note": "Lames et lamelles épaisses, très espacées, couleurs souvent rosées ou lilas.",
      "family": "Hydnangiaceae",
      "genusTax": "Laccaria",
      "edibility": "",
      "confusions": []
    },
    "marasme": {
      "genus": "Marasme (Marasmius)",
      "note": "Chapeau coriace qui se dessèche sans pourrir et peut reprendre forme après la pluie.",
      "family": "Marasmiaceae",
      "genusTax": "Marasmius",
      "edibility": "",
      "confusions": []
    },
    "collybie": {
      "genus": "Collybie (Collybia / Gymnopus)",
      "note": "Pied résistant à la torsion, chapeau peu charnu.",
      "family": "Omphalotaceae",
      "genusTax": "Collybia",
      "edibility": "",
      "confusions": []
    },
    "xerule": {
      "genus": "Xérule (Xerula)",
      "note": "Chapeau très visqueux, long pied souvent enraciné.",
      "family": "Physalacriaceae",
      "genusTax": "Xerula",
      "edibility": "",
      "confusions": []
    },
    "volvaire": {
      "genus": "Volvaire (Volvariella)",
      "note": "Volve nette à la base, lames roses, pas d'anneau.",
      "family": "Pluteaceae",
      "genusTax": "Volvariella",
      "edibility": "",
      "confusions": []
    },
    "plutee": {
      "genus": "Plutée (Pluteus)",
      "note": "Pas de volve, pousse le plus souvent sur bois mort, lames roses.",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "",
      "confusions": []
    },
    "volvaire_gluante": {
      "genus": "Volvaire gluante",
      "latin": "Volvopluteus gloiocephalus (D.C.) Justo = Volvariella gloiocephala",
      "chapeau": "5 à 10 cm, d'abord en cloche puis étalé et mamelonné, surface gluante et lisse, marge se striant à la fin ; couleur variable, le plus souvent gris fumé, parfois blanc ou brun jaunâtre.",
      "pied": "Élancé, nu et lisse, 12 à 16 cm ou plus, blanc ou grisâtre ; volve persistante en gaine déchirée en lobes, souvent en partie enterrée.",
      "lames": "Libres, serrées, larges ; blanches à la sortie de la volve, puis rose clair, enfin brunâtres.",
      "chair": "Mince, blanche, molle, odeur et saveur faibles de radis.",
      "habitat": "Milieu rudéral : jardins, lieux fumés, décombres, jachères, champs, bords de route ; fréquente en été et surtout aux premiers froids d'automne.",
      "confusions": [],
      "risk": "edible",
      "family": "",
      "genusTax": "",
      "edibility": "edible"
    },
    "pluteus_leoninus": {
      "genus": "Plutée couleur de lion (Pluteus leoninus)",
      "note": "Occasionnelle sur souches ou bois mort humide de feuillus, en été et automne. Chapeau petit (2-5 cm), d'un jaune vif entièrement velouté. Pied grêle et élancé (5-7 cm), blanc, teinté de jaune à la base. Lames crème puis rosées, à arête généralement jaune. Chair mince, blanchâtre.",
      "risk": "inedible",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "inedible",
      "confusions": []
    },
    "pluteus_cervinus": {
      "genus": "Plutée couleur de cerf (Pluteus cervinus)",
      "note": "Espèce commune dès le début de l'été et en automne, sur bois pourrissant et vieilles souches de feuillus. Chapeau de 8 à 12 cm, vite plan, brun brillant et soyeux, à fines fibrilles rayonnantes plus foncées au centre. Pied cylindrique strié (7-10 cm), souvent inséré latéralement sur des troncs couchés puis se redressant, habillé de petites mèches brunes vers la base. Lames libres, blanches puis nettement rose sale. Chair blanche, à odeur nette de radis.",
      "risk": "inedible",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "inedible",
      "confusions": []
    },
    "pluteus_atromarginatus": {
      "genus": "Plutée à arêtes noires (Pluteus atromarginatus)",
      "note": "Proche du plutée couleur de cerf mais bien plus foncé, venant surtout sur conifères en montagne. Chapeau squameux ; arête des lames colorée de brun-noir.",
      "risk": "unknown",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "unknown",
      "confusions": []
    },
    "pluteus_patricien": {
      "genus": "Plutée patricien (Pluteus petasatus)",
      "note": "Une des plus grandes espèces du genre, atteignant parfois 20 cm. Chapeau blanc, à centre ocré et crevassé, légèrement odorant. Croît sur la sciure ou les souches mortes.",
      "risk": "unknown",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "unknown",
      "confusions": []
    },
    "pluteus_salicinus": {
      "genus": "Plutée du saule (Pluteus salicinus)",
      "note": "Taille moyenne, chapeau gris verdâtre large d'environ 8 cm, pied blanc. Vient sur souches de feuillus, en particulier de saules.",
      "risk": "unknown",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "unknown",
      "confusions": []
    },
    "pluteus_cendre": {
      "genus": "Plutée cendré (Pluteus thomsonii)",
      "note": "Petite espèce à chapeau de teinte cendrée, large de 3 à 4 cm, marqué de veines saillantes en réseau. Sur souches.",
      "risk": "unknown",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "unknown",
      "confusions": []
    },
    "pluteus_blanc": {
      "genus": "Plutée blanc (Pluteus pellitus)",
      "note": "De même taille que le plutée cendré mais entièrement blanc. Croît sur débris de bois de résineux.",
      "risk": "unknown",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "unknown",
      "confusions": []
    },
    "pluteus_rouge": {
      "genus": "Plutée rouge (Pluteus aurantiorugosus)",
      "note": "Espèce rare au chapeau rouge vif devenant orangé, le pied se teintant aussi d'orangé à la base. Sur souches de feuillus.",
      "risk": "unknown",
      "family": "Pluteaceae",
      "genusTax": "Pluteus",
      "edibility": "unknown",
      "confusions": []
    },
    "clitopile": {
      "genus": "Clitopile (Clitopilus)",
      "note": "Espèce charnue terrestre, lames décurrentes, teinte rosée.",
      "family": "Entolomataceae",
      "genusTax": "Clitopilus",
      "edibility": "",
      "confusions": []
    },
    "schizophylle": {
      "genus": "Schizophylle (Schizophyllum)",
      "note": "Petite espèce coriace sur bois, lames fendues sur leur longueur.",
      "family": "Schizophyllaceae",
      "genusTax": "Schizophyllum",
      "edibility": "",
      "confusions": []
    },
    "lepiste": {
      "genus": "Lépiste (Lepista)",
      "note": "Chapeau et pied charnus, lames très échancrées et facilement détachables.",
      "family": "Tricholomataceae",
      "genusTax": "Lepista",
      "edibility": "",
      "confusions": []
    },
    "entolome": {
      "genus": "Entolome (Entoloma)",
      "note": "Pied grêle et cartilagineux, lames rosissant à maturité ; genre à hauts risques, certaines espèces sont mortelles.",
      "family": "Entolomataceae",
      "genusTax": "Entoloma",
      "edibility": "",
      "confusions": []
    },
    "rhodocybe": {
      "genus": "Rhodocybe (Rhodocybe)",
      "note": "Proche des clitocybes mais à teinte rosée.",
      "family": "Entolomataceae",
      "genusTax": "Rhodocybe",
      "edibility": "",
      "confusions": []
    },
    "coprin": {
      "genus": "Coprin (Coprinus et genres voisins)",
      "note": "Chapeau qui a tendance à noircir et à se liquéfier avec l'âge.",
      "family": "Psathyrellaceae",
      "genusTax": "Coprinus",
      "edibility": "",
      "confusions": []
    },
    "hypholome": {
      "genus": "Hypholome (Hypholoma)",
      "note": "Pousse en touffes denses sur bois, couleurs vives.",
      "family": "Strophariaceae",
      "genusTax": "Hypholoma",
      "edibility": "",
      "confusions": []
    },
    "psathyrelle": {
      "genus": "Psathyrelle (Psathyrella)",
      "note": "Espèce fragile poussant à terre sur débris végétaux, lames grisâtres à noircissantes.",
      "family": "Psathyrellaceae",
      "genusTax": "Psathyrella",
      "edibility": "",
      "confusions": []
    },
    "lacrymaire_veloutee": {
      "genus": "Lacrymaire veloutée (Lacrymaria lacrymabunda)",
      "note": "Cortine nette en filaments sur le pied, noircissant avec la chute des spores. Chapeau de 6 à 10 cm, densément couvert de fibrilles blanches à l'état jeune, se dénudant en brun ocré avec l'âge. Lames se maturant de façon irrégulière par plages, brun violacé lisérées de blanc, exsudant parfois de petites gouttelettes par temps humide. Fréquente dans l'herbe des talus, bords de chemins ou lieux découverts.",
      "risk": "inedible",
      "family": "Psathyrellaceae",
      "genusTax": "Lacrymaria",
      "edibility": "inedible",
      "confusions": []
    },
    "lacrymaire_rouge": {
      "genus": "Lacrymaire rouge (Lacrymaria pyrotricha)",
      "note": "Comme la précédente (cortine nette et noircissante sur le pied, lames se maturant par plages irrégulières) mais plus petite, chapeau de 5 à 8 cm d'une teinte orangée vive rappelant le feu, pied haut d'environ 8 cm. Plus rare, en milieu forestier.",
      "risk": "unknown",
      "family": "Psathyrellaceae",
      "genusTax": "Lacrymaria",
      "edibility": "unknown",
      "confusions": []
    },
    "psathyrelle_de_candolle": {
      "genus": "Psathyrelle de De Candolle (Psathyrella candolleana)",
      "note": "Très fréquente sur souches pourries ou bois enfoui, en touffes ou petits groupes, presque toute l'année. Chapeau jusqu'à 6 cm, légèrement ocre jeune puis blanc crème, marge portant des restes floconneux de voile qui se fissurent facilement. Lames serrées, gris rosé puis brun rougeâtre. Chair mince et fragile.",
      "risk": "inedible",
      "family": "Psathyrellaceae",
      "genusTax": "Psathyrella",
      "edibility": "inedible",
      "confusions": []
    },
    "psathyrelle_chataine": {
      "genus": "Psathyrelle châtain (Psathyrella spadicea)",
      "note": "Forme aussi de grosses touffes sur souches et troncs, mais chapeau plus charnu (5 à 10 cm), brun rougeâtre pâlissant par le sec, à marge nue, enroulée au début, sans aucun voile. Plus rare que la précédente.",
      "risk": "unknown",
      "family": "Psathyrellaceae",
      "genusTax": "Psathyrella",
      "edibility": "unknown",
      "confusions": []
    },
    "psathyrelle_hydrophile": {
      "genus": "Psathyrelle hydrophile (Psathyrella piluliformis)",
      "note": "Forme sur les souches des touffes parfois énormes où les chapeaux se recouvrent, presque toute l'année, très commune. Chapeau de 2 à 6 cm, hygrophane et très variable : brun luisant par temps humide, devenant brun terne et pâle en séchant ; voile blanc très fugace, sauf à la marge où persistent quelques restes en franges. Pied blanc, creux et cassant. Lames échancrées, serrées, blanches puis roses, enfin brun chocolat ; chair mince et fragile, odeur et saveur nulles.",
      "risk": "inedible",
      "family": "Psathyrellaceae",
      "genusTax": "Psathyrella",
      "edibility": "inedible",
      "confusions": []
    },
    "psathyrelle_cespiteuse": {
      "genus": "Psathyrelle cespiteuse (Psathyrella multipedata)",
      "note": "Ressemble un peu à la précédente mais forme des touffes très denses à même le sol plutôt que sur souche, dans les lieux herbeux et les sous-bois, et n'a presque pas de voile.",
      "risk": "unknown",
      "family": "Psathyrellaceae",
      "genusTax": "Psathyrella",
      "edibility": "unknown",
      "confusions": []
    },
    "panéole": {
      "genus": "Panéole (Panaeolus)",
      "note": "Pousse sur fumier ou crottin, marge du chapeau crénelée et débordante.",
      "family": "Bolbitiaceae",
      "genusTax": "Panaeolus",
      "edibility": "",
      "confusions": []
    },
    "psilocybe": {
      "genus": "Psilocybe (Psilocybe)",
      "note": "Marge du chapeau droite ; genre réglementé, à identifier avec beaucoup de prudence.",
      "family": "Hymenogastraceae",
      "genusTax": "Psilocybe",
      "edibility": "",
      "confusions": []
    },
    "galerine": {
      "genus": "Galérine (Galerina)",
      "note": "Petite espèce discrète à hauts risques : certaines contiennent les mêmes toxines que les amanites mortelles.",
      "family": "Hymenogastraceae",
      "genusTax": "Galerina",
      "edibility": "",
      "confusions": []
    },
    "bolbitie": {
      "genus": "Bolbitie (Bolbitius)",
      "note": "Chapeau visqueux et jaune, espèce fragile et éphémère.",
      "family": "Bolbitiaceae",
      "genusTax": "Bolbitius",
      "edibility": "",
      "confusions": []
    },
    "conocybe": {
      "genus": "Conocybe (Conocybe)",
      "note": "Chapeau conique non visqueux ; genre à hauts risques toxiques.",
      "family": "Bolbitiaceae",
      "genusTax": "Conocybe",
      "edibility": "",
      "confusions": []
    },
    "pholiote": {
      "genus": "Pholiote (Pholiota)",
      "note": "Chapeau écailleux, pousse en touffes sur bois.",
      "family": "Strophariaceae",
      "genusTax": "Pholiota",
      "edibility": "",
      "confusions": []
    },
    "gymnopile": {
      "genus": "Gymnopile (Gymnopilus)",
      "note": "Chapeau fibrilleux souvent coloré, pousse sur bois.",
      "family": "Hymenogastraceae",
      "genusTax": "Gymnopilus",
      "edibility": "",
      "confusions": []
    },
    "kuehneromyces": {
      "genus": "Kuehneromyces",
      "note": "Chapeau lisse très hygrophane (il change nettement de couleur en séchant), pousse en touffes sur bois.",
      "family": "Strophariaceae",
      "genusTax": "Kuehneromyces",
      "edibility": "",
      "confusions": []
    },
    "pholiote_ridee": {
      "genus": "Pholiote ridée",
      "note": "Chapeau semblant poudré de blanc, pousse à même le sol.",
      "family": "",
      "genusTax": "",
      "edibility": "",
      "confusions": []
    },
    "agrocybe": {
      "genus": "Agrocybe (Agrocybe)",
      "note": "Chapeau lisse et brun, terrestre ou parfois sur bois enterré.",
      "family": "Strophariaceae",
      "genusTax": "Agrocybe",
      "edibility": "",
      "confusions": []
    },
    "cortinaire": {
      "genus": "Cortinaire (Cortinarius)",
      "note": "Genre immense reconnu par sa cortine et ses lames couleur rouille ; certaines espèces sont mortelles à retardement. Prudence maximale.",
      "family": "Cortinariaceae",
      "genusTax": "Cortinarius",
      "edibility": "",
      "confusions": []
    },
    "inocybe": {
      "genus": "Inocybe (Inocybe)",
      "note": "Chapeau sec fibrilleux à squameux, souvent conique ; genre à hauts risques toxiques.",
      "family": "Inocybaceae",
      "genusTax": "Inocybe",
      "edibility": "",
      "confusions": []
    },
    "hebelome": {
      "genus": "Hébélome (Hebeloma)",
      "note": "Chapeau plus ou moins visqueux et convexe, souvent une odeur de radis.",
      "family": "Hymenogastraceae",
      "genusTax": "Hebeloma",
      "edibility": "",
      "confusions": []
    },
    "crepidote": {
      "genus": "Crépidote (Crepidotus)",
      "note": "Très petite espèce sans pied ou presque, pousse à même le bois.",
      "family": "Crepidotaceae",
      "genusTax": "Crepidotus",
      "edibility": "",
      "confusions": []
    },
    "paxille": {
      "genus": "Paxille (Paxillus)",
      "note": "Lames nettement décurrentes, se détachant en bloc ; la paxille enroulée est connue pour une toxicité retardée après consommations répétées.",
      "family": "Paxillaceae",
      "genusTax": "Paxillus",
      "edibility": "",
      "confusions": []
    },
    "amanite_ceciliae": {
      "genus": "Amanite dorée (Amanita ceciliae)",
      "note": "Volve friable laissant d'épaisses plaques grisâtres sur le pied et le chapeau, marge cannelée, pas d'anneau.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_fulva": {
      "genus": "Amanite vaginée fauve (Amanita fulva)",
      "note": "Volve engainante persistante, chapeau orangé, pied blanc non zébré, pas d'anneau.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_crocea": {
      "genus": "Amanite safran (Amanita crocea)",
      "note": "Comme la précédente mais pied nettement zébré d'orange.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_vaginata": {
      "genus": "Amanite vaginée grise (Amanita vaginata)",
      "note": "Volve engainante persistante, chapeau gris, pas d'anneau.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_battarrae": {
      "genus": "Amanite brun-jaune (Amanita battarrae)",
      "note": "Chapeau brun, pied zébré de brun, volve engainante, pas d'anneau.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_lividopallescens": {
      "genus": "Amanite pâle (Amanita lividopallescens)",
      "note": "Chapeau jaunâtre, pied zébré de jaune, volve engainante, pas d'anneau.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_caesarea": {
      "genus": "Oronge (Amanita caesarea)",
      "note": "Chapeau, lames, pied et anneau uniformément jaune orangé, volve blanche bien visible. Confusion possible au stade œuf avec la tue-mouches ou la panthère : coupe toujours le champignon en deux dans le sens de la hauteur avant de conclure.",
      "risk": "edible",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "edible",
      "confusions": []
    },
    "amanite_phalloides": {
      "genus": "Amanite phalloïde (Amanita phalloides)",
      "note": "Chapeau finement rayé de fibrilles sombres sur fond verdâtre, anneau ample et retombant, volve membraneuse à la base. Responsable de la grande majorité des intoxications mortelles en Europe.",
      "risk": "deadly",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "deadly",
      "confusions": []
    },
    "amanite_ovoidea": {
      "genus": "Amanite ovoïde (Amanita ovoidea)",
      "note": "Grosse espèce blanche, chapeau ovoïde, pied pelucheux, volve blanche épaisse.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": [
        {
          "with": "amanite_proxima",
          "clue": "La volve est le détail le plus utile : blanche et épaisse chez l’Amanite ovoïde, teintée de roux chez l’Amanite à volve rousse."
        }
      ]
    },
    "amanite_proxima": {
      "genus": "Amanite à volve rousse (Amanita proxima)",
      "note": "Comme la précédente mais volve teintée de roux.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": [
        {
          "with": "amanite_ovoidea",
          "clue": "La volve est le détail le plus utile : teintée de roux chez l’Amanite à volve rousse, blanche chez l’Amanite ovoïde."
        }
      ]
    },
    "amanite_verna": {
      "genus": "Amanite printanière (Amanita verna)",
      "note": "Tout en blanc, chapeau plat, pied peu pelucheux, anneau ample, volve membraneuse.",
      "risk": "deadly",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "deadly",
      "confusions": []
    },
    "amanite_virosa": {
      "genus": "Amanite vireuse (Amanita virosa)",
      "note": "Tout en blanc, chapeau plutôt conique, pied pelucheux, anneau ample, volve membraneuse.",
      "risk": "deadly",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "deadly",
      "confusions": []
    },
    "amanite_eliae": {
      "genus": "Amanite d'Élias (Amanita eliae)",
      "note": "Pied sans bulbe net, volve très fugace qui disparaît rapidement.",
      "risk": "unknown",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "unknown",
      "confusions": []
    },
    "amanite_citrina": {
      "genus": "Amanite citrine (Amanita citrina)",
      "note": "Chapeau citrin ou blanc à bord lisse, bulbe marginé, odeur de radis, anneau persistant.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_porphyrea": {
      "genus": "Amanite porphyre (Amanita porphyrea)",
      "note": "Chapeau brun pourpré à bord strié, bulbe marginé, odeur de radis, anneau fugace violacé.",
      "risk": "unknown",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "unknown",
      "confusions": []
    },
    "amanite_muscaria": {
      "genus": "Amanite tue-mouches",
      "latin": "Amanita muscaria (L.) Lamarck — Fausse oronge",
      "chapeau": "10 à 20 cm, étalé, d'un beau rouge vif, tout orné de verrues blanches qu'il peut perdre par temps humide (il devient alors plus orangé) ; marge se striant avec l'âge.",
      "pied": "Jusqu'à 25 cm, blanc, devenant creux et cassant, pelucheux, avec un large anneau blanc retombant ; base terminée en bulbe arrondi, cerclé de guirlandes floconneuses incomplètes et friables : ce sont les restes de la volve.",
      "lames": "Serrées, libres, assez larges, pouvant se teinter de jaune en vieillissant.",
      "chair": "Blanche, orangée sous le revêtement du chapeau, saveur douce, sans odeur particulière.",
      "habitat": "Sous feuillus comme sous résineux, sur sol acide et humide, en particulier au pied des bouleaux ; parfois aussi en pelouses arborées. Bien plus fréquente au nord, plus rare dans le Midi.",
      "confusions": [
        {
          "with": "amanite_caesarea",
          "clue": "Regardez surtout la couleur du pied et des lames et la forme de la volve : l’Oronge a le pied et les lames jaune d’or et une volve blanche en sac."
        }
      ],
      "risk": "toxic",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "toxic",
      "note": ""
    },
    "amanite_pantherina": {
      "genus": "Amanite panthère (Amanita pantherina)",
      "note": "Chapeau brun à verrues blanches, 2 à 3 bourrelets nets au-dessus du bulbe. Toxique, pouvant être grave.",
      "risk": "toxic",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "toxic",
      "confusions": []
    },
    "amanite_junquillea": {
      "genus": "Amanite jonquille (Amanita junquillea)",
      "note": "Chapeau jaune à bord strié, bulbe à bourrelets, anneau fugace blanc.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_solitaria": {
      "genus": "Amanite solitaire (Amanita solitaria)",
      "note": "Grosse espèce blanche, larges écailles aplaties, anneau plutôt farineux.",
      "risk": "unknown",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "unknown",
      "confusions": [
        {
          "with": "amanite_echinocephala",
          "clue": "Observez surtout les écailles du chapeau : larges et aplaties chez l’Amanite solitaire, petites et pointues chez l’Amanite épineuse."
        }
      ]
    },
    "amanite_echinocephala": {
      "genus": "Amanite épineuse (Amanita echinocephala)",
      "note": "Grosse espèce blanche, petites écailles pointues, anneau fugace.",
      "risk": "unknown",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "unknown",
      "confusions": [
        {
          "with": "amanite_solitaria",
          "clue": "Observez surtout les écailles du chapeau : petites et pointues chez l’Amanite épineuse, larges et aplaties chez l’Amanite solitaire."
        }
      ]
    },
    "amanite_rubescens": {
      "genus": "Golmotte (Amanita rubescens)",
      "note": "Bulbe simple en oignon, chair qui devient vineuse/rougeâtre à la moindre blessure. Toxique crue, ne se consomme que bien cuite.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_franchetii": {
      "genus": "Amanite à voile jaune (Amanita franchetii)",
      "note": "Bulbe en oignon, chair qui brunit (brun madère) à la piqûre, écailles jaunes sur le chapeau.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_excelsa_spissa": {
      "genus": "Amanite épaisse (Amanita excelsa var. spissa)",
      "note": "Bulbe en oignon, chair qui reste blanche, chapeau gris bistre, allure trapue, odeur de radis.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "amanite_excelsa_excelsa": {
      "genus": "Amanite élevée (Amanita excelsa var. excelsa)",
      "note": "Comme la précédente mais chapeau bistré pâle, allure élancée, odeur faible.",
      "risk": "caution",
      "family": "Amanitaceae",
      "genusTax": "Amanita",
      "edibility": "caution",
      "confusions": []
    },
    "leucoagaricus_flos_sulfuris": {
      "genus": "Lépiote jaune (Leucoagaricus flos-sulfuris)",
      "note": "Toute petite espèce jaune vif, typique des pots de fleurs et des serres.",
      "risk": "unknown",
      "family": "Agaricaceae",
      "genusTax": "Leucoagaricus",
      "edibility": "unknown",
      "confusions": []
    },
    "echinoderma_asperum": {
      "genus": "Lépiote hérissée (Echinoderma asperum)",
      "note": "Espèce moyenne (~12 cm), écailles pyramidales brun foncé qui se détachent facilement, anneau bien retombant.",
      "risk": "toxic",
      "family": "Agaricaceae",
      "genusTax": "Echinoderma",
      "edibility": "toxic",
      "confusions": []
    },
    "echinoderma_echinaceum": {
      "genus": "Lépiote épineuse (Echinoderma echinaceum)",
      "note": "Petite espèce (~6 cm), pied comme guêtré, écailles pyramidales brun foncé.",
      "risk": "toxic",
      "family": "Agaricaceae",
      "genusTax": "Echinoderma",
      "edibility": "toxic",
      "confusions": []
    },
    "macrolepiota_procera": {
      "genus": "Coulemelle (Macrolepiota procera)",
      "note": "Grande espèce (20-30 cm), pied chiné, chapeau mamelonné couvert de mèches. Bien reconnaître impérativement les critères ci-dessus avant toute cueillette, en raison des confusions possibles avec de petites lépiotes toxiques.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Macrolepiota",
      "edibility": "edible",
      "confusions": []
    },
    "macrolepiota_mastoidea": {
      "genus": "Lépiote mamelonnée (Macrolepiota mastoidea)",
      "note": "Espèce plus grêle (8-15 cm), pied non chiné, écailles brunes bien délimitées sur le chapeau.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Macrolepiota",
      "edibility": "edible",
      "confusions": []
    },
    "macrolepiota_excoriata": {
      "genus": "Lépiote excoriée (Macrolepiota excoriata)",
      "note": "Comme la précédente mais écailles pâles, visibles surtout au bord d'un chapeau presque lisse.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Macrolepiota",
      "edibility": "edible",
      "confusions": []
    },
    "chlorophyllum": {
      "genus": "Lépiote déguenillée (Chlorophyllum rhacodes / C. brunneum)",
      "note": "Grande espèce à mèches, pied non chiné, chair rougissant nettement à la cassure. Les deux espèces se ressemblant beaucoup et C. brunneum étant une cause fréquente de troubles digestifs, la plus grande prudence est recommandée.",
      "risk": "caution",
      "family": "Agaricaceae",
      "genusTax": "Chlorophyllum",
      "edibility": "caution",
      "confusions": []
    },
    "leucoagaricus_leucothites": {
      "genus": "Lépiote pudique (Leucoagaricus leucothites)",
      "note": "Espèce blanche des pelouses, lames blanches devenant roses en vieillissant, rappelant un agaric des champs. Cause fréquente de confusions, prudence recommandée.",
      "risk": "caution",
      "family": "Agaricaceae",
      "genusTax": "Leucoagaricus",
      "edibility": "caution",
      "confusions": []
    },
    "leucoagaricus_barsii": {
      "genus": "Lépiote à racine (Leucoagaricus barsii)",
      "note": "Espèce grise, chapeau méchuleux-cotonneux, pied nettement radicant.",
      "risk": "unknown",
      "family": "Agaricaceae",
      "genusTax": "Leucoagaricus",
      "edibility": "unknown",
      "confusions": []
    },
    "lepiota_laevigata": {
      "genus": "Lépiote lisse (Lepiota laevigata)",
      "note": "Toute petite espèce (1-5 cm), pied couvert de guirlandes cotonneuses, chapeau pâle ocre/crème presque lisse, souvent dans l'herbe. Comme toutes les petites lépiotes, à laisser sur place.",
      "risk": "toxic",
      "family": "Agaricaceae",
      "genusTax": "Lepiota",
      "edibility": "toxic",
      "confusions": []
    },
    "lepiota_clypeolaria": {
      "genus": "Lépiote en bouclier (Lepiota clypeolaria)",
      "note": "Comme la précédente mais plus colorée, écailles concentriques bien nettes, plutôt en forêt. Comme toutes les petites lépiotes, à laisser sur place.",
      "risk": "toxic",
      "family": "Agaricaceae",
      "genusTax": "Lepiota",
      "edibility": "toxic",
      "confusions": []
    },
    "lepiota_felina": {
      "genus": "Lépiote féline (Lepiota felina)",
      "note": "Toute petite espèce à anneau net parfois suspendu au bord du chapeau, écailles brun foncé à noirâtres. Contient les mêmes toxines que les amanites mortelles.",
      "risk": "deadly",
      "family": "Agaricaceae",
      "genusTax": "Lepiota",
      "edibility": "deadly",
      "confusions": []
    },
    "lepiota_cristata": {
      "genus": "Lépiote à crête (Lepiota cristata)",
      "note": "Comme la précédente mais écailles ocre à roussâtres. Petite lépiote à hauts risques.",
      "risk": "deadly",
      "family": "Agaricaceae",
      "genusTax": "Lepiota",
      "edibility": "deadly",
      "confusions": []
    },
    "cystoderme_amianthinum": {
      "genus": "Cystoderme amiantacé (Cystoderma amianthinum)",
      "note": "Pousse en troupes l'été et l'automne dans la mousse, en bois ou en lande humide et acide. Chapeau ocre-rouille de 3-6 cm, en cloche puis aplati avec un mamelon, surface granuleuse devenant floconneuse vers la marge, lames crème puis jaunâtre pâle, chair mince à forte odeur de moisi.",
      "risk": "unknown",
      "family": "Agaricaceae",
      "genusTax": "Cystoderma",
      "edibility": "unknown",
      "confusions": []
    },
    "cystoderme_carcharias": {
      "genus": "Cystoderme requin (Cystoderma carcharias)",
      "note": "Chapeau de 3-5 cm, lilas clair à rosé, pied granulé comme le chapeau, avec un feston de peluches séparables rappelant des dents de requin. Assez rare.",
      "risk": "unknown",
      "family": "Agaricaceae",
      "genusTax": "Cystoderma",
      "edibility": "unknown",
      "confusions": []
    },
    "cystoderme_cinnabarinum": {
      "genus": "Cystoderme cinabre (Cystoderma cinnabarinum)",
      "note": "Espèce rare des bois humides et résineux, assez charnue (jusqu'à 8 cm), d'un rouge vermillon vif, chapeau et pied restant granuleux, anneau fugace.",
      "risk": "unknown",
      "family": "Agaricaceae",
      "genusTax": "Cystoderma",
      "edibility": "unknown",
      "confusions": []
    },
    "phaeolepiota_aurea": {
      "genus": "Pholiote dorée (Phaeolepiota aurea)",
      "note": "Espèce montagnarde rare mais bon comestible, atteignant 15 à 20 cm, tout fauve doré ; ressemble à un gros cystoderme mais porte un anneau ample et persistant, lames ocre puis rouillées. Ne pas confondre avec les cystodermes eux-mêmes, sans intérêt culinaire.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Phaeolepiota",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_campestris": {
      "genus": "Agaric champêtre (Agaricus campestris)",
      "note": "Chair ne rougissant ni ne jaunissant, pied aminci à la base, anneau ténu vite disparu, pousse dans l'herbe. Le classique « rosé des prés ».",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_bitorquis": {
      "genus": "Agaric des trottoirs (Agaricus bitorquis)",
      "note": "Chair très ferme rougissant à la coupe, anneau qui paraît double (façon poulie), pousse souvent en terrain piétiné.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_bernardii": {
      "genus": "Agaric des prés salés (Agaricus bernardii)",
      "note": "Chair rougissante, anneau remontant sur le pied comme une chaussette, odeur désagréable.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_silvaticus": {
      "genus": "Agaric sylvatique (Agaricus silvaticus)",
      "note": "Chair rougissant très nettement et rapidement, odeur agréable, anneau simple retombant.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_impudicus": {
      "genus": "Agaric impudique (Agaricus impudicus)",
      "note": "Rougissement faible et lent, précédé d'un léger jaunissement, anneau simple retombant. Moins connu, prudence recommandée.",
      "risk": "caution",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "caution",
      "confusions": []
    },
    "agaric_moelleri": {
      "genus": "Agaric pintade (Agaricus moelleri)",
      "note": "Chapeau couvert d'abondantes mèches gris cendré, jaunit à la cassure. Toxique, provoque des troubles digestifs.",
      "risk": "toxic",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "toxic",
      "confusions": []
    },
    "agaric_augustus": {
      "genus": "Agaric auguste (Agaricus augustus)",
      "note": "Grande espèce au chapeau couvert de mèches brun-fauve, jaunissement lent et localisé, odeur agréable souvent anisée.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_silvicola": {
      "genus": "Agaric sylvicole (Agaricus silvicola)",
      "note": "Espèce moyenne et forestière, chapeau lisse un peu jaunâtre, jaunissement lent et localisé, anneau double denté, odeur anisée.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_arvensis": {
      "genus": "Agaric des jachères (Agaricus arvensis)",
      "note": "Comme le précédent mais souvent plus gros, poussant plutôt dans les lieux herbeux.",
      "risk": "edible",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "edible",
      "confusions": []
    },
    "agaric_xanthodermus": {
      "genus": "Agaric jaunissant (Agaricus xanthodermus)",
      "note": "Jaunissement intense et rapide à la base du pied et à la cassure, odeur souvent désagréable (phénol/encre), chapeau d'abord trapézoïdal puis étalé, pied à bulbe irrégulier. Cause fréquente de troubles digestifs.",
      "risk": "toxic",
      "family": "Agaricaceae",
      "genusTax": "Agaricus",
      "edibility": "toxic",
      "confusions": []
    },
    "espece_muolx1o6_psm2": {
      "genus": "Strophaire bleue",
      "family": "Strophariaceae",
      "genusTax": "Stropharia",
      "edibility": "toxic",
      "note": "Assez fréquent par pieds solitaires ou petits groupes dans les bois et les parcs.",
      "confusions": []
    },
    "espece_muombtgy_qywh": {
      "genus": "Strophaire hémisphérique (Protostropharia semiglobata)",
      "family": "Strophariaceae",
      "genusTax": "Stropharia",
      "edibility": "toxic",
      "note": "Il est considéré comme hallucinogène, mais attention aux accidents psychiatriques avec de champignon.",
      "confusions": []
    },
    "espece_muomh9ld_8zj2": {
      "genus": "Strophaire Coronille (Stropharia coronilla)",
      "family": "Strophariaceae",
      "genusTax": "Stropharia",
      "edibility": "toxic",
      "note": "Odeur de rave, de radis ou de pomme de terre crue",
      "confusions": []
    },
    "espece_muomq728_kve1": {
      "genus": "Strophaire blanc bleuté (Stropharia pseudocyanea)",
      "family": "Strophariaceae",
      "genusTax": "Stropharia",
      "edibility": "toxic",
      "note": "",
      "confusions": []
    },
    "espece_muomwb2y_re6b": {
      "genus": "Strophaire squammeux (Leratiomyces squamosus)",
      "family": "Strophariaceae",
      "genusTax": "Stropharia",
      "edibility": "inedible",
      "note": "",
      "confusions": []
    },
    "espece_muon6chk_ip83": {
      "genus": "Nouvelle espèce",
      "family": "",
      "genusTax": "",
      "edibility": "",
      "note": "",
      "confusions": []
    },
    "lactaire_veloute": {
      "genus": "Lactaire velouté (Lactifluus vellereus (Lactarius vellereus))",
      "latin": "Lactifluus vellereus (Lactarius vellereus)",
      "note": "Habitat : Sous différents feuillus, souvent en troupes abondantes ; espèce fréquente. Chapeau : Large (10 à 20 cm et plus), blanc à blanc sali de jaunâtre, épais et charnu, velouté, en entonnoir, à marge longtemps enroulée. Pied : Très court (5 à 8 cm), épais, dur, blanc. Lames : Nombreuses, assez épaisses et espacées, blanches, jaunissant avec l'âge. Remarque : D'aspect appétissant mais affreusement âcre. Consommé dans certains pays de l'Est après un blanchiment qui détruit cette âcreté, ou réduit en poudre comme condiment — à éviter tel quel.",
      "family": "Russulaceae",
      "genusTax": "Lactifluus",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_detestable": {
      "genus": "Lactaire détestable (Lactarius deterrimus)",
      "latin": "Lactarius deterrimus",
      "note": "Habitat : Localisé uniquement sous épicéas ; très commun. Chapeau : Peu ou pas zoné, orangé un peu givré, verdissant vite et de façon homogène. Pied : Peu scrobiculé (peu de fossettes), souvent avec un cerne blanchâtre juste sous les lames. Remarque : Très souvent confondu avec le lactaire délicieux (comestible réputé), qui lui ne pousse que sous les pins — un repère de terrain fiable.; Espèce proche : le lactaire couleur saumon (Lactarius salmonicolor) est d'un orangé plus vif, plus saumoné, peu zoné, et ne verdit pas ; il ne pousse que sous les sapins.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_sanguin": {
      "genus": "Lactaire sanguin (Lactarius sanguifluus)",
      "latin": "Lactarius sanguifluus",
      "note": "Habitat : Espèce surtout méridionale, liée aux pins ; rare en région atlantique, exceptionnelle au nord de la Loire. Chapeau : Brun orangé rougeâtre ou rosâtre, peu zoné, plus ou moins verdissant. Pied : Scrobiculé (à fossettes), brun rougeâtre. Lames : Typiquement rosé vineux. Remarque : Considéré comme le meilleur comestible de ce groupe.; Espèce proche : le lactaire semi-sanguin (Lactarius semisanguifluus) pousse aussi sous pins, sur sol calcaire. Il ressemble à un petit lactaire délicieux (chapeau jusqu'à 6-7 cm) à lait orangé, qui devient vineux puis brun rougeâtre en 5 à 10 minutes.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "edible",
      "edibility": "edible",
      "confusions": []
    },
    "lactaire_zone": {
      "genus": "Lactaire zoné (Lactarius zonarius)",
      "latin": "Lactarius zonarius",
      "note": "Habitat : Bois de feuillus secs, lisières ; assez commun en plaine sur terrain calcaire. Chapeau : Dur, assez massif (5 à 12 cm), creux, crème, zoné d'orange rosâtre chez les jeunes puis brun orangé terne en vieillissant ; surface glabre peu visqueuse, finement veloutée au bord chez les jeunes ; marge longtemps enroulée puis ondulée. Pied : Court et trapu (4 à 7 cm), blanc puis jaune taché de brun, parfois scrobiculé, caverneux. Lames : Assez serrées, crème, fonçant vers l'ocre avec l'âge. Remarque : Espèce proche (assez commune sous feuillus) : le lactaire très âcre (Lactarius acerrimus), chapeau de 10 à 15 cm, roux ocré, plus ou moins zoné, à bord souvent relevé devenant lobé et festonné ; lames typiquement rosâtres, anastomosées près du pied ; chair blanchâtre, lait très âcre.; Autre espèce proche : le lactaire à odeur de pomme (Lactarius evosmus), sous peupliers et saules (mais aussi chênes) ; chapeau pâle, lames plutôt serrées, blanchâtres à crème pâle ; odeur acidulée évoquant la compote de pommes.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_melezes": {
      "genus": "Lactaire des mélèzes (Lactarius porninsis (Lactaire du mélèze))",
      "latin": "Lactarius porninsis (Lactaire du mélèze)",
      "note": "Habitat : Inféodé au mélèze ; assez commun en montagne, souvent sur calcaire, présent dans les Alpes et le Jura. Chapeau : Large de 5 à 8 cm, d'un bel orange vif brillant, non ou à peine zoné, un peu visqueux par l'humidité. Pied : Orange, presque lisse, creux. Lames : Échancrées, orangées plus pâles. Remarque : Bien qu'il appartienne, taxonomiquement, au groupe du lactaire délicieux, son lait reste âcre : à ne pas consommer comme son cousin.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_scrobicule": {
      "genus": "Lactaire scrobiculé (Lactarius scrobiculatus)",
      "latin": "Lactarius scrobiculatus",
      "note": "Habitat : Grosse espèce commune dans les bois de résineux en montagne, particulièrement sous épicéas. Chapeau : Large de 10 à 25 cm, jaune ochracé à brun ochracé, devenant brun roussâtre ; marge enroulée ; revêtement courtement barbu-laineux au bord. Pied : Court (5 à 7 cm), à nombreuses fossettes jaunâtres sur fond blanc. Lames : Larges, espacées, échancrées, jaunâtres. Remarque : Espèce proche : le lactaire à odeur de citron (Lactarius citriolens), des feuillus (bouleaux, noisetiers, chênes) ; chapeau large de 10 à 15 cm, très poilu à la marge, blanchâtre ocré ; pied non scrobiculé ; chair jaunissante, amère ; odeur de citron ; lait jaunissant, âcre.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_toison": {
      "genus": "Lactaire à toison (Lactarius torminosus (Lactaire à coliques))",
      "latin": "Lactarius torminosus (Lactaire à coliques)",
      "note": "Habitat : Sous bouleaux, dans les landes et les bois, toujours en terrain un peu humide et acide. Chapeau : Charnu, creusé au centre, large de 5 à 12 cm, rose orangé, zoné, entièrement couvert de peluches soyeuses formant une sorte de toison qui s'estompe avec l'âge mais persiste longtemps à la marge. Pied : Ferme, haut de 7 à 9 cm, devenant creux, de même couleur, parfois un peu scrobiculé. Lames : Très serrées, crème rosé, minces, descendant sur le pied. Remarque : Plusieurs espèces proches, reconnaissables à leur revêtement laineux et à leur âcreté, sont inféodées à des essences précises en montagne ou en région méditerranéenne. Le lactaire pubescent lui ressemble beaucoup et pousse également sous bouleaux, mais il est plus pâle et non (ou très peu) zoné.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "toxic",
      "edibility": "toxic",
      "confusions": []
    },
    "lactaire_pubescent": {
      "genus": "Lactaire pubescent (Lactarius pubescens)",
      "latin": "Lactarius pubescens",
      "note": "Habitat : Très commun sous les bouleaux plantés dans les pelouses et les parcs, plus rare dans les bois de feuillus, de préférence sur sol argilo-calcaire. Chapeau : Large de 6 à 10 cm, très pâle, blanchâtre à rosé roussâtre très clair, non zoné, plutôt feutré que laineux ; la pilosité s'atténue avec l'âge sauf sur la marge, qui reste pubescente. Pied : Court (3 à 5 cm), invisible sous le chapeau, rosé. Lames : Un peu rosées. Remarque : Espèce proche : le lactaire pâle (Lactarius pallidus), commun en hêtraie ; chapeau large de 5 à 15 cm, lisse et visqueux ; pied non scrobiculé ; lames crème ocré ; lait blanc, d'abord doux puis devenant faiblement piquant.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "vachotte": {
      "genus": "Vachotte (Lactifluus volemus (Lactarius volemus) — Lactaire à lait abondant)",
      "latin": "Lactifluus volemus (Lactarius volemus) — Lactaire à lait abondant",
      "note": "Habitat : Espèce peu commune et ayant tendance à se raréfier, sous feuillus, plus rarement sous résineux. Chapeau : Large de 10 à 16 cm, de teinte variant autour de l'orangé vers le roux ou le fauve, velouté mat, non zoné, souvent plus ou moins fendillé, gercé. Pied : Haut de 3 à 8 cm, de même couleur en dégradé, plus foncé à la base, clair au sommet. Lames : Orangées, se tachant de brun roussâtre aux endroits blessés. Remarque : Espèce proche : le lactaire rugueux (Lactarius rugatus), sous feuillus en milieux plus chauds ; assez semblable mais plus petit, chapeau très rugueux et craquelé, de teinte plus foncée ; lames blanchâtres ; pied court.",
      "family": "Russulaceae",
      "genusTax": "Lactifluus",
      "risk": "edible",
      "edibility": "edible",
      "confusions": []
    },
    "lactaire_lait_brule": {
      "genus": "Lactaire à lait brûlant (Lactarius pyrogalus)",
      "latin": "Lactarius pyrogalus",
      "note": "Habitat : Uniquement sous noisetiers, dans les haies, les bois, les parcs ; été et début d'automne, parfois très abondant. Chapeau : Large de 4 à 12 cm, jaunâtre assez pâle et terne, mêlé de gris, de brun ou d'olive, mince, déprimé, vaguement zoné, légèrement visqueux. Pied : Court (3 à 8 cm), de même couleur, rétréci vers le bas. Lames : Espacées, jaune pâle au début puis d'un ocre un peu orangé caractéristique.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_muqueux": {
      "genus": "Lactaire muqueux (Lactarius blennius)",
      "latin": "Lactarius blennius",
      "note": "Habitat : Commun en été et en automne, uniquement sous les hêtres. Chapeau : Large de 4 à 10 cm, plan ou déprimé, très visqueux, lisse, variant de gris-brun rosâtre à brun verdâtre ou olivâtre, souvent marqué de fossettes sombres. Pied : Assez court, visqueux comme le chapeau, de même couleur, devenant creux. Lames : Minces, serrées, blanches ou très pâles, tachées de verdâtre pâle par le lait séché. Remarque : Espèce proche : le lactaire à lait abondant (Lactarius fluens), semblable et poussant aussi sous les hêtres, mais à chapeau à peine gras au toucher, vite sec, souvent plus pâle au bord ; lait très abondant, blanc puis gris olivâtre en séchant.; Autre espèce proche : le lactaire fané (Lactarius vietus), sur sol acide et humide sous bouleaux ; chapeau de 3 à 8 cm, lilas brunâtre, surface grasse au toucher ; lames crème ; lait peu abondant, devenant gris olivacé en séchant sur les lames ; chair douce mais lait âcre.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_plombe": {
      "genus": "Lactaire plombé (Lactarius necator (= L. plumbeus = L. turpis))",
      "latin": "Lactarius necator (= L. plumbeus = L. turpis)",
      "note": "Habitat : Grosse espèce de couleurs tristes, pouvant être commune sous bouleaux, mais aussi sous épicéas, sur sols acides plus ou moins tourbeux. Chapeau : Large de 8 à 15 cm, brun olivâtre à brun presque noir avec l'âge, marge enroulée plus claire ; surface visqueuse, un peu zonée par un feutrage foncé. Pied : De même couleur, trapu, épais. Lames : Serrées, crème, se tachant de brun à la blessure. Remarque : TOXIQUE — à ne pas consommer. C'est l'unique représentant européen d'un groupe d'espèces plus abondantes outre-Atlantique, notamment aux États-Unis. Une goutte de lessive de potasse ou de soude colore sa chair en violet vif, un caractère unique chez les lactaires européens (test réservé à la confirmation, pas à la cueillette de terrain).",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "toxic",
      "edibility": "toxic",
      "confusions": []
    },
    "lactaire_jaunatre": {
      "genus": "Lactaire jaunâtre (Lactarius flavidus)",
      "latin": "Lactarius flavidus",
      "note": "Habitat : Assez fréquent dans les bois de feuillus humides de plaine, sous chênes, frênes, charmes, surtout en terrain argilo-calcaire. Chapeau : Large de 5 à 12 cm, jaune clair, vaguement zoné, humide et visqueux, taché de violet dans les blessures. Pied : Haut de 5 à 8 cm, blanchâtre à jaune, taché de violet, devenant creux. Lames : Crème, inégales, minces et serrées, violettes à la blessure ; spores crème. Remarque : Bien caractérisé par ses teintes jaunâtres et par les traces violettes que prennent toutes les parties à la cassure.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_humide": {
      "genus": "Lactaire humide (Lactarius uvidus)",
      "latin": "Lactarius uvidus",
      "note": "Habitat : Dans les bois humides de feuillus (bouleaux, saules), ou sous épicéas en terrain marécageux ; assez commun. Chapeau : Nettement gras, voire visqueux, large de 5 à 10 cm, beige, grisé ou roussâtre pâle, non zoné, plan étalé juste un peu déprimé. Pied : Haut de 5 à 8 cm, crème, taché de violet à la meurtrissure. Remarque : Espèce proche : le lactaire violet (Lactarius violascens), en stations sèches sous chênes ou châtaigniers ; chapeau de 6 à 12 cm, non visqueux, brun-pourpre ou bistré, zoné, foncé au centre, taché de gouttes foncées vers la marge ; lait blanc puis violet, pas d'âcreté mais chair amère.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_coco": {
      "genus": "Lactaire à odeur de noix de coco (Lactarius glyciosmus)",
      "latin": "Lactarius glyciosmus",
      "note": "Habitat : Petit champignon poussant en milieu humide, en plaine, sous bouleaux ou aulnes, où il est assez commun. Chapeau : Large de 3 à 6 cm, grisâtre clair à reflets rosés, creux, velouté, soyeux, pâlissant par la sécheresse. Pied : Grêle, haut de 3 à 5 cm, blanchâtre. Lames : Blanchâtres à ochracé rosâtre. Remarque : Espèce proche : le lactaire mamelonné (Lactarius mammosus), même odeur, mais plutôt sous conifères, chapeau brun-châtain chaud.; Autre espèce proche : le lactaire à odeur de céleri (Lactarius helvus), en milieu humide sous conifères mêlés de bouleaux, dans les tourbières ; chapeau de 5 à 15 cm, brun ochracé à brun-rose, velouté ; lait aqueux, vite épuisé et séchant ; odeur nette de céleri chez les adultes.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_tranquille": {
      "genus": "Lactaire tranquille (Lactarius quietus)",
      "latin": "Lactarius quietus",
      "note": "Habitat : L'un des lactaires à chapeau brun les plus communs en plaine, dans tous types de forêts, surtout sous chênes. Chapeau : Large de 3 à 9 cm, brun-roux un peu rougeâtre, étalé et peu déprimé, marge devenant onduleuse, vaguement zoné, surface un peu givrée. Pied : De même couleur ou plus foncé, typiquement brun rougeâtre à la base, creux. Lames : Assez serrées, minces, prolongées par une dent sur le pied, crème à crème rosâtre.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_doucetre": {
      "genus": "Lactaire douceâtre (Lactarius subdulcis)",
      "latin": "Lactarius subdulcis",
      "note": "Habitat : Tout aussi fréquent que le lactaire tranquille, auquel il ressemble, mais préférant la hêtraie. Chapeau : Mince, roux terne, large de 3 à 6 cm, non zoné, parfois à peine mamelonné, très mat (comme un objet en caoutchouc). Pied : Lisse, plus clair, courbé à la base, légèrement feutré. Lames : Serrées, minces, prolongées sur le pied, crème puis ocre orangé.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_fauve_orange": {
      "genus": "Lactaire fauve orangé (Lactarius aurantiofulvus)",
      "latin": "Lactarius aurantiofulvus",
      "note": "Habitat : Espèce à peine moyenne, commune sous épicéas en montagne, beaucoup plus rare en plaine dans les forêts mêlées. Chapeau : Teinte générale éclatante, orange vif, large de 3 à 7 cm, assez plat, non zoné, lisse. Pied : Haut de 5 à 7 cm, orange moins vif. Lames : Plus claires, jaunâtres, échancrées. Remarque : Ce groupe de lactaires orangés est complexe et encore en cours de révision. Le lactaire des mélèzes pousse également en montagne mais, lui, est strictement inféodé aux mélèzes.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_lait_jaune": {
      "genus": "Lactaire à lait jaune (Lactarius chrysorrheus)",
      "latin": "Lactarius chrysorrheus",
      "note": "Habitat : Très commun, isolé ou en troupes, dans les bois de feuillus siliceux, en été et en automne. Chapeau : Large de 4 à 10 cm, jaune plus ou moins fauve rosé à orangé, zoné de plages plus foncées, lisse et sec, légèrement déprimé. Pied : Court, blanchâtre, lisse. Lames : Serrées, blanches puis crème, un peu décurrentes. Remarque : Espèce proche : le lactaire trompeur (Lactarius decipiens), dans les bois plutôt secs de feuillus ou de résineux ; mince, ocré ou roux clair avec une teinte rosée particulière, irrégulier, à surface humide ; lait blanc peu abondant, jaunissant mais nettement moins que chez le lactaire à lait jaune ; saveur âcre, odeur nette de pélargonium (géranium des fleuristes).",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_chiffonne": {
      "genus": "Lactaire chiffonné (Lactarius tabidus)",
      "latin": "Lactarius tabidus",
      "note": "Habitat : Commun en milieu humide acide, sous bouleaux, dans les sphaignes des zones tourbeuses. Chapeau : Large de 3 à 6 cm, crème orangé à ocre orangé, centre mamelonné plus foncé, marge irrégulière, finement ridé surtout autour du mamelon. Pied : Lisse, de même couleur. Lames : Plus claires. Remarque : Espèce proche : le lactaire des bourbiers (Lactarius lacunarum), dans les fossés, les lieux boueux, sur les bords de mares asséchées ; chapeau orangé de 5 à 7 cm, lames pâles légèrement décurrentes, formant typiquement des filets en haut du pied, juste sous les lames.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_hepatique": {
      "genus": "Lactaire hépatique (Lactarius hepaticus)",
      "latin": "Lactarius hepaticus",
      "note": "Habitat : Espèce caractéristique des pinèdes ou des pessières de plaine et de basse montagne, en troupes nombreuses jusqu'en arrière-saison. Chapeau : Large de 3 à 5 cm, plat ou un peu déprimé, finissant lobé, brun-rouge foncé couleur de foie, plus clair en séchant. Pied : Haut de 5 à 10 cm, plus foncé à la base. Lames : Crème à chamois. Remarque : Espèce proche : le lactaire roux (Lactarius rufus), également commensal des résineux et des bouleaux ; chapeau brun-roux velouté, non zoné ni cannelé, toujours mamelonné ; lait blanc et le restant, abondant, très piquant.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_chicoree": {
      "genus": "Lactaire à odeur de chicorée (Lactarius camphoratus (Lactaire camphré))",
      "latin": "Lactarius camphoratus (Lactaire camphré)",
      "note": "Habitat : Espèce de couleur générale foncée, commune sous feuillus ou résineux, de juin à novembre. Chapeau : Large de 2 à 6 cm, mat, brun rougeâtre, plus pâle au bord, brunissant avec l'âge, un peu creusé au centre. Pied : Haut de 2 à 5 cm, brun-rouge sombre, devenant creux et plus foncé à la base. Lames : Serrées, cannelle rosé puis brun-rouge sombre. Remarque : Espèce proche (rare) : le lactaire à lait aqueux (Lactarius rostratus), dans les tapis de mousse sous les hêtres ; petit chapeau (3,5 cm maximum), brun-roux orangé, entièrement ridé-rugueux ; forte odeur de punaise.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_ride": {
      "genus": "Lactaire ridé (Lactarius subumbonatus)",
      "latin": "Lactarius subumbonatus",
      "note": "Habitat : Fréquent dans les lieux humides des forêts : fossés argileux, ornières, bords d'étangs boisés, surtout sous chênes. Chapeau : Large de 3 à 8 cm, d'abord mamelonné puis plan, brun foncé à brun rougeâtre ou brun ochracé sombre, très lobé à la marge, surface rugueuse irrégulière, pâlissant par le sec. Pied : De même couleur, haut de 2 à 4 cm. Lames : Couleur ocre rosâtre.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "lactaire_fuligineux": {
      "genus": "Lactaire fuligineux (Lactarius fuliginosus)",
      "latin": "Lactarius fuliginosus",
      "note": "Habitat : Sous feuillus (chênes), plus rarement sous conifères, dans les bois humides, en terrain argileux. Chapeau : Large de 4 à 10 cm, sec, velouté, couleur variable : gris, brun plus ou moins foncé, café au lait. Pied : Trapu, haut de 5 à 6 cm, de même couleur ou blanc (variété albipes). Lames : Crème ocrées, peu serrées. Remarque : Espèce proche : le lactaire âcre (Lactarius acris), sous hêtres en terrain calcaire ; café au lait, typiquement visqueux, un peu mamelonné, marge un peu relevée ; lait devenant rose vif à l'air (« rose dentifrice »).; Autre espèce proche : le lactaire enfumé (Lactarius picinus), espèce montagnarde des épicéas ou des sapins ; chapeau de 5 à 12 cm, brun foncé presque noir couleur de poix, déprimé, charnu et assez ferme, surface mate sèche, non zonée ; lames serrées, crème puis ocre, se tachant de brun à la cassure ; lait âcre et amer, blanc rougissant. Comestible malgré son âcreté, localement apprécié.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "russule_noircissante": {
      "genus": "Russule noircissante (Russula nigricans)",
      "latin": "Russula nigricans",
      "note": "• Chapeau : très grand, large de 10 à 20 cm, massif, déprimé, épais, d'abord tout blanc, puis grisonnant ou brunissant par plages, puis noir ; rougit vivement à la blessure.\n• Pied : massif, court et trapu, très dur, haut de 5 à 7 cm, large de 2 à 3 cm, blanc, rougissant au grattage puis noircissant.\n• Lames : particulièrement épaisses (1 mm) et très espacées, inégales, cassantes, rougissant puis noircissant comme toutes les parties ; spores blanches.\n• Chair : dure et très cassante, crème, rougissant à la cassure avant de noircir après un certain temps ; odeur fruitée assez forte, saveur plutôt douce.\n• Habitat : robuste espèce, très commune dans les bois de feuillus et de résineux ; se retrouve complètement noircie et racornie, assez tard en saison.\n• Remarque : une espèce très ressemblante, la russule à lames piquantes, se reconnaît par sa chair nettement piquante — voir la fiche Russule à lames denses ci-dessous.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_a_lames_denses": {
      "genus": "Russule à lames denses (Russula densifolia)",
      "latin": "Russula densifolia",
      "note": "• Chapeau : régulier, un peu creux, en général plutôt petit, large de 6 à 9 cm, blanc se tachant d'ocre puis de brun, à bord restant souvent blanchâtre.\n• Pied : plein et dur, cylindrique, de même couleur.\n• Lames : blanches à crème, minces, serrées, se tachant de rouge au toucher puis noircissantes.\n• Chair : blanche, dure, devenant lentement rouge à l'air puis noircissant ; douce ou presque, mais lames souvent assez piquantes.\n• Habitat : espèce moyenne, commune sous feuillus en milieu acide, en plaine et surtout en montagne.\n• Remarque : la russule à lames piquantes (Russula acrifolia) lui ressemble beaucoup, mais son chapeau est nettement plus grand (6 à 15 cm), brun croûte de pain dès la jeunesse puis bistre, souvent nettement visqueux au centre ; sa chair est très piquante dans les lames.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "russule_blanche_et_noire": {
      "genus": "Russule blanche et noire (Russula albonigra)",
      "latin": "Russula albonigra",
      "note": "• Chapeau : large de 6 à 12 cm, blanchâtre, vite taché de noir bistré.\n• Pied : de même couleur, 4 à 7 cm de haut.\n• Lames : minces et serrées, très inégales, blanc crème se tachant de noir sans rougir.\n• Chair : rapidement noircissante sans rougir au préalable ; saveur presque douce, rafraîchissante, « mentholée ».\n• Habitat : surtout sous feuillus, peu commune.\n• Remarque : la russule anthracite (Russula anthracina) lui ressemble assez ; elle noircit très vite et entièrement, et sa chair est nettement piquante dans les lames.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_sans_lait": {
      "genus": "Russule sans lait (Russula delica)",
      "latin": "Russula delica",
      "note": "• Chapeau : grosse espèce ayant l'aspect d'un lactaire blanc dépourvu de lait ; large de 12 à 20 cm, beige sale, en entonnoir.\n• Pied : court et trapu, 2 à 5 cm de haut.\n• Lames : peu serrées, blanches, « pleureuses » de gouttelettes claires, descendant un peu sur le pied.\n• Chair : âcre dans les lames, ne noircissant pas ; spores blanches.\n• Habitat : précoce, sous feuillus et sous résineux, sur calcaire.\n• Remarque : la russule à cerne verte (Russula chloroides) est une espèce voisine, plus petite (chapeau 6 à 12 cm), avec des lames plus serrées à reflet verdâtre, le pied souvent ceinturé vers le sommet d'une zone bleutée.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_ocre_et_blanche": {
      "genus": "Russule ocre et blanche (Russula ochroleuca)",
      "latin": "Russula ochroleuca",
      "note": "• Chapeau : 4 à 10 cm de large, un peu déprimé, jaune vif ou plus ou moins teinté d'ocre ou de verdâtre, lisse, à revêtement non détachable.\n• Pied : cylindrique, blanc, contrastant avec le chapeau, souvent taché de brun, grisonnant avec l'âge, lisse puis rugueux et strié, plein puis farci.\n• Lames : peu serrées, larges, fragiles, sinuées ou presque libres, blanches, contrastant avec le chapeau.\n• Chair : blanche, cassante, âcre, odeur faible.\n• Habitat : espèce plutôt petite, commune un peu partout, sous feuillus et résineux, sur sol siliceux ou décalcifié.\n• Remarque : parmi la dizaine d'espèces jaunâtres voisines, la russule de fiel (Russula fellea), commune sous hêtres, lui ressemble mais est entièrement ocre brunâtre (pas de contraste chapeau/lames) ; saveur très poivrée, odeur nette de compote de pomme.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_fetide": {
      "genus": "Russule fétide (Russula foetens)",
      "latin": "Russula foetens",
      "note": "• Chapeau : irrégulier, plan puis déprimé, large de 10 à 18 cm, visqueux, brun-jaune ocre foncé, à marge fortement cannelée, avec des granulations sur chaque cannelure.\n• Pied : haut de 8 à 12 cm, épais, vite creux, blanc puis moucheté de roux.\n• Lames : blanches se tachant de roux ou de brun ; spores crème clair.\n• Chair : dure, épaisse, blanche, très âcre (parfois seulement après un moment, mais de façon persistante) ; odeur forte et désagréable, fétide.\n• Habitat : espèce robuste, très commune sous feuillus.\n• Remarque : chef de file du groupe des russules dites « pectinées » (couleurs ternes, chapeau cannelé ou fortement strié). La russule presque fétide (Russula subfoetens) lui ressemble beaucoup, mais est en moyenne plus petite, plus brune, et sa chair tend à jaunir à l'air.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "russule_charbonniere": {
      "genus": "Russule charbonnière (Russula cyanoxantha)",
      "latin": "Russula cyanoxantha",
      "note": "• Chapeau : plan, 5 à 15 cm de large, ferme et résistant, de couleur très variable (du violet plus ou moins pourpre au vert clair ou foncé, taché de violet), lisse et souvent un peu gras au toucher.\n• Pied : haut de 5 à 10 cm, blanc, plein puis farci, élastique.\n• Lames : blanches, assez larges et épaisses, ne se cassant pas sous la pression du doigt (dites « lardacées », au toucher proche du lard), diversement fourchues ; spores blanches.\n• Chair : ferme et consistante, épaisse, granuleuse, goût de noisette ; réaction au sulfate de fer pratiquement nulle.\n• Habitat : peut-être la plus commune des russules, très tôt jusqu'en automne, sur sol varié, surtout sous feuillus mais aussi sous résineux, en plaine et en montagne.\n• Remarque : l'une des meilleures russules, la plus populaire et la plus facile à reconnaître malgré sa diversité de coloration. Il faut s'habituer à froisser les lames du bout des doigts pour tester leur consistance : toutes les russules à lames lardacées sont comestibles, et appartiennent à ce groupe.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "edible",
      "edibility": "edible",
      "confusions": []
    },
    "russule_a_lames_fourchues": {
      "genus": "Russule à lames fourchues (Russula heterophylla)",
      "latin": "Russula heterophylla",
      "note": "• Habitat : sous feuillus ou conifères, partout, précoce, sur sols secs, assez commune.\n• Chapeau : très proche de la russule charbonnière ; large de 4 à 10 cm, étalé, présentant tous les tons de vert, parfois un peu brun au centre et souvent taché de rouille ; cuticule séparable en partie.\n• Pied : souvent rétréci en pointe à la base, farci.\n• Lames : typiquement fourchues et anastomées à la base, parfois un peu décurrentes ; spores blanches.\n• Chair : ferme, blanche, douce ; sulfate de fer rose orangé.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_verdoyante": {
      "genus": "Russule verdoyante (Russula virescens)",
      "latin": "Russula virescens",
      "note": "• Habitat : terrain assez sec et sablonneux, sous couvert clair de feuillus, chênes en particulier.\n• Chapeau : large de 5 à 15 cm, ferme, plan et bosselé, vert-de-gris à presque blanc, toujours craquelé (comme dartreux), à revêtement farineux ou granuleux.\n• Pied : assez gros, court et ridé, vite creux et cassant.\n• Lames : crème clair, étroites, espacées, un peu lardacées dans la jeunesse ; sporée blanche.\n• Chair : blanche, douce, goût de noisette ; sulfate de fer rose orangé vif.\n• Remarque : toutes ces russules à chair douce et élastique sont parmi les meilleures comestibles. Attention à ne pas les confondre avec l'amanite phalloïde (dont le pied mince porte un anneau et une volve), quand leur chapeau est teinté de vert — cette confusion est à l'origine d'un certain nombre d'empoisonnements mortels.\n\nRepères pour ne pas confondre — russules vertes (comestibles) vs amanite phalloïde (mortelle) :\n\n| Caractère | Russules vertes | Amanite phalloïde |\n|---|---|---|\n| Lames | adnées ou un peu décurrentes | libres |\n| Pied | court et trapu ; ni anneau ni volve | élancé ; un anneau et une volve |\n| Chair | cassante comme un bâton de craie | filamenteuse |",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "edible",
      "edibility": "edible",
      "confusions": []
    },
    "russule_comestible": {
      "genus": "Russule comestible (Russula vesca)",
      "latin": "Russula vesca",
      "note": "• Habitat : espèce très commune dans les bois de feuillus de plaine, précoce dès fin mai jusqu'en septembre, surtout sur sol non calcaire.\n• Chapeau : large de 6 à 10 cm, teinte caractéristique brun rosé à rose jambon, souvent en partie décolorée et tachée de petits points rouille ; cuticule en général « trop courte au bord », laissant voir le bout des lames (elle « montre les dents »).\n• Pied : court et pointu, 5 à 8 cm de haut, blanc et piqueté de rouille.\n• Lames : serrées, blanches à reflet orangé, pointillées de rouille, plus ou moins cassantes ; spores blanches.\n• Chair : blanche et douce, assez épaisse, saveur agréable de noisette ; sulfate de fer rose orangé vif.\n• Remarque : la russule belette (Russula mustelina), commune en troupes sous conifères en montagne (surtout épicéas), est une espèce massive à chapeau brun-jaune uniforme (7 à 15 cm, longtemps globuleux, comme le cèpe de Bordeaux), lames rigides crème, pied charnu — bon comestible. La russule du chêne vert (Russula ilicis), robuste espèce liée au chêne vert et aux bois mixtes pins/yeuses, a un chapeau globuleux massif (10 à 13 cm), teintes pâles délavées (roussâtre, rose lilas, gris), pied court et dur, lames lardacées crème blanchâtre — excellent comestible.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "edible",
      "edibility": "edible",
      "confusions": []
    },
    "russule_a_odeur_de_miel": {
      "genus": "Russule à odeur de miel (Russula melliolens)",
      "latin": "Russula melliolens",
      "note": "• Habitat : assez commune dans des bois variés, surtout feuillus en plaine.\n• Chapeau : large de 5 à 10 cm, arrondi, plus ou moins bosselé, à marge lobée, teinte très variable (rouge vif à rouge cuivré assez foncé, passant à l'orangé ou à l'ocre), brillant et lisse.\n• Pied : haut de 4 à 8 cm, élargi à la base, ferme puis vermoulu et creux, blanchâtre, nettement jaunissant et brunissant avec l'âge.\n• Lames et sporée : crème.\n• Chair : blanche, jaunissant nettement avec l'âge ; odeur de miel se développant avec l'âge, surtout perceptible aux endroits jaunis, en particulier dans le pied.\n• Remarque : la russule veloutée (Russula amoena), de taille moyenne (3-6 cm), pousse en bois de feuillus ou de résineux sur sol plutôt sablonneux ; chapeau typiquement velouté et violet carminé, pied blanc ou rosé, lames larges crème foncé, odeur de topinambour cuit ou d'artichaut. Deux autres russules à chapeau velouté et odeur d'artichaut — la russule panachée (Russula amoenicolor) et la russule à pied violet (Russula violeipes) — sont très difficiles à distinguer entre elles sans microscope ; la forme citrina de la russule à pied violet est entièrement jaune citron.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_vert_de_gris": {
      "genus": "Russule vert-de-gris (Russula aeruginea)",
      "latin": "Russula aeruginea",
      "note": "• Habitat : assez fréquente sous bouleaux ou résineux, espèce moyenne.\n• Chapeau : 5 à 10 cm de large, d'un beau vert plus ou moins foncé (vert d'herbe ou de poireau), pâlissant en vert tilleul, gris-vert, parfois jaunâtre ou brunâtre ; surface finement rugueuse, séparable en partie.\n• Pied : 5 à 8 cm de haut, blanc, jaunissant.\n• Lames : assez serrées, crème comme la sporée.\n• Chair : blanchâtre, tendant à jaunir ou brunir en vieillissant ; sulfate de fer rose orangé terne.\n• Remarque : la russule grise (Russula grisea) est le chef de file du groupe des russules « griséinées » (avec la russule vert-de-gris et la russule bleu-vert) — teintes grises ou verdâtres, lames en général crème, chair légèrement piquante uniquement dans les lames ; elle se reconnaît à son chapeau gris ou gris-bleu lilas, rosissant aux blessures. La russule médulleuse (Russula medullata), assez commune sous peupliers/trembles sur sol humide, a des lames d'un crème ochracé assez soutenu et un pied devenant farci-vermoulu.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_bleu_vert": {
      "genus": "Russule bleu-vert (Russula parazurea)",
      "latin": "Russula parazurea",
      "note": "• Chapeau : aplati déprimé, gris bleuté à bleuâtre violacé, en général mat et pruineux.\n• Pied : haut de 3 à 7 cm, blanc parfois nuancé de violacé, pruineux.\n• Lames : blanchâtres à crème, espacées ; sporée crème.\n• Chair : blanche teintée de crème, saveur douce, odeur faible agréable. Comestible médiocre.\n• Habitat : occasionnelle sous feuillus, dans les bois, les parcs, sur les aires d'autoroutes, en été et en automne, surtout sous chênes mais aussi sous d'autres arbres.\n• Remarque : la russule verte et violette (Russula ionochlora), assez commune et précoce sous feuillus (hêtraie surtout), de taille moyenne (chapeau ~7 cm), a des teintes violettes au centre et vertes en périphérie, pied blanc un peu violacé, lames jaune ochracé clair, saveur un peu âcre.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "edible",
      "edibility": "edible",
      "confusions": []
    },
    "russule_olivacee": {
      "genus": "Russule olivacée (Russula olivacea)",
      "latin": "Russula olivacea",
      "note": "• Chapeau : massif et dur, large de 8 à 20 cm, mat, brunâtre, brun-rouge, pourpre, olivacé ou tout vert, souvent maculé, zoné, à cuticule rugueuse non séparable, marge épaisse.\n• Pied : robuste, dur, haut de 8 à 15 cm, blanc-brun rouillé à la base, en général teinté de rose carminé ou tout rose (parfois blanc), souvent avec un cerne rose juste sous les lames.\n• Lames : jaunes puis jaune ocre comme la sporée.\n• Chair : épaisse, blanche, jaunissant puis brunissant, douce, saveur agréable de noisette ; sulfate de fer ochracé vif.\n• Habitat : espèce très robuste, assez commune en plaine et en altitude, de préférence sur calcaire, sous feuillus (hêtres en particulier) et sous résineux (épicéas surtout), souvent aux lisières aérées.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_des_epiceas": {
      "genus": "Russule des épicéas (Russula integra)",
      "latin": "Russula integra",
      "note": "• Habitat : très commune sous résineux (épicéas, sapins, aussi sous pins), sur terrain calcaire, souvent en troupes nombreuses, en montagne principalement.\n• Chapeau : 8 à 12 cm de large, allant du vert au brun acajou en passant par le rouge-pourpre, visqueux par l'humidité, cuticule lisse et brillante, partiellement séparable ; marge devenant un peu cannelée.\n• Pied : 3 à 9 cm de haut, blanc taché de brunâtre.\n• Lames : blanches puis jaunes, à arête plus pâle.\n• Chair : ferme, saveur agréable de noisette, odeur et saveur faibles.\n• Remarque : la russule baie (Russula badia), ressemblante et poussant dans les mêmes stations mais du groupe des russules âcres, a un chapeau ferme (6 à 10 cm), brun cuivré à rouge-pourpre, pied souvent teinté de rose côté bois de cèdre, et surtout une chair douce au début puis terriblement âcre et brûlante. La russule de Romel (Russula romellii), encore semblable, a un chapeau (6 à 13 cm) violet variant vers le vert ou le rouge-pourpre avec des plages décolorées ; chair à odeur et saveur faibles.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "russule_alutacee": {
      "genus": "Russule alutacée (Russula alutacea)",
      "latin": "Russula alutacea",
      "note": "• Chapeau : large de 8 à 14 cm, plan, déprimé, assez variable, violet-rouge souvent par plages décolorées en jaune ou en olive ; cuticule lisse et brillante, séparable au bord seulement.\n• Pied : 3 à 7 cm, plein, dur, fibrilleux, blanc, le plus souvent teinté de rose à la base.\n• Lames : égales, fourchues, échancrées à presque libres, jaunâtre ocré ; sporée jaune clair.\n• Chair : ferme, épaisse, blanchâtre, douce ; sulfate de fer orangé.\n• Habitat : robuste espèce sous feuillus et sous résineux, plus fréquente en terrain calcaire.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_cameleon": {
      "genus": "Russule caméléon (Russula risigallina)",
      "latin": "Russula risigallina",
      "note": "• Chapeau : 2 à 6 cm de large, teinte très variable (jaune, orangé à rouge au centre, plus clair au bord) ; marge crénelée, cuticule mate, séparable et tenace.\n• Pied : haut de 3 à 5 cm, blanc, vite creux et fragile.\n• Lames : assez espacées, égales, fourchues, bien jaunes ; sporée jaune vif.\n• Chair : mince et fragile, blanche, jaunissant légèrement ; saveur douce et typique, odeur faible mais marquée d'abricot ou de girolle quand le champignon est en cours d'altération.\n• Habitat : peu commune, petite taille, bois de feuillus ou de résineux, plus rare en montagne ; plusieurs formes décrites.\n• Remarque : la russule vinaigrée (Russula acetolens = Russula vitellina) est également toute jaune, à pied blanc, mais dégage une odeur peu agréable, devenant aigre avec la vétusté, piquante-vinaigrée ou « de moutarde ».",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_doree": {
      "genus": "Russule dorée (Russula aurea)",
      "latin": "Russula aurea",
      "note": "• Chapeau : 5 à 12 cm de large, orangé à jaune orangé vif, marge régulière, mat et rugueux ; cuticule peu séparable.\n• Pied : haut de 6 à 9 cm, vite farci-creux, blanc, souvent teinté de jaune citron.\n• Lames : serrées, crème puis ochracées, à arête typiquement jaune vif.\n• Chair : douce, odeur faible ; sulfate de fer rosâtre.\n• Habitat : espèce précoce des bois ombreux et humides de feuillus ou de résineux ; affiche les couleurs de l'amanite des Césars.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_jolie": {
      "genus": "Russule jolie (Russula lepida)",
      "latin": "Russula lepida",
      "note": "• Chapeau : très dur, hémisphérique puis étalé, large de 3 à 10 cm, d'un beau rouge vif vermillon ou rose, parfois décoloré en rose, carminé ou même blanchâtre ; mat et comme crayeux, peu séparable au bord, souvent craquelé par le sec.\n• Pied : égal ou épaissi en massue, haut de 4 à 10 cm, très dur, blanc puis crème ou souvent taché de rose.\n• Lames : serrées, blanches puis crème, résistantes puis cassantes, arête parfois marquée de rouge.\n• Chair : très compacte, épaisse et dure, blanche, rose sous la cuticule ; saveur typiquement mentholée, douce ou un peu amère. Plusieurs variétés existent.\n• Remarque : la russule très amère (Russula amarissima) se présente comme une grosse russule jolie mais est au contraire plus petite et moins ferme, à chair nettement amère. La russule rose tendre (Russula zvarae) lui ressemble aussi, mais elle est petite et moins ferme, avec un pied rose pâle.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_bleue": {
      "genus": "Russule bleue (Russula amara)",
      "latin": "Russula amara",
      "note": "• Chapeau : charnu, large de 5 à 12 cm, avec un mamelon net (caractère rare chez les russules), violacé plus ou moins pourpre mais jamais vraiment bleu ; cuticule très brillante et séparable, visqueuse par l'humidité.\n• Pied : svelte et un peu renflé en fuseau, souvent courbé à la base, blanc, lisse et dur.\n• Lames : minces et serrées, longtemps pâles puis violacé clair, comme la sporée.\n• Chair : plus ou moins amère, surtout au niveau de la cuticule.\n• Habitat : commune sous pins, partout en France, mais plus rare dans l'Ouest.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_de_turco": {
      "genus": "Russule de Turco (Russula turci)",
      "latin": "Russula turci",
      "note": "• Chapeau : large de 4 à 10 cm, teinte variable, généralement auréolé de bleu-violet à centre violet noirâtre ; cuticule mate et finement veloutée, entièrement séparable, visqueuse par l'humidité.\n• Pied : blanc brunissant légèrement, parfois un peu rose, veiné pruineux.\n• Lames : assez serrées, larges vers le bord, libres, crème puis jaune clair, comme la sporée.\n• Chair : blanche, douce, odeur d'iodoforme ou de brou de noix, surtout vers la base du pied et en séchant.\n• Remarque : la russule améthyste (Russula amethystina) s'en distingue difficilement ; elle vient plutôt sous sapins, plus communément en montagne, avec un chapeau (6 à 12 cm) violacé améthyste taché de jaune, peu ou pas auréolé, marge un peu cannelée, lames plus espacées, même odeur.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_feuille_morte": {
      "genus": "Russule feuille morte (Russula xerampelina)",
      "latin": "Russula xerampelina",
      "note": "• Chapeau : rouge-pourpre (couleur de feuille de vigne en automne), parfois presque noir au centre, décolorant par plages, plus clair à la marge ; cuticule mate et lisse, séparable en partie.\n• Pied : épais, veiné rugueux, rouge ou rose.\n• Lames : ocre, roussissant avec la vétusté ; sporée crème moyen.\n• Chair : épaisse et ferme, brunissant avec l'âge ; odeur nette et forte, peu agréable, rappelant les crustacés en train de cuire, la crevette ; sulfate de fer vert sombre.\n• Habitat : dans le groupe nombreux des « xérampélines », caractérisées par cette odeur ; la russule à pied rouge est liée aux pins, au sapin ou à l'épicéa.\n• Remarque : la russule écrevisse des hêtres (Russula faginea), commune sous hêtres, a un chapeau jusqu'à 15 cm, violet-pourpre virant au vert ou au rouge, décolorant par plages. La russule écrevisse des chênes (Russula graveolens) est plus petite (chapeau 4 à 8 cm), brune, pourpre ou olivâtre, pied blanchâtre, lames jaunâtres devenant brunes.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_emetique_des_chenes": {
      "genus": "Russule émétique des chênes (Russula silvestris)",
      "latin": "Russula silvestris",
      "note": "• Habitat : espèce moyenne, très commune dans les bois de feuillus, surtout sous chênes et châtaigniers, sur terrain acide.\n• Chapeau : large de 3 à 9 cm, rouge vif franc, parfois délavé en rose ou presque blanc, plan, charnu, marge sillonnée avec l'âge ; cuticule un peu visqueuse et brillante, séparable facilement, chair blanche en dessous.\n• Pied : 3 à 6 cm de haut, plein et ferme, puis spongieux et cassant.\n• Lames : parfaitement blanches ; spores blanches.\n• Chair : blanche, extrêmement et immédiatement âcre de façon persistante ; odeur particulière fruitée-vanillée, dite « de coco » ; sulfate de fer rosâtre.\n• Remarque : toutes les russules dites « émétiques » ont cette odeur « de coco », qui n'est pas une odeur de noix de coco mais évoque une boisson nommée « Coco », jadis vendue dans les rues de Paris, à base de réglisse et d'eau citronnée. La véritable russule émétique (Russula emetica), dans les sphaignes sous épicéas plutôt en montagne, est plus grande (5 à 11 cm) et plus ferme. La russule émétique des bouleaux (Russula betularum), sous bouleaux sur sol humide, est plus petite, décolorée, à cuticule entièrement séparable. La russule émétique des hêtres (Russula mairei = Russula fageticola), commune en hêtraie, a un chapeau rouge vite décoloré en blanchâtre.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "russule_pourpre_et_noire": {
      "genus": "Russule pourpre et noire (Russula atropurpurea)",
      "latin": "Russula atropurpurea",
      "note": "• Habitat : espèce assez robuste, très fréquente en forêt de feuillus, surtout sous chênes, en plaine comme en montagne, sur sol plutôt humide et non calcaire.\n• Chapeau : plan, 6 à 12 cm de large, brun vineux noirâtre, auréolé de pourpre ou violacé au centre, avec des teintes olivâtres ou ocrées, brillant, souvent ponctué de petites taches rouille.\n• Pied : blanc, court, 3 à 6 cm de haut, se teintant de rouille au pied.\n• Lames : blanches puis crème, serrées ; sporée blanche.\n• Chair : plus ou moins ferme et épaisse, blanche, brunissant ou grisonnant, saveur faiblement piquante ; odeur particulière, fruitée, évoquant la pomme.\n• Remarque : dans les bois de feuillus assez humides, la russule violette (Russula violacea) a un chapeau (3 à 6 cm) violet avec du verdâtre au centre ; sa chair, qui tend à jaunir, dégage une forte odeur de Pelargonium (géranium des fleuristes).",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_fragile": {
      "genus": "Russule fragile (Russula fragilis)",
      "latin": "Russula fragilis",
      "note": "• Chapeau : large de 3 à 6 cm, décoloré en rose-violacé, un peu verdâtre, ou tout blanc ; marge cannelée, cuticule entièrement séparable.\n• Pied : haut de 3 à 5 cm, blanc un peu jaunissant, très fragile.\n• Lames : blanches, à arête typiquement denticulée (à observer avec une loupe).\n• Chair : très âcre, odeur assez faible, fruitée-vanillée, « de coco ».\n• Habitat : espèce très commune, grêle et cassante, des endroits humides des forêts de feuillus et de résineux.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "russule_sardoine": {
      "genus": "Russule sardoine (Russula sardonia)",
      "latin": "Russula sardonia",
      "note": "• Chapeau : plan, légèrement déprimé, large de 5 à 10 cm, charnu, violet-pourpre, souvent plus foncé au centre, taché par plages de jaunâtre ; cuticule non ou à peine séparable.\n• Pied : de couleur plus pâle, haut de 5 à 8 cm, plein puis farci.\n• Lames : échancrées, serrées, typiquement jaune clair, teintées de jaune citron ; spores crème moyen.\n• Chair : ferme et blanche, colorée en jaune sous le revêtement ; saveur très poivrée, brûlante.\n• Habitat : espèce très fréquente et abondante en groupes dans les bois secs de pins, dans les aiguilles ou les hautes herbes, sur sol siliceux.\n• Remarque : dans les mêmes pinèdes, et très ressemblante, la russule des pinèdes (voir fiche suivante) a des lames blanches et une odeur de pomme. La russule sanguine (Russula sanguinaria = Russula sanguinea) a un chapeau rouge vif ou rouge-rose et un pied souvent teinté de rose pâle ; lames souvent un peu décurrentes, crème assez intense, sporée crème moyen, chair piquante.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "inedible",
      "edibility": "inedible",
      "confusions": []
    },
    "russule_des_pinedes": {
      "genus": "Russule des pinèdes (Russula torulosa)",
      "latin": "Russula torulosa",
      "note": "• Chapeau : irrégulier, large de 4 à 10 cm, brun-rose sombre, pourpre-violet ou brun rougeâtre, parfois aussi rouge vif ; cuticule un peu séparable, rugueuse, dévoilant une limite rouge sur la chair blanche.\n• Pied : teinté de violacé avec des nuances bleutées.\n• Lames : peu serrées, blanches puis crème pâle.\n• Chair : âcre, odeur nette de pomme.\n• Habitat : commune sous pins, sur sol plutôt calcaire, souvent en compagnie de la russule sardoine.\n• Remarque : la russule de Quélet (Russula queletii) la remplace sous les épicéas, plus commune en montagne mais poussant aussi en plaine ; chapeau large de 4 à 10 cm, brun-rose à centre foncé, de couleur variable ; pied long et cassant, teinté de rouge ou de lilas ; lames crème ; odeur de pomme.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_palissante": {
      "genus": "Russule pâlissante (Russula exalbicans)",
      "latin": "Russula exalbicans",
      "note": "• Chapeau : large de 8 à 10 cm, typiquement rosâtre au centre, décoloré ou blanchâtre avec des traces de rose sur la marge.\n• Pied : robuste, haut de 5 à 10 cm, blanc avec plus ou moins de rose, grisonnant.\n• Lames : serrées, blanches puis crème ochracé.\n• Chair : grisonnante, un peu âcre.\n• Habitat : assez commune sous bouleaux, plus souvent sur calcaire.\n• Remarque : également sous bouleaux, la russule gracile (Russula gracillima) est plus grêle, avec un pied haut de 4 à 8 cm délicatement teinté de rosé, et un chapeau large de 3 à 7 cm aux couleurs délavées, rose clair et vert pâle, lilas et un peu teinté de rosé.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_couleur_de_peche": {
      "genus": "Russule couleur de pêche (Russula persicina)",
      "latin": "Russula persicina",
      "note": "• Chapeau : large de 5 à 10 cm, rouge vif ou rouge-rose, mais décolorant parfois en jaunâtre ou en crème ; cuticule peu séparable.\n• Pied : haut de 6 à 8 cm, blanc, jaunissant.\n• Lames : plutôt serrées, crème.\n• Chair : blanche, jaunissant ; odeur faible de fruit, saveur piquante.\n• Habitat : espèce assez commune sous différents feuillus, surtout sous chênes.\n• Remarque : la russule jaunissante (Russula luteotacta) lui ressemble beaucoup, mais ses lames sont plus espacées et deviennent assez rapidement jaune vif lorsqu'on la blesse ; elle pousse surtout sous chênes, dans les milieux à tendance chaude et sèche.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "russule_maculee": {
      "genus": "Russule maculée (Russula maculata)",
      "latin": "Russula maculata",
      "note": "• Chapeau : large de 8 à 12 cm, charnu, brillant, rouge orangé à plages jaunes, et taché de macules rouille pourpre.\n• Pied : haut de 5 à 9 cm, blanc avec du rosé roussâtre, brunissant un peu.\n• Lames : épaisses, ocre jaune, portant les mêmes macules rouille que le chapeau.\n• Chair : plus ou moins âcre, odeur complexe, fruitée ou de bois de crayon.\n• Habitat : assez commune sous feuillus sur calcaires, en milieux à tendance chaude et sèche.\n• Remarque : la russule trompeuse (Russula decipiens) est commune sous feuillus et lui ressemble beaucoup ; pied haut de 6 à 10 cm, blanc, grisonnant ; lames serrées jaune orangé, sporée ocre foncé ; chapeau large de 8 à 14 cm, typiquement pourpre ou rouge orangé au bord et jaunâtre au centre ; lames blanchâtres, saveur âcre, odeur faible.",
      "family": "Russulaceae",
      "genusTax": "Russula",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "lactaire_saumon": {
      "genus": "Lactaire couleur saumon (Lactarius salmonicolor)",
      "latin": "Lactarius salmonicolor",
      "note": "Sous sapins (*Abies*) ; la clé le distingue par l'arbre hôte.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "lactaire_delicieux": {
      "genus": "Lactaire délicieux (Lactarius deliciosus)",
      "latin": "Lactarius deliciosus",
      "note": "Sous pins ; lait orange carotte qui ne change pas ou très lentement ; chapeau orangé assez vif.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "lactaire_quieticolor": {
      "genus": "Lactaire à couleur de quietus (Lactarius quieticolor)",
      "latin": "Lactarius quieticolor",
      "note": "Sous pins ; lait orange qui devient lentement brun vineux ; chapeau terne, plutôt brunâtre.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "lactaire_pale": {
      "genus": "Lactaire pâle (Lactarius pallidus)",
      "latin": "Lactarius pallidus",
      "note": "Chapeau un peu visqueux et lisse ; pousse sous hêtres ; lait blanc restant blanc.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "",
      "edibility": "",
      "confusions": []
    },
    "lactaire_controverse": {
      "genus": "Lactaire controversé (Lactarius controversus)",
      "latin": "Lactarius controversus",
      "note": "Sous peupliers et saules ; chapeau vite taché de rosâtre ; lames rosées ; lait blanc restant blanc.",
      "family": "Russulaceae",
      "genusTax": "Lactarius",
      "risk": "",
      "edibility": "",
      "confusions": []
    }
  },
  "groups": {
    "groupe_muolg0ol_9j1j": {
      "name": "Strophaire (Stropharia)",
      "note": "Ancien résultat transformé en groupe intermédiaire.",
      "root": "q_muolg0ol_eubf"
    },
    "groupe_muon67ik_1psl": {
      "name": "Rhodocybe (Rhodocybe)",
      "note": "Ancien résultat transformé en groupe intermédiaire.",
      "root": ""
    }
  }
};
