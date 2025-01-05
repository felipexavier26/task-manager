import AlertMsg from '@/Components/alert/AlertMsg';
import PrimaryButton from '@/Components/button/PrimaryButton';
import WarningButton from '@/Components/button/WarningButton';
import ConfirmDeleteButton from '@/Components/delete/ConfirmDeleteButton';
import Pagination from '@/Components/Pagitation';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function TarefaList({ auth, tarefas }) {
    const { flash } = usePage().props;

    console.log(tarefas);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Lista de Tarefas
                </h2>
            }
        >
            <Head title="Tarefas" />

            <div className="py-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex justify-between items-center m-4">
                            <h3 className="text-lg text-gray-200">Visualizar Tarefas</h3>
                            <div className="flex space-x-4 text-gray-200">
                                <Link href={route('tarefas.create')}>
                                    <PrimaryButton>Nova Tarefa</PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <AlertMsg message={flash} />

                    {/* Contêiner responsivo com rolagem horizontal */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto divide-y divide-gray-200 dark:divide-gray-700 border border-gray-300 dark:border-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th className="px-4 py-2 text-left text-base font-semibold text-gray-900 dark:text-gray-200 tracking-wide">ID</th>
                                    <th className="px-4 py-2 text-left text-base font-semibold text-gray-900 dark:text-gray-200 tracking-wide">Título</th>
                                    <th className="px-4 py-2 text-left text-base font-semibold text-gray-900 dark:text-gray-200 tracking-wide">Descrição</th>
                                    <th className="px-4 py-2 text-left text-base font-semibold text-gray-900 dark:text-gray-200 tracking-wide">Data de Criação</th>
                                    <th className="px-4 py-2 text-left text-base font-semibold text-gray-900 dark:text-gray-200 tracking-wide">Dt de Conclusão</th>
                                    <th className="px-4 py-2 text-left text-base font-semibold text-gray-900 dark:text-gray-200 tracking-wide">Status</th>
                                    <th className="px-4 py-2 text-center text-base font-semibold text-gray-900 dark:text-gray-200 tracking-wide">Ações</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {tarefas?.data?.map((tarefa) => (
                                    <tr key={tarefa.id_tarefa} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="px-4 py-2 text-left text-sm text-gray-800 dark:text-gray-200 tracking-wide">{tarefa.id_tarefa}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-800 dark:text-gray-200 tracking-wide">{tarefa.titulo}</td>
                                        <td className="px-4 py-2 text-left text-sm text-gray-800 dark:text-gray-200 tracking-wide">{tarefa.descricao}</td>

                                        <td className="px-4 py-2 text-left text-sm text-gray-800 dark:text-gray-200 tracking-wide">
                                            {new Intl.DateTimeFormat('pt-BR', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: false
                                            }).format(new Date(tarefa.data_hora_criacao))}
                                        </td>

                                        <td className="px-4 py-2 text-left text-sm text-gray-800 dark:text-gray-200 tracking-wide">
                                            {tarefa.data_hora_conclusao
                                                ? new Intl.DateTimeFormat('pt-BR', {
                                                    year: 'numeric',
                                                    month: '2-digit',
                                                    day: '2-digit',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit',
                                                    hour12: false
                                                }).format(new Date(tarefa.data_hora_conclusao))
                                                : 'Dt Pendente'}
                                        </td>

                                        <td className="px-4 py-2 text-left text-sm text-gray-800 dark:text-gray-200 tracking-wide">
                                            {tarefa.status === 'pendente' && <span className="text-yellow-500">🟡 Pendente</span>}
                                            {tarefa.status === 'em andamento' && <span className="text-blue-500">🔵 Em Andamento</span>}
                                            {tarefa.status === 'concluída' && <span className="text-green-500">🟢 Concluída</span>}
                                        </td>

                                        <td className="px-4 py-2 text-center text-sm text-gray-800 dark:text-gray-200 tracking-wide whitespace-nowrap">
                                            <div className="flex justify-center items-center space-x-1 flex-nowrap">
                                                <Link href={route('tarefas.show', { id_tarefa: tarefa.id_tarefa })}>
                                                    <PrimaryButton className="ms-1">Visualizar</PrimaryButton>
                                                </Link>

                                                <Link href={route('tarefas.edit', { id_tarefa: tarefa.id_tarefa })}>
                                                    <WarningButton className="ms-1">Editar</WarningButton>
                                                </Link>

                                                <ConfirmDeleteButton id={tarefa.id_tarefa} routeName={'tarefas.destroy'} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Pagination links={tarefas.links} currentPage={tarefas.current_page} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
