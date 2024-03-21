import style from './Elink.module.css'

function Elink({href, id, text, img, onClick}) {

    const image = <img src={img}/>

    if (img == undefined)
        return href ? 
            <a id={id} className={style.textlink} href={href}>{text}</a> :
            <p id={id} className={style.textlink} onClick={onClick}>{text}</p>

    else if (img != undefined) 
        return href ? 
            <div id={id} className={style.imglink}><a href={href} alt={text}>{image}</a></div> :
            <div id={id} className={style.imglink} onClick={onClick}><p>{image}</p></div>
    
}

export default Elink