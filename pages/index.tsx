import { useDummyList } from '@/src/api/demo'
import useTranslation from 'next-translate/useTranslation'
import { hasPermissions, PermissionTypes } from '@/src/utils/hasPermissions'
const Home = () => {
    const { t } = useTranslation()
    const { data } = useDummyList()

    const features: Record<number, PermissionTypes> = {
        '1': {
            name: 'login',
            canEdit: true,
            canCreate: true,
            display: false,
        },
        '2': {
            name: 'adminDashboard',
            canEdit: true,
            canCreate: true,
            display: true,
        },
        '101': {
            name: 'Signup',
            canEdit: true,
            canCreate: true,
            display: true,
        },
    }
    return (
        <>
            <div className="overflow-hidden px-4 py-4">
                <h1 className="italic uppercase text-3xl">
                    {t('common:title')}
                </h1>
            </div>

            <ul>
                {data?.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
            {hasPermissions(features, { moduleId: 2, key: 'display' }) ? (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                    login
                </button>
            ) : null}
        </>
    )
}

export default Home
