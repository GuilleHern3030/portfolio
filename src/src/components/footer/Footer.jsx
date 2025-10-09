import style from './Footer.module.css'

function Footer({children, credits, email, emailicon}) {
    return <footer className={style.footer}>
        
        { (email) ? 
            <>
                <div className={style.emailcontainer}>
                    <a className={style.email} aria-label="email" href={`mailto:${email}?subject=Mail from portfolio`}>
                        <img src={emailicon}/>
                        <p>Gmail</p> 
                    </a> 
                </div>
                <div className={style.hr}>
                    <hr/>
                </div>
            </>
        : (<></>) }
        
        <div className={style.children}>
            {children}
        </div>
        <p>{credits}</p>
    </footer>
}

export default Footer