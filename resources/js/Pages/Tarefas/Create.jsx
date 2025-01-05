import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/button/PrimaryButton';

export default function TarefaCreate({ auth, errors, flash }) {
    const { data, setData, post, processing, reset } = useForm({
        titulo: '',
        descricao: '',
        data_vencimento: 'null',
        status: 'pendente',
        id_lista: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tarefas.store'), {
            onSuccess: () => {
                reset();
            },
            onError: (error) => {
                console.log('Erro ao criar tarefa:', error);
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Adicionar Tarefa</h2>}>
            <Head title="Adicionar Tarefa" />
            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('tarefas.index')}>
                                    <PrimaryButton>Listar Tarefas</PrimaryButton>
                                </Link>
                            </div>
                        </div>

                        <form onSubmit={submit} className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-50">Título</label>
                                <input
                                    type="text"
                                    value={data.titulo}
                                    onChange={e => setData('titulo', e.target.value)}
                                    className="mt-1 block w-full rounded-md"
                                    placeholder="Digite o título da tarefa"
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
                                    placeholder="Digite a descrição da tarefa"
                                    required
                                />
                                {errors.descricao && <p className="text-red-500 text-sm">{errors.descricao}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-50">Data da Criação</label>
                                <input
                                    type="datetime-local"
                                    value={data.data_hora_criacao} 
                                    onChange={e => setData('data_hora_criacao', e.target.value)} 
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
                                    required
                                >
                                    <option value="pendente">Pendente</option>
                                    <option value="em andamento">Em Andamento</option>
                                    <option value="concluída">Concluída</option>
                                </select>
                                {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md" disabled={processing}>
                                    {processing ? 'Salvando...' : 'Salvar Tarefa'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
