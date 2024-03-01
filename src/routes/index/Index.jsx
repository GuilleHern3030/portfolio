import style from './Index.module.css'

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
                <article>
                    <h3>¡Hola! ¿Cómo estás?</h3>
                    <br/>
                    <p>Mi nombre es Guillermo, estudiante de Análisis de Sistemas, altamente motivado y dedicado por la programación y testing QA, aprendiendo cada día más las mejores heurísticas de este campo para realizar código limpio y escalable para cualquier tipo de proyecto.</p>
                    <br/>
                    <p>A lo largo de mis estudios he demostrado un compromiso constante con mi formación, por lo que puedo adaptarme a los distintos entornos de trabajo con diversas tecnologías rápidamente.</p>
                </article>
                <article className={style.photo}>
                    <Photo img={myPhoto}/>
                </article>
            </section>

            <section className={style.proyects}>
                <h4>Páginas de muestra</h4>
                <div>
                    <Elink href="https://guillehern3030.github.io/pizzaapp/" text="Menú de restaurante"/>
                    <Elink href="https://guillehern3030.github.io/hour-organizator/" text="Organizador de horarios"/>
                    <Elink href="https://guillehern3030.github.io/cryptography/" text="Encriptador de texto"/>
                </div>
                {/* <div class="pages__see-more"><h4>Ver más</h4></div> */}
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