import { BookOpen, Microscope, Atom, Leaf } from 'lucide-react';

export const sections = {
botany: {
  name: 'Botany',
  icon: <Leaf className="w-6 h-6" />,
  color: 'bg-green-500',
  questions: [
    {
      question: "Which of the following statements is NOT true?",
      options: [
        "Tapetum helps in the dehiscence of anther",
        "Exine of pollen grains is made up of sporopollenin",
        "Most species of pollen grains can cause allergic reactions",
        "None of the above"
      ],
      correct: 0
    },
    {
      question: "Pollination in water hyacinth and water lily is brought about by the agency of",
      options: [
        "Bats",
        "Water",
        "Molluscs",
        "Insects or Wind"
      ],
      correct: 1
    },
    {
      question: "The ovule of an angiosperm is technically equivalent to",
      options: [
        "Megasporangium",
        "Megasporophyll",
        "Megaspore mother cell",
        "Megaspore"
      ],
      correct: 0
    },
    {
      question: "Which one of the following may require pollinators but is genetically similar to autogamy?",
      options: [
        "Geitonogamy",
        "Xenogamy",
        "Apogamy",
        "Cleistogamy"
      ],
      correct: 0
    },
    {
      question: "Assertion (I): A mature angiosperm embryo sac is 8-nucleate.\nReason (II): A mature angiosperm embryo sac is 7-celled.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 1
    },
    {
      question: "Attractants and rewards are required for",
      options: [
        "Hydrophily",
        "Anemophily",
        "Entomophily",
        "All of the above"
      ],
      correct: 2
    },
    {
      question: "The morphological nature of the edible part of the coconut is",
      options: [
        "Endosperm",
        "Ectoderm",
        "Cotyledon",
        "Mesocarp"
      ],
      correct: 0
    },
    {
      question: "A dioecious flowering plant prevents both",
      options: [
        "Autogamy and Geitonogamy",
        "Autogamy and Xenogamy",
        "Geitonogamy and Xenogamy",
        "None of the above"
      ],
      correct: 0
    },
    {
      question: "A functional megaspore in an angiosperm develops into",
      options: [
        "Endoderm",
        "Ovule",
        "Embryo",
        "Embryo sac"
      ],
      correct: 3
    },
    {
      question: "Seed formation without fertilization in flowering plants involves the process of",
      options: [
        "Apomixis",
        "Budding",
        "Sporulation",
        "Somatic hybridization"
      ],
      correct: 0
    },
    {
      question: "Double fertilization is",
      options: [
        "Fusion of two male gametes of a pollen tube with two different eggs",
        "Fusion of one male gamete with two polar nuclei",
        "Fusion of two male gametes with one egg",
        "Syngamy and triple fusion"
      ],
      correct: 3
    },
    {
      question: "Winged pollen grains are present in",
      options: [
        "Mustard",
        "Cycas",
        "Mango",
        "Pinus"
      ],
      correct: 3
    },
    {
      question: "Flowers which have a single ovule in the ovary and are packed into an inflorescence are usually pollinated by",
      options: [
        "Bee",
        "Wind",
        "Bat",
        "Water"
      ],
      correct: 1
    },
    {
      question: "Assertion (I): Double fertilization involves the fusion of two male gametes with one egg cell.\nReason (II): One male gamete fuses with the egg cell and the other fuses with two polar nuclei.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 3
    },
    {
      question: "Synergids are part of",
      options: [
        "Megasporogenesis",
        "Female gametophyte",
        "Male gametophyte",
        "Endosperm"
      ],
      correct: 1
    },
    {
      question: "Which of the following fruits is parthenocarpic?",
      options: [
        "Banana",
        "Apple",
        "Orange",
        "Mango"
      ],
      correct: 0
    },
    {
      question: "The type of placentation found in mustard is",
      options: [
        "Axile",
        "Parietal",
        "Free central",
        "Basal"
      ],
      correct: 1
    },
    {
      question: "An angiosperm embryo sac at maturity is",
      options: [
        "8-nucleate and 7-celled",
        "7-nucleate and 8-celled",
        "8-nucleate and 8-celled",
        "7-nucleate and 7-celled"
      ],
      correct: 0
    },
    {
      question: "A flower with long, feathery stigmas and exposed stamens indicates pollination by",
      options: [
        "Wind",
        "Water",
        "Insects",
        "Birds"
      ],
      correct: 0
    },
    {
      question: "Assertion (I): Tapetum is the innermost layer of the anther that provides nutrition to developing pollen.\nReason (II): Tapetum helps in anther dehiscence.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 2
    },
    {
      question: "Which of the following structures gives rise to pollen grains in anther?",
      options: [
        "Microsporocyte",
        "Megasporocyte",
        "Ovule",
        "Ovule primordium"
      ],
      correct: 0
    },
    {
      question: "During microsporogenesis, the microsporocyte directly undergoes",
      options: [
        "Mitosis to form microspores",
        "Meiosis to form microspores",
        "Meiosis to form megaspores",
        "Mitosis to form megaspores"
      ],
      correct: 1
    },
    {
      question: "The part of the pistil that receives pollen is called",
      options: [
        "Ovule",
        "Style",
        "Stigma",
        "Ovary"
      ],
      correct: 2
    },
    {
      question: "In an angiosperm, primary endosperm is formed by fusion of",
      options: [
        "Two male gametes",
        "One male gamete and one synergid",
        "One male gamete and two polar nuclei",
        "One male gamete and egg cell"
      ],
      correct: 2
    },
    {
      question: "Assertion (I): There are two synergids in a mature angiosperm embryo sac.\nReason (II): Synergids help in pollen tube entry.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 1
    },
    {
      question: "The receptive surface for pollen in flowers is the",
      options: [
        "Anther",
        "Filament",
        "Stigma",
        "Thalamus"
      ],
      correct: 2
    },
    {
      question: "Which of the following is NOT a function of the tapetum?",
      options: [
        "Nourishment of developing pollen",
        "Secretion of sporopollenin precursors",
        "Formation of pollen wall",
        "Production of male gametes"
      ],
      correct: 3
    },
    {
      question: "Which of the following is characteristic of entomophilous flowers?",
      options: [
        "Small, greenish petals",
        "Large, colorful petals with nectar",
        "Exserted stamens with feathery pollen",
        "No fragrance"
      ],
      correct: 1
    },
    {
      question: "Which of the following represents a post-fertilization event?",
      options: [
        "Pollen germination",
        "Pollen tube growth",
        "Embryo development",
        "Syngamy"
      ],
      correct: 2
    },
    {
      question: "Which one of the following shows the correct sequence of events in sexual reproduction of angiosperms?",
      options: [
        "Pollination → Fertilization → Seed formation → Fruit formation",
        "Pollination → Seed formation → Fertilization → Fruit formation",
        "Fertilization → Pollination → Seed formation → Fruit formation",
        "Pollination → Fertilization → Fruit formation → Seed formation"
      ],
      correct: 0
    },
    {
      question: "During megasporogenesis, the functional megaspore is the",
      options: [
        "First micropylar megaspore",
        "Second micropylar megaspore",
        "Third micropylar megaspore",
        "Chalazal megaspore"
      ],
      correct: 3
    },
    {
      question: "Which of the following secretions helps in pollen tube guidance?",
      options: [
        "Nectar",
        "Pollenkitt",
        "Pistil mucilage",
        "Gestation fluid"
      ],
      correct: 2
    },
    {
      question: "Which of the following is a technical term for self-pollination that occurs within a bisexual flower?",
      options: [
        "Geitonogamy",
        "Autogamy",
        "Xenogamy",
        "Apogamy"
      ],
      correct: 1
    },
    {
      question: "In an angiosperm embryo sac, the two polar nuclei are formed by",
      options: [
        "Synergids fusion",
        "Egg cell division",
        "Central cell division",
        "Antipodal cell division"
      ],
      correct: 2
    },
    {
      question: "Which of the following best describes the phenomenon of double fertilization?",
      options: [
        "Fusion of two egg cells with one sperm",
        "Fusion of one male gamete with egg and other with polar nuclei",
        "Fusion of two male gametes with one egg",
        "Fusion of two polar nuclei with one male gamete"
      ],
      correct: 1
    },
    {
      question: "In which of the following is embryogeny without fertilization seen?",
      options: [
        "Polyembryony",
        "Parthenocarpy",
        "Apomixis",
        "Androgenesis"
      ],
      correct: 2
    },
    {
      question: "Which of the following is an example of outbreeding device?",
      options: [
        "Cleistogamy",
        "Dichogamy",
        "Geitonogamy",
        "Chasmogamy"
      ],
      correct: 1
    },
    {
      question: "The term ‘pericarp’ refers to",
      options: [
        "Seed coat",
        "Fruit wall",
        "Seed-endosperm complex",
        "Funiculus"
      ],
      correct: 1
    },
    {
      question: "Which of the following parts of the flower becomes seed coat after fertilization?",
      options: [
        "Integuments",
        "Nucellus",
        "Funiculus",
        "Perianth"
      ],
      correct: 0
    },
    {
      question: "Which one of the following correctly describes a superior ovary?",
      options: [
        "Ovary above the attachment of other floral parts",
        "Ovary below the attachment of other floral parts",
        "Ovary fused with the floral parts",
        "Ovary fused with the receptacle"
      ],
      correct: 0
    },
    {
      question: "Assertion (I): Self-incompatibility prevents self-fertilization.\nReason (II): It is a post-pollination, pre-zygotic barrier.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "Which of the following sugar is the main product of photosynthesis that is translocated via phloem to developing seeds?",
      options: [
        "Sucrose",
        "Glucose",
        "Fructose",
        "Starch"
      ],
      correct: 0
    },
    {
      question: "Which one of the following processes directly leads to formation of zygote in angiosperms?",
      options: [
        "Syngamy",
        "Triple fusion",
        "Karyogamy",
        "Microsporogenesis"
      ],
      correct: 0
    },
    {
      question: "Which of the following occurs immediately after fertilization in angiosperms?",
      options: [
        "Embryo development",
        "Seed dispersal",
        "Fruit ripening",
        "Germination"
      ],
      correct: 0
    },
    {
      question: "Which of the following is NOT a product of double fertilization?",
      options: [
        "Primary endosperm",
        "Zygote",
        "Embryo",
        "Polyembryony"
      ],
      correct: 3
    },
    {
      question: "In which of the following is the micropyle retained after seed formation?",
      options: [
        "Castor",
        "Pea",
        "Chickpea",
        "Gram"
      ],
      correct: 0
    },
    {
      question: "Which of the following structures represents the male gametophyte in angiosperms?",
      options: [
        "Microspore mother cell",
        "Pollen grain",
        "Antheridium",
        "Pollen tube"
      ],
      correct: 1
    },
    {
      question: "Which of the following is an example of gametophytic incompatibility in angiosperms?",
      options: [
        "Self-incompatibility",
        "Heterostyly",
        "Herkogamy",
        "Dichogamy"
      ],
      correct: 0
    },
    {
      question: "Which of the following is responsible for pollen dispersal in anemophilous plants?",
      options: [
        "Sticky pollen grains",
        "Light, non-sticky pollen grains",
        "Large, fragrant flowers",
        "Brightly colored petals"
      ],
      correct: 1
    },
    {
      question: "Assertion (I): Hydrophily is pollination by water.\nReason (II): Anemophily is pollination by air currents.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 1
    },
    {
      question: "Which one of these is a characteristic feature of entomophilous pollen?",
      options: [
        "Small, smooth pollen",
        "Large, spiny pollen",
        "Light, airborne pollen",
        "Elongated, winged pollen"
      ],
      correct: 1
    },
    {
      question: "Which of the following occurs in the embryo sac before fertilization?",
      options: [
        "Fusion of polar nuclei",
        "Antipodal cell degeneration",
        "Synergid degeneration",
        "Formation of generative cell"
      ],
      correct: 2
    },
    {
      question: "Which one of these best describes the mechanism of self-incompatibility in many flowering plants?",
      options: [
        "Physical separation of male and female organs",
        "Biochemical rejection of self-pollen",
        "Temporal separation of pollen release and stigma receptivity",
        "Structural barriers in the flower"
      ],
      correct: 1
    },
    {
      question: "Assertion (I): In parietal placentation, ovules are attached to the walls of the ovary.\nReason (II): Mustard exhibits parietal placentation.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 1
    }
  ]
},
zoology: {
  name: 'Zoology',
  icon: <Microscope className="w-6 h-6" />,
  color: 'bg-blue-500',
  questions: [
    {
      question: "Which cells in the testes secrete testosterone?",
      options: ["Sertoli cells", "Leydig cells", "Spermatogonia", "Myoid cells"],
      correct: 1
    },
    {
      question: "Which structure stores spermatozoa until ejaculation?",
      options: ["Vas deferens", "Seminal vesicle", "Epididymis", "Ejaculatory duct"],
      correct: 2
    },
    {
      question: "Sertoli cells are responsible for:",
      options: [
        "Spermatid release",
        "Nourishment of developing sperm",
        "Testosterone production",
        "Storage of sperm"
      ],
      correct: 1
    },
    {
      question: "Assertion (I): Spermatogenesis begins at puberty.\nReason (II): Prior to puberty, Sertoli cells do not respond to FSH.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "FSH in males acts on:",
      options: ["Leydig cells", "Sertoli cells", "Spermatogonia", "Epididymis"],
      correct: 1
    },
    {
  question: "Assertion (I): Long-term use of combined oral contraceptive pills (OCPs) reduces the risk of ovarian and endometrial cancers.\nReason (II): OCPs suppress ovulation by inhibiting the LH surge.",
  options: [
    "Both I and II are true and II explains I",
    "Both I and II are true but II does not explain I",
    "I is true, II is false",
    "I is false, II is true"
  ],
  correct: 0
},
    {
      question: "In females, the primary follicle develops into a secondary follicle under the influence of:",
      options: ["FSH", "LH", "Estrogen", "Progesterone"],
      correct: 0
    },
    {
      question: "Graafian follicle is also called:",
      options: ["Tertiary follicle", "Secondary follicle", "Primordial follicle", "Primary follicle"],
      correct: 0
    },
    {
      question: "Assertion (I): Ovulation is triggered by an LH surge.\nReason (II): Estrogen levels peak just before ovulation.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "Which phase of the menstrual cycle is characterized by endometrial proliferation?",
      options: ["Menstrual phase", "Proliferative phase", "Secretory phase", "Ischemic phase"],
      correct: 1
    },
    {
      question: "Assertion (I): Corpus luteum secretes progesterone after ovulation.\nReason (II): Progesterone maintains the endometrium for implantation.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "The average duration of the menstrual cycle is approximately:",
      options: ["21–25 days", "26–28 days", "28–35 days", "35–40 days"],
      correct: 1
    },
    {
      question: "A primary oocyte is arrested in which stage of meiosis until ovulation?",
      options: ["Prophase I", "Metaphase I", "Prophase II", "Metaphase II"],
      correct: 0
    },
    {
      question: "A secondary oocyte is arrested in which stage of meiosis until fertilization?",
      options: ["Metaphase I", "Metaphase II", "Anaphase II", "Telophase II"],
      correct: 1
    },
    {
      question: "The site of fertilization in the human female is:",
      options: [
        "Uterine cavity",
        "Isthmus of oviduct",
        "Ampullary region of the oviduct",
        "Cervix"
      ],
      correct: 2
    },
    {
      question: "Assertion (I): hCG is produced by the syncytiotrophoblast.\nReason (II): hCG maintains the corpus luteum.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "Assertion (I): Sperm capacitation occurs in the epididymis.\nReason (II): Capacitation removes the glycoprotein coat on the sperm.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 3
    },
    {
      question: "Which component of semen provides energy to sperm?",
      options: ["Fructose", "Proteins", "Prostaglandins", "Enzymes"],
      correct: 0
    },
    {
      question: "Colostrum contains high levels of:",
      options: ["Proteins", "Antibodies", "Fats", "Lactose"],
      correct: 1
    },
    {
      question: "Amenorrhea refers to the absence of:",
      options: ["Menstruation", "Ovulation", "Puberty", "Fertilization"],
      correct: 0
    },
    {
      question: "Polycystic ovary syndrome is characterized by:",
      options: [
        "Multiple follicular cysts",
        "Increased FSH",
        "Decreased LH",
        "Hypoandrogenism"
      ],
      correct: 0
    },
    {
      question: "An ectopic pregnancy most commonly occurs in the:",
      options: [
        "Uterine tube",
        "Uterine cavity",
        "Ovary",
        "Peritoneal cavity"
      ],
      correct: 0
    },
    {
      question: "Vasectomy in males results in:",
      options: [
        "Blocking the vas deferens",
        "Removing the testes",
        "Removing the prostate",
        "Blocking the urethra"
      ],
      correct: 0
    },
    {
      question: "Tubectomy in females is the surgical removal of:",
      options: ["Uterus", "Ovaries", "Fallopian tubes", "Vagina"],
      correct: 2
    },
    {
      question: "Azoospermia means the absence of:",
      options: ["Sperm in semen", "Testosterone", "Sperm count test", "Seminal vesicles"],
      correct: 0
    },
    {
      question: "Which placental hormone stimulates maternal metabolism to ensure an adequate supply of nutrients to the fetus?",
      options: ["hCG", "Human placental lactogen (hPL)", "Progesterone", "Estrogen"],
      correct: 1
    },
    {
      question: "Which method of contraception is based on timing of ovulation?",
      options: ["Rhythm method", "Barrier method", "IUCD", "Sterilization"],
      correct: 0
    },
    {
      question: "Which contraceptive device acts by releasing copper ions?",
      options: ["Condom", "Oral pill", "IUCD", "Emergency contraceptive pill"],
      correct: 2
    },
    {
      question: "Which barrier contraceptive also protects against STDs?",
      options: ["Diaphragm", "Condom", "IUCD", "Oral pill"],
      correct: 1
    },
    {
      question: "Which hormone-based contraceptive pill prevents ovulation by inhibiting the LH surge?",
      options: [
        "Progestin-only pill",
        "Combined oral contraceptive pill",
        "Emergency contraceptive pill",
        "IUCD"
      ],
      correct: 1
    },
    {
      question: "Assertion (I): Tubectomy is an irreversible method of sterilization.\nReason (II): Vasectomy can be reversed by vasovasostomy.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 1
    },
    {
      question: "Which method prevents implantation of a fertilized ovum in the uterus?",
      options: [
        "Oral contraceptive pill",
        "IUCD",
        "Condom",
        "Withdrawal method"
      ],
      correct: 1
    },
    {
      question: "The STD caused by Treponema pallidum is:",
      options: ["Chlamydia", "Syphilis", "Gonorrhea", "HIV"],
      correct: 1
    },
    {
      question: "Assertion (I): Pap smear test is used for early detection of cervical cancer.\nReason (II): Human papillomavirus infection is the most important risk factor for cervical cancer.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 1
    },
    {
      question: "Which STD is viral and has no complete cure?",
      options: ["Syphilis", "Gonorrhea", "HIV", "Chlamydia"],
      correct: 2
    },
    {
      question: "Which assisted reproductive technology involves injecting sperm directly into the ovum?",
      options: ["IVF", "ZIFT", "GIFT", "ICSI"],
      correct: 3
    },
    {
      question: "Amniocentesis is done to:",
      options: [
        "Determine fetal sex",
        "Remove amniotic fluid",
        "Detect fetal genetic abnormalities",
        "Provide fetal nourishment"
      ],
      correct: 2
    },
    {
      question: "Genetic counseling is provided to couples:",
      options: [
        "To prevent pregnancy",
        "After detection of a genetic disorder",
        "For STD treatment",
        "For contraception advice"
      ],
      correct: 1
    },
    {
      question: "Which hormone is responsible for the milk ejection reflex?",
      options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
      correct: 1
    },
    {
      question: "Menopause is defined as the permanent cessation of:",
      options: ["Ovulation", "Pregnancy", "Menstruation", "Fertility"],
      correct: 2
    },
    {
      question: "Assertion (I): Ovulation detection kits measure LH surge in urine.\nReason (II): LH surge occurs about 24–36 hours before ovulation.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "Which screening test is recommended for early detection of breast cancer?",
      options: ["Pap smear", "Mammography", "Colonoscopy", "PSA test"],
      correct: 1
    },
    {
      question: "Which hormone is known as the pregnancy hormone?",
      options: ["Estrogen", "Progesterone", "hCG", "Prolactin"],
      correct: 2
    },
    {
      question: "Which condition can be treated by in vitro fertilization (IVF)?",
      options: [
        "Blocked fallopian tubes",
        "Oligospermia",
        "Polycystic ovary syndrome",
        "All of the above"
      ],
      correct: 0
    },
    {
      question: "The lactational amenorrhea method is effective as contraception when breastfeeding is:",
      options: [
        "Frequent and exclusive",
        "Supplemented",
        "Occasional",
        "Never"
      ],
      correct: 0
    },
    {
      question: "Assertion (I): GnRH is released in a pulsatile manner.\nReason (II): Continuous administration of GnRH analogues leads to downregulation of GnRH receptors on the pituitary.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "Which of the following best explains why mifepristone (RU-486) induces medical abortion?",
      options: [
        "It mimics progesterone at receptor sites",
        "It blocks progesterone receptors, leading to breakdown of endometrium",
        "It blocks estrogen production at the ovary",
        "It stimulates prostaglandin release directly"
      ],
      correct: 1
    },
    {
      question: "Assertion (I): Combined oral contraceptives contain both estrogen and progesterone.\nReason (II): Estrogen prevents FSH release to inhibit follicle development, while progesterone increases cervical mucus viscosity.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "Which statement about capacitation of sperm is correct?",
      options: [
        "It occurs in the seminiferous tubules and involves acrosome activation",
        "It occurs in the female reproductive tract and involves removal of cholesterol from the sperm membrane",
        "It occurs in the epididymis and prepares sperm for mitochondrial activation",
        "It occurs at fertilization and involves fusion of sperm and oocyte membranes"
      ],
      correct: 1
    },
    {
      question: "Assertion (I): hCG has a longer half-life than LH.\nReason (II): hCG shares the same α-subunit as LH but has a different β-subunit that resists degradation.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    },
    {
      question: "During implantation, which of the following events occurs first?",
      options: [
        "Blastocyst hatching from zona pellucida",
        "Trophoblast differentiation into syncytiotrophoblast",
        "Decidual reaction in endometrium",
        "Formation of primitive streak"
      ],
      correct: 0
    },
    {
      question: "Assertion (I): Blood-testis barrier is formed by tight junctions between adjacent Sertoli cells.\nReason (II): This barrier prevents immune cells from attacking developing spermatogenic cells.",
      options: [
        "Both I and II are true and II explains I",
        "Both I and II are true but II does not explain I",
        "I is true, II is false",
        "I is false, II is true"
      ],
      correct: 0
    }
  ]
}

,
  physics: {
    name: 'Physics',
    icon: <Atom className="w-6 h-6" />,
    color: 'bg-purple-500',
    questions: [
    //   {
    //     question: "What is the SI unit of pressure?",
    //     options: ["Newton", "Pascal", "Joule", "Watt"],
    //     correct: 1
    //   },
    //   {
    //     question: "Which electromagnetic wave has the shortest wavelength?",
    //     options: ["Gamma rays", "X-rays", "Ultraviolet", "Visible light"],
    //     correct: 0
    //   },
    //   {
    //     question: "What is the principle behind a transformer?",
    //     options: ["Electromagnetic induction", "Coulomb's law", "Ohm's law", "Photoelectric effect"],
    //     correct: 0
    //   },
    //   {
    //     question: "Which particle has a negative charge?",
    //     options: ["Proton", "Neutron", "Electron", "Alpha particle"],
    //     correct: 2
    //   },
    //   {
    //     question: "What is the formula for kinetic energy?",
    //     options: ["mgh", "mc²", "½mv²", "Fd"],
    //     correct: 2
    //   }
    ]
  },
  chemistry: {
    name: 'Chemistry',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-red-500',
    questions: [
    //   {
    //     question: "What is the atomic number of sodium (Na)?",
    //     options: ["11", "12", "13", "14"],
    //     correct: 0
    //   },
    //   {
    //     question: "Which of these is a noble gas?",
    //     options: ["Chlorine", "Neon", "Nitrogen", "Oxygen"],
    //     correct: 1
    //   },
    //   {
    //     question: "What type of bond is formed between Na+ and Cl-?",
    //     options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    //     correct: 1
    //   },
    //   {
    //     question: "Which element is a liquid at room temperature?",
    //     options: ["Zinc", "Mercury", "Lead", "Copper"],
    //     correct: 1
    //   },
    //   {
    //     question: "What is the pH of a neutral solution?",
    //     options: ["0", "7", "14", "1"],
    //     correct: 1
    //   }
    ]
  }
};
