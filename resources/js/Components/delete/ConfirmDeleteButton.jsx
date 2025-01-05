import { useForm } from '@inertiajs/react'
import React from 'react'
import DangerButton from '../button/DangerButton';
import Swal from 'sweetalert2';

function ConfirmDeleteButton({ id, routeName }) {

    const { delete: destroy } = useForm();

    const handleDelete = () => {

        Swal.fire({
            title: "Tem certeza",
            text: "Você não poderá reverter esta ação",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#3b82f6",
            confirmButtonText: "Sim, excluir",
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route(routeName, id), {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Excluído!",
                            text: "O registro foi excluído com sucesso.",
                            icon: "success"
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error!",
                            text: "Ocorreu um erro ao tentar excluir o registro.",
                            icon: "error"
                        });
                    }
                })
            }
        });
    }

    return (
        <>
            <DangerButton className='ms-1 text-sm' onClick={handleDelete}>
                Delete
            </DangerButton>
        </>
    )
}

export default ConfirmDeleteButton