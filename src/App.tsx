import './App.css'
import { Banner } from './components/banner/bannerhome'
import { AccordionComponent } from './components/accordion/accordionComponent'
import { FormCep } from './components/formCep/formCep'


function App() {
  const faq = [
    {
      title: "Will Smith",
      subTitulo: "lorem  lorem lorem lorem"
    },
    {
      title: "Chris Brown",
      subTitulo: "lorem  lorem lçmckçlwknwknvwv"
    },
    {
      title: "Chris Evans",
      subTitulo: "lorem  capitan capitan capitan"
    }
  ]
  return (
    <>
      <Banner Size='full'
        image='./src/assets/cortes-de-cabelo-masculino.webp'
        alt='banner cortes cabelos masculinos'
        title='lp dos guri' />
      <AccordionComponent contentFaq={faq} />
      <FormCep></FormCep>
    </>
  )
}

export default App
