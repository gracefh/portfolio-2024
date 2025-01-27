import { PropsWithChildren } from "react"
import "./layout.css"


type ThreeColumnSectionProps =  {
    additionalClass?: string
    sectionTitle?: string
}
export const ThreeColumnSection = (props: PropsWithChildren<ThreeColumnSectionProps>) => {
    const {children, additionalClass, sectionTitle} = props
    return <section className={`three-column-layout ${additionalClass}`}>
        {sectionTitle != null && <div className="three-column-header column-header">{sectionTitle}</div>}
        {children}
    </section>
}