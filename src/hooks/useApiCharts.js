import React, { useState, useEffect } from 'react';
import { apiBuilder } from "../apiConfig";


export const useApiCharts = (entity) => {
    const [valueCharts, setValueCharts] = useState([]);
    const [errorCharts, setErrorCharts] = useState([]);

    const getDataCharts = async () => {

        const res = await apiBuilder.tryGet(entity);

        if (res.length === 0) {
            setErrorCharts("Error al cargar los datos");
        } else {
            setValueCharts(res);
        }
    };

    useEffect(() => {
        getDataCharts();
    }, []);


    return [valueCharts, errorCharts]

}
