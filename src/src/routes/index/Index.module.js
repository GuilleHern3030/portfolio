const getLanguage = () => {
    const lang = navigator.language || navigator.userLanguage;
    const separator = lang.indexOf("-");
    return separator == -1 ? lang : lang.substring(0, separator);
}

export default (content) => {

    const language = sessionStorage.getItem("language") || getLanguage();

    switch (content) {

        case "greeting":
            return language == "es" ? "¡Hola! ¿Cómo estás?"
                : "Hello! How are you?"

        case "paragraph1":
            return language == "es" ?
                "Mi nombre es Guillermo, estudiante de Análisis de Sistemas, altamente motivado y dedicado por la programación y testing QA, aprendiendo cada día más las mejores heurísticas de este campo para realizar código limpio y escalable para cualquier tipo de proyecto."
                : "My name is Guillermo, a Systems Analysis student, highly motivated and dedicated to programming and testing, learning more and more the best heuristics in this field every day to create clean and scalable code for any type of project."
    
        case "paragraph2":
            return language == "es" ?
                "A lo largo de mis estudios he demostrado un compromiso constante con mi formación, por lo que puedo adaptarme a los distintos entornos de trabajo con diversas tecnologías rápidamente."
                : "Throughout my studies I have demonstrated a constant commitment to my training, which is why I can adapt to different work environments with various technologies quickly."

        case "proyects-title":
            return language == "es" ? "Proyectos de muestra"
                : "Proyects example"
                
        case "proyect1":
            return language == "es" ? "Menú de restaurante"
                : "Restaurant menu"
                
        case "proyect2":
            return language == "es" ? "Organizador de horarios"
                : "Hour organizator"
                
        case "proyect3":
            return language == "es" ? "Encriptador de texto"
                : "Text encryptor"

        default: return "";
    }
}