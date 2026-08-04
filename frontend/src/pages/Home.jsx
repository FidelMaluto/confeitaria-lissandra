import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import ProductCard from "../components/ProductCard";
import ScallopDivider from "../components/ScallopDivider";
import logo from "../images/image copy.png";

// Pega automaticamente TODAS as imagens de frontend/images,
// não importa o nome do arquivo — só precisam estar nessa pasta.
const heroImageModules = import.meta.glob('../images/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

const heroImages = Object.values(heroImageModules);

export default function Home() {

  const [destaques, setDestaques] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    api.listProducts()
      .then((data) => setDestaques(data.slice(0, 3)))
      .catch(() => {});
  }, []);

  // Troca a imagem do círculo a cada 5 segundos
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const intervalo = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (

    <>

    <style>{`

    .hero-home{
      background:linear-gradient(
        180deg,
        var(--color-blush),
        var(--color-cream)
      );
    }


    .hero-container{

      padding:90px 24px 70px;

      display:grid;

      grid-template-columns:
      1.1fr 0.9fr;

      gap:40px;

      align-items:center;

    }


    .hero-content{
      max-width:550px;
    }


    .hero-title{

      font-size:3rem;

      line-height:1.1;

      margin:12px 0 20px;

    }


    .hero-text{

      font-size:1.05rem;

      color:var(--color-cocoa-soft);

      max-width:460px;

      line-height:1.6;

    }


    .hero-buttons{

      display:flex;

      gap:14px;

      margin-top:28px;

      flex-wrap:wrap;

    }


    .hero-logo-container{

      width:100%;

      max-width:450px;

      aspect-ratio:1;

      margin:auto;

      border-radius:50%;

      background:
      radial-gradient(
        circle at 35% 30%,
        var(--color-baby-pink),
        var(--color-rose)
      );

      display:flex;

      align-items:center;

      justify-content:center;

      overflow:hidden;

      box-shadow:var(--shadow-soft);

    }


    .hero-logo{

      width:100%;

      height:100%;

      object-fit:cover;

      border-radius:50%;

    }



    .highlights{

      padding:60px 24px;

    }


    .section-title{

      margin-bottom:30px;

    }


    .products-highlight{

      display:grid;

      grid-template-columns:
      repeat(auto-fit,minmax(240px,1fr));

      gap:24px;

    }


    .empty-text{

      color:var(--color-cocoa-soft);

    }



    /* TABLET */

    @media(max-width:900px){


      .hero-container{

        grid-template-columns:1fr;

        text-align:center;

      }


      .hero-content{

        margin:auto;

      }


      .hero-text{

        margin:auto;

      }


      .hero-buttons{

        justify-content:center;

      }


      .hero-logo-container{

        max-width:320px;

      }


      .hero-title{

        font-size:2.4rem;

      }


    }




    /* MOBILE */

    @media(max-width:600px){


      .hero-container{

        padding:50px 15px 40px;

      }


      .hero-title{

        font-size:1.9rem;

      }


      .hero-text{

        font-size:.95rem;

      }


      .hero-buttons{

        flex-direction:column;

        width:100%;

      }


      .hero-buttons .btn{

        width:100%;

        text-align:center;

      }


      .hero-logo-container{

        max-width:230px;

      }


      .highlights{

        padding:40px 15px;

      }


      .products-highlight{

        grid-template-columns:1fr;

      }


    }




    /* MOBILE PEQUENO */

    @media(max-width:380px){


      .hero-title{

        font-size:1.6rem;

      }


      .hero-logo-container{

        max-width:190px;

      }


    }


    `}</style>



    <div>

      <section className="hero-home">


        <div className="container hero-container">


          <div className="hero-content">


            <span className="eyebrow">
              Confeitaria da Lisandra
            </span>


            <h1 className="hero-title">

              Doces que parecem
              <br />
              feitos de carinho.

            </h1>



            <p className="hero-text">

              Bolos, tortas e doces finos preparados
              do zero, todos os dias, com receita
              de família e ingredientes selecionados
              a dedo.

            </p>



            <div className="hero-buttons">


              <Link 
                to="/catalogo"
                className="btn btn-primary"
              >

                Ver catálogo

              </Link>



              <Link 
                to="/checkout"
                className="btn btn-secondary"
              >

                Fazer encomenda

              </Link>


            </div>


          </div>





          <div className="hero-logo-container">


            <img
              alt="logo"
              src={logo}
              className="hero-logo"
            />


          </div>


        </div>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, var(--color-blush), var(--color-cream))' }}>
        <div
          className="container hero-grid"
          style={{
            padding: '90px 24px 70px',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 40,
            alignItems: 'center',
          }}>

          <div className="fade-in-up">
            <span className="eyebrow">Confeitaria artesanal</span>
            <h1 style={{ lineHeight: 1.1, margin: '12px 0 20px' }}>
              Doces que parecem<br />feitos de carinho.
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-cocoa-soft)', maxWidth: 460 }}>
              Bolos, tortas e doces finos preparados do zero, todos os dias, com receita de família
              e ingredientes selecionados a dedo.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/catalogo" className="btn btn-shine">Ver catálogo</Link>
              <Link to="/checkout" className="btn btn-secondary">Fazer encomenda</Link>
            </div>

          </div>

          <div className="float hero-circle" aria-hidden="true">
            {heroImages.length > 0 ? (
              <img
                key={heroIndex}
                src={heroImages[heroIndex]}
                alt=""
                className="hero-circle-img fade-in"
              />
            ) : (
              <span style={{ fontSize: '6rem' }}>🎂</span>
            )}

          </div>

        </div>

      </section>



      <ScallopDivider />

      <section className="container highlights">


        <span className="eyebrow">

          Selecionados pra você

        </span>



        <h2 className="section-title">

          Destaques da semana

        </h2>




        {
          destaques.length === 0 ? (

            <p className="empty-text">

              Cadastre produtos no painel admin para vê-los aqui.

            </p>


          ) : (


            <div className="products-highlight">


              {
                destaques.map((p)=>(

                  <ProductCard
                    key={p.id}
                    product={p}
                  />

                ))
              }


            </div>


          )
        }



      {/* Destaques */}
      <section className="container" style={{ padding: '60px 24px' }}>
        <span className="eyebrow">Selecionados pra você</span>
        <h2 style={{ marginBottom: 30 }}>Destaques da semana</h2>
        {destaques.length === 0 ? (
          <p style={{ color: 'var(--color-cocoa-soft)' }}>
            Cadastre produtos no painel admin para vê-los aqui.
          </p>
        ) : (
          <div className="stagger-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: 24 }}>
            {destaques.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

      </section>


    </div>


    </>

  );

}