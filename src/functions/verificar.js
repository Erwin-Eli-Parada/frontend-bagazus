export default function verificar(usuario, password, navigate) {
   
    let user = {
        email:usuario,
        password: password
    };
    console.log("verificado");
    //Aqui tenemos que meter la validación del web token
    fetch('http://137.184.114.5/api/v1/web/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(data => {
            if (data.status === 200) {
                return data.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(res => {
            console.log(res.id)
            navigate('/users', {
                replace: true,
                state: {
                    usuario: res.first_name,
                    toke: res.token,
                    auth: true,
                    role: res.role
                }
            })
        })
        .catch( e=>{
            alert('Usuario o contraseña incorrecta')
        })
}

    //Esto es de mi proyecto solo lo pongo aqui para basarme XD
    // fetch('http://127.0.0.1:8000/api/usuario/' + usuario + "/" + password)
    //     .then(data => data.json())
    //     .then(res => {
    //         console.log(res.id, res.is_active, res.is_superuser)
    //         if (res.id === undefined) {
    //             alert('Usuario o contraseña incorrecta');
    //         } else if (res.is_active) {
    //             console.log("verificado", res.is_active)
    //             navigate('/dashboard', {
    //                 replace: true,
    //                 state: {
    //                     usuario: res.username,
    //                     password: password,
    //                     auth: res.is_active,
    //                     permiso: res.is_staff,
    //                     superUsuario: res.is_superuser
    //                 }
    //             })
    //         } else {
    //             alert('Usuario o contraseña incorrecta');
    //         }
    //     }).catch( e =>{
    //         alert('servidor no disponible')
    //     })
