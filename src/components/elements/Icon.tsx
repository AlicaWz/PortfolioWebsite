import { ReactSVG } from 'react-svg'

import Sun from '@icons/sun.svg'
import FilledSun from '@icons/sun-filled.svg'

export const iconComponents: { [key in any]: any } = {
    Sun,
    FilledSun
}

export interface IconProps {
    name?: string
    class?: string
}

export default function Icon({ name, class : className , ...props }: any) {
    const Svg = !!name && iconComponents[name]
    if (!Svg) return null

    return (<ReactSVG src={Svg.src} {...props} className={className} />)
}