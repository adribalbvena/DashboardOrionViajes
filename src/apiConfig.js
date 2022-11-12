import axios from "axios";

//http://46.17.108.34:3001/admin/

export const orion = {
    urlBase: "http://localhost:3001/admin",
    entity: {
        travelsByMonth: "/travels?period=month",
        usersByMonth: "/users?period=month",
        expensesByMonth: "/expenses?group=date&period=month",
        expensesByCategory: "/expenses?group=category", //devuelve cantidad de gastos registrados por categoria
        expensesByPaymentMethod: "/expenses?group=paymentMethod", //devuelve cantidad de gastos registrados por metodo de pago
        usersByYear: "/users?period=year", //cantidad de usuarios por año
    }
};

export const apiEntity = {
    travelsByMonth: "travelsByMonth",
    usersByMonth: "usersByMonth",
    expensesByMonth: "expensesByMonth",
    expensesByCategory: "expensesByCategory",
    expensesByPaymentMethod: "expensesByPaymentMethod",
    usersByYear: "usersByYear",
};

export const apiBuilder = {
    tryGet: async (entity) => {
        const url = `${orion.urlBase}${orion.entity[entity]}`;
        try{
            const res = await axios(url);
            return res.data
        } catch (error) {
            return [];
        }
    },
}


