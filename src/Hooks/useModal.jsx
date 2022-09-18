import { useState } from "react"

export const useModal = (initialValue = false) => {
    const [portalAbierto, setPortalAbierto] = useState(initialValue)

    const handlePortal = () => setPortalAbierto(!portalAbierto)

    return [portalAbierto, handlePortal]
}