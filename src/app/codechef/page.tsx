import ScrollArea from "@/components/scrollarea/scrollarea"
import data from './data.json'

export default function CodeChef () {
    return (
        <>
            <ScrollArea data={data} />
        </>
    )
}