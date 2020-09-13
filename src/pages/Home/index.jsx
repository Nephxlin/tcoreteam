import React from 'react'

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="top-bar">
          <a href="!#">Serviços</a>
          <a href="!#">Contato</a>
          <a href="!#">Soluções</a>
          <a href="!#">Sobre nós</a>
        </div>
      </header>

      <section>
        <div id="about">
          <div>
            <h1>Somos TcoreTeam</h1>
            <p>Fornecemos soluções para Serviços Webs</p>
          </div>

        </div>

        <div id="tecnologias">
          <div id="imgtech">
            <img src="https://i.imgur.com/Bk2k8lW.png" alt=""/>
          </div>
          
          <div id="imgtech">
            <img src="https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt=""/>
          </div>
          
          <div id="imgtech">
            <img src="https://miro.medium.com/max/700/0*JH_HgIXBQvuenmUl.jpg" alt=""/>
          </div>
          
        </div>

        <div id="portifolio">
          <div>
            <span>PROJETO 1</span>
          </div>

          <div>
            <span>PROJETO 2</span>
          </div>

          <div>
            <span>PROJETO 3</span>
          </div>

          <div>
            <span>PROJETO 4</span>
          </div>

          <div>
            <span>PROJETO 5</span>
          </div>

          <div>
            <span>PROJETO 6</span>
          </div>

        </div>

        <div className="mailing">
          <h1>Fale conosco</h1>
            <div id="topmailing">
              <div>
                <p>name</p>
                <input type="text"/>
              </div>

              <div>
                <p>tel</p>
                <input type="tel" name=""/>
              </div>
             
              <div>
                <p>Email</p>
                <input type="email" name="" id=""/>
              </div>
  
            </div>

            <div id="bootommailing">
              <p>Mensagem</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </div>

      </section>

      <footer>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="contato">
          <p>2312421421</p>
        </div>
      </footer>
    </>
  )
}
