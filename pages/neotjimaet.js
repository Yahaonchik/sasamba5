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

  const seoData = getSEOData('/neotjimaet')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getProblemPageStructuredData(
    'Ремонт стиральной машины которая не отжимает',
    'Профессиональный ремонт стиральных машин которые не отжимают белье в Одессе. Ремонт двигателя, замена щеток.',
    `${baseUrl}/neotjimaet`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/neotjimaet`,
    structuredData,
  }

  const title = `<span class="page-text11">Стиральная машина не отжимает —</span><span class="page-text12"> </span><span class="page-text13">что делать</span>`

  const anchors = {
    title: 'Стиральная машина не отжимает:',
    items: [
      { icon: '/external/vector8669-r6fr.svg', href: '#1', text: 'Что делать, если машина не отжимает' },
      { icon: '/vector.svg', href: '#2', text: 'Основные причины поломки:' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Неисправен сливной насос (помпа)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '2. Неисправен прессостат (датчик уровн�� воды)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '3. Изношенные щетки двигателя' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5', text: '4. Растянутый или порвавшийся приводной ремень' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5-1', text: '5. Неисправность двигателя' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5-2', text: '6. Поломка таходатчика (датчика оборотов)' },
    ],
  }

  const navigation = {
    prevPage: { href: '/zavisaetnaprogramme', title: 'Стиральная машина зависает на программе' },
    nextPage: { href: '/nenabiraetvodu', title: 'Стиральная машина не набирает воду' },
  }

  const sections = [
    {
      id: '1',
      title: 'Что делать, если машина не отжимает:',
      image: '/7/1s.webp',
      imageAlt: 'мокрая рубашка',
      imageCaption: 'мокрое белье',
      content: `<p><strong>1. Для начала проверьте сливной фильтр.</strong><br/>Он удерживает мелкие предметы — монеты, пуговицы, ворсинки — и со временем забивается. Когда фильтр перекрыт, вода не проходит в насос, и программа отжима не запускается. Обычно фильтр находится внизу на передней панели: откройте лючок, выкрутите пробку и удалите скопившийся мусор. После очистки попробуйте снова включить стирку.</p>
        <p><strong>2. Если фильтр в порядке, обратите внимание на сливной шланг.</strong><br/>Он не должен быть перегнут или зажат мебелью. Изгибы мешают свободному стоку воды, и машина также отказывается переходить к отжиму. Осмотрите шланг по всей длине, расправьте петли и проверьте соединение с канализацией или сифоном. При необходимости очистите засор в сифоне или замените шланг.</p>
        <p><strong>3. Ещё одна распространенная причина — неверные настройки.</strong><br/>Убедитесь, чт�� вы не выбрали режим без отжима. В некоторых программах скорость вращения барабана снижена или отжим отключён полностью, чтобы не повредить ткань. Если это так, перезапустите стирку с нужным режимом.</p>
        <p><strong>4. Иногда проблема связана с загрузкой белья.</strong><br/>Если вещи сбились в комок, барабан не может сбалансироваться. Датчик дисбаланса блокирует разгон. Перетряхните бельё, добавьте мелкие вещи или разделите большую партию на две стирки.</p>
        <p><strong>5. Если всё это не помогло, попробуйте перезагрузить электронику.</strong><br/>Выключите стиральную машину из розетки на 10–15 минут, затем включите снова и запустите короткий цикл — иногда этого достаточно, чтобы сбросить сбой.</p>
        <p><strong>6. Если после всех проверок отжим не зап��скается, вероятна неисправность насоса, датчиков или модуля управления.</strong></p>`
    },
    {
      id: '2',
      title: '1. Неисправен сливной насос (помпа)',
      image: '/1/slivanasos.webp',
      imageAlt: 'сливной насос',
      imageCaption: 'Сливной насос',
      content: `<p>При поломке насоса машина не сможет слить воду и перейти к отжиму. Признаки: вода остаётся в баке, машинка гудит во время слива или молчит, появляется ошибка слива. Самостоятельный ремонт насоса обычно невозможен.</p>`
    },
    {
      id: '3',
      title: '2. Неисправен прессостат (датчик уровня воды)',
      image: '/2/presso.webp',
      imageAlt: 'прессостат',
      imageCaption: 'Прессостат',
      content: `<p>Если датчик неправильно определяет уровень воды, блок управления «зависает» перед отжимом — не сливает воду полностью и аварийно останавливается. Признаки: после завершения стирки в баке остаётся вода, возможны ошибки уровня. Решение — замена прессостата.</p>`
    },
    {
      id: '4',
      title: '3. Изношенные щетки двигателя',
      image: '/5/image%203823055-900w.webp',
      imageAlt: 'щетки двигателя',
      imageCaption: 'Щетки двигателя',
      content: `<p>Угольные щётки со временем стираются: мотор не набирает обороты и искрит. Видны искры внутри корпуса, барабан «лениво» пытается крутиться. Если вовремя не заменить щётки, двигатель может перестать вращать барабан.</p>`
    },
    {
      id: '5',
      title: '4. Растянутый или порвавшийся приводной ремень',
      image: '/10/image%2038230551-800h.webp',
      imageAlt: 'ремень',
      imageCaption: 'Соскочивший ремень',
      content: `<p>Ремень передаёт вращение от двигателя к барабану. При ослаблении или разрыве барабан не достигает нужных оборотов. Если ремень слетел — перекиньте его на место, если изношен — замените.</p>`
    },
    {
      id: '5-1',
      title: '5. Неисправность двигателя',
      image: '/10/12345.webp',
      imageAlt: 'двигатель',
      imageCaption: 'Двигатель',
      content: `<p>Полный отказ мотора (обрыв обмоток или КЗ) проявляется «зависанием» на отжиме, гулом или тишиной при отсутствии вращения барабана. Иногда выбивает автоматы. Часто требуется замена двигателя.</p>`
    },
    {
      id: '5-2',
      title: '6. Поломка таходатчика (датчика оборотов)',
      image: '/7/6s.webp',
      imageAlt: 'датчик оборотов',
      imageCaption: 'Датчик оборотов',
      content: `<p>При неверных показаниях таходатчика контроллер не даёт команду на разгон — барабан вращается очень медленно или не двигается. Решается заменой датчика.</p>`
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
        {sections.filter(s => s.id === '1').map(s => (<ProblemSection key={s.id} {...s} />))}
        <div className="page-container15"><h2 className="page-text34"><span>Основные причины поломки:</span></h2></div>
        {sections.filter(s => s.id !== '1').map((s) => (<ProblemSection key={s.id} {...s} />))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
