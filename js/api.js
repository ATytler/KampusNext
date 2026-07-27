async function submitForm(data){

    try{

        const response = await fetch(API_URL,{

            method:"POST",
            body:params

        });

        return await response.json();

    }

    catch(error){

        console.error(error);

        throw error;

    }

}
