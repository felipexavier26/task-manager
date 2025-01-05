import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

function AlertMsg({ message }) {
    if (!message || (!message.success && !message.error)) return null;

    useEffect(() => {
        if (message.success) {
            Swal.fire({
                title: "Sucesso!",
                text: message.success,
                icon: "sucess",
                ConfirmDeleteColor: '#22c55e'
            });
        }
        if (message.error) {
            Swal.fire({
                title: "Erro",
                text: message.error,
                icon: "error",
                ConfirmDeleteColor: '#ef4444'
            });
        }
    }, [message, message.success, ])
    
    return null

}

export default AlertMsg