import { useEffect, useState } from "react";
import { apiBuilder } from "../apiConfig";



export const useApi = (entity) => {
    const [value, setValue] = useState([]);
    const [error, setError] = useState([]);

    const getData = async () => {

        const res = await apiBuilder.tryGet(entity);

        if (res.length === 0) {
            setError("Error al cargar los datos");
        } else {
            setValue(res.reverse()[0].count);
        }
    };

    useEffect(() => {
        getData();
    }, []);


    return [value, error]
}