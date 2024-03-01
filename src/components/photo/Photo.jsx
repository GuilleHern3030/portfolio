import style from './Photo.module.css'

function Photo({img}) {
    return <div className={style.container}>
        <img className={style.image} src={img}/>
    </div>
}

export default Photo