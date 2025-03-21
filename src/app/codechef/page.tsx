import ScrollArea from "@/components/scrollarea/scrollarea"
import data from '../../../data/codechef.json'

export default function CodeChef () {
    return (
        <>
            <ScrollArea data={data} />
        </>
    )
}