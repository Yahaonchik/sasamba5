import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ProblemPageLayout from '../components/ProblemPageLayout'
import ProblemSection from '../components/ProblemSection'
import { getSEOData } from '../utils/seoConfig'
import { getProblemPageStructuredData } from '../utils/structuredData'

const OrderModal = dynamic(() => import('../components/OrderModal'), {
  ssr: false,
  loading: () => null,
})

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const seoData = getSEOData('/nekrutitbaraban')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getProblemPageStructuredData(
    'Ремонт стиральной машины которая не крутит барабан',
    'Профессиональный ремонт стиральных машин с неработающим барабаном в Одессе. Замена ремня, ремонт двигателя.',
    `${baseUrl}/nekrutitbaraban`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/nekrutitbaraban`,
    structuredData,
  }

  const title = `<span class="page-text11">Стиральная машина не крутит барабан —</span><span class="page-text12"> </span><span class="page-text13">что делать?</span>`

  const anchors = {
    title: 'Стиральная машина не крутит барабан:',
    items: [
      { icon: '/external/vector8669-r6fr.svg', href: '#1', text: 'Что делать, если машина не крутит барабан' },
      { icon: '/vector.svg', href: '#2', text: 'Осно��ные причины поломки:' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Дверца не закрыта или не заблокирована.' },
      { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '2. Проблемы с приводным ремнём.' },
      { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '3. Неисправность двигателя или щёток.' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5', text: '4. Сбои в электронном блоке управления' },
    ],
  }

  const navigation = {
    prevPage: { href: '/neotkrivaetsadverca', title: 'У стиральной машины не открывается дверца' },
    nextPage: { href: '/neslivaetvodu', title: 'Стиральная машина не сливает воду' },
  }

  const sections = [
    {
      id: '1',
      title: 'Что делать, если машина не крутит барабан:',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content:
        `<p><strong>1. Обесточьте машину и слейте воду.</strong><br/>Выключите стиральную машину и отключите её от сети. Слейте воду из барабана через аварийный шланг или фильтр (если есть). Это нужно сделать перед любыми проверками.</p>
         <p><strong>2. Перераспределите или уберите часть белья.</strong><br/>Уменьшите загрузку при перегрузе, а при недостатке — добавьте 2–3 вещи схожего веса. Равномерно распределите бельё по барабану.</p>
         <p><strong>3. Проверьте барабан вручную.</strong><br/>Покрутите барабан рукой. Заедания или шум укажут на посторонний предмет или заклинивание — удалите препятствие.</p>
         <p><strong>4. Закройте дверцу.</strong><br/>Убедитесь, что люк плотно захлопнут до щелчка. Неплотное закрытие блокирует запуск стирки.</p>
         <p><strong>5. Запустите тестовый цикл без белья.</strong><br/>Короткий цикл без загрузки поможет понять, появляется ли вращение на отжиме. Если нет — вероятна м��ханическая неисправность.</p>`
    },
    {
      id: '2',
      title: '1. Дверца не закрыта или не заблокирована.',
      image: '/6/image%203823050-800h.webp',
      imageAlt: 'дверца стиральной машины',
      imageCaption: 'Проверка дверцы люка',
      content:
        `<p>Если люк не закрыт «до щелчка» или что-то мешает защёлке (ткань, мусор), машина не запустит программу. Убедитесь в плотном закрытии; при признаках поломки замка требуется замена узла.</p>`
    },
    {
      id: '3',
      title: '2. Проблемы с приводным ремнём.',
      image: '/10/image%2038230551-800h.webp',
      imageAlt: 'приводной ремень',
      imageCaption: 'Приводной ремень',
      content:
        `<p>Если двигатель гудит, а барабан не вращается — вероятно, слетел или порвался ремень. Осмотрите ремень через заднюю крышку: перекиньте его на шкив или замените при повреждении. При сомнениях — вызывайте мастера.</p>`
    },
    {
      id: '4',
      title: '3. Неисправность двигателя или щёток.',
      image: '/5/image%203823055-900w.webp',
      imageAlt: 'щётки двигателя',
      imageCaption: 'Щетки двигателя',
      content:
        `<p>Износ угольных щёток приводит к потере мощности или остановке двигателя. При подозрении на проблему с мотором самостоятельный ремонт не рекомендуем — требуется диагностика и замена щёток/ремонт мотора у специалиста.</p>`
    },
    {
      id: '5',
      title: '4. Сбои в электронном блоке управления',
      image: '/image%203823045-900w.webp',
      imageAlt: 'блок управления',
      imageCaption: 'Блок управления',
      content:
        `<p>Отказ платы, таходатчика и других сенсоров мешает контроллеру корректно управлять оборотами. Перезагрузка иногда помогает кратковременно, но при повторных сбоях нужна профессиональная диагностика и ремонт электроники.</p>`
    },
  ]

  const first = sections.find(s => s.id === '1')
  const rest = sections.filter(s => s.id !== '1')

  return (
    <>
      <ProblemPageLayout
        seo={seo}
        title={title}
        anchors={anchors}
        navigation={navigation}
        onOrderClick={openModal}
      >
        {first && <ProblemSection key={first.id} {...first} />}
        <div className="page-container15"><h2 className="page-text34"><span>Основные причины поломки:</span></h2></div>
        {rest.map((s) => (
          <ProblemSection key={s.id} {...s} />
        ))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
