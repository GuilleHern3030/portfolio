import style from './Elink.module.css'

function Elink({href, text, img}) {

    const image = <img src={img}/>

    if (img == undefined)
        return <a className={style.textlink} href={href}>{text}</a>

    else if (img != undefined) 
        return <div className={style.imglink}><a href={href} alt={text}>{image}</a></div>
    
}

export default Elink