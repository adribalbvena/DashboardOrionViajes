function validateUser(email, password) {
    return email.email === "admin@test.com" && password.password === "1234";
  }
  export function signInWithEmailAndPassword(email, password) {
   
    const isValidUser = validateUser(email, password);
  
    if (isValidUser) {
      return new Promise((resolve) => {
        //Acá iría la llamada al servicio con fetch usando el email y la password
        setTimeout(() => {
          resolve({
            data: {
              user: {
                email: "admin@test.com",
                password: "1234",
              },
              token:
                "91j893h281h9nf98fnf2309jd09jkkd0as98238j9fr8j98f9j8f298r829r-f",
            },
          });
        }, 1200);
      });
    } else {
      throw Error("No se pudo autenticar al usuario");
    }
  }
  
  export const defaults = {
    headers: {
      Authorization: "",
    },
  };