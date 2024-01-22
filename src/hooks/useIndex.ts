import { useState } from 'react';

/**
 * @param { Number | null } initialnumber
 *
 * @example const [hoverdIndex, enterIndex, LeaveIndex] = useNumber()
 */
const useIndex = ( initialnum = null) => {
    const [num, setNum] = useState<Number | null>(initialnum);

    const setNumber = (num : number) => {
        setNum(num);
    };

    const setNull = () => {
        setNum(null);
    };

    return [num, setNumber, setNull] as const;
}

export default useIndex;