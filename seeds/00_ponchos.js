exports.seed = function (knex, Promise) {
  return knex('ponchos').del().then(() => {
    return knex('ponchos').insert([
      {
        id: 1,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/14/_101580634.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Blanket Check Wool & Cashmere Poncho',
        description:
          'Bold checks lend signature polish and panache to this cashmere-kissed wool poncho.',
        price: 980
      },
      {
        id: 2,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/19/_101686199.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Cozychic® Point Dume Poncho',
        description:
          "A comfy cowl neck begins a draped cold-weather staple made from Barefoot Dreams' plush Cozychic knit for ultimate warmth and softness.",
        price: 128
      },
      {
        id: 3,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/19/_12426079.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: "Cozy Chic® Beach' Fringe Lounge Poncho",
        description:
          "Extra-fleecy microfiber gives ultimate softness and warmth to this collared poncho that's great for wearing around the house or even on errands out.",
        price: 154
      },
      {
        id: 4,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/18/_102426678.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Cover-Up Poncho',
        description:
          'After a grueling lap workout, slip into the soft comfort of this swirling cover-up that easily does double duty away from the pool and out with friends.',
        price: 78
      },
      {
        id: 5,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/15/_103034715.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Logo Knit Poncho',
        description:
          "Fendi's iconic FF logo, first created in the 1960s, makes a comeback in a limited-edition capsule collection.",
        price: 788
      },
      {
        id: 6,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/19/_103352419.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Bishop + Young Harper Lace Up Poncho Sweater',
        description:
          'Broad laces at the neckline give this swinging poncho an alluring edge.',
        price: 135
      },
      {
        id: 7,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/18/_103122738.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Burnout Lily Sharkbite Hem Poncho',
        description:
          'A drapey shark-bite hem gives fluttery movement to a diaphanous silk-blend poncho topped with plush velvet lilies for an extra-special touch.',
        price: 995
      },
      {
        id: 8,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/8/_101540068.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Island Stripe Cashmere Poncho',
        description:
          'A drapey poncho with a classic boho vibe gets a cozy-luxe upgrade in supersoft cashmere knit.',
        price: 295
      },
      {
        id: 9,
        image:
          'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/5/_102152685.jpg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1197',
        name: 'Adeline Stripe Poncho',
        description:
          'A roomy layer with toss-on-and-and-go ease, this fluttery poncho is made cozy in a lightly textured knit brightened with marled border stripes.',
        price: 96
      }
    ])
  }).then(() => {
    return knex.raw('ALTER SEQUENCE ponchos_id_seq RESTART WITH 10')
  })
}