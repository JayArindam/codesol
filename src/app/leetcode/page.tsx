import ScrollArea from '@/components/scrollarea/scrollarea'
import data from '../../../data/leetcode.json'

export default function Leetcode () {
    return (
        <>
            <ScrollArea data={data} />
        </>
    )
}