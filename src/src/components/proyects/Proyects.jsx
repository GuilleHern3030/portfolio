import styles from './Proyects.module.css'

import { useState, useRef, useEffect } from "react"

import github from '../../assets/images/github-icon.png'
import webicon from '../../assets/images/web-icon.png'

import Elink from "../elink/Elink"

const getProyectsTitle = language => {
    return language == "es" ? "Proyectos" : "Proyects"
}

const getTitle = (proyect, language) => {
    try {
        if (language == "es") return proyect["title-es"]
        else return proyect["title-en"]
    } catch(exception) { return "" }
}

const getDescription = (proyect, language) => {
    try {
        if (language == "es") return proyect["description-es"]
        else return proyect["description-en"]
    } catch(exception) { return "" }
}

const getAnimation = step => {
    switch(step) {
        case false: return styles.animation_out;
        case true: return styles.animation_in;
        default: return "";
    }
}

export default ( { proyects, language = "en" } ) => {

    const [ proyectSelected, setProyectSelected ] = useState()
    const [ animation, setAnimation ] = useState()

    const proyectsContainer = useRef()
    const proyectContainer = useRef()

    const handlePageSelection = index => {
        const newProyectSelected = proyects[index]
        if (newProyectSelected !== proyectSelected) {
            setAnimation(proyectSelected == undefined)
            if (proyectSelected == undefined) setProyectSelected(newProyectSelected)
            else setTimeout(() => {
                if (newProyectSelected != proyectSelected) {
                    setProyectSelected(newProyectSelected)
                    setAnimation(true)
                } else {
                    setProyectSelected(null)
                    setAnimation(null)
                }
            }, 200)
        }
    }

    useEffect(() => {
        if (animation !== undefined)
            if (proyectSelected != undefined)
                document.body.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, [proyectSelected])

    return <>
    
        <div ref={proyectsContainer} className={styles.proyects}>
            <h4> { getProyectsTitle(language) } </h4>
            <div> 
                { proyects.map((proyect, index) => <Elink key={index} id={`proyect${index}`} /*href={link.page}*/ onClick={() => handlePageSelection(index)} text= { getTitle(proyect, language) } />) }
            </div>
        </div>

        <div ref={proyectContainer} id={"proyect"} className={`${styles.proyect} ${getAnimation(animation)}`}>
            
            { proyectSelected != undefined && 
                <>
                    <p className={styles.proyect_name}> { getTitle(proyectSelected, language) } </p>
                    <p className={styles.proyect_description}> { getDescription(proyectSelected, language) } </p>
                    <div className={styles.proyect_links}>
                        { proyectSelected != undefined && proyectSelected.page && <div className={styles.animation_size}><Elink href={proyectSelected.page} img={webicon}/>Web</div> }
                        { proyectSelected != undefined && proyectSelected.github && <div className={styles.animation_size}><Elink href={proyectSelected.github} img={github}/>GitHub</div> }
                    </div>
                </> 
            }
        </div>

    </>
}


