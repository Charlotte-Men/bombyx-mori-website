type Concert = {
  date: string,
  place: string,
  annoucement?: string,
  flyer?: string,
  photos?: Photo[]
}

type Photo = {
  url: string
}

const concerts : Concert[] = [
  {
    date: '23/03/22',
    place: 'L’Armony - Montreuil' ,
    annoucement: 'Marginales, marginaux,</br>Quand des mots niaquent leurs marges</br>Et qu’alors de gnaque on se farde</br>Quand à l’harmonie éclatante,</br>On se coltine la réalité dissonante</br>Bref, quand tous les marginaux</br>Doivent courir la même course pesante</br>Que les autres mais en portant leur fardeau</br>Alors allons au mal nommé Armony, se coltiner</br>Ceux qui à la marge</br>se font dissonants et barges !',
    photos : [
      {url: 'https://photos.app.goo.gl/8uKoLdc8rehCwxEH6'}
    ]
  },
  {
    date: '23/03/22',
    place: 'QG Oberkamp - Paris' ,
    annoucement: 'Fans de végétal,</br>Les arbres se dénudent laissant leurs branches squelettiques danser avec le vent comme si ce dernier tirait les ficelles d’un pantin intemporel. Comme ces arbres en automne, les Bombyx se plaisent à être dévêtus, pour le temps qu’ils créeront avec vous. Ils se préparent ainsi à habiller leur rôle de marionnettes scéniques et soniques, attachés à vous par le fil du frisson qui déchire les tympans frileux. Préparez-vous à une fulgurante attaque sonore et charnelle car deux concerts en 15 jours s’annoncent pour bientôt! Les affaires reprennent donc avec un entrain certain que nous souhaiterions partager avec vous.',
    photos : [
      {url: 'https://photos.app.goo.gl/9v93jtuvdwgeMi6o7'},
      {url: 'https://photos.app.goo.gl/TWiULyMmNigmjtLA8'},
      {url: 'https://photos.app.goo.gl/4BvT6kYDrZbrqzN77'}
    ]
  },
  {
    date: '20/11/21',
    place: 'La Comedia - Montreuil' ,
    annoucement: 'Fans de végétal, Les arbres se dénudent laissant leurs branches squelettiques danser avec le vent comme si ce dernier tirait les ficelles d’un pantin intemporel. Comme ces arbres en automne, les Bombyx se plaisent à être dévêtus, pour le temps qu’ils créeront avec vous. Ils se préparent ainsi à habiller leur rôle de marionnettes scéniques et soniques, attachés à vous par le fil du frisson qui déchire les tympans frileux. Préparez-vous à une fulgurante attaque sonore et charnelle car deux concerts en 15 jours s\’annoncent pour bientôt! Les affaires reprennent donc avec un entrain certain que nous souhaiterions partager avec vous.',
    flyer: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/251899799_302607368533793_1779175265634931919_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=fhYrL4QnA9oAX92mI24&_nc_ht=scontent-cdg2-1.xx&oh=00_AT9FMd6b5yVfmRQ3icdc22AtmI0Pfb-0Z_p1ueB6t9Qvmw&oe=63275162',
    photos : [
      {url: 'https://photos.app.goo.gl/fRVaBtFF9aEjeERo9'},
      {url: 'https://photos.app.goo.gl/89XdDkxnhXDioAf26'},
      {url: 'https://photos.app.goo.gl/G9EsTkBY7KYQwCxz6'}
    ]
  },
]

export { concerts };
