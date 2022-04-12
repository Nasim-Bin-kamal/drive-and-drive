import { useEffect, useState } from 'react';

const usePackages = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch("https://pure-thicket-72460.herokuapp.com/packages")
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);

    return [tourPackages];

};

export default usePackages;