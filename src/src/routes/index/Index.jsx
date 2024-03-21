import style from './Index.module.css'
import links from './Index.module.json'
import strings, { getLanguage, setLanguage as setSessionLanguage } from './Index.module.js'

import englishFlag from '../../assets/images/english-flag.webp'
import spanishFlag from '../../assets/images/spanish-flag.webp'

import myPhoto from '../../assets/images/perfil-photo.webp'

import facebook from '../../assets/images/facebook-icon.webp'
import instagram from '../../assets/images/instagram-icon.webp'
import discord from '../../assets/images/discord-icon.webp'
import threads from '../../assets/images/threads-icon.webp'
import twitter from '../../assets/images/twitter-icon.webp'
import github from '../../assets/images/github-icon.png'
import webicon from '../../assets/images/web-icon.png'

// Components
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer'
import Photo from '../../components/photo/Photo'
import Elink from '../../components/elink/Elink'
import { useEffect, useState, useRef } from 'react'

export default () => {

    const [ language, setLanguage ] = useState(getLanguage())
    const [ pageSelected, setPageSelected ] = useState()

    useEffect(() => { setSessionLanguage(language) }, [language])

    const handlePageSelection = pageIndex => {
        // setPageSelected(pageSelected === pageIndex ? null : pageIndex)
    }

    return <>

        <Header/>

        <main>

            <section className={style.flags}>
                <div>
                    <img id="es" src={spanishFlag} className={language === "es" ? style.flag_active : style.flag} onClick={e => setLanguage(e.target.id)}/>
                    <img id="en" src={englishFlag} className={language === "en" ? style.flag_active : style.flag} onClick={e => setLanguage(e.target.id)}/>
                </div>
            </section>

            <section className={style.info}>
                <article className={style.info_paragraph}>
                    <h3> { strings("greeting", language) } </h3>
                    <br/>
                    <p> { strings("paragraph1", language) } </p>
                    <br/>
                    <p> { strings("paragraph2", language) } </p>
                </article>
                <article className={style.photo}>
                    <Photo img={myPhoto}/>
                </article>
            </section>

            <section className={style.proyects}>
                <h4> { strings("proyects-title", language) } </h4>
                <div>
                    { links.map((link, index) => <Elink key={index} id={`proyect${index}`} href={link.page} onClick={() => handlePageSelection(index)} text= { strings(`proyect${index}`, language) } />) }
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