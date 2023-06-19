import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://il-piacere-server-o976c9cqm-iamtonmoy0.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, [])
    return [menu, loading]
    
}

export default useMenu;