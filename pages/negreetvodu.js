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

  const seoData = getSEOData('/negreetvodu')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getProblemPageStructuredData(
    'Ремонт стиральной машины которая не греет воду',
    'Профессиональный ремонт стиральных машин которые не нагревают воду в Одессе. Замена ТЭНа, ремонт термоста��а.',
    `${baseUrl}/negreetvodu`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/negreetvodu`,
    structuredData,
  }

  const title = `<span class="page-text11">Стиральная машина не греет воду —</span><span class="page-text12"> </span><span class="page-text13">что делать?</span>`

  const anchors = {
    title: 'Стиральная машина не греет воду:',
    items: [
      { icon: '/vector.svg', href: '#2', text: 'Основные причины поломки:' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Поломка ТЭНА.' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2-1', text: '2. Сломан датчик температуры (термостат)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2-2', text: '3. Неисправен датчик уровня воды (прессостат)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '4. Повреждена электропроводка' },
      { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '5. Сбой или поломка модуля управления' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5', text: '6. Неверно выбран режим стирки' },
    ],
  }

  const navigation = {
    prevPage: { href: '/neslivaetvodu', title: 'Стиральная машина не наливает воду' },
    nextPage: { href: '/protekaet', title: 'Стиральная машина протекает' },
  }

  const sections = [
    {
      id: '2',
      title: '1. Поломка ТЭНА.',
      image: '/2/ten.webp',
      imageAlt: 'тэн стиральной машины',
      imageCaption: 'Нагревательный элемент (ТЭН)',
      content:
        `<p>Чаще всего причина кроется в самом нагревательном элементе (ТЭНе). Накипь или остатки моющего средства, оседающие на ТЭНе, уменьшают его теплоотдачу и со временем приводят к перегоранию. Чтобы проверить ТЭН, используют мультиметр: у исправного сопротивление между выводами составляет около 20–40 Ом. Если измерение показывает обрыв или короткое замыкание, ТЭН однозначно нужно мен��ть. Если же просто накопилась накипь, элемент вынимают и очищают механически (щёткой или абразивом) и раствором лимонной кислоты. После чистки проверяют нагрев повторно. При выявлении дефектов ТЭН заменяют новым, а при лёгких отложениях – очищают от налёта.</p>`
    },
    {
      id: '2-1',
      title: '2. Сломан датчик температуры (термостат)',
      image: '/2/termo.webp',
      imageAlt: 'термостат',
      imageCaption: 'Датчик температуры',
      content:
        `<p>Датчик температуры (термостат) следит за нагревом воды и при перегреве отключает ТЭН. Если термостат выходит из строя, питание на ТЭН не поступает, и вода остаётся холодной. Симптомы неисправности: длительный цикл стирки, перегрев панелей, ошибка по температуре. Проверяют мультиметром: у исправного датчика сопротивление в холодном состоянии конечное и растёт при нагреве. Если датчик не замыкает цепь при нагреве, его заменяют на новый.</p>`
    },
    {
      id: '2-2',
      title: '3. Неисправен датчик уровня воды (прессостат)',
      image: '/2/presso.webp',
      imageAlt: 'прессостат',
      imageCaption: 'Датчик уровня воды',
      content:
        `<p>Прессостат сообщает модулю управления о наполнении бака. Если он забит или сломан, машина может не включить нагрев — не «видит» нужный уровень. Проверяют целостность трубки к прессостату и контакты, очищают от грязи. При отсутствии реакции или неверных показаниях датчик заменяют.</p>`
    },
    {
      id: '3',
      title: '4. Повреждена электропроводка',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content:
        `<p>Клеммы или провода к ТЭНу и датчикам могут окисляться или ос��абевать. Плохой контакт на клеммах ТЭНа приводит к отсутствию нагрева или локальному перегреву. Диагностика: при отключенном питании прозванивают цепь питания ТЭНа и датчиков, визуально проверяют провода и коннекторы. При обнаружении обрыва или плохого контакта — восстановление или замена проводки и клемм.</p>`
    },
    {
      id: '4',
      title: '5. Сбой или поломка модуля управления',
      image: '/1/plata.webp',
      imageAlt: 'модуль управления',
      imageCaption: 'Модуль управления',
      content:
        `<p>Электронный блок управления — «мозг» машины. При отказе силовых реле, повреждении платы или программной ошибке команда на нагрев не подаётся. На дисплее может появиться код ошибки, возможна неработоспособность отдельных этапов. Проверку и ремонт платы доверяют специалисту; самостоятельно можно лишь проверить питание в розетке и целостность модулей питания.</p>`
    },
    {
      id: '5',
      title: '6. Неверно выбран режим стирки',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content:
        `<p>Если выбран режим без подогрева (эко/быстрая стирка) или минимальная температура, ТЭН не включится. Убедитесь, что регулятор температуры соответствует программе, и перезапустите цикл с нужным подогревом (40–60 °C).</p>`
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
        <div className="page-container15">
          <h2 className="page-text34"><span>Основные причины поломки:</span></h2>
        </div>
        {sections.map((s) => (
          <ProblemSection key={s.id} {...s} />
        ))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
