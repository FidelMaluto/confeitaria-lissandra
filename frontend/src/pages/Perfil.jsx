import { useState } from "react";
import logo from "../images/image copy.png";

export default function Perfil() {

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
    <div className="perfil-container fade-in-up">

        <section className="capa" style={{ backgroundImage: `url(${empresa.capa})` }}>

        </section>

        <section className="dados-empresa">

          <img className="foto-perfil" src={empresa.foto} alt="Perfil" />

          <div className="informacoes">

            <h1>{empresa.nome}<span>✓</span></h1>

            <p>{empresa.username}</p>

            <strong>{empresa.categoria}</strong>

            <p className="bio">{empresa.biografia}</p>



          </div>

        </section>
        <section className="estatisticas">

          <div>
            <strong>
              {empresa.seguidores}
            </strong>

            <span>Seguidores</span>
          </div>

          <div>
            <strong>{publicacoes.length}</strong>

            <span>Publicações</span>
          </div>

          <div>
            <strong>{empresa.avaliacao}</strong>

            <span> Avaliação</span>
          </div>

        </section>

        <main className="conteudo">

          <aside>

            <div className="cartao">

              <h3>Sobre a empresa</h3>

              <p>{empresa.endereco}</p>

              <p>{empresa.telefone}</p>

              <p>{empresa.email}</p>

              <p>{empresa.horario}</p>

            </div>

          </aside>

          <section className="feed">

            {
              publicacoes.map((post) => (
                <article className="publicacao" key={post.id}>
                  <div className="autor">

                    <img src={empresa.foto} alt="" />

                    <div>

                      <strong>{empresa.nome} ✓ </strong>

                      <small>{post.data} </small>

                    </div>
                  </div>

                  <p>{post.texto} </p>

                  {
                    post.imagem && (<img className="imagem-post" src={post.imagem} alt="Publicação" />
                    )
                  }

                  <div className="numeros">❤️ {post.curtidas} &nbsp;&nbsp; 💬 {post.comentarios}

                  </div>

                  <div className="botoes-post">

                    <button onClick={() => curtir(post.id)}>❤️ Curtir</button>
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

                <h2>Editar perfil</h2>

                <input

                  value={empresa.nome}

                  onChange={(e) => setEmpresa({ ...empresa, nome: e.target.value })} placeholder="Nome da empresa" />

                <input value={empresa.foto}

                  onChange={(e) => setEmpresa({ ...empresa, foto: e.target.value })}

                  placeholder="URL da foto" />

                <input value={empresa.capa}

                  onChange={(e) => setEmpresa({ ...empresa, capa: e.target.value })}

                  placeholder="URL da capa" />

                <textarea value={empresa.biografia}

                  onChange={(e) => setEmpresa({ ...empresa, biografia: e.target.value })} />

                <button onClick={() => setMostrarEditar(false)}>Guardar</button>

                <button onClick={() => setMostrarEditar(false)}>Cancelar</button>

              </div>

            </div>
          )
        }
      </div>
  );
}
