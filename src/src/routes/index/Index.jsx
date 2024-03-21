import style from './Index.module.css'
import strings from './Index.module.js'

import myPhoto from '../../assets/images/perfil-photo.webp'
import facebook from '../../assets/images/facebook-icon.webp'
import instagram from '../../assets/images/instagram-icon.webp'
import discord from '../../assets/images/discord-icon.webp'
import threads from '../../assets/images/threads-icon.webp'
import twitter from '../../assets/images/twitter-icon.webp'
import whatsapp from '../../assets/images/whatsapp-icon.webp'

// Components
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer'
import Photo from '../../components/photo/Photo'
import Elink from '../../components/elink/Elink'

export default () => {

    return <>

        <Header/>

        <main>

            <section className={style.info}>
                <article className={style.info_paragraph}>
                    <h3> { strings("greeting") } </h3>
                    <br/>
                    <p> { strings("paragraph1") } </p>
                    <br/>
                    <p> { strings("paragraph2") } </p>
                </article>
                <article className={style.photo}>
                    <Photo img={myPhoto}/>
                </article>
            </section>

            <section className={style.proyects}>
                <h4> { strings("proyects-title") } </h4>
                <div>
                    <Elink href="https://guillehern3030.github.io/pizzaapp/" text= { strings("proyect1") } />
                    <Elink href="https://guillehern3030.github.io/hour-organizator/" text= { strings("proyect2") } />
                    <Elink href="https://guillehern3030.github.io/cryptography/" text= { strings("proyect3") } />
                </div>
                {/* <div class="pages__see-more"><h4>Ver más</h4></div> */}
            </section>

            <section className={style.proyect}>
                <p className={style.proyect_name}>Proyect example</p>
            </section>

        </main>

        <Footer credits="©2023 Guillermo Hernandez">
            <Elink href="https://www.facebook.com/profile.php?id=100077720357579" img={facebook} text="Facebook"/>
            <Elink href="https://www.instagram.com/guille.hern/" img={instagram} text="Instragram"/>
            <Elink href="https://www.threads.net/guille.hern/" img={threads} text="Threads"/>
            <Elink href="https://twitter.com/Guiller89446381" img={twitter} text="Twitter"/>
            <Elink href="https://discordapp.com/users/guillermo.hernandez" img={discord} text="Discord"/>
        </Footer>

    </>
}