import axios from "axios";

//http://46.17.108.34:3001/admin/

export const orion = {
    urlBase: "http://localhost:3001/admin",
    entity: {
        travelsByMonth: "/travels?period=month",
        usersByMonth: "/users?period=month",
        expensesByMonth: "/expenses?group=date&period=month"
    }
};

export const apiEntity = {
    travelsByMonth: "travelsByMonth",
    usersByMonth: "usersByMonth",
    expensesByMonth: "expensesByMonth",
};


export const apiBuilder = {
    tryGet: async (entity) => {
        const url = `${orion.urlBase}${orion.entity[entity]}`;
        try{
            const res = await axios(url);
            return res.data.reverse()[0]
        } catch (error) {
            return null;
        }
    }
}
