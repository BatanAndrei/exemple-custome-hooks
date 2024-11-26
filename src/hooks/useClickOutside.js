import { useEffect } from "react";

const useClickOutside = (ref, cb) => {
    useEffect(() => {
        const onClick = ({ target }) => {
            if (ref.current && !ref.current.contains(target)) {
                cb();
            }
        }
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
        }
    }, [cb])
}

export default useClickOutside;