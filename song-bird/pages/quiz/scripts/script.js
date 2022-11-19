
const birdsData = [
  [
    {
      id: 1,
      name: 'Ворон',
      species: 'Corvus corax',
      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      local_image: '../../assets/images/birds_img/Ворон.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
      local_audio: '../../assets/audio/Ворон.mp3',
    },
    {
      id: 2,
      name: 'Журавль',
      species: 'Grus grus',
      description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      local_image: '../../assets/images/birds_img/Журавль.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
      local_audio: '../../assets/audio/Журавль.mp3',
    },
    {
      id: 3,
      name: 'Ласточка',
      species: 'Delichon urbicum',
      description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      local_image: '../../assets/images/birds_img/Ласточка.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
      local_audio: '../../assets/audio/Ласточка.mp3',
    },
    {
      id: 4,
      name: 'Козодой',
      species: 'Caprimulgus europaeus',
      description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      local_image: '../../assets/images/birds_img/Козодой.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
      local_audio: '../../assets/audio/Козодой.mp3',
    },
    {
      id: 5,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      local_image: '../../assets/images/birds_img/Кукушка.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
      local_audio: '../../assets/audio/Кукушка.mp3',
    },
    {
      id: 6,
      name: 'Синица',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      local_image: '../../assets/images/birds_img/Синица.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
      local_audio: '../../assets/audio/Синица.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      local_image: '../../assets/images/birds_img/Воробей.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
      local_audio: '../../assets/audio/Воробей.mp3',
    },
    {
      id: 2,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      local_image: '../../assets/images/birds_img/Грач.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
      local_audio: '../../assets/audio/Грач.mp3',
    },
    {
      id: 3,
      name: 'Галка',
      species: 'Coloeus monedula',
      description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      local_image: '../../assets/images/birds_img/Галка.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
      local_audio: '../../assets/audio/Галка.mp3',
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      local_image: '../../assets/images/birds_img/Певчий дрозд.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
      local_audio: '../../assets/audio/Певчий дрозд.mp3',
    },
    {
      id: 5,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      local_image: '../../assets/images/birds_img/Сорока.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
      local_audio: '../../assets/audio/Сорока.mp3',
    },
    {
      id: 6,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      local_image: '../../assets/images/birds_img/Сойка.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
      local_audio: '../../assets/audio/Сойка.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      local_image: '../../assets/images/birds_img/Зяблик.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
      local_audio: '../../assets/audio/Зяблик.mp3',
    },
    {
      id: 2,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      local_image: '../../assets/images/birds_img/Клёст.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
      local_audio: '../../assets/audio/Клёст.mp3',
    },
    {
      id: 3,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      local_image: '../../assets/images/birds_img/Горлица.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
      local_audio: '../../assets/audio/Горлица.mp3',
    },
    {
      id: 4,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      local_image: '../../assets/images/birds_img/Дятел.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
      local_audio: '../../assets/audio/Дятел.mp3',
    },
    {
      id: 5,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      local_image: '../../assets/images/birds_img/Удод.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
      local_audio: '../../assets/audio/Удод.mp3',
    },
    {
      id: 6,
      name: 'Стриж',
      species: 'Apus apus',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      local_image: '../../assets/images/birds_img/Стриж.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
      local_audio: '../../assets/audio/Стриж.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      local_image: '../../assets/images/birds_img/Жаворонок.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
      local_audio: '../../assets/audio/Жаворонок.mp3',
    },
    {
      id: 2,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      local_image: '../../assets/images/birds_img/Соловей.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
      local_audio: '../../assets/audio/Соловей.mp3',
    },
    {
      id: 3,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      local_image: '../../assets/images/birds_img/Скворец.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
      local_audio: '../../assets/audio/Скворец.mp3',
    },
    {
      id: 4,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      local_image: '../../assets/images/birds_img/Иволга.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
      local_audio: '../../assets/audio/Иволга.mp3',
    },
    {
      id: 5,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      local_image: '../../assets/images/birds_img/Свиристель.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
      local_audio: '../../assets/audio/Свиристель.mp3',
    },
    {
      id: 6,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      local_image: '../../assets/images/birds_img/Щегол.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
      local_audio: '../../assets/audio/Щегол.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      local_image: '../../assets/images/birds_img/Орёл.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
      local_audio: '../../assets/audio/Орёл.mp3',
    },
    {
      id: 2,
      name: 'Коршун',
      species: 'Milvus migrans',
      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      local_image: '../../assets/images/birds_img/Коршун.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
      local_audio: '../../assets/audio/Коршун.mp3',
    },
    {
      id: 3,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      local_image: '../../assets/images/birds_img/Лунь.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
      local_audio: '../../assets/audio/Лунь.mp3',
    },
    {
      id: 4,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      local_image: '../../assets/images/birds_img/Сокол.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
      local_audio: '../../assets/audio/Сокол.mp3',
    },
    {
      id: 5,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      local_image: '../../assets/images/birds_img/Ястреб.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
      local_audio: '../../assets/audio/Ястреб.mp3',
    },
    {
      id: 6,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      local_image: '../../assets/images/birds_img/Филин.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
      local_audio: '../../assets/audio/Филин.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      local_image: '../../assets/images/birds_img/Альбатрос.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
      local_audio: '../../assets/audio/Альбатрос.mp3',
    },
    {
      id: 2,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      local_image: '../../assets/images/birds_img/Олуша.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
      local_audio: '../../assets/audio/Олуша.mp3',
    },
    {
      id: 3,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      local_image: '../../assets/images/birds_img/Буревестник.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
      local_audio: '../../assets/audio/Буревестник.mp3',
    },
    {
      id: 4,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/American_White_Pelican%2C_non-breeding_adult_%2838164183581%29.jpg/1200px-American_White_Pelican%2C_non-breeding_adult_%2838164183581%29.jpg?20171107194327',
      // image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
      local_image: '../../assets/images/birds_img/Пеликан.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
      local_audio: '../../assets/audio/Пеликан.mp3',
    },
    {
      id: 5,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      local_image: '../../assets/images/birds_img/Пингвин.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
      local_audio: '../../assets/audio/Пингвин.mp3',
    },
    {
      id: 6,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      local_image: '../../assets/images/birds_img/Чайка.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
      local_audio: '../../assets/audio/Чайка.mp3',
    }
  ]
];

// export default birdsData;

const main = document.getElementById('main');
const result = document.getElementById('result')
const result__button = document.querySelector('.result__button');
const instruction = document.getElementById('instruction');
const card_wrapper = document.getElementById('card-wrapper');
const quiz_content__player = document.querySelector('.quiz-content__player');
const quiz_content__image = document.querySelector('.quiz-content__image');
const quiz_content__img = document.querySelector('.quiz-content__img');
const quiz_content__item_name = document.querySelector('.quiz-content__item-title');
const quiz_content__track = document.querySelector('.quiz-content__track');
const card_body_img = document.querySelector('.card-body_img');
const body__item_title = document.querySelector('.body__item_title');
const card_body__item_title = document.querySelector('.card-body__item-title');
const card_body__item_species = document.querySelector('.card-body__item-species');
const card_body__description = document.querySelector('.card-body__description');
const audio__click = document.querySelector('.audio__click');
const audio_player_first = document.getElementById('audio-player_first');
const audio_player_second = document.getElementById('audio-player_second');
const play_button__img_first = document.querySelector('.play-button__img-first');
const play_button__img_second = document.querySelector('.play-button__img-second');

const timebar = document.querySelector('.timebar');
const timebar_second = document.querySelector('.timebar_second');
const timebar_track_color = document.querySelector('.timebar-track_color');
const timebar_track__color_second = document.querySelector('.timebar-track__color-second');
const timebar_circle = document.querySelector('.timebar-circle');
const timebar_circle_second = document.querySelector('.timebar-circle_second');
const timebar_info__end_first = document.querySelector('.timebar-info__end-first');
const timebar_info__end_second = document.querySelector('.timebar-info__end-second');
const timebar_info__current_first = document.querySelector('.timebar-info__current-first');
const timebar_info__current_second = document.querySelector('.timebar-info__current-second');

const menu__item_quiz = document.querySelectorAll('.menu__item_quiz');
const info_column__item = document.querySelectorAll('.info-column__item');
const info_column__link = document.querySelectorAll('.info-column__link');
const li_circle = document.querySelectorAll('.li-circle');

const button__next_level = document.querySelector('.button__next-level');
const scoreResult = document.querySelector('.score');
const final__score = document.querySelector('.final__score');
const button = document.querySelector('.button');
// console.log(button_hover = false);

const bird_group_list = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
let bird_group = 'Разминка';
let bird_group_id = 0;
let answer;
let score = 0;
let theLastSelection;
scoreResult.innerText = score;
final__score.innerText = score;


function playQuiz() {
  let currentGroupIndex = bird_group_list.indexOf(bird_group);
  let randomLength = birdsData[currentGroupIndex].length;
  let randomInt = Math.floor(Math.random() * randomLength);
  let bird = birdsData[currentGroupIndex][randomInt];
  audio_player_first.setAttribute('src', bird.local_audio);
  console.log(bird);
  return bird.id
};

function active_button() {
  if (bird_group_id !== 0) {
    menu__item_quiz[bird_group_id - 1].classList.remove('active');
  }
};


function selectGroup(id) {
  menu__item_quiz[bird_group_id].classList.add('active');
  let num = 0;
  for (let bird_info of info_column__item) {
    bird_info.children[1].innerText = birdsData[id][num].name;
    bird_info.value = birdsData[id][num].id;
    num = num + 1;
  };
  answer = playQuiz();
};


function goNextLevel() {
  if (bird_group_id > bird_group_list.length - 1) {
    menu__item_quiz[bird_group_list.length - 1].classList.remove('active');
    main.style.cssText = 'display: none';
    result.style.cssText = 'display: block';
    return
  }
  bird_group = bird_group_list[bird_group_id];
  selectGroup(bird_group_id);
  active_button()
  menu__item_quiz[bird_group_id].classList.add('active');
};

if (bird_group_id > bird_group_list.length - 1 || bird_group_id == 0) {
  bird_group_id = 0;
  selectGroup(bird_group_id)
}

function getBirdInfo() {
  instruction.style.cssText = 'display: none';
  card_wrapper.style.cssText = 'display: block';
};

function hideBirdInfo() {
  instruction.style.cssText = 'display: block';
  card_wrapper.style.cssText = 'display: none';
};

function hideWinBirdInfo() {
  quiz_content__img.setAttribute('src', '../../assets/images/bird.jpg');
  quiz_content__item_name.innerHTML = '*****';
};

function showWinBirdInfo(bird_id) {
  let winBird = birdsData[bird_group_id][bird_id - 1];
  quiz_content__img.setAttribute('src', winBird.local_image);
  quiz_content__item_name.innerHTML = winBird.name;
};

function showBirdInfo(bird_id) {
  let selectedBird = birdsData[bird_group_id][bird_id - 1];
  card_body_img.setAttribute('src', selectedBird.local_image);
  card_body__item_title.innerText = selectedBird.name;
  card_body__item_species.innerText = selectedBird.species;
  card_body__description.innerText = selectedBird.description;
  audio_player_second.setAttribute('src', selectedBird.local_audio);
};

audio_path_wrong = "C:/Users/User/Desktop/rsschool-cv/song-bird/assets/audio/wrong.wav";
audio_path_right = "C:/Users/User/Desktop/rsschool-cv/song-bird/assets/audio/right.wav";
function playAudio() {
  audio__click.play();
};

let birdArray = [];
let selectionHistotyArray = [];
let x;
let winStatus = false;
for (let iter of info_column__item) {
  iter.addEventListener('click', function (e) {
    timebar_info__end_second.innerText = '00:00';
    selectionHistotyArray.push(iter);
    getBirdInfo();
    stopAudio_2(path_play);
    if (iter.getAttribute('value') == String(answer)) {
      button.classList.add('button__green');
      console.log('Yes!');
      button__next_level.removeAttribute('disabled');
      if (winStatus == false) {
        iter.firstChild.style.cssText = 'background-color: #6eac09;';
        play_button__img_first.setAttribute('alt', 'pause_button');
        togglePlayer_1();
      }
      showWinBirdInfo(iter.getAttribute('value'));
      showBirdInfo(iter.getAttribute('value'));
      audio__click.setAttribute('src', audio_path_right);
      if (winStatus == false) {
        playAudio();
      }
      winStatus = true;
    }
    else {
      console.log('No!');

      audio__click.setAttribute('src', audio_path_wrong);
      if (winStatus == false) {
        iter.firstChild.style.cssText = 'background-color: #ff0000;';
        if (birdArray.includes(iter.getAttribute('value'))) {
        }
        else {
          birdArray.push(iter.getAttribute('value'));
        };
        playAudio();
      }
      showBirdInfo(iter.getAttribute('value'));
    };
  });
};

function setDefaultColor() {
  for (let li of li_circle)
    li.style.cssText = 'background-color: #fff;';
}

function nextLevelPlayerProp() {
  timebar_circle.style.cssText = 'left: 0px; background-color: #b4b2b2';
  timebar_circle_second.style.cssText = 'left: 0px; background-color: #b4b2b2';
  timebar_track_color.style.cssText = 'width: 0px';
  timebar_track__color_second.style.cssText = 'width: 0px';
  timebar_info__current_first.innerText = "00:00";
  timebar_info__current_second.innerText = "00:00";
  timebar_info__end_first.innerText = "00:00";
  timebar_info__end_second.innerText = "00:00";
  audio_player_first.setAttribute('alt', 'play_button');
  audio_player_second.setAttribute('alt', 'play_button');
  button.classList.remove('button__green');
  setDefaultColor();
  stopAudio_1(path_play);
  stopAudio_2(path_play);
};

function countResult() {
  button__next_level.setAttribute('disabled', 'true');
  if (birdArray.length >= 4) {
    score = 0;
  }
  else {
    score = 5 - birdArray.length;
  }
  winStatus = false;
  scoreLevel = scoreResult.innerText;
  scoreResult.innerText = String(Number(scoreLevel) + score);
  final__score.innerText = scoreResult.innerText;
  bird_group_id = bird_group_id + 1;
  birdArray = [];
  selectionHistotyArray = [];
  score = 0;
  nextLevelPlayerProp();
  hideWinBirdInfo();
  hideBirdInfo();
  goNextLevel();
};


button__next_level.addEventListener('click', function (e) {
  countResult();
});

result__button.addEventListener('click', function (e) {
  location.reload();
});

path_play = "../../assets/images/play-button1.png";
path_pause = "../../assets/images/pause-button1.png";

function playAudio_1(path) {
  play_button__img_first.setAttribute('src', path);

  play_button__img_first.setAttribute('alt', 'pause_button');
  audio_player_first.play();
};

function stopAudio_1(path) {

  play_button__img_first.setAttribute('alt', 'play_button');
  play_button__img_first.setAttribute('src', path);
  audio_player_first.pause();
};

function formatTime(time) {
  let seconds = Math.floor(time);
  let minutes = Math.floor(seconds / 60);

  if (seconds > 60) {
    seconds = seconds - (minutes * 60);
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return {
    'seconds': seconds,
    'minutes': minutes,
  }
};

function updateProgress_1(e) {
  if (play_button__img_first.getAttribute('alt') == 'pause_button') {
    const { duration, currentTime } = e.srcElement;
    const progressPrecent = (currentTime / duration) * 100;
    timebar_circle.style.cssText = 'left: ' + String(timebar.offsetWidth / 100 * progressPrecent) + 'px; background-color: #6eac09';
    timebar_track_color.style.cssText = 'width: ' + String((timebar_track_color.style.left + timebar.offsetWidth) / 100 * progressPrecent) + 'px';
    timebar_info__end_first.innerText = formatTime(duration).minutes + ':' + formatTime(duration).seconds;
    timebar_info__current_first.innerText = formatTime(currentTime).minutes + ':' + formatTime(currentTime).seconds;
  }
};

function updateProgress_2(e) {
  if (play_button__img_second.getAttribute('alt') == 'pause_button') {
    const { duration, currentTime } = e.srcElement;
    const progressPrecent = (currentTime / duration) * 100;
    timebar_circle_second.style.cssText = 'left: ' + String(timebar_second.offsetWidth / 100 * progressPrecent) + 'px; background-color: #6eac09';
    timebar_track__color_second.style.cssText = 'width: ' + String((timebar_track__color_second.style.left + timebar_second.offsetWidth) / 100 * progressPrecent) + 'px';
    timebar_info__end_second.innerText = formatTime(duration).minutes + ':' + formatTime(duration).seconds;
    timebar_info__current_second.innerText = formatTime(currentTime).minutes + ':' + formatTime(currentTime).seconds;
  }
};

audio_player_first.addEventListener('timeupdate', updateProgress_1);
audio_player_second.addEventListener('timeupdate', updateProgress_2);

function setProgress(e) {

  const width = this.offsetWidth;
  const clickX = e.offsetX;
  const duration = audio_player_first.duration;
  audio_player_first.currentTime = (clickX / width) * duration;
};

function setProgress_2(e) {

  const width = this.offsetWidth;
  const clickX = e.offsetX;
  const duration = audio_player_second.duration;
  audio_player_second.currentTime = (clickX / width) * duration;
};

timebar.addEventListener('click', setProgress);
timebar_second.addEventListener('click', setProgress_2);

function endStop_1() {
  timebar_circle.style.cssText = 'left: 0px; background-color: #b4b2b2';
  timebar_track_color.style.cssText = 'width: 0px';
  timebar_info__current_first.innerText = "00:00";
  togglePlayer_1(path_pause);
};

function endStop_2() {
  timebar_circle_second.style.cssText = 'left: 0px; background-color: #b4b2b2';
  timebar_track__color_second.style.cssText = 'width: 0px';
  timebar_info__current_second.innerText = "00:00";
  togglePlayer_2(path_pause);
};

audio_player_first.addEventListener('ended', endStop_1);
audio_player_second.addEventListener('ended', endStop_2);

function playAudio_2(path) {
  play_button__img_second.setAttribute('src', path);
  play_button__img_second.setAttribute('alt', 'pause_button');
  audio_player_second.play();
};

function stopAudio_2(path) {
  play_button__img_second.setAttribute('alt', 'play_button');
  play_button__img_second.setAttribute('src', path);
  audio_player_second.pause();
};

function togglePlayer_1() {
  if (play_button__img_first.getAttribute('alt') == 'play_button') {
    playAudio_1(path_pause);
  }
  else {
    stopAudio_1(path_play);
  };
};

play_button__img_first.addEventListener('click', function (e) {
  stopAudio_2(path_play);
  togglePlayer_1();
});

function togglePlayer_2() {
  if (play_button__img_second.getAttribute('alt') == 'play_button') {
    playAudio_2(path_pause);
  }
  else {
    stopAudio_2(path_play);
  };
};

play_button__img_second.addEventListener('click', function (e) {
  stopAudio_1(path_play);
  togglePlayer_2();
});