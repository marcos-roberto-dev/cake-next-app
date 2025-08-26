import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en-us',
    resources: {
      en: {
        translation: {
          General: {
            Links: {
              Shop: 'Shop',
              OurStory: 'Our Story',
              WhyMissCupcake: 'Why Miss Cupcake',
            },
            CTA: 'Shop now',
            AddCart: 'Add to cart'
          },
          MissCupcakeSection: {
            title: "Miss <br/> Cupcake",
            description: "We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment."
          },
          TheSimpleSweetLife: {
            title: "The Simple,<br/>Sweet Life",
            description: "Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You’ll want to indulge in each and every decadent flavor."
          },
          Products: {
            title: 'Make your day<br/>a little sweeter'
          },
        }
      },
      pt: {
        translation: {
          General: {
            Links: {
              Shop: 'Início',
              OurStory: 'Nossa História',
              WhyMissCupcake: 'Por que Miss Cupcake',
            },
           CTA: 'Compre agora',
           AddCart: 'Adicionar ao carrinho'
         },
          MissCupcakeSection: {
            title: "Miss <br/> Cupcake",
            description: "Estamos orgulhosos de oferecer cupcakes e bolos que são assados frescos em poucas horas, se não minutos, para o seu prazer."
          },
          TheSimpleSweetLife: {
            title: "A vida<br/>simples e doce",
            description: "Nossos cupcakes são sempre feitos com os melhores ingredientes, criando uma faísca que faz suas papilas gustativas dançarem. Você vai querer se entregar a cada sabor decadente."
          },
          Products: {
            title: 'Faça seu dia<br/>um pouco mais doce'
          }

        }
      },
      es: {
        translation: {
          General: {
            Links: {
              Shop: 'Tienda',
              OurStory: 'Nuestra Historia',
              WhyMissCupcake: 'Por qué Miss Cupcake',
            },
           CTA: 'Comprar ahora',
           AddCart: 'Agregar al carrito'
         },
          MissCupcakeSection: {
            title: "Miss <br/> Cupcake",
            description: "Estamos orgullosos de ofrecer cupcakes y pasteles que se hornean frescos en pocas horas, si no minutos, para su disfrute."
          },
          TheSimpleSweetLife: {
            title: "La vida<br/>sencilla y dulce",
            description: "Nuestros cupcakes son siempre hechos con los mejores ingredientes, creando una chispa que hace que tus papilas gustativas bailen. Querrás disfrutar de cada sabor decadente."
          },
          Products: {
            title: 'Haz que tu día<br/>sea un poco más dulce'
          }
        }
      }
    }
  });

export default i18n
