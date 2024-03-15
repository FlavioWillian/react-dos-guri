import './App.css'
import { Banner } from './components/banner/bannerhome'
import { AccordionComponent } from './components/accordion/accordionComponent'


function App() {
  const faq = [
    {
      title: "Will Smth",
      description:"lorem  lorem lorem lorem"
    },
    {
      title:"Chris Brown",
      description:"lorem  lorem lçmckçlwknwknvwv"
    },
    {
      title:"Chris Evans",
      description:"lorem  capitan capitan capitan"
    }
  ]
  return (

    <>
    <Banner Size='full' 
    image='./src/assets/cortes-de-cabelo-masculino.webp' 
    alt='banner cortes cabelos masculinos' 
    title='lp dos guri'></Banner>
    {
      faq.map(function(faqResult) {
        <AccordionComponent title={faqResult.title}
        subTitulo={faqResult.description}
        ></AccordionComponent>
          
      })
    }
     
    </>
  )
}

export default App
