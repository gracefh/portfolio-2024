import { PropsWithChildren } from "react"
import "./layout.css"


type TwoColumnSectionProps =  {
    additionalClass?: string
    sectionTitle?: string
}
export const TwoColumnSection = (props: PropsWithChildren<TwoColumnSectionProps>) => {
    const {children, additionalClass, sectionTitle} = props
    return <div className={`two-column-layout ${additionalClass != null ? additionalClass : ""}`}>
        {sectionTitle != null && <div className="two-column-header column-header">{sectionTitle}</div>}
        {children}
    </div>
}