import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ProblemPageLayout from '../components/ProblemPageLayout'
import ProblemSection from '../components/ProblemSection'
import { getSEOData } from '../utils/seoConfig'
import { getProblemPageStructuredData } from '../utils/structuredData'

const OrderModal = dynamic(() => import('../components/OrderModal'), { ssr: false, loading: () => null })

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const seoData = getSEOData('/nenabiraetvodu')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getProblemPageStructuredData(
    'Ремонт стиральной машины которая не набирает воду',
    'Профессиональный ремонт стиральных машин которые не набирают воду в Одессе. Чистка фильтров, ремонт клапанов.',
    `${baseUrl}/nenabiraetvodu`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/nenabiraetvodu`,
    structuredData,
  }

  const title = `<span class="page-text11">Стиральная машина не набирает воду —</span><span class="page-text12"> </span><span class="page-text13">что делать?</span>`

  const anchors = {
    title: 'Стиральная машина не набирает воду:',
    items: [
      { icon: '/external/vector8669-r6fr.svg', href: '#1', text: 'Что делать, если машина не набирает воду?' },
      { icon: '/vector.svg', href: '#2', text: 'Основные причины поломки:' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Закрыт кран подачи воды / Низкое давление' },
      { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '2. Повреждён замок дверцы (блокировка люка).' },
      { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '3. Пережат или перекручен заливной шланг' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5', text: '4. Неисправен впускной клапан' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5-1', text: '5. Неисправность датчика уровня воды (прессостат)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5-2', text: '6. Повреждён модуль управления' },
    ],
  }

  const navigation = {
    prevPage: { href: '/neotjimaet', title: 'Стиральная машина не отжимает' },
    nextPage: { href: '/neotkrivaetsadverca', title: 'У стиральной машины не открывается дверца' },
  }

  const sections = [
    {
      id: '1',
      title: 'Что делать, если машина не набирает воду:',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content: `<p><strong>1. Выключите питание и закройте кран.</strong><br/>Прежде чем проверять узлы машины, отключите её от электросети и перекройте подачу воды. Так вы обезопасите себя и технику.</p>
        <p><strong>2. Проверьте кран и напор.</strong><br/>Откройте ��ран на полную мощность и оцените напор. Если воды нет в кране, позвоните в коммунальную службу. Если вентиль был закрыт, полностью его откройте.</p>
        <p><strong>3. Осмотрите заливной шланг.</strong><br/>Убедитесь, что на шланг ничего не давит и нет перегибов. Открутите его от машины (не забудьте поставить под него таз) и проверьте, идёт ли из него вода. Если шланг пережат или перекручен, распрямите его или замените.</p>
        <p><strong>4. Очистите сетчатый фильтр.</strong><br/>Перекройте воду, аккуратно открутите шланг у машины и достаньте сеточку-фильтр. Промойте её от загрязнений под сильной струёй или почистите щёткой. Соберите всё обратно.</p>
        <p><strong>5. Проверьте дверцу.</strong><br/>Убедитесь, что люк закрывается плотно и фиксируется. Если бельё мешает закрытию — правильно уложите вещи. Машина не начнёт залив, пока замок не сработает.</p>
        <p><strong>6. Перезагрузите машину.</strong><br/>Иногда помогает простой сброс: отключите СМА от сети на 10–15 минут, затем включите заново. Это снимает случайные ошибки блока управления.</p>`
    },
    {
      id: '2',
      title: '1. Закрыт кран подачи воды / низкое давление',
      image: '/8/image 3823050.webp',
      imageAlt: 'кран подачи воды',
      imageCaption: 'Кран подачи воды',
      content: `<p>Если кран закрыт или напор воды очень слабый, вода в машину не поступает. Признак: машина пытается начать работу (гудит), но вода не набирается или идёт очень медленно. Убедитесь, что вентиль полностью открыт. При слабом напоре дождитесь стабилизации давления или обратитесь в ЖКХ. Неисправный кран — повод выз��ать сантехника.</p>`
    },
    {
      id: '3',
      title: '2. Повреждён замок дверцы (блокировка люка).',
      image: '/5/ubl.webp',
      imageAlt: 'УБЛ',
      imageCaption: 'УБЛ',
      content: `<p>Устройство блокировки люка фиксирует дверцу перед стартом. Если оно изношено или сломано, дверца не закрывается плотно и стирка не начнётся. Признак: машинка не запускается, люк не блокируется, часто загорается ошибка. Проверьте, плотно ли закрывается люк — должен быть щелчок. При поломке замка требуется замена.</p>`
    },
    {
      id: '4',
      title: '3. Пережат или перекручен заливной шланг',
      image: '/8/image 3823051.webp',
      imageAlt: 'заливной шланг',
      imageCaption: 'Заливной шланг',
      content: `<p>Заливной шланг — гибкая трубка от крана к машине. Он не должен иметь перегибов или смятий. Если на шланг наступили или он перекручен, вода не пойдёт. Остановите машину, отключите воду и осмотрите шланг. При изгибе распрямите, при повреждении — замените.</p>`
    },
    {
      id: '5',
      title: '4. Неисправен впускной клапан',
      image: '/5/klapan.webp',
      imageAlt: 'впускной клапан',
      imageCaption: 'Впускной клапан',
      content: `<p>Впускной клапан открывает поток воды по команде платы. При поломке клапан не открывается полностью, и машина не набирает нужный объём воды. Признаки: люк заблокирован, машина включается, но вода не поступает или идёт очень мало, возможен код ошибки. Узел не ремонтируется — требуется замена.</p>`
    },
    {
      id: '5-1',
      title: '5. Неисправность датчика уровня воды (прессостат)',
      image: '/2/presso.webp',
      imageAlt: 'Прессостат',
      imageCaption: 'Прессостат',
      content: `<p>Прессостат определяет уровень воды в баке. Если он «залип» или вышел из строя, машина не начнёт залив. Симптомы схожи с поломкой клапана: блокируется люк, залива нет, появляется ошибка уровня воды. Проверьте шланг прессостата на засор, в большинстве случаев датчик меняют.</p>`
    },
    {
      id: '5-2',
      title: '6. Повреждён модуль управления',
      image: '/image%203823045-900w.webp',
      imageAlt: 'Блок управления',
      imageCaption: 'Блок управления',
      content: `<p>Плата управления — «мозг» машины. При сбое плата может не подать команду на залив воды. Признаки: машина блокирует люк, но воду не набирает, возможен код ошибки. Требуется диагностика и ремонт электроники.</p>`
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
        {sections.filter(s => s.id === '1').map(s => (
          <ProblemSection key={s.id} {...s} />
        ))}
        <div className="page-container15"><h2 className="page-text34"><span>Основные причины неисправности:</span></h2></div>
        {sections.filter(s => s.id !== '1').map((s) => (
          <ProblemSection key={s.id} {...s} />
        ))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
