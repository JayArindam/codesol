import data from './data.json'
import ScrollArea from '@/components/scrollarea/scrollarea'

export const runtime = "edge";

export default function Leetcode () {
    return (
        <>
            <ScrollArea data={data} />
        </>
    )
}