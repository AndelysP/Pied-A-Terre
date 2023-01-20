const houses = [
    {
        id: '1',
        name: "Gîte Spa Relais des Forges",
        desc: "Besoin d'un séjour détente ? D'une capacité de 2 à 4 personnes, le Gîte Spa chez Relais des Forges vous propose un hébergement insolite tout confort équipé d'un SPA privatif dans les Pyrénées ! N'attendez plus pour découvrir le charme de notre gîte SPA, équipé également d'une terrasse privative pour profiter des beaux jours dans notre magnifique domaine. Vous disposerez également d'un accès à notre piscine chauffée extérieure ouverte en saison.",
        options : {
            capacity: 8,
            room: 1,
            bed: 1,
            bathroom: 1,
        } ,
        image: 'https://images.pexels.com/photos/9290991/pexels-photo-9290991.jpeg' , 
        price : 151,
        location: 'Tremblay-en-France, Île de France',
        reservations: 94
    },
    {
        id: '2',
        name: "Villa Vauville avec grand jardin et piscine",
        desc: "Villa de caractère située à Vauville, à moins de 15 minutes en voiture du centre-ville de Deauville, des parcours de golf et des champs de course hippiques. Elle combine parfaitement l'authenticité de son architecture avec la modernité de sa décoration et de ses équipements. Elle peut accueillir particuliers comme professionnels dans le cadre de séminaires d'entreprises. La propriété dispose d'une piscine chauffée et de nombreux équipements d'intérieur et d'extérieur.",
        options : {
            capacity: 16,
            room: 8,
            bed: 14,
            bathroom: 6,
        } ,
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 1300,
        location: "Vauville, Normandie",
        reservations: 17
    },
    {
        id: '3',
        name: "Entre Terre et Mer",
        desc: "Appartement spacieux à 600m de la mer, jolie terrasse où vous pouvez prendre vos repas en extérieur avec un barbecue à disposition. Il y a 1 chambre avec un lit double, un lit simple, une cuisine et un salon avec un canapé lit. Le logement se situe à 4,5km du Treport, proche de La baie de somme st Valérie, le linge de maison n'est pas fourni",
        options : {
            capacity: 3,
            room: 1,
            bed: 2,
            bathroom: 1,
        } ,
        image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        price : 47,
        location: 'Criel-sur-Mer, Normandie',
        reservations: 192
    },
    {
        id: '4',
        name: "Appartement lumineux au coeur de Cotignac",
        desc: "Grand 2 pièces au calme entièrement refait à neuf, décoré avec soin. Profitez du calme, du confort et du frais de cet appartement situé au cœur de la Provence. Visitez Cotignac, ses petits commerces atypiques, son marché, ses ruelles... Régalez-vous parmi les nombreux restaurants du village. Dégustez de somptueux vins provençaux directement dans les vignobles alentours. Echappez-vous un peu plus loin pour découvrir Sillans-la-Cascade et les rivières Gorges du Verdon....",
        options : {
            capacity: 3,
            room: 1,
            bed: 4,
            bathroom: 1,
        } ,
        image: 'https://images.pexels.com/photos/7511701/pexels-photo-7511701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 50,
        location: "Cotignac, Provence-Alpes-Côte d'Azur",
        reservations:  45
    },
    {
        id: '5',
        name: "La villa d'Audrey",
        desc: "Villa en bord de mer à proximité immédiate de la baie de Brignonan (30m). Logement idéal pour 2 familles ou plus, la piscine est accessible et chauffée du 15 Avril à fin septembre à 27/28°c. Profitez d'une jolie station balnéaire, bordée de jolies villas et d'activités nautiques en tout genre.",
        options : {
            capacity: 16,
            room: 8,
            bed: 9,
            bathroom: 2,
        } ,
        image: 'https://images.pexels.com/photos/8031973/pexels-photo-8031973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 347,
        location: "Brignogan-Plage, Bretagne",
        reservations: 162
    },
    {
        id: '6',
        name: 'Chalet "La Datcha"',
        desc: "Chalet joliment atypique et chaleureux entièrement en bois venu directement de Pologne, classé 4 étoiles et situé en lisière de forêt, présence d'animaux de la ferme : chevaux, moutons, basse cour et un potager bio. Situé entre l'Alsace et les Hautes Vosges il y a dans un rayon de 12 à 40km de multiples activités sportives et culturelles.",
        options : {
            capacity: 4,
            room: 2,
            bed: 4,
            bathroom: 1,
        } ,
        image: 'https://images.pexels.com/photos/9222075/pexels-photo-9222075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 83,
        location: 'Colroy-la-Grande, Grand Est',
        reservations:  163
    },
    {
        id: '7',
        name: "Séjour insolite dans une Yourte",
        desc: "Notre yourte est décorée avec légèreté, elle est aérée et naturelle. Elle est l'évasion parfaite de l'agitation de la vie quotidienne. Avec un bain à remous au feu de bois et une salle de bain avec douche chaude, il a tout ce dont vous avez besoin pour vous détendre. Elle est nichée dans le coin d'une prairie sur notre ferme en activité.",
        options : {
            capacity: 2,
            room: 1,
            bed: 1,
            bathroom: 1,
        } ,
        image: 'https://images.pexels.com/photos/4562718/pexels-photo-4562718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 183,
        location: "Treignat, Auvergne-Rhône-Alpes",
        reservations:  80
    },
    {
        id: '8',
        name: 'Studio cosy et design',
        desc: "Appartement cosy et lumineux. Dans une rue calme, il est parfait pour s'échapper momentanément de l'agitation parisienne. Il est idéal pour découvrir Paris en couple ou pour un voyage professionnel. Vous pourrez profiter d'un vrai lit grâce à l'espace nuit qui se trouve dans le studio. Il est entièrement équipé et vous permettra de faire comme à la maison.",
        options : {
            capacity: 2,
            room: 1,
            bed: 1,
            bathroom: 1,
        } ,
        image: 'https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 75,
        location: 'Paris, Île-de-France',
        reservations:  106 
    },
    {
        id: '9',
        name: 'La cabane à Montmorillon',
        desc: "Nichée dans un cadre de verdure, cette petite cabane de charme, tout en bois et sur pilotis, sera le refuge idéal pour vous retrouver en amoureux, été comme hiver. Vous l'apprécierez pour son calme, sa délicieuse odeur de bois, sa luminosité. La cabane est parfaite pour les couples mais ravira aussi les voyageurs en solo et même les teletravailleurs en quête de calme.",
        options : {
            capacity: 2,
            room: 1,
            bed: 1,
            bathroom: 1,
        } ,
        image: 'https://images.pexels.com/photos/9056668/pexels-photo-9056668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 77,
        location: "Montmorillon, Nouvelle-Aquitaine",
        reservations: 53
    },
    {
        id: '10',
        name: 'Gîte rural à la ferme',
        desc: "Gite situé, sur un domaine viticole.  Il est composé de 3 chambres avec salle de bain et WC privatifs, d'une grande salle pouvant accueillir jusqu'à 40 personnes assises et d'une cuisine équipée semi-professionnelle. Profitez d'un cadre dépaysant pour souffler du stress de la vie quotidienne !'",
        options : {
            capacity: 9,
            room: 4,
            bed: 7,
            bathroom: 3,
        } ,
        image: 'https://images.pexels.com/photos/7746943/pexels-photo-7746943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' , 
        price : 109,
        location: "La Roque-sur-Pernes, Provence-Alpes-Côte d'Azur",
        reservations: 8
    }
]

export default houses;