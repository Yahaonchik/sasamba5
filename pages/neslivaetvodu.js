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

  const seoData = getSEOData('/neslivaetvodu')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getProblemPageStructuredData(
    'Ремонт стиральной машины которая не сливает воду',
    'Профессиональный ремонт стиральных машин которые не сливают воду в Одессе. Диагностика, чистка фильтров, ремонт насоса.',
    `${baseUrl}/neslivaetvodu`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/neslivaetvodu`,
    structuredData,
  }

  const title = `<span class=\"page-text11\">Стиральная машина не сливает воду —</span><span class=\"page-text12\"> </span><span class=\"page-text13\">что делать?</span>`

  const anchors = {
    title: 'Основные причины отсутствия слива:',
    items: [
      { icon: '/external/vector8669-r6fr.svg', href: '#1', text: '1. Засор сливного фильтра' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '2. Неисправность датчика уровня воды (прессостата)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2b', text: '3. Неисправность сливного насоса' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2c', text: '4. Сбой или поломка модуля управления' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2d', text: '5. Засор сливного патрубка' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2e', text: '6. Засор сливного шланга' },
      { icon: '/vector.svg', href: '#3', text: 'Как самостоятельно слить воду:' },
      { icon: '/vector.svg', href: '#4', text: 'Советы по профилактике:' },
    ],
  }

  const navigation = {
    prevPage: { href: '/nekrutitbaraban', title: 'Стиральная машина не крутит барабан' },
    nextPage: { href: '/negreetvodu', title: 'Стиральная машина не греет воду' },
  }

  const sections = [
    { id: '1', title: '1. Засор сливного фильтра', image: '/1/filtr.webp', imageAlt: 'засор сливного фильтра', imageCaption: 'Засор сливного фильтра', content: `<p>Сливной фильтр улавливает мелкие предметы и ворсинки, не давая им попасть в насос. Перед началом любых работ отключите машину от сети и подготовьте ёмкость для слива. Аккуратно открутите крышку фильтра — вода начнёт вытекать. Когда воды останется мало, дверца обычно разблокируется. Затем полностью вытащите фильтр и очистите его.</p>` },
    { id: '2', title: '2. Неисправность датчика уровня воды (прессостата)', image: '/2/presso.webp', imageAlt: 'прессостат', imageCaption: 'Прессостат', content: `<p>Прессостат контролирует уровень воды. Если он или его шланг неисправен, машина может ошибочно «думать», что бак пуст или полон, и не запускать слив. Возможны коды ошибок. Проверяют и прочищают трубку, при поломке датчик меняют.</p>` },
    { id: '2b', title: '3. Неисправность сливного насоса', image: '/1/slivanasos.webp', imageAlt: 'помпа', imageCaption: 'Сливной насос', content: `<p>Помпа откачивает воду из бака. Проверьте крыльчатку под крышкой фильтра — она должна вращаться свободно и работать при запуске режима «Слив». При заклинивании или износе насос подлежит замене.</p>` },
    { id: '2c', title: '4. Сбой или поломка модуля управления', image: '/1/plata.webp', imageAlt: 'модуль управления', imageCaption: 'Модуль управления', content: `<p>Электронная плата посылает команды насосу. При сбое она может не запустить слив и не разблокировать люк. Нужна диагностика специалиста: возможны перегоревшие компоненты, сбой прошивки или окисление контактов.</p>` },
    { id: '2d', title: '5. Засор сливного патрубка', image: '/1/patrubok.webp', imageAlt: 'патрубок', imageCaption: 'Сливной патрубок', content: `<p>Гофра соединяет бак с насосом. Даже после чистки фильтра вода может не уходить из‑за предметов в патрубке (монеты, ткань). Для проверки снимают патрубок и удаляют мусор.</p>` },
    { id: '2e', title: '6. Засор сливного шланга', image: '/1/shlang.webp', imageAlt: 'шланг', imageCaption: 'Сливной шланг', content: `<p>Гибкий шланг не должен быть пережат и забит грязью, особенно в изгибах и у сифона. Для проверки отсоедините шланг от канализации и попробуйте продуть. При засоре промойте горячей водой или прочистите проволокой.</p>` },
    { id: '3', title: '7. Как самостоятельно слить воду?', image: '/1/bludechko.webp', imageAlt: 'блюдечко', imageCaption: 'Подготовка к аварийному сливу', content: `<p><strong>1.</strong> Отключите питание. <br/><strong>2.</strong> Подготовьте тряпки и низкую ёмкость. <br/><strong>3.</strong> Дайте воде остыть. <br/><strong>4.</strong> Откройте доступ к фильтру, приоткрутите пробку и слейте воду. <br/><strong>5.</strong> Наклоните машинку назад. <br/><strong>6.</strong> Очистите фильтр и установите обратно.</p>` },
    { id: '4', title: '8. Советы по профилактике', image: null, imageAlt: '', imageCaption: '', content: `<p><strong>1.</strong> Регулярно очищайте фильтр. <br/><strong>2.</strong> Проверяйте карманы и не допускайте мелкие предметы. <br/><strong>3.</strong> Следите, чтобы шланг не перегибался, и ставьте машинку ровно. <br/><strong>4.</strong> Следите за канализацией и сифоном.</p>` },
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
        {sections.map((s) => (<ProblemSection key={s.id} {...s} />))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
