import data from './data.json'
import ScrollArea from '@/components/scrollarea/scrollarea'

export default function Leetcode () {
    return (
        <>
            <ScrollArea data={data} />
        </>
    )
}