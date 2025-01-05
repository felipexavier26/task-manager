import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/button/PrimaryButton';
import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function TarefaEdit({ auth, tarefa, errors, flash }) {
    const { data, setData, put, processing, reset } = useForm({
        id_tarefa: tarefa?.id_tarefa || '',
        titulo: tarefa?.titulo || '',
        descricao: tarefa?.descricao || '',
        data_hora_conclusao: tarefa?.data_hora_conclusao || '',
        status: tarefa?.status || '',
    });


    useEffect(() => {
        if (tarefa) {
            setData({
                id_tarefa: tarefa.id_tarefa || '',
                titulo: tarefa.titulo || '',
                descricao: tarefa.descricao || '',
                data_hora_conclusao: tarefa.data_hora_conclusao || '',
                status: tarefa.status || '',
            });
        }
    }, [tarefa]);

    const submit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', data);
        put(route('tarefas.update', { id_tarefa: data.id_tarefa }), {
            onSuccess: () => reset(),
        });
    };

    if (!tarefa) {
        return <div>Loading...</div>;
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Editar Tarefa</h2>}
        >
            <Head title="Editar Tarefa" />
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200">Editar Tarefa</h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('tarefas.index')}>
                                    <PrimaryButton>Voltar para a Lista</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                        <form onSubmit={submit} className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Título</label>
                                    <input
                                        type="text"
                                        value={data.titulo}
                                        onChange={e => setData('titulo', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite o título da tarefa'
                                        required
                                    />
                                    {errors.titulo && <p className="text-red-500 text-sm">{errors.titulo}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Descrição</label>
                                    <textarea
                                        value={data.descricao}
                                        onChange={e => setData('descricao', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                        placeholder='Digite a descrição da tarefa'
                                    />
                                    {errors.descricao && <p className="text-red-500 text-sm">{errors.descricao}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Data de Conclusão</label>
                                    <input
                                        type="datetime-local"
                                        value={data.data_hora_conclusao}
                                        onChange={e => setData('data_hora_conclusao', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                    />

                                    {errors.data_hora_conclusao && <p className="text-red-500 text-sm">{errors.data_hora_conclusao}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-50">Status</label>
                                    <select
                                        value={data.status}
                                        onChange={e => setData('status', e.target.value)}
                                        className="mt-1 block w-full rounded-md"
                                    >
                                        <option value="pendente">Pendente</option>
                                        <option value="em andamento">Em Andamento</option>
                                        <option value="concluída">Concluída</option>
                                    </select>
                                    {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                    disabled={processing}
                                >
                                    {processing ? 'Salvando...' : 'Salvar Tarefa'}
                                </button>
                            </div>

                            {flash?.success && (
                                <div className="bg-green-500 text-white p-4 rounded-md mt-4">
                                    <p>{flash.success}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
