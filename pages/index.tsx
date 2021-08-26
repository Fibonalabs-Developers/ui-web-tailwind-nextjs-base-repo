import { useDummyList } from '@/src/api/demo'
import useTranslation from 'next-translate/useTranslation'
const Home = () => {
    const { t } = useTranslation()
    const { data } = useDummyList()

    return (
        <>
            <div className="rounded overflow-hidden shadow-lg px-4 py-4 bg-green-300 w-full text-center">
                <h1 className="italic uppercase text-3xl">
                    {t('common:title')}
                </h1>
            </div>

            <ul>
                {data?.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </>
    )
}

export default Home
