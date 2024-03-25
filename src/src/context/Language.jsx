import { createContext, useState } from "react";

export const LanguageContext = createContext()

export function LanguageContextProvider(props) {

    const [ language, set ] = useState()

    const get = () => {
        const lang = language || navigator.language || navigator.userLanguage || "en";
        const separator = lang.indexOf("-");
        return separator == -1 ? lang : lang.substring(0, separator);
    }

    return <>
        <LanguageContext.Provider
            value={
                {
                    set,
                    get
                }
            }
        >
            { props.children }
        </LanguageContext.Provider>
    </>
}