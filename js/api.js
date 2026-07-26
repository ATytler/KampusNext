async function submitForm(data){

    try{

        const response = await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        return await response.json();

    }

    catch(error){

        console.error(error);

        throw error;

    }

}