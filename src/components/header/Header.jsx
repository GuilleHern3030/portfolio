import header from './Header.module.css'

export default ({pageName}) => {
    return <header className={header.box}>
        <div className={header.top}></div>
        <h1 className={header.title}>Guillermo Hernandez <span>Freelancer</span></h1>
        <h2 className={header.subtitle}> { pageName } </h2>
        <div className={header.bottom}></div>
    </header>
}