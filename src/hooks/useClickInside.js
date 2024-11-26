import { useEffect } from "react";

const useClickInside = (ref, cb) => {
    useEffect(() => {
        const onClick = ({ target }) => {
            if (ref.current.contains(target)) {
                cb();
            }
        }
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
        }
    }, [cb])
}

export default useClickInside;