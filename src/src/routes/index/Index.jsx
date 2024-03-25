import { useContext } from 'react'

import style from './Index.module.css'
import strings from './Index.module.js'


import { LanguageContext } from '../../context/Language'
import englishFlag from '../../assets/images/english-flag.webp'
import spanishFlag from '../../assets/images/spanish-flag.webp'

import myPhoto from '../../assets/images/perfil-photo.webp'

import facebook from '../../assets/images/facebook-icon.webp'
import instagram from '../../assets/images/instagram-icon.webp'
import discord from '../../assets/images/discord-icon.webp'
import threads from '../../assets/images/threads-icon.webp'
import twitter from '../../assets/images/twitter-icon.webp'

import proyects from '../../assets/data/links.json'

// Components
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer'
import Photo from '../../components/photo/Photo'
import Elink from '../../components/elink/Elink'
import Proyects from '../../components/proyects/Proyects'

export default () => {

    const language = useContext(LanguageContext)

    return <>

        <Header/>

        <main>

            <section className={style.flags}>
                <div>
                    <img id="es" src={spanishFlag} className={language.get() === "es" ? style.flag_active : style.flag} onClick={e => language.set(e.target.id)}/>
                    <img id="en" src={englishFlag} className={language.get() === "en" ? style.flag_active : style.flag} onClick={e => language.set(e.target.id)}/>
                </div>
            </section>

            <section className={style.info}>
                <article className={style.info_paragraph}>
                    <h3> { strings("greeting", language.get()) } </h3>
                    <br/>
                    <p> { strings("paragraph1", language.get()) } </p>
                    <br/>
                    <p> { strings("paragraph2", language.get()) } </p>
                </article>
                <article className={style.photo}>
                    <Photo img={myPhoto}/>
                </article>
            </section>

            <section>
                <Proyects proyects={proyects} language={language.get()}/>
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