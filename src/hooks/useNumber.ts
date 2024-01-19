import { useState } from 'react';

/**
 * @param { Number | null } initialBool
 *
 * @example const [hoverdIndex, enterIndex, LeaveIndex] = useNumber()
 */
const useNumber = ( initialnum = null) => {
    const [num, setNum] = useState<Number | null>(initialnum);

    const setNumber = (num : number) => {
        setNum(num);
    };

    const setNull = () => {
        setNum(null);
    };

    return [num, setNumber, setNull] as const;
}

export default useNumber;