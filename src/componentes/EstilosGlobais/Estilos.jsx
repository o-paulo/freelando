import { Global, css } from "@emotion/react"

const estilos = css`
    * {
        font-family: "Montserrat", sans-serif;
    }
`

export const EstilosGlobais = () => {
    return (
        <Global styles={estilos}/>
    )
}