function formValidation(){
        let password=document.getElementById('password').value;
        let re_password=document.getElementById('repassword').value;
        if(password!==re_password)
        {
            let element=document.createElement('p');
            element.textContent="The Passwords do not match";
            document.querySelector('body').appendChild(element);
        }
        else{
            document.querySelector('#myForm').addEventListener('change',(event)=>{
                event.preventDefault();

            })
        }
    }