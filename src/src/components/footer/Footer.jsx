import style from './Footer.module.css'

function Footer({children, credits}) {
    return <footer className={style.footer}>
        <div>
            {children}
        </div>
        <p>{credits}</p>
    </footer>
}

export default Footer