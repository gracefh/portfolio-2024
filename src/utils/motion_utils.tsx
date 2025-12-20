import { Transition } from "framer-motion"


export const standardEaseTransition: Transition = { duration: 0.3, ease: "easeIn" }


export const standardSpringTransition: Transition = {type: "spring", 
    damping: 20,
    stiffness: 200}
