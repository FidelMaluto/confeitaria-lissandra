import { useState } from "react";
import logo from "../images/image copy.png";

export default function Perfil() {

  const [mostrarPublicacao, setMostrarPublicacao] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [empresa, setEmpresa] = useState({
    nome: "Confeitaria Lisandra",
    username: "@confeitaria-lisandra",
    categoria: "Confeitaria e Doces Artesanais",
    seguidores: null,
    avaliacao: null,
    email: "lissandradocestentacoes@hotmail.com",
    telefone: "+244 935 956 349",
    endereco: "Zango 0, Icolo e Bengo, Angola",
    horario: `Terça - Sexta: 12:00 - 19:00, Sábado: 12:00 - 20:00`,
    biografia:
      "Transformamos momentos especiais em memórias doces. Bolos personalizados, sobremesas e doces artesanais feitos com carinho.",
    foto: logo,
    capa: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=80"
  });

  const [publicacoes, setPublicacoes] = useState([
    {
      id: 1,
      texto:
        "Hoje apresentamos mais uma criação especial da nossa cozinha. Cada bolo é preparado pensando no seu momento especial ❤️",
      imagem:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80",
      data: "Hoje às 10:30",
      curtidas: 245,
      comentarios: 32
    },

    {
      id: 2,
      texto:
        "Obrigado a todos os clientes que confiam no nosso trabalho. Continuamos a criar doces momentos 🍰",
      imagem:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=80",
      data: "Ontem às 15:20",
      curtidas: 180,
      comentarios: 20
    }
  ]);

  const [novaPublicacao, setNovaPublicacao] = useState({
    texto: "",
    imagem: ""
  });

  function publicar(e) {
    e.preventDefault();

    if (!novaPublicacao.texto.trim()) return;

    const nova = {
      id: Date.now(),
      texto: novaPublicacao.texto,
      imagem: novaPublicacao.imagem,
      data: "Agora",
      curtidas: 0,
      comentarios: 0
    };

    setPublicacoes([nova, ...publicacoes]);

    setNovaPublicacao({
      texto: "",
      imagem: ""
    });

    setMostrarPublicacao(false);
  }

  function curtir(id) {
    setPublicacoes(
      publicacoes.map((post) =>
        post.id === id
          ? {
            ...post,
            curtidas: post.curtidas + 1
          }
          : post
      )
    );
  }

  return (
    <>
      <style>{`      
      .perfil-container{
        min-height:100vh;
        background:#f8f5f3;
        color:#3f2b2d;
        font-family:Arial, sans-serif;
      }

      .capa{
        height:320px;
        background-size:cover;
        background-position:center;
        position:relative;
      }

      .capa button{
        position:absolute;
        right:30px;
        bottom:25px;
        border:none;
        padding:12px 18px;
        border-radius:10px;
        background:#fff;
        color:#5a3a3d;
        font-weight:700;
        cursor:pointer;
        box-shadow:0 5px 20px rgba(0,0,0,.15);
      }

      .dados-empresa{
        max-width:1100px;
        margin:-80px auto 0;
        position:relative;
        display:flex;
        gap:25px;
        align-items:flex-end;
        padding:0 25px;
      }

      .foto-perfil{
        width:170px;
        height:170px;
        object-fit:cover;
        border-radius:50%;
        border:7px solid white;
        box-shadow:0 5px 20px rgba(0,0,0,.15);
      }

      .informacoes{
        background:white;
        padding:25px;
        border-radius:20px;
        flex:1;
        box-shadow:0 5px 20px rgba(0,0,0,.05);
      }

      .informacoes h1{
        margin:0;
        font-size:30px;
        display:flex;
        align-items:center;
        gap:10px;
      }

      .informacoes h1 span{
        color:#e98299;
        font-size:20px;
      }

      .informacoes p{
        color:#80686b;
      }

      .informacoes strong{
        color:#b96d7c;
      }

      .bio{
        max-width:650px;
        line-height:1.5;
      }

      .acoes{
        display:flex;
        gap:12px;
        margin-top:20px;
        flex-wrap:wrap;
      }

      .acoes button{
        border:none;
        padding:12px 20px;
        border-radius:12px;
        cursor:pointer;
        background:#e98299;
        color:white;
        font-weight:bold;
      }

      .acoes button:nth-child(2){
        background:#4b3033;
      }

      .acoes button:nth-child(3){
        background:#eee;
        color:#444;
      }

      .estatisticas{
        max-width:1100px;
        margin:30px auto;
        padding:0 25px;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:20px;
      }

      .estatisticas div{
        background:white;
        padding:20px;
        border-radius:16px;
        text-align:center;
        box-shadow:0 5px 20px rgba(0,0,0,.05);
      }

      .estatisticas strong{
        display:block;
        font-size:25px;
        color:#e98299;
      }

      .estatisticas span{
        color:#80686b;
      }

      .menu-perfil{
        max-width:1100px;
        margin:auto;
        padding:0 25px;
        display:flex;
        gap:10px;
        overflow-x:auto;
      }

      .menu-perfil button{
        border:none;
        padding:12px 20px;
        border-radius:20px;
        background:white;
        cursor:pointer;
        white-space:nowrap;
      }

      .menu-perfil .selecionado{
        background:#e98299;
        color:white;
      }

      .conteudo{
        max-width:1100px;
        margin:30px auto;
        padding:0 25px;
        display:grid;
        grid-template-columns:320px 1fr;
        gap:25px;
      }

      .cartao,
      .publicacao,
      .criar-post{
        background:white;
        border-radius:20px;
        padding:20px;
        box-shadow:0 5px 20px rgba(0,0,0,.05);
      }

      .cartao h3{
        margin-top:0;
      }

      .cartao p{
        color:#756064;
        line-height:1.6;
      }

      .criar-post{
        margin-bottom:20px;
      }

      .criar-post textarea{
        width:100%;
        min-height:120px;
        resize:none;
        padding:15px;
        border:1px solid #ddd;
        border-radius:12px;
        outline:none;
      }

      .criar-post input{
        width:100%;
        margin-top:10px;
        padding:12px;
        border-radius:10px;
        border:1px solid #ddd;
      }

      .criar-post button{
        margin-top:15px;
        padding:12px 25px;
        border:none;
        border-radius:10px;
        background:#e98299;
        color:white;
        cursor:pointer;
        font-weight:bold;
      }      
        
      .publicacao{
        margin-bottom:25px;
      }

      .autor{
        display:flex;
        align-items:center;
        gap:12px;
        margin-bottom:15px;
      }

      .autor img{
        width:50px;
        height:50px;
        border-radius:50%;
        object-fit:cover;
      }

      .autor strong{
        display:block;
        color:#4b3033;
      }

      .autor small{
        color:#8a7074;
      }

      .publicacao p{
        line-height:1.6;
        color:#594347;
      }

      .imagem-post{
        width:100%;
        max-height:500px;
        object-fit:cover;
        border-radius:15px;
        margin-top:15px;
      }

      .numeros{
        margin:15px 0;
        color:#80686b;
        font-size:.95rem;
      }

      .botoes-post{
        display:flex;
        border-top:1px solid #eee;
        padding-top:15px;
        gap:10px;
      }

      .botoes-post button{
        flex:1;
        border:none;
        background:#f8f5f3;
        padding:12px;
        border-radius:10px;
        cursor:pointer;
        color:#5a3a3d;
        font-weight:600;
      }

      .botoes-post button:hover{
        background:#f5dce2;
      }

      .editar-area{
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.5);
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
        z-index:10;
      }

      .editar-box{
        width:100%;
        max-width:500px;
        background:white;
        border-radius:20px;
        padding:25px;
      }

      .editar-box input,
      .editar-box textarea{
        width:100%;
        margin-bottom:12px;
        padding:12px;
        border-radius:10px;
        border:1px solid #ddd;
      }

      .editar-box textarea{
        resize:none;
        height:100px;
      }

      .editar-box button{
        padding:12px 20px;
        border:none;
        border-radius:10px;
        cursor:pointer;
        background:#e98299;
        color:white;
        margin-right:10px;
      }

      @media(max-width:900px){

        .capa{
          height:240px;
        }

        .dados-empresa{
          margin-top:-60px;
          flex-direction:column;
          align-items:center;
          text-align:center;
        }

        .informacoes{
          width:100%;
        }

        .informacoes h1{
          justify-content:center;
          font-size:25px;
        }

        .acoes{
          justify-content:center;
        }

        .conteudo{
          grid-template-columns:1fr;
        }

        .cartao{
          order:2;
        }

      }

      @media(max-width:600px){

        .capa{
          height:190px;
        }

        .capa button{
          right:15px;
          bottom:15px;
          padding:10px;
          font-size:.8rem;
        }

        .foto-perfil{
          width:130px;
          height:130px;
        }

        .dados-empresa{
          padding:0 15px;
        }

        .informacoes{
          padding:18px;
        }

        .informacoes h1{
          font-size:21px;
        }

        .estatisticas{
          grid-template-columns:1fr;
          padding:0 15px;
        }

        .menu-perfil{
          padding:0 15px;
        }

        .conteudo{
          padding:0 15px;
        }

        .botoes-post{
          flex-direction:column;
        }

        .botoes-post button{
          width:100%;
        }

      }

      @media(max-width:380px){

        .acoes button{
          width:100%;
        }

        .publicacao{
          padding:15px;
        }

        .autor img{
          width:42px;
          height:42px;
        }

      }

      `}</style>

      <div className="perfil-container">

        <section
          className="capa"
          style={{
            backgroundImage: `url(${empresa.capa})`
          }}
        >

        </section>

        <section className="dados-empresa">

          <img
            className="foto-perfil"
            src={empresa.foto}
            alt="Perfil"
          />

          <div className="informacoes">

            <h1>
              {empresa.nome}
              <span>✓</span>
            </h1>

            <p>
              {empresa.username}
            </p>

            <strong>
              {empresa.categoria}
            </strong>

            <p className="bio">
              {empresa.biografia}
            </p>

            <div className="acoes">

              <button
                onClick={() =>
                  setMostrarPublicacao(true)
                }
              >
                + Criar publicação
              </button>

              <button
                onClick={() =>
                  setMostrarEditar(true)
                }
              >
                ✏ Editar perfil
              </button>

            </div>

          </div>

        </section>
        <section className="estatisticas">

          <div>
            <strong>
              {empresa.seguidores}
            </strong>

            <span>
              Seguidores
            </span>
          </div>

          <div>
            <strong>
              {publicacoes.length}
            </strong>

            <span>
              Publicações
            </span>
          </div>

          <div>
            <strong>
              {empresa.avaliacao}
            </strong>

            <span>
              Avaliação
            </span>
          </div>

        </section>

        <main className="conteudo">

          <aside>

            <div className="cartao">

              <h3>
                Sobre a empresa
              </h3>

              <p>
                {empresa.endereco}
              </p>

              <p>
                {empresa.telefone}
              </p>

              <p>
                {empresa.email}
              </p>

              <p>
                {empresa.horario}
              </p>

            </div>

          </aside>

          <section className="feed">

            {
              mostrarPublicacao && (

                <form
                  className="criar-post"
                  onSubmit={publicar}
                >
                  <textarea
                    placeholder="Partilhe uma novidade..."
                    value={novaPublicacao.texto}
                    onChange={(e) =>
                      setNovaPublicacao({
                        ...novaPublicacao,
                        texto: e.target.value
                      })
                    }
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setNovaPublicacao({
                        ...novaPublicacao,
                        imagem: e.target.files[0]
                      })
                    }
                  />

                  {novaPublicacao.imagem && (
                    <img
                      src={URL.createObjectURL(novaPublicacao.imagem)}
                      alt="Preview"
                      style={{
                        width: '200px',
                        borderRadius: '10px',
                        marginTop: '10px'
                      }}
                    />
                  )}

                  <button>
                    Publicar
                  </button>
                </form>

              )
            }

            {
              publicacoes.map((post) => (


                <article
                  className="publicacao"
                  key={post.id}
                >

                  <div className="autor">

                    <img
                      src={empresa.foto}
                      alt=""
                    />

                    <div>

                      <strong>
                        {empresa.nome} ✓
                      </strong>

                      <small>
                        {post.data}
                      </small>

                    </div>

                  </div>

                  <p>
                    {post.texto}
                  </p>

                  {
                    post.imagem && (

                      <img
                        className="imagem-post"
                        src={post.imagem}
                        alt="Publicação"
                      />
                    )
                  }

                  <div className="numeros">

                    ❤️ {post.curtidas}

                    &nbsp;&nbsp;

                    💬 {post.comentarios}

                  </div>

                  <div className="botoes-post">

                    <button
                      onClick={() =>
                        curtir(post.id)
                      }
                    >
                    ❤️ Curtir
                    </button>

                    <button>💬 Comentar</button>

                    <button>↗ Partilhar</button>

                  </div>

                </article>

              ))
            }

          </section>

        </main>

        {
          mostrarEditar && (

            <div className="editar-area">

              <div className="editar-box">

                <h2>
                  Editar perfil
                </h2>

                <input

                  value={empresa.nome}

                  onChange={(e) =>
                    setEmpresa({
                      ...empresa,
                      nome: e.target.value
                    })
                  }

                  placeholder="Nome da empresa" />

                <input value={empresa.foto}

                  onChange={(e) =>
                    setEmpresa({
                      ...empresa,
                      foto: e.target.value
                    })
                  }

                  placeholder="URL da foto"/>

                <input value={empresa.capa}

                  onChange={(e) =>
                    setEmpresa({
                      ...empresa,
                      capa: e.target.value
                    })
                  }

                  placeholder="URL da capa"/>

                <textarea

                  value={empresa.biografia}

                  onChange={(e) =>
                    setEmpresa({
                      ...empresa,
                      biografia: e.target.value
                    })
                  }
                />

                <button
                  onClick={() =>
                    setMostrarEditar(false)
                  }>Guardar</button>

                <button
                  onClick={() =>
                    setMostrarEditar(false)
                  }>Cancelar</button>

              </div>

            </div>

          )
        }

      </div>

    </>
  );
}
