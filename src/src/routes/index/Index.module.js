export const getLanguage = () => {
    const lang = sessionStorage.getItem("language") || navigator.language || navigator.userLanguage;
    const separator = lang.indexOf("-");
    return separator == -1 ? lang : lang.substring(0, separator);
}

export const setLanguage = lang => sessionStorage.setItem("language", lang)

export default (content, lang) => {

    const language = lang || getLanguage();

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
            return language == "es" ? "Proyectos"
                : "Proyects"
                
        case "proyect0":
            return language == "es" ? "Menú de restaurante"
                : "Restaurant menu"
                
        case "proyect1":
            return language == "es" ? "Organizador de horarios"
                : "Hour organizator"
                
        case "proyect2":
            return language == "es" ? "Encriptador de texto"
                : "Text encryptor"
                
        case "proyect0_description":
            return language == "es" ? 
                "Página de muestra para el uso de un restaurante. Puede adaptarse a otro tipo de páginas que muestren productos."
                : "Sample page for restaurant use. It can be adapted to other types of pages that show products."
                
        case "proyect1_description":
            return language == "es" ? 
                "Permite visualizar los horarios de la semana según las tareas que tengas."
                : "Allows you to view the week's schedules according to the tasks you have."
                
        case "proyect2_description":
            return language == "es" ? 
                "Permite encriptar o esconder un texto por medio de una contraseña."
                : "It allows you to encrypt or hide text using a password."

        default: return "";
    }
}