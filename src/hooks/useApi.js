import { useEffect, useState } from "react";
import { apiBuilder } from "../apiConfig";


export const useApi = (entity) => {
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const getData = async () => {

        const res = await apiBuilder.tryGet(entity);
        //console.log(res)
        //setValue(res)

        if (res.length === 0) {
            setError("Error al cargar los datos");
        } else {
            setValue(res);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return [value, error]
}