document
.getElementById("bookdemoform")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const data={

        sheet:"BookDemo",

        organization:document.getElementById("organization").value,

        contactPerson:document.getElementById("contactperson").value,

        email:document.getElementById("email").value,

        phone:document.getElementById("telephone").value,
	
		designation:document.getElementById("designation").value,
	
		date:document.getElementById("date").value,
	
		preferredtime:document.getElementById("preferredtime").value,

        message:document.getElementById("message").value

    };

    try{

        const result=await submitForm(data);

        if(result.status==="success"){

            alert("Thank you! Your request submitted for Demo.");

            document.getElementById("bookdemoform").reset();

        }

    }

    catch{

        alert("Something went wrong.");

    }

});
