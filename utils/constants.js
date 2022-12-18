export const MOVIE_GENRE = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const TV_GENRE = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const MOVIE_CERTIFICATES = {
  CA: [
    {
      certification: "G",
      meaning: "All ages.",
      order: 1,
    },
    {
      certification: "PG",
      meaning:
        "Parental guidance advised. There is no age restriction but some material may not be suitable for all children.",
      order: 2,
    },
    {
      certification: "A",
      meaning:
        "Admittance restricted to people 18 years of age or older. Sole purpose of the film is the portrayal of sexually explicit activity and/or explicit violence.",
      order: 5,
    },
    {
      certification: "18A",
      meaning:
        "Persons under 18 years of age must be accompanied by an adult. In the Maritimes & Manitoba, children under the age of 14 are prohibited from viewing the film.",
      order: 4,
    },
    {
      certification: "14A",
      meaning: "Persons under 14 years of age must be accompanied by an adult.",
      order: 3,
    },
  ],
  NL: [
    {
      certification: "AL",
      meaning: "All ages.",
      order: 1,
    },
    {
      certification: "6",
      meaning: "Potentially harmful to children under 6 years.",
      order: 2,
    },
    {
      certification: "9",
      meaning: "Potentially harmful to children under 9 years.",
      order: 3,
    },
    {
      certification: "16",
      meaning:
        "Potentially harmful to children under 16 years; broadcasting is not allowed before 10:00 pm.",
      order: 5,
    },
    {
      certification: "12",
      meaning:
        "Potentially harmful to children under 12 years; broadcasting is not allowed before 8:00 pm.",
      order: 4,
    },
  ],
  GB: [
    {
      certification: "U",
      meaning: "All ages admitted, there is nothing unsuitable for children.",
      order: 1,
    },
    {
      certification: "12",
      meaning:
        "Home media only since 2002. 12A-rated films are usually given a 12 certificate for the VHS/DVD version unless extra material has been added that requires a higher rating. Nobody younger than 12 can rent or buy a 12-rated VHS, DVD, Blu-ray Disc, UMD or game. The content guidelines are identical to those used for the 12A certificate.",
      order: 4,
    },
    {
      certification: "15",
      meaning:
        "Only those over 15 years are admitted. Nobody younger than 15 can rent or buy a 15-rated VHS, DVD, Blu-ray Disc, UMD or game, or watch a film in the cinema with this rating. Films under this category can contain adult themes, hard drugs, frequent strong language and limited use of very strong language, strong violence and strong sex references, and nudity without graphic detail. Sexual activity may be portrayed but without any strong detail. Sexual violence may be shown if discreet and justified by context.",
      order: 5,
    },
    {
      certification: "12A",
      meaning:
        "Films under this category are considered to be unsuitable for very young people. Those aged under 12 years are only admitted if accompanied by an adult, aged at least 18 years, at all times during the motion picture. However, it is generally not recommended that children under 12 years should watch the film. Films under this category can contain mature themes, discrimination, soft drugs, moderate swear words, infrequent strong language and moderate violence, sex references and nudity. Sexual activity may be briefly and discreetly portrayed. Sexual violence may be implied or briefly indicated.",
      order: 3,
    },
    {
      certification: "PG",
      meaning:
        "All ages admitted, but certain scenes may be unsuitable for young children. May contain mild language and sex/drugs references. May contain moderate violence if justified by context (e.g. fantasy).",
      order: 2,
    },
    {
      certification: "18",
      meaning:
        "Only adults are admitted. Nobody younger than 18 can rent or buy an 18-rated VHS, DVD, Blu-ray Disc, UMD or game, or watch a film in the cinema with this rating. Films under this category do not have limitation on the bad language that is used. Hard drugs are generally allowed, and explicit sex references along with detailed sexual activity are also allowed. Scenes of strong real sex may be permitted if justified by the context. Very strong, gory, and/or sadistic violence is usually permitted. Strong sexual violence is permitted unless it is eroticised or excessively graphic.",
      order: 6,
    },
    {
      certification: "R18",
      meaning:
        "Can only be shown at licensed adult cinemas or sold at licensed sex shops, and only to adults, those aged 18 or over. Films under this category are always hard-core pornography, defined as material intended for sexual stimulation and containing clear images of real sexual activity, strong fetish material, explicit animated images, or sight of certain acts such as triple simultaneous penetration and snowballing. There remains a range of material that is often cut from the R18 rating: strong images of injury in BDSM or spanking works, urolagnia, scenes suggesting incest even if staged, references to underage sex or childhood sexual development and aggressive behaviour such as hair-pulling or spitting on a performer are not permitted. More cuts are demanded in this category than any other category.",
      order: 7,
    },
  ],
  AU: [
    {
      certification: "M",
      meaning:
        "Recommended for mature audiences. There are no age restrictions. The content is moderate in impact.",
      order: 4,
    },
    {
      certification: "X18+",
      meaning:
        "Restricted to 18 years and over. Films with this rating have pornographic content. Films classified as X18+ are banned from being sold or rented in all Australian states and are only legally available in the Australian Capital Territory and the Northern Territory. However, importing X18+ material from the two territories to any of the Australian states is legal.The content is sexually explicit in impact.",
      order: 7,
    },
    {
      certification: "RC",
      meaning:
        "Refused Classification. Banned from sale or hire in Australia; also generally applies to importation (if inspected by and suspicious to Customs). Private Internet viewing is unenforced and attempts to legally censor such online material has resulted in controversy. Films are rated RC if their content exceeds the guidelines. The content is very high in impact.",
      order: 8,
    },
    {
      certification: "G",
      meaning: "General. The content is very mild in impact.",
      order: 2,
    },
    {
      certification: "R18+",
      meaning:
        "Restricted to 18 years and over. Adults only. The content is high in impact.",
      order: 6,
    },
    {
      certification: "E",
      meaning:
        "Exempt from classification. Films that are exempt from classification must not contain contentious material (i.e. material that would ordinarily be rated M or higher).",
      order: 1,
    },
    {
      certification: "MA15+",
      meaning:
        "Mature Accompanied. Unsuitable for children younger than 15. Children younger than 15 years must be accompanied by a parent or guardian. The content is strong in impact.",
      order: 5,
    },
    {
      certification: "PG",
      meaning:
        "Parental guidance recommended. There are no age restrictions. The content is mild in impact.",
      order: 3,
    },
  ],
  FR: [
    {
      certification: "10",
      meaning:
        '(Déconseillé aux moins de 10 ans) unsuitable for children younger than 10 (this rating is only used for TV); equivalent in theatres : "avertissement" (warning), some scenes may be disturbing to young children and sensitive people; equivalent on video : "accord parental" (parental guidance).',
      order: 2,
    },
    {
      certification: "12",
      meaning:
        "(Interdit aux moins de 12 ans) unsuitable for children younger than 12 or forbidden in cinemas for under 12.",
      order: 3,
    },
    {
      certification: "18",
      meaning:
        "(Interdit aux mineurs) unsuitable for children younger than 18 or forbidden in cinemas for under 18.",
      order: 5,
    },
    {
      certification: "16",
      meaning:
        "(Interdit aux moins de 16 ans) unsuitable for children younger than 16 or forbidden in cinemas for under 16.",
      order: 4,
    },
    {
      certification: "U",
      meaning: "(Tous publics) valid for all audiences.",
      order: 1,
    },
  ],
  NZ: [
    {
      certification: "18",
      meaning: "Restricted to persons 18 years of age and over.",
      order: 7,
    },
    {
      certification: "M",
      meaning:
        "Suitable for (but not restricted to) mature audiences 16 years and up.",
      order: 3,
    },
    {
      certification: "R",
      meaning:
        "Restricted to a particular class of persons, or for particular purposes, or both.",
      order: 8,
    },
    {
      certification: "15",
      meaning: "Restricted to persons 15 years of age and over.",
      order: 5,
    },
    {
      certification: "PG",
      meaning: "Parental guidance recommended for younger viewers.",
      order: 2,
    },
    {
      certification: "G",
      meaning: "Suitable for general audiences.",
      order: 1,
    },
    {
      certification: "13",
      meaning: "Restricted to persons 13 years of age and over.",
      order: 4,
    },
    {
      certification: "16",
      meaning: "Restricted to persons 16 years of age and over.",
      order: 6,
    },
  ],
  BR: [
    {
      certification: "14",
      meaning:
        "Not recommended for minors under fourteen. More violent material, stronger sex references and/or nudity.",
      order: 4,
    },
    {
      certification: "16",
      meaning:
        "Not recommended for minors under sixteen. Scenes featuring production, trafficking and/or use of illegal drugs, hyper-realistic sex, sexual violence, abortion, torture, mutilation, suicide, trivialization of violence and death penalty.",
      order: 5,
    },
    {
      certification: "L",
      meaning:
        "General Audiences. Do not expose children to potentially harmful content.",
      order: 1,
    },
    {
      certification: "12",
      meaning:
        "Not recommended for minors under twelve. Scenes can include physical aggression, use of legal drugs and sexual innuendo.",
      order: 3,
    },
    {
      certification: "10",
      meaning:
        "Not recommended for minors under ten. Violent content or inappropriate language to children, even if of a less intensity.",
      order: 2,
    },
    {
      certification: "18",
      meaning:
        "Not recommended for minors under eighteen. Scenes featuring explicit sex, incest, pedophilia, praising of the use of illegal drugs and violence of a strong imagery impact.",
      order: 6,
    },
  ],
  PT: [
    {
      certification: "M/18",
      meaning: "Passed for viewers aged 18 and older.",
      order: 7,
    },
    {
      certification: "M/6",
      meaning: "Passed for viewers aged 6 and older.",
      order: 3,
    },
    {
      certification: "Públicos",
      meaning:
        "For all the public (especially designed for children under 3 years of age).",
      order: 1,
    },
    {
      certification: "M/3",
      meaning: "Passed for viewers aged 3 and older.",
      order: 2,
    },
    {
      certification: "M/12",
      meaning: "Passed for viewers aged 12 and older.",
      order: 4,
    },
    {
      certification: "M/16",
      meaning: "Passed for viewers aged 16 and older.",
      order: 6,
    },
    {
      certification: "P",
      meaning:
        "Special rating supplementary to the M/18 age rating denoting pornography.",
      order: 8,
    },
    {
      certification: "M/14",
      meaning: "Passed for viewers aged 14 and older.",
      order: 5,
    },
  ],
  NO: [
    {
      certification: "6",
      meaning: "6 years (no restriction for children accompanied by an adult).",
      order: 2,
    },
    {
      certification: "9",
      meaning: "9 years (children down to 6 years accompanied by an adult).",
      order: 3,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "18",
      meaning: " 18 years (absolute lower limit).",
      order: 6,
    },
    {
      certification: "15",
      meaning: "15 years (young down to 12 years accompanied by an adult).",
      order: 5,
    },
    {
      certification: "12",
      meaning: "12 years (children down to 9 years accompanied by an adult).",
      order: 4,
    },
    {
      certification: "A",
      meaning: "Suitable for all.",
      order: 1,
    },
  ],
  RU: [
    {
      certification: "6+",
      meaning: "(For children above 6) – Unsuitable for children under 6.",
      order: 2,
    },
    {
      certification: "0+",
      meaning: "All ages are admitted.",
      order: 1,
    },
    {
      certification: "16+",
      meaning: "(For children above 16) – Unsuitable for children under 16.",
      order: 4,
    },
    {
      certification: "18+",
      meaning: "(Prohibited for children) – Prohibited for children under 18.",
      order: 5,
    },
    {
      certification: "12+",
      meaning: "(For children above 12) – Unsuitable for children under 12.",
      order: 3,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
  ],
  IT: [
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "VM14",
      meaning: "No admittance for children under 14.",
      order: 2,
    },
    {
      certification: "T",
      meaning: "All ages admitted.",
      order: 1,
    },
    {
      certification: "VM18",
      meaning: "No admittance for children under 18.",
      order: 3,
    },
  ],
  DE: [
    {
      certification: "12",
      meaning:
        "Children 12 or older admitted, children between 6 and 11 only when accompanied by parent or a legal guardian.",
      order: 3,
    },
    {
      certification: "18",
      meaning: "No youth admitted, only adults.",
      order: 5,
    },
    {
      certification: "0",
      meaning: "No age restriction.",
      order: 1,
    },
    {
      certification: "6",
      meaning: "No children younger than 6 years admitted.",
      order: 2,
    },
    {
      certification: "16",
      meaning: "Children 16 or older admitted, nobody under this age admitted.",
      order: 4,
    },
  ],
  "CA-QC": [
    {
      certification: "G",
      meaning:
        'General Rating – May be viewed, rented or purchased by persons of all ages. If a film carrying a "G" rating might offend the sensibilities of a child under 8 years of age, "Not suitable for young children" is appended to the classification.',
      order: 1,
    },
    {
      certification: "18+",
      meaning:
        '18 years and over – May be viewed, rented or purchased only by adults 18 years of age or over. If a film contains real and explicit sexual activity "Explicit sexuality" is appended to the classification, and in the retail video industry storeowners are required to place the film in a room reserved for adults.',
      order: 4,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "16+",
      meaning:
        "16 years and over – May be viewed, rented or purchased only by children 16 years of age or over.",
      order: 3,
    },
    {
      certification: "13+",
      meaning:
        "13 years and over – May be viewed, rented or purchased only by children 13 years of age or over. Children under 13 may be admitted only if accompanied by an adult.",
      order: 2,
    },
  ],
  DK: [
    {
      certification: "11",
      meaning: "For ages 11 and up.",
      order: 3,
    },
    {
      certification: "7",
      meaning: "Not recommended for children under 7.",
      order: 2,
    },
    {
      certification: "A",
      meaning: "Suitable for a general audience.",
      order: 1,
    },
    {
      certification: "15",
      meaning: "For ages 15 and up.",
      order: 4,
    },
    {
      certification: "F",
      meaning: "Exempt from classification.",
      order: 5,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
  ],
  US: [
    {
      certification: "PG-13",
      meaning:
        "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
      order: 3,
    },
    {
      certification: "R",
      meaning:
        "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
      order: 4,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "G",
      meaning:
        "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
      order: 1,
    },
    {
      certification: "PG",
      meaning:
        "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
      order: 2,
    },
    {
      certification: "NC-17",
      meaning:
        "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
      order: 5,
    },
  ],
  FI: [
    {
      certification: "K-16",
      meaning: "Over 16 years.",
      order: 4,
    },
    {
      certification: "K-12",
      meaning: "Over 12 years.",
      order: 3,
    },
    {
      certification: "K-7",
      meaning: "Over 7 years.",
      order: 2,
    },
    {
      certification: "S",
      meaning: "For all ages.",
      order: 1,
    },
    {
      certification: "K-18",
      meaning: "Adults only.",
      order: 5,
    },
    {
      certification: "KK",
      meaning: "Banned from commercial distribution.",
      order: 6,
    },
  ],
  ES: [
    {
      certification: "12",
      meaning: "Not recommended for audiences under 12.",
      order: 3,
    },
    {
      certification: "7",
      meaning: "Not recommended for audiences under 7.",
      order: 2,
    },
    {
      certification: "X",
      meaning: "Prohibited for audiences under 18.",
      order: 6,
    },
    {
      certification: "16",
      meaning: "Not recommended for audiences under 16.",
      order: 4,
    },
    {
      certification: "APTA",
      meaning: "General admission.",
      order: 1,
    },
    {
      certification: "18",
      meaning: "Not recommended for audiences under 18.",
      order: 5,
    },
  ],
  LT: [
    {
      certification: "N-7",
      meaning:
        "Movies for viewers from 7 years old. Younger than 7 years of age, viewers of this index have been featured only together with accompanying adult persons.",
      order: 2,
    },
    {
      certification: "V",
      meaning: "Movies for the audience of all ages.",
      order: 1,
    },
    {
      certification: "N-13",
      meaning:
        "Movies for viewers from 13 years of age. The viewers from 7 to 13 years of age are allowed to enter this index only together with accompanying adult persons.",
      order: 3,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "N-16",
      meaning: "Movies for viewers from 16 years of age.",
      order: 4,
    },
    {
      certification: "N-18",
      meaning: "Movies for viewers from 18 years of age.",
      order: 5,
    },
  ],
  PH: [
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "PG",
      meaning:
        "Viewers below 13 years old must be accompanied by a parent or supervising adult.",
      order: 2,
    },
    {
      certification: "X",
      meaning: "“X-rated” films are not suitable for public exhibition.",
      order: 6,
    },
    {
      certification: "R-18",
      meaning: "Only viewers who are 18 years old and above can be admitted.",
      order: 5,
    },
    {
      certification: "R-16",
      meaning: "Only viewers who are 16 years old and above can be admitted.",
      order: 4,
    },
    {
      certification: "G",
      meaning: "Viewers of all ages are admitted.",
      order: 1,
    },
    {
      certification: "R-13",
      meaning: "Only viewers who are 13 years old and above can be admitted.",
      order: 3,
    },
  ],
  MY: [
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "18SG",
      meaning:
        '(Seram, Ganas: "Graphic Violence and Horror/Terror") - Film may contain strong violence, gore or horror/terror people may find objectionable.',
      order: 3,
    },
    {
      certification: "18PA",
      meaning:
        '(Politik, Agama: "Strong Religious or Political Elements") - Film may contain elements which include religious, social or political aspects people may find objectionable. Rarely used.',
      order: 5,
    },
    {
      certification: "18PL",
      meaning:
        '(Pelbagai: "Various") - Film may contain strong violence, gore, horror/terror, sex scenes, nudity, sexual dialogues/references, religious, social or political aspects people may find objectionable. The majority of the 18+ movies use this rating. For example, a film with sex scenes and strong violence will be classified as 18PL, despite scenes of sex and nudity being strictly censored off by the LPF.',
      order: 6,
    },
    {
      certification: "U",
      meaning:
        '(Umum: "General Audiences") - For general audiences. (Used by the majority of films screened in Malaysia until 2008 but it continues only for television, notably for RTM.)',
      order: 1,
    },
    {
      certification: "P13",
      meaning:
        '(Penjaga 13 : "Parental Guidance 13") - Children under 13 not admitted unless accompanied by an adult. (Introduced in 2006, this became the official Malaysian motion picture rating system in 2008. The "PG-13" rating was revised to "P13" from April 2012 onwards to emphasize the use of Malay language instead of English.) Passionate kissing scenes are not allowed under a P13 rating.',
      order: 2,
    },
    {
      certification: "18SX",
      meaning:
        '(Seks: "Sexual Content") - Film may contain sex scenes, nudity or sexual dialogue/references people may find objectionable (despite scenes of sex and nudity being strictly censored off by the LPF.)',
      order: 4,
    },
  ],
  SE: [
    {
      certification: "11",
      meaning:
        "Children over the age of 7, who are accompanied by an adult, are admitted to films that have been passed for children from the age of 11.",
      order: 3,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "15",
      meaning:
        "Children over the age of 7, who are accompanied by an adult, are admitted to films that have been passed for children from the age of 11. Updated on March 1, 2017.",
      order: 4,
    },
    {
      certification: "7",
      meaning:
        "Children under the age of 7, who are accompanied by an adult (a person aged 18 or over), are admitted to films that have been passed for children from the age of 7.",
      order: 2,
    },
    {
      certification: "Btl",
      meaning: "All ages.",
      order: 1,
    },
  ],
  HU: [
    {
      certification: "6",
      meaning: "Not recommended below age of 6.",
      order: 2,
    },
    {
      certification: "16",
      meaning: "Not recommended below age of 16.",
      order: 4,
    },
    {
      certification: "KN",
      meaning: "Without age restriction.",
      order: 1,
    },
    {
      certification: "18",
      meaning: "Not recommended below age of 18.",
      order: 5,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "12",
      meaning: "Not recommended below age of 12.",
      order: 3,
    },
    {
      certification: "X",
      meaning: "Restricted below 18, for adults only.",
      order: 6,
    },
  ],
  IN: [
    {
      certification: "UA",
      meaning:
        "All ages admitted, but it is advised that children below 12 be accompanied by a parent as the theme or content may be considered intense or inappropriate for young children. Films under this category may contain mature themes, sexual references, mild sex scenes, violence with brief gory images and/or infrequent use of crude language.",
      order: 1,
    },
    {
      certification: "U",
      meaning:
        "Unrestricted Public Exhibition throughout India, suitable for all age groups. Films under this category should not upset children over 4. Such films may contain educational, social or family-oriented themes. Films under this category may also contain fantasy violence and/or mild bad language.",
      order: 0,
    },
    {
      certification: "A",
      meaning:
        "Restricted to adult audiences (18 years or over). Nobody below the age of 18 may buy/rent an A-rated DVD, VHS, UMD or watch a film in the cinema with this rating. Films under this category may contain adult/disturbing themes, frequent crude language, brutal violence with blood and gore, strong sex scenes and/or scenes of drug abuse which is considered unsuitable for minors.",
      order: 2,
    },
  ],
  BG: [
    {
      certification: "A",
      meaning: "Recommended for children.",
      order: 1,
    },
    {
      certification: "B",
      meaning: "Without age restrictions.",
      order: 2,
    },
    {
      certification: "X",
      meaning: "Prohibited for persons under 18.",
      order: 5,
    },
    {
      certification: "D",
      meaning: "Prohibited for persons under 16.",
      order: 4,
    },
    {
      certification: "C",
      meaning: "Not recommended for children under 12.",
      order: 3,
    },
  ],
};

export const MEDIA_TYPE = {
  ALL: "all",
  MOVIE: "movie",
  TV_SERIES: "tv",
  PERSON: "person",
};

export const CREDIT_TYPE = {
  CAST: "cast",
  CREW: "crew",
};

export const TIME_TYPE = {
  WEEK: "week",
  DAY: "day",
};

export const GENDER = {
  1: "Female",
  2: "Male",
};

export const COLLECTION_TYPE = {
  TOP_RATED: "top_rated",
  POPULAR: "popular",
  UP_COMING: "upcoming",
  NOW_PLAYING: "now_playing",
  SIMILAR: "similar",
  TRENDING: "trending",
  RECOMENDED: "recomended",
};

export const VIDEO_TYPE = {
  TRAILER: "Trailer",
};

export const ERROR_MESSAGE = {
  PAGE_NOT_FOUND: "Opps! You are looking for a wrong page.",
  SERVER_ERROR: "Opps! some error occoured. Please try again later.",
};

export const APP_NAME = "Moviezine";

export const DEFAULT_COUNTRY_CODE = "US";
export const DEFAULT_COUNTRY_NAME = "United States";

export const API_VERSION = 3;
export const API_BASE_URL = `https://api.themoviedb.org/${API_VERSION}`;
export const API_IMAGE_URL = "https://image.tmdb.org/t/p";
export const API_LOCATION_URL = `https://geolocation-db.com/json/`;
export const NO_IMG_PLACEHOLDER_USER = `/images/profile-placeholder.jpeg`;
export const NO_IMG_PLACEHOLDER_MEDIA = `/images/media-placeholder.png`;
export const IMDB_IMAGE_PATH = `/images/imdb-icon.png`;
export const IMDB_LOCATION_URL = "https://www.imdb.com/title";
export const IMDB_PERSON_LOCATION_URL = "https://www.imdb.com/name";
export const FACEBOOK_IMAGE_PATH = `/images/facebook_logo_icon.png`;
export const FACEBOOK_PERSON_LOCATION_URL = "https://www.facebook.com";
export const INSTAGRAM_IMAGE_PATH = `/images/instagram_logo_icon.png`;
export const INSTAGRAM_PERSON_LOCATION_URL = "https://www.instagram.com";
export const TWITTER_IMAGE_PATH = `/images/twitter_logo_icon.png`;
export const TWITTER_PERSON_LOCATION_URL = "https://twitter.com";

export const pageLayoutStyle = {
  margin: "0px 180px",
};

export const pageMobileLayoutStyle = {
  margin: "0px 20px",
};

export const movieDetailsStyle = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
