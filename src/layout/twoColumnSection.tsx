import { PropsWithChildren } from "react"
import "./layout.css"


type TwoColumnSectionProps =  {
    additionalClass?: string
    sectionTitle?: string
}
export const TwoColumnSection = (props: PropsWithChildren<TwoColumnSectionProps>) => {
    const {children, additionalClass, sectionTitle} = props
    return <section className={`two-column-layout ${additionalClass}`}>
        {sectionTitle != null && <div className="two-column-header section-header">{sectionTitle}</div>}
        {children}
    </section>
}