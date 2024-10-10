import {useState, useCallback} from "react";
import "./positions.css"

enum PossibleRoles {
    FULL_STACK_ENGINEER = "full-stack engineer",
    ARTIST = "artist",
    BOBA_ENJOYER = "boba enjoyer"
}

const possibleRolesList = [PossibleRoles.FULL_STACK_ENGINEER, PossibleRoles.ARTIST, PossibleRoles.BOBA_ENJOYER]

function generateRandomString(length: number) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''
    for (let ind = 0; ind < length; ind++) 
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}

export const Positions = () => {
    const [displayedRole, setDisplayedRole] = useState<string>(PossibleRoles.FULL_STACK_ENGINEER)
    const [index, setIndex] = useState<number>(0)

    const switchRoles = useCallback((ind: number) => {
        setDisplayedRole(possibleRolesList[ind])
        setIndex(ind)
    }, [setDisplayedRole, setIndex])

    const switchRolesWithRandomText = useCallback(() => {
        let ind = Math.floor(Math.random() * possibleRolesList.length)
        // not great lMFAO
        while(ind === index) {
            ind = Math.floor(Math.random() * possibleRolesList.length)
        }

        const displayedLength = possibleRolesList[index].length
        const lengthDifference = possibleRolesList[ind].length - displayedLength

        let counter = 0
        const refreshTime = 30
        const switchTime = 360
        const interval = setInterval(() => {
            const lengthToDisplay = Math.floor((counter * (refreshTime * lengthDifference / switchTime) + displayedLength))
            counter += 1
            setDisplayedRole(generateRandomString(lengthToDisplay))
        }, refreshTime)

        setTimeout(() => {
            clearInterval(interval)
            switchRoles(ind)
        }, switchTime)
    }, [index, switchRoles])

    return <div>
        <button className="role instrument-sans-landing" onMouseEnter={switchRolesWithRandomText}>{displayedRole}</button>
        </div>
}