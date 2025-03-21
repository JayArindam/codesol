import ScrollArea from "@/components/scrollarea/scrollarea"
import data from './data.json'

export default function CodeForces () {
    return (
        <>
            <ScrollArea data={data}/>
        </>
    )
}