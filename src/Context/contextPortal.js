import { createContext, useState } from "react";

const PortalContext = createContext()

const PortalProvider = ({ children }) => {
    const [portalAbierto, setPortalAbierto] = useState(false)

    const handlePortal = () => {
        console.log('tu mamá')
        setPortalAbierto(!portalAbierto)
    }

    const data = { handlePortal, portalAbierto }

    return (
        <PortalContext.Provider value={data} >
            {children}
        </PortalContext.Provider>
    )
}

export { PortalProvider }
export default PortalContext