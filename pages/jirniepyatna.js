import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ProblemPageLayout from '../components/ProblemPageLayout'
import ProblemSection from '../components/ProblemSection'
import { getSEOData } from '../utils/seoConfig'
import { getArticleStructuredData } from '../utils/structuredData'

const OrderModal = dynamic(() => import('../components/OrderModal'), {
  ssr: false,
  loading: () => null,
})

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const seoData = getSEOData('/jirniepyatna')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getArticleStructuredData(
    'Как избавиться от жирных пятен на одежде',
    'Пошаговые рекомендации и безопасные средства для удаления жирных пятен дома',
    `${baseUrl}/jirniepyatna`,
    `${baseUrl}/100x100/jir.png`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/jirniepyatna`,
    structuredData,
  }

  const title = `<span class=\"page-text11\">Жирные пятна на одежде —</span><span class=\"page-text12\"> </span><span class=\"page-text13\">что делать?</span>`

  const anchors = {
    title: 'Жирные пятна на одежде:',
    items: [
      { icon: '/vector.svg', href: '#2', text: 'Как избавиться от жирных пятен на одежде:' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Хозяйственное мыло и стиральный порошок' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2-1', text: '2. Пищевая сода' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2-2', text: '3. Средство для мытья посуды' },
      { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '4. Уксус или лимон' },
      { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '5. Тальк или детская присыпка' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5', text: '6. Специальные пятновыводители' },
    ],
  }

  const navigation = {
    prevPage: { href: '/neslivaetvodu', title: 'Стиральная машина не сливает воду' },
    nextPage: { href: '/protekaet', title: 'Стиральная машина протекает' },
  }

  const sections = [
    {
      id: '2',
      title: '1. Хозяйственное мыло и стиральный порошок',
      image: '/2/ten.webp',
      imageAlt: 'тэн стиральной машины',
      imageCaption: '1. Хозяйственное мыло и стиральный порошок',
      content:
        `<p>Один из самых надёжных способов – использовать хорошую основу для стирки. Намочите пятно тёплой водой и тщательно намыльте его хозяйственным мылом (лучше 72%). Для старых пятен нанесите тёртое мыло и аккуратно втирайте губкой или щёткой. Оставьте на 20–30 минут, при сильных загрязнениях — до нескольких часов. Затем смойте и постирайте вещь обычным способом.</p>`
    },
    {
      id: '2-1',
      title: '2. Пищевая сода',
      image: '/2/termo.webp',
      imageAlt: 'термостат',
      imageCaption: 'Датчик температуры',
      content:
        `<p>Пищевая сода — универсальный абсорбент. ��мешайте соду с водой до пасты, нанесите на пятно. Для плотных тканей слегка потрите щёткой. Оставьте на 15–30 минут, смойте тёплой водой и постирайте. Для стойких пятен можно смешать соду с тёртым мылом.</p>`
    },
    {
      id: '2-2',
      title: '3. Средство для мытья посуды',
      image: '/2/presso.webp',
      imageAlt: 'прессостат',
      imageCaption: 'Датчик уровня воды',
      content:
        `<p>Гели для мытья посуды разрушат жировые загрязнения. Нанесите несколько капель на пятно на 5–10 минут, затем постирайте. Для застарелых пятен накройте место плёнкой на 1–2 часа, затем постирайте в тёплой воде с порошком.</p>`
    },
    {
      id: '3',
      title: '4. Уксус или лимон',
      image: '/10/image%2038230551-800h.webp',
      imageAlt: 'ремень стиральной машины',
      imageCaption: 'Поврежденная проводка',
      content:
        `<p>Белый укс��с (5%) — доступный обезжириватель. Разведите 1:4 с водой, нанесите на пятно, подождите несколько минут и промойте. Аналогично действует раствор лимонной кислоты или сок лимона — используйте на белых тканях, чтобы избежать обесцвечивания.</p>`
    },
    {
      id: '4',
      title: '5. Тальк или детская присыпка',
      image: '/1/plata.webp',
      imageAlt: 'модуль управления',
      imageCaption: 'Модуль управления',
      content:
        `<p>На свежие пятна насыпьте тальк, крахмал или детскую присыпку — порошки впитают жир. Оставьте на несколько часов (или ночь), затем счистите щёткой и постирайте. Для восстановления структуры ткани прогладьте участок через бумажное полотенце.</p>`
    },
    {
      id: '5',
      title: '6. Специальные пятновыводители',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content:
        `<p>Если домашние средства не помогли — используйте пятновыводители: гели, спреи, мыло. Выбирайте по типу ткани (белые, цветные, деликатные), строго следуйте инструкции и предварительно тестируйте на незаметном участке.</p><p>Комбинация быстрых мер и одного из перечисленных методов обычно убирает жирные следы без вреда для ткани.</p>`
    },
  ]

  return (
    <>
      <ProblemPageLayout
        seo={seo}
        title={title}
        anchors={anchors}
        navigation={navigation}
        onOrderClick={openModal}
      >
        {sections.map((s) => (
          <ProblemSection key={s.id} {...s} />
        ))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
